using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactASPCrud.Models;

namespace ReactASPCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly LocationDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public LocationController(LocationDBContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Location
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LocationModel>>> GetLocations()
        {
            return await _context.Locations
                .Select(x => new LocationModel()
                {
                    LocationID = x.LocationID,
                    LocationName = x.LocationName,
                    Description = x.Description,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        // GET: api/Location/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LocationModel>> GetLocationModel(int id)
        {
            var locationModel = await _context.Locations.FindAsync(id);

            if (locationModel == null)
            {
                return NotFound();
            }

            return locationModel;
        }

        // PUT: api/Location/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocationModel(int id, [FromForm]LocationModel locationModel)
        {
            if (id != locationModel.LocationID)
            {
                return BadRequest();
            }

            if(locationModel.ImageFile != null)
            {
                DeleteImage(locationModel.ImageName);
                locationModel.ImageName =await SaveImage(locationModel.ImageFile);
            }

            _context.Entry(locationModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocationModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Location
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LocationModel>> PostLocationModel([FromForm]LocationModel locationModel)
        {
            locationModel.ImageName = await SaveImage(locationModel.ImageFile);
            _context.Locations.Add(locationModel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Location/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocationModel(int id)
        {
            var locationModel = await _context.Locations.FindAsync(id);
            if (locationModel == null)
            {
                return NotFound();
            }
            DeleteImage(locationModel.ImageName);

            _context.Locations.Remove(locationModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LocationModelExists(int id)
        {
            return _context.Locations.Any(e => e.LocationID == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
