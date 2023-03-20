let courseName = "DB management systems with PostgreSQL";

let result;

result = courseName.toLowerCase();
result = courseName.toUpperCase();
result = courseName.length;
result = courseName.includes("D");
result = courseName.slice(3, 13)
result = courseName.slice(-10)
result = courseName.substring(0, 6);
result = courseName.replace("PostgreSQL","MySQL");
result = courseName.trim();

result = courseName.indexOf("management")
result = courseName.split(" ");
result = courseName.split(" ")[0];

console.log(result);