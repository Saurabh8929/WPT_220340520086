let userdata={

	host:"localhost",
	user:"saurabh",
	password:"cdac",
	database:"cdac",
	port:"3306"
}

const mysql = require('mysql2');
const con=mysql.createConnection(userdata);
const express = require('express');
const app=express();

app.use(expess.static("sf"));
app.get("/getbook",(req,resp)=>{
	let input=req.query.x;

	let output={bookidfound:false,bookdetails:
		{bkid:4,bknm:"",pri:1200}}

	con.query('select*from Book where bookid=?',[input],(error,res)=>{
		if (res.length>0){
			output.bookidfound=true;
			output.bookdetails=res[0];
		}
		resp.send(output);
		
	});
	
	});

	app.get("/updatebook",(res,resp)=>{

		let output=false;
		let input={bkid:req.query.bkid,
		itemname:req.query.itemname,price:req.query.price};

		con.query('update book set bookname=?,price=?,where bookid=?')
		[input.bknm,input.pri,input.bkid],
		(error,res)=>{
			if(error)
			{
				console.log("Error");

			}
			else if(res1.affectRows>0){
				output=true;
			}
			resp.send(output);

		}
		

	});



const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});