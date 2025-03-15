const permissions = {
  2: [1, 2, 3, 4],
  3: [5, 6, 7, 8],
};

const roles = Object.keys(permissions).map((item) => Number(item));
//console.log(roles);

for (const [_, rolePermissions] of Object.entries(permissions)) {
  console.log(rolePermissions);
}
