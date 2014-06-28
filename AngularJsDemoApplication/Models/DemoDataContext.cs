using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJsDemoApplication.Models
{
    public class DemoDataContext :DbContext
    {
        public DbSet<UserDetail> UserDetails { get; set; } 
    }
}