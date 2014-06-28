using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using AngularJsDemoApplication.Controllers;
using AngularJsDemoApplication.DataRepository;
using AngularJsDemoApplication.Repository;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;

namespace AngularJsDemoApplication.App_Start
{
    public class AutofacConfig
    {
        public static void RegisterDependencies()
        {

            var builder = new ContainerBuilder();

            //builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            //builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterApiControllers(typeof(UserController).Assembly);


           
            builder.RegisterType<UserDetailRepository>().As<IUserDetailRepository>();
            builder.RegisterGeneric(typeof(DataRepository<>)).As(typeof(IDataRepository<>));

            IContainer container = builder.Build();
            // DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
    }
}