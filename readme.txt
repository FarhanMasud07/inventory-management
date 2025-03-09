SELECT p.permission_name 
FROM users u 
JOIN user_roles ur ON u.id = ur.user_id // extract the selected user that has all roles
JOIN roles r ON ur.role_id = r.id  // extract all the roles with role name
JOIN role_permission rp ON r.id = rp.role_id // extract the selected user that has all permisions
JOIN permissions p ON rp.permission_id = p.id  // extract all the permissions with permission name
WHERE u.id = 1
AND p.permission_name = "dashboard.graph";