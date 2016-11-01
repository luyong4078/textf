
;
$(function(){
	//var $vertical=$(".vertical");
	//var $vartical_child=$(".vertical_child");
	var $goods=$(".goods");
	
	var $vertical=$("<div class='vertical' />").appendTo($goods);
	//console.log($goods)
	
	$goods.hover(function(){
		$(this).find(".vertical").show();
	},function(){
		$(this).find(".vertical").hide();
	});
	
	
	
	//添加左侧垂直导航
	var obj;
	$.get("json/ver.json",function(str){
		obj=str;
		addContent(obj);
	});
	
	function addContent(obj){
		//console.log(obj)
		for(var key in obj){
			var $vertical_child=$("<div class='vertical_child' />").appendTo($vertical);
			//console.log($div1)
			//console.log($vertical)
			var $vh4=$("<h4/>").appendTo($vertical_child);
			var $vp=$("<p/>").appendTo($vertical_child);
			var arr=obj[key].catalog.split(" ");
			for(var key in arr){
				var $va=$("<a href='#' id='va' />");
				$va.html(arr[key]+" ");
				$va.appendTo($vp);
			};
		};
		
		
		var ver_chi=document.getElementsByClassName("vertical_child");
			//console.log(ver_chi);
			var $ver_chi2=$(ver_chi[2]);
			var $ver_chi3=$(ver_chi[3]);
			
			//console.log($ver_chi3.html);
			$ver_chi2.hover(function(){
				$(this).find(".ve_ch2_ri").show();
			},function(){
				$(this).find(".ve_ch2_ri").hide();
			});
			
			$ver_chi3.hover(function(){
				$(this).find(".ve_ch3_ri").show();
			},function(){
				$(this).find(".ve_ch3_ri").hide();
			})
			
			var $vcri2=$("<div class='ve_ch2_ri' />").appendTo($ver_chi2);
			var $vcri3=$("<div class='ve_ch3_ri' />").appendTo($ver_chi3);
			
			var vobj;
			$.get("json/vcri.json",function(str){
				vobj=str;
				addContver(vobj);
			});
			
			function addContver(vobj){
				var $vcridivl=$("<div class='vcridivl'  />").appendTo($vcri2);
				var $vp1=$("<p/>").appendTo($vcridivl);
				$vp1.html(vobj.nav1.sub1);
				var $vp2=$("<p/>").appendTo($vcridivl);
				$vp2.html(vobj.nav1.sub2);
				var $vp3=$("<p/>").appendTo($vcridivl);
				$vp3.html(vobj.nav1.sub3);
				var $vcridivr=$("<div class='vcridivr' />").appendTo($vcri2);
				var $vh5=$("<h5 class='vh5' />").appendTo($vcridivr);
				$vh5.html(vobj.nav1.sub4);
				var $vimg=("<img href='vobj.nav1.img' />")
				
			}
			
	};

	//添加横向导航
	$nav=$(".nav");
	$lis=$nav.find("li");
	
	var obj;
	$.get("json/list.json",function(str){
		obj=str;
		listr(obj);
	});
	function listr(obj){
			var arr=obj.list.split(" ");
			for(var key in arr){
				//alert(arr[key]);
				var $lias=$("<a href='#' id='lias'/>");
				$lias.appendTo($lis[key]);
				$lias.html(arr[key]+" ");
			};
	};

		$lidiv=$(".lidiv");

			$lis.hover(function(e){
				console.log()
				$lidiv.show();
			},function(){
				$lidiv.hide();
			})
		
		
			var obje;
			$.get("json/list_child.json",function(str){
				obje=str;
				addContlis(obje);
				//console.log(obje)
			})
			function addContlis(obje){
				for(var key in obje){
					$img=$("<img class='imgc'/>").appendTo($lidiv);
					$div=$("<div class='ul_ci'/>").appendTo($lidiv);
					$dtc=$("<dt class='dct'/>").appendTo($div)
					$arr1=obje[key].title.split(" ");
					//console.log(arr1)
					//$dtc.html(arr.slice(1).join(" "))
					//$img.css(href:"obje[key].title")
				}
			}
			
		
		


});

