using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularJsDemoApplication.Models;

namespace AngularJsDemoApplication.Repository
{
    public class UserDetailRepository :IUserDetailRepository
    {
        private DemoDataContext db= new DemoDataContext();
        public UserDetail CreateNewUser(UserDetail userDetail)
        {
            db.UserDetails.Add(userDetail);
            db.SaveChanges();
            return userDetail;
        }
    }
}