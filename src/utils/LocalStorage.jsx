const employees = [
    {
        id: 1,
        firstName: "Aarav",
        email: "employee1@example.com",
        password: "123",
        taskCount: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Fix login bug",
                taskDescription: "Resolve authentication issue in login page",
                taskDate: "2026-04-20",
                taskCategory: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Update UI",
                taskDescription: "Improve dashboard design",
                taskDate: "2026-04-18",
                taskCategory: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "API integration",
                taskDescription: "Integrate payment API",
                taskDate: "2026-04-17",
                taskCategory: "Backend"
            }
        ]
    },
    {
        id: 2,
        firstName: "Vivaan",
        email: "employee2@example.com",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 2,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Write test cases",
                taskDescription: "Create unit tests for modules",
                taskDate: "2026-04-20",
                taskCategory: "Testing"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Bug fixing",
                taskDescription: "Fix minor UI bugs",
                taskDate: "2026-04-19",
                taskCategory: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Deploy app",
                taskDescription: "Deploy on staging server",
                taskDate: "2026-04-18",
                taskCategory: "DevOps"
            }
        ]
    },
    {
        id: 3,
        firstName: "Aditya",
        email: "employee3@example.com",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Database design",
                taskDescription: "Design schema for project",
                taskDate: "2026-04-20",
                taskCategory: "Database"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Optimize queries",
                taskDescription: "Improve DB performance",
                taskDate: "2026-04-18",
                taskCategory: "Database"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Backup system",
                taskDescription: "Set up DB backup",
                taskDate: "2026-04-17",
                taskCategory: "Maintenance"
            }
        ]
    },
    {
        id: 4,
        firstName: "Krishna",
        email: "employee4@example.com",
        password: "123",
        taskCount: {
            active: 0,
            newTask: 1,
            completed: 2,
            failed: 0
        },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create landing page",
                taskDescription: "Build homepage UI",
                taskDate: "2026-04-20",
                taskCategory: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix CSS issues",
                taskDescription: "Resolve styling bugs",
                taskDate: "2026-04-19",
                taskCategory: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Animation feature",
                taskDescription: "Add animations using CSS",
                taskDate: "2026-04-18",
                taskCategory: "UI/UX"
            }
        ]
    },
    {
        id: 5,
        firstName: "Rohan",
        email: "employee5@example.com",
        password: "123",
        taskCount: {
            active: 2,
            newTask: 0,
            completed: 0,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Research AI models",
                taskDescription: "Study ML algorithms",
                taskDate: "2026-04-20",
                taskCategory: "AI/ML"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Data preprocessing",
                taskDescription: "Clean dataset",
                taskDate: "2026-04-19",
                taskCategory: "Data"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Model training",
                taskDescription: "Train ML model",
                taskDate: "2026-04-18",
                taskCategory: "AI/ML"
            }
        ]
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'));
   
    return{employees,admin}
}