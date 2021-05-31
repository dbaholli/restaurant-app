using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebApplication4.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace WebApplication4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConstomerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public ConstomerController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                        select ConstomerID, ConstomerName,ConstomerLastName, Eventi,
                         convert(varchar(10),DateOfEvent,120) as DateOfEvent
                          ,PhotoFileName
                            from dbo.Constomer
";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConstomerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);

        }
        [HttpPost]
        public JsonResult Post(Constomer emp)
        {
            string query = @"
                insert into dbo.Constomer
                (ConstomerName,ConstomerLastName,Eventi,DateOfEvent,PhotoFileName)
                values
               (
                 '" + emp.ConstomerName + @"'
                 ,'" + emp.ConstomerLastName + @"'
                 ,'" + emp.Eventi + @"'
                 ,'" + emp.DateOfEvent + @"'
                 ,'" + emp.PhotoFileName + @"'
                      ) 
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConstomerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully ");
        }
        [HttpPut]
        public JsonResult Put(Constomer emp)
        {
            string query = @"
               update dbo.Constomer set 
               ConstomerName =  '" + emp.ConstomerName + @"'
               ,ConstomerLastName =  '" + emp.ConstomerLastName + @"'
              ,Eventi =  '" + emp.Eventi + @"'
              ,DateOfEvent =  '" + emp.DateOfEvent + @"'
               where ConstomerId =" + emp.ConstomerId + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConstomerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully ");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
            delete  from dbo.Constomer 
                        where ConstomerId =" + id + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConstomerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Delete Successfully ");
        }


        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }

        [Route("GetAllEventiNames")]
        public JsonResult GetAllEventiNames()
        {
            string query = @"
                        select  EventiName from  Eventi
                         
";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConstomerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);

        }
    }
}


    
