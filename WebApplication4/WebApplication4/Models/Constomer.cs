using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication4.Models
{
    public class Constomer
    {

        public int ConstomerId { get; set; }

        public string ConstomerName { get; set; }
        public string ConstomerLastName { get; set; }

        public string Eventi { get; set; }

        public string DateOfEvent { get; set; }

        public string PhotoFileName { get; set; }
    }
}
