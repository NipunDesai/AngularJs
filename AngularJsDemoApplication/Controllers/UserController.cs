using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularJsDemoApplication.Models;
using AngularJsDemoApplication.Repository;

namespace AngularJsDemoApplication.Controllers
{
    public class UserController : ApiController

    {

        private IUserDetailRepository _userDetailRepository;
        public UserController(IUserDetailRepository userDetailRepository)
        {
            _userDetailRepository = userDetailRepository;
        }

        [HttpPost]
        [Route("api/user/createNewUser")]
        public IHttpActionResult CreateNewUser(UserDetail userDetail)
        {
            _userDetailRepository.CreateNewUser(userDetail);
            return Ok();
        }
    }
}
