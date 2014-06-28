using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngularJsDemoApplication.Models;

namespace AngularJsDemoApplication.Repository
{
   public interface IUserDetailRepository
   {

       UserDetail CreateNewUser(UserDetail userDetail);
   }
}
