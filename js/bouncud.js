
//capabilities-twp.html决Map的area属性标签鼠标Hoverjs
//js:
$(function() {
	$("#wechat-fw-01 area").mouseover(function() {
		var area_index = $(this).index();
		$(".img-bg").eq(area_index).show();
	})
	$("#wechat-fw-01 area").mouseout(function() {
		var area_index = $(this).index();
		$(".img-bg").eq(area_index).hide();
	})
	$("#wechat-fw-01 area").click(function() {		
    var index = $(this).index();
	my.confirms(index);
	$(".Capacity").show();
	$("body .mask").show();
	$("body .close").show();
	})
	
	$("body .mask").click(function(){
		$(this).hide();
			$("body .close").hide();			
	$(".Capacity").hide();
	})
	
		$("body .close").click(function(){
		$(this).hide();
			$("body .mask").hide();			
	$(".Capacity").hide();
	})
})

var my = {
	confirms: function(index) {
		var icon = [
		{src:'images/capabilities/1-1.png'},
		{src:'images/capabilities/6-1.png'},
		{src:'images/capabilities/7-1.png'},
		{src:'images/capabilities/12-1.png'},
		{src:'images/capabilities/13-1.png'},
		{src:'images/capabilities/18-1.png'},
		{src:'images/capabilities/17-1.png'},
		{src:'images/capabilities/16-1.png'},
		{src:'images/capabilities/15-1.png'},
		{src:'images/capabilities/14-1.png'},
		{src:'images/capabilities/10-1.png'},
		{src:'images/capabilities/11-1.png'},
		{src:'images/capabilities/8-1.png'},
		{src:'images/capabilities/9-1.png'},
		{src:'images/capabilities/5-1.png'},		
		{src:'images/capabilities/4-1.png'},		
		{src:'images/capabilities/2-1.png'},
		{src:'images/capabilities/3-1.png'}
		];
		var titles = [
			"01.PPE - Pre Production Engineering",
			"06.Lay-up and bond (Lamination)",
			"07.Drilling the PCB",
			"12.Outer layer AOI",
			"13.Soldermask",
			"18.Packaging",
			"17.Final inspection",
			"16.Electrical test",
			"15.Profile",
			"14.Surface finish",
			"10.Plating ",
			"11.Etch outer layer",
			"08.Electroless copper deposition",
			"09.Image the outer layers ",
			"05.Inner layer Automatic Optical Inspection(AOI)",
			"04.Etch inner layers",			
			"02.Preparing the phototools",
			"03.Print inner layers"
		];
		var wordCons = [
			"Customer supplied data (gerber) is used to produce the manufacturing data for the specific PCB (artworks for imaging processes and drill data for drilling programs). Engineers compare demands/specifications against capabilities to ensure compliance and also determine the process steps and associated checks. No changes are allowed without PCBWay Group permission.",
			"The inner layers have an oxide layer applied and then “stacked” together with pre-preg providing insulation between layers and copper foil is added to the top and bottom of the stack. The lamination process uses a combination of specific temperature, pressure for a specific time to allow the resin within the pre-preg to flow and bond the layers together to form a solid multilayer panel.",
			"钻孔是在镀铜板上钻通孔或盲孔，建立PCB层与层之间以及元件与线路之间的连通。<br>We now have to drill the holes that will subsequently create electrical connections within the multilayer PCB. This is a mechanical drilling process that must be optimised so that we can achieve registration to all of the the inner layer connections. The panels can be stacked at this process. The drilling can also be done by a laser drill",
			"Just like with inner layer AOI the imaged and etched panel is scanned to make sure that the circuitry meets design and that it is free from defects. Again no repair of open circuits are allowed under PCBWay demands.",
			"Soldermask ink is applied over the whole PCB surface. Using artworks and UV light we expose certain areas to the UV and those areas not exposed are removed during the chemical development process – typically the areas which are to be used as solderable surfaces. The remaining soldermask is then fully cured making it a resilient finish.",
			"Boards are wrapped using materials that comply with the PCBWay Packaging demands (ESD etcetera) and then boxed prior to be being shipped using the requested mode of transport.",
			"Used for checking the integrity of the tracks and the through hole interconnections – checking to ensure there are no open circuits or no short circuits on the finished board. There are two test methods, flying probe for smaller volumes and fixture based for volumes.由于人工目测的局限性，我们还会进行仪器检测，PCB的仪器测试主要有两种方法,针床通断测试和移动",
			"Used for checking the integrity of the tracks and the through hole interconnections – checking to ensure there are no open circuits or no short circuits on the finished board. There are two test methods, flying probe for smaller volumes and fixture based for volumes.",
			"This is the process of cutting the manufacturing panels into specific sizes and shapes based upon the customer design as defined within the gerber data. There are 3 main options available when providing the array or selling panel – scoring, routing or punching. All dimensions are measured against the customer supplied drawing to ensure the panel is dimensionally correct.",
			"Various finishes are then applied to the exposed copper areas. This is to enable protection of the surface and good solderability. The various finishes can include Electroless Nickel Immersion Gold, HASL, Immersion Silver etc. Thicknesses and solderability tests are always carried out.",
			"Second electrolytic plating stage, where the additional plating is deposited in areas without dry film (circuitry). Once the copper has been plated, tin is applied to protect the plated copper.图形电镀(镀锡)是PCB线路部分（包括器件孔和过孔）镀上一层锡，用来保护线路部分不被蚀刻液腐蚀，防止在后续蚀刻流程时将线路部分蚀刻掉",
			"This is normally a three step process. The first step is to remove the blue dry film. The second step is to etch away the exposed/unwanted copper whilst the tin deposit acts an etch resist protecting the copper we need. The third and final step is to chemically remove the tin deposit leaving the circuitry.",
			"化学铜被广泛应用于有通孔的印制线路板的生产加工中，其主要目的在于通过一系列化学处理方法在非导电基材上沉积一层铜，继而通过后续的电镀方法加厚使之达到设计的特定厚度，一般情况下是1mil(25.4um)或者更厚一些，有时甚至直接通过化学方法来沉积到整个线路铜厚度的。全板电镀铜：保护刚刚沉积的薄薄的化学铜，防止化学铜氧化后被酸浸蚀掉，通过电镀将其加厚到一定程度",
			"Similar to the inner layer process (image transfer using photosensitive dry film, exposure to UV light and etching), but with one main difference – we will remove the dry film where we want to keep the copper/define circuitry – so we can plate additional copper later in the process.",
			"Inspection of the circuitry against digital “images” to verify that the circuitry matches the design and that it is free from defects. Achieved through scanning of the board and then trained inspectors will verify any anomalies that the scanning process has highlighted. PCBWay Group allows no repair of open circuits.",
			"Stage 2 is to remove the unwanted copper from the panel using etching. Once this copper has been removed, the remaining dry film is then removed leaving behind the copper circuitry that matches the design.<br>蚀刻是用化学或电化学方法去除基材上无用导电材料，形成印制图形的工艺",			"2.制备照相底版是PCB生产中的关键步骤，其质量直接影响到最终产品的质量；现在一般都用计算机辅助设计直接在光绘仪上绘制照相底版。一般要有三种照相底图：（1）导电图形底图<br>（2）阻焊图形底图<>br（3）标记字符底图",
			"Stage 1 is to transfer the image using an artwork film to the board surface, using photosensitive dry-film and UV light, which will polymerise the dry film exposed by the artwork.This step of the process is performed in a clean room."
		];
		var imgCons = [
		{one: "1-2.jpg",two: "1-3.jpg"},
		{one: "6-2.jpg",two: "6-3.jpg"},
		{one: "7-2.jpg"},
		{one: "12-2.jpg"},
		{one: "13-2.jpg"},
		{one: "18-2.jpg",two: "18-3.jpg"},
		{one: "17-2.jpg",two: "17-3.jpg"},
		{one: "16-2.jpg"},
		{one: "15-2.jpg",two: "15-3.jpg"},
		{one: "14-2.jpg",two: "14-3.jpg"},
		{one: "10-2.jpg",two: "10-3.jpg"},
		{one: "11-2.jpg",two: "11-3.jpg"},
		{one: "8-2.jpg",two: "8-3.jpg"},
		{one: "9-2.jpg"},
		{one: "5-2.jpg"},
		{one: "4-2.jpg",two: "4-3.jpg"},		
		{one: "6-2.jpg",two: "6-3.jpg"},
		{one: "3-2.jpg"}
		];
		var confirmsHtmls = '<img src=' + icon[index].src + ' class="icon"/><h3 class="title">' + titles[index] + '</h3><div class="centerbox"><p class="present">' + wordCons[index] + '</p><ul><li><img src="images/capabilities/' + imgCons[index].one + '" /></li>';
		if(imgCons[index].two){
			confirmsHtmls +='<li><img src="images/capabilities/' + imgCons[index].two + '" /></li>'
		}
		confirmsHtmls +='</ul></div>';
		$(".Capacity").html(confirmsHtmls)
	}
}