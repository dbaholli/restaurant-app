using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactASPCrud.Models
{
    public class LocationDBContext:DbContext 
    {
        public LocationDBContext(DbContextOptions<LocationDBContext> options) : base(options)
        {

        }
        public DbSet<LocationModel> Locations { get; set; }
    }
}
