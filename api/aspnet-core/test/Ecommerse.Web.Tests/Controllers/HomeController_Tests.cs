using System.Threading.Tasks;
using Ecommerse.Models.TokenAuth;
using Ecommerse.Web.Controllers;
using Shouldly;
using Xunit;

namespace Ecommerse.Web.Tests.Controllers
{
    public class HomeController_Tests: EcommerseWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}