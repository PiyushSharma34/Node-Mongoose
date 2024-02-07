express = require("express");
app = express();
port = 3000
Student = require('./database.js')

app.listen(port, () => {
	console.log(`Running on ${port}`);
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
	students = await Student.find()
	res.render("index", {
		page: "CRUD  with  NodeJS and MongoDB - Home Page",
		title: "Dashboard",
		students: students
	});
});


app.post("/register", async (req, res) => {
	const {name, mail, age} = req.body;
	newStudent = new Student({name, mail, age});

	studentsave = await newStudent.save();
	res.redirect("/");

});

app.get("/register", (req, res) => {
	res.render("register")
});

app.get("/delete/:id", async (req, res) => { // const {id} = req.params;
	deleteStudent = await Student.findByIdAndDelete(req.params.id);
	res.redirect("/")
});


app.get('/update/:id', async (req, res) => {
	id = req.params.id;
	updateStudent = await Student.findById({_id: id});
    if(updateStudent==null){res.redirect('/')}
    else {res.render('update',{students:updateStudent})}
	// res.render("update.ejs")
});

app.post("/update/:id", async (req, res) => {
	id = req.params.id;
	const {name, mail, age} = req.body;
	updateStudent = await Student.findByIdAndUpdate({_id: id},
     {name,mail,age	},
     {new: true});
	res.redirect("/")
})
