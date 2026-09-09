```html
<!DOCTYPE html>
<html>
<head>
    <title>Employee Management System</title>

    <style>
        body {
            font-family: Arial;
            margin: 30px;
        }

        input, select, button {
            padding: 10px;
            margin: 5px;
        }

        table {
            width: 100%;
            margin-top: 20px;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
        }

        th {
            background-color: #eee;
        }
    </style>
</head>

<body>

    <h1>Employee Management System</h1>

    <input type="text" id="search" placeholder="Search employee">

    <select id="department">
        <option value="all">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
    </select>

    <button onclick="sortBySalary()">Sort by Salary</button>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>
        </thead>

        <tbody id="employeeTable">
        </tbody>
    </table>

    <script>

        // Employee data
        const employees = [
            {
                id: 101,
                name: "Rahul",
                department: "IT",
                salary: 60000
            },
            {
                id: 102,
                name: "Priya",
                department: "HR",
                salary: 50000
            },
            {
                id: 103,
                name: "Arjun",
                department: "Finance",
                salary: 70000
            },
            {
                id: 104,
                name: "Sneha",
                department: "IT",
                salary: 80000
            },
            {
                id: 105,
                name: "Kiran",
                department: "HR",
                salary: 45000
            }
        ];

        // Display employees
        function displayEmployees(data) {

            const table = document.getElementById("employeeTable");

            table.innerHTML = "";

            data.forEach(employee => {

                const row = `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>₹${employee.salary}</td>
                    </tr>
                `;

                table.innerHTML += row;
            });
        }


        // Search employees
        document.getElementById("search").addEventListener("input", function() {

            const searchText = this.value.toLowerCase();

            const filteredEmployees = employees.filter(employee =>
                employee.name.toLowerCase().includes(searchText)
            );

            displayEmployees(filteredEmployees);
        });


        // Filter by department
        document.getElementById("department").addEventListener("change", function() {

            const selectedDepartment = this.value;

            if (selectedDepartment === "all") {

                displayEmployees(employees);

            } else {

                const filteredEmployees = employees.filter(employee =>
                    employee.department === selectedDepartment
                );

                displayEmployees(filteredEmployees);
            }
        });


        // Sort employees by salary
        function sortBySalary() {

            const sortedEmployees = [...employees].sort(
                (a, b) => b.salary - a.salary
            );

            displayEmployees(sortedEmployees);
        }


        // Display employees when page loads
        displayEmployees(employees);

    </script>

</body>
</html>
```

