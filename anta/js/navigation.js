
;
$(function(){
	  //1添加左侧垂直导航
	var $goods=$(".goods");
	
	var $vertical=$("<div class='vertical' />").appendTo($goods);
	//console.log($goods)
	
	$goods.hover(function(){
		$(this).find(".vertical").show();
	},function(){
		$(this).find(".vertical").hide();
	});
	
	var obj;
	$.get("json/ver.json",function(str){  //1.1引入json文件
		obj=str;
		addContent(obj);
	});
	  //添加一级导航菜单
	function addContent(obj){
		//console.log(obj)
		for(var key in obj){
			var $vertical_child=$("<div class='vertical_child' />").appendTo($vertical);
			//console.log($div1)
			//console.log($vertical)
			var $vh4=$("<h4/>").appendTo($vertical_child);
			$vh4.html(obj[key].title);
			$vh4.attr({title:obj[key].title})
			var $vp=$("<p/>").appendTo($vertical_child);
			var arr=obj[key].catalog.split(" ");
			for(var key in arr){
				var $va=$("<a href='#' id='va' />");
				$va.html(arr[key]+" ");
				$va.attr({title:arr[key]})
				$va.appendTo($vp);
			};
		};
		//添加二级导航菜单
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
				flag=false;
			},function(){
				$(this).find(".ve_ch3_ri").hide();
				flag=true;
			})
			
			var $vcri2=$("<div class='ve_ch2_ri' />").appendTo($ver_chi2);
			var $vcri3=$("<div class='ve_ch3_ri' />").appendTo($ver_chi3);
			
			var vobj;
			$.get("json/vcri.json",function(str){
				vobj=str;
				addContver(vobj);
				//console.log(vobj)
			});
			
			function addContver(vobj){
					var $vcridivl=$("<div class='vcridivl'  />").appendTo($vcri2);
					var $vp1=$("<p/>").appendTo($vcridivl);
					var arr1=vobj.nav1.sub1.split(" ");
					var arr2=vobj.nav1.sub2.split(" ");
					var arr3=vobj.nav1.sub3.split(" ");
					//console.log(arr1)
					for(var i in arr1){
						var $va=$("<a href='#'/>").appendTo($vp1);
						$va.html(arr1[i]+" ");
						//$va
					}
					var $vp2=$("<p/>").appendTo($vcridivl);
					var arr1=vobj.nav1.sub2.split(" ");
					for(var i in arr2){
						var $va=$("<a href='#'/>").appendTo($vp2);
						$va.html(arr2[i]+" ");
					}
					var $vp3=$("<p/>").appendTo($vcridivl);
					for(var i in arr3){
						var $va=$("<a href='#'/>").appendTo($vp3);
						$va.html(arr3[i]+" ");
					}
					var $vcridivr=$("<div class='vcridivr' />").appendTo($vcri2);
					var $vh5=$("<h5 class='vh5' />").appendTo($vcridivr);
					$vh5.html(vobj.nav1.sub4);
					var $vimg=$("<img />").appendTo($vcridivr);
					$vimg.attr({"src":vobj.nav1.img});
					
					var $vcridivl=$("<div class='vcridivl'  />").appendTo($vcri3);
					var arr4=vobj.nav2.sub1.split(" ");
					var arr5=vobj.nav2.sub2.split(" ");
					var arr6=vobj.nav2.sub3.split(" ");
					var $vp1=$("<p/>").appendTo($vcridivl);
					for(var i in arr4){
						var $va=$("<a href='#'/>").appendTo($vp1);
						$va.html(arr4[i]+" ");
					}
					var $vp2=$("<p/>").appendTo($vcridivl);
					for(var i in arr5){
						var $va=$("<a href='#'/>").appendTo($vp2);
						$va.html(arr5[i]+" ");
					}
					var $vp3=$("<p/>").appendTo($vcridivl);
					for(var i in arr6){
						var $va=$("<a href='#'/>").appendTo($vp3);
						$va.html(arr6[i]+" ");
					}
					var $vcridivr=$("<div class='vcridivr' />").appendTo($vcri3);
					var $vh5=$("<h5 class='vh5' />").appendTo($vcridivr);
					$vh5.html(vobj.nav2.sub4);
					var $vimg=$("<img />").appendTo($vcridivr);
					$vimg.attr({"src":vobj.nav2.img});
				
				
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
				$lias.attr({title:arr[key]+"系列"});
			};
	};
	

		
			

/*banner1*/
		  //轮播图
		var $bali=$("#bau1 li");
		var $bali2=$("#shuffling  li")
		var $baleft=$("#baleft");
		var $baright=$("#baright");
		var $banner=$(".banner");
		var k=0;
		//自动轮播
		var timer=setInterval(fun1,3000);
		//划动事件
		$banner.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(fun1,3000);
		});
		//向左向右
		$baleft.click(function(){
			k--;
			if(k==-1){
				k=$bali.size()-1;
			}
			play(k);
		});
		$baright.click(fun1);
		//点击轮播
		$bali2.click(function(evt){
			k=$(evt.target).index();
			play(k);
		});
		//fun1
		function fun1(){
			k++;
			if(k==$bali.size()){
				k=0;
			}
			play(k);
		}
		function play(k){
			$bali.eq(k).css("display","block").siblings().css("display","none");
			$bali2.eq(k).css("background","#bf2627").siblings().css({background:""});
			
		}


});

