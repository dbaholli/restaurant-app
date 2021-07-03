using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactASPCrud.Models
{
    public class LocationModel
    {
        [Key]
        public int LocationID { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string LocationName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Description { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }
    }
}
