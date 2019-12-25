		// 头部	
		
			// 显示时间
			setInterval(function () {
				var time = Date()
				$("#time").html(time.substr(16,8))
			},1000)
			
		
		
		// 导航栏
		
		
		
		// 左边
		
		
		
		
			//绑定个性签名的移出移入
			function gqEL() {
				$("#PerS:first").mouseenter(function  (e) {
					var X = e.clientX + "px"
					var Y = e.clientY + "px"
					$("#PerS2").css("display","block").css("top",Y).css("left",X);
				}).mouseleave(function  () {
					$("#PerS2").css("display","none")
				});
			}
			
			
			// 绑定任务栏的移出移入和点击
			function rwlELC() {
				var num = home;
				$(".RWL").each(function  () {
					$(this).mouseenter(function  () {
						$(this).css("background-color","aquamarine")
					}).mouseleave(function  () {
						if(num != this){
							$(this).css("background-color","transparent")
						}
					}).click(function  () {
						$(".RWL").each(function  () {
							$(this).css("background-color","transparent")
						})
						$(this).css("background-color","aquamarine")
						num = this
						return num;
					})
				})
				
			}


		// 内容
        // 底部
			// 给底部上边框
			function B (a) {
				var H = document.documentElement.scrollHeight
				a.style.top = H - 30 + "px"
			}