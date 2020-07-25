using Abp.Authorization;
using Ecommerse.Authorization.Roles;
using Ecommerse.Authorization.Users;

namespace Ecommerse.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
