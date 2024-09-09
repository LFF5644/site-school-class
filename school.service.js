const classData=require("./public/web/school/classData.json");

function getTeacher(id){
	return classData.teachers[id];
}
function getSubject(id){
	return classData.subjects[id];
}
function getTimetable(){
	const timetable=classData.timetable;

	return (timetable
		.map(item=>item
			.map(getSubject)
			.map(item=>[
				item[0],item[1],
				[item[2].map(getTeacher)]
			])	
		)
	);
}

this.start=()=>{
	this.getTimetable=getTimetable;
}

this.stop=()=>{

}