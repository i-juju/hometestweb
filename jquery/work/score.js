var studentArr=new Array();
var na="";
var n1=0;
var n2=0;
var n3=0;
var n4=0;
var total=0,average=0,dep=" ", rank=0;
var str="";

$(function () {
	str="<table>";
	str+="<tr>";
	str+="<td>학생명</td><td>국어</td><td>영어</td><td>수학</td><td>과학</td><td>총점</td><td>평균</td><td>등급</td><td>순위</td>";
	str+="</tr>";
	// $('#fn').click(function main(sName, snum1, snum2, snum3, snum4){
	// 	studentArr.push(new Student(sName, snum1, snum2, snum3, snum4));
	// 	Setprint();
	// });

	var temp = $('input:radio[name="chkradio"]:checked').val();

	if(temp=="kor"){
		studentArr.push(new Student(sName, snum1, snum2, snum3, snum4));
		Sortprint();
	}

});

function Student(na, n1, n2, n3, n4){
	this.na=$("#sName").val();
	this.n1=parseInt($("#snum1").val());
	this.n2=parseInt($("#snum2").val());
	this.n3=parseInt($("#snum3").val());
	this.n4=parseInt($("#snum4").val());

// 	//합계구하기
this.total=function(){return this.n1+this.n2+this.n3+this.n4; };
// 	//평균구하기
this.average=function(){return this.total()/4; };
	//alert(this.avg());
// 	//등급구하기

this.dep=function(){
	if(this.average()>=90){return "A";}
	else if(this.average()>=80){return "B";}
	else if(this.average()>=70){return "C";}
	else{return "F";}		
};


}
//배열로 저장해서 테이블에 넣어보기
function Setprint(){
	for (var i = 0; i < studentArr.length; i++) {
		studentArr[i].rank=1;
		for (var j = 0; j < studentArr.length; j++) {
			if(studentArr[i].total()<studentArr[j].total())
				{studentArr[i].rank++;}
		}
	}
	for(var i in studentArr){
		str+="<tr>";
		str+="<td>"+studentArr[i].na+ "</td>";
		str+="<td>"+studentArr[i].n1+ "</td>";
		str+="<td>"+studentArr[i].n2+ "</td>";
		str+="<td>"+studentArr[i].n3+ "</td>";
		str+="<td>"+studentArr[i].n4+ "</td>";
		str+="<td>"+studentArr[i].total()+ "</td>";
		str+="<td>"+studentArr[i].average()+ "</td>";
		str+="<td>"+studentArr[i].dep()+ "</td>";
		str+="<td>"+studentArr[i].rank+ "</td>";}

	tem.innerHTML=str;//id=tem 인 부분에 출력하려고 함!
}

function Sortprint(){

	studentArr.sort(function(a,b){return b.n1-a.n1;});

	for (var i = 0; i < studentArr.length; i++) {
		studentArr[i].rank=1;
		for (var j = 0; j < studentArr.length; j++) {
			if(studentArr[i].total()<studentArr[j].total())
				{studentArr[i].rank++;}
		}
	}
	for(var i in studentArr){
		str+="<tr>";
		str+="<td>"+studentArr[i].na+ "</td>";
		str+="<td>"+studentArr[i].n1+ "</td>";
		str+="<td>"+studentArr[i].n2+ "</td>";
		str+="<td>"+studentArr[i].n3+ "</td>";
		str+="<td>"+studentArr[i].n4+ "</td>";
		str+="<td>"+studentArr[i].total()+ "</td>";
		str+="<td>"+studentArr[i].average()+ "</td>";
		str+="<td>"+studentArr[i].dep()+ "</td>";
		str+="<td>"+studentArr[i].rank+ "</td>";}

	tem.innerHTML=str;
}

// function sample_date(){
// 	var num=Math.floor((Math.random()*100)+1);
// 	this.na="ID"+num;
// 	this.n1=Math.floor((Math.random()*100)+1);
// 	this.n2=Math.floor((Math.random()*100)+1);
// 	this.n3=Math.floor((Math.random()*100)+1);
// 	this.n4=Math.floor((Math.random()*100)+1);
	
// 	//this.na=$("#sName").val();
// 	frm.snum1.value=na;
// 	frm.snum1.value=n1;
// 	frm.snum2.value=n2;
// 	frm.snum3.value=n3;
// 	frm.snum4.value=n4;
// 	main(na, n1, n2, n3, n4);
// }
