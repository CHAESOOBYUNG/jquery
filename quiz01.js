//jquery코드
//js링크가 먼저 일어남
//document ready
$(document).ready(function() {
    $("#dark").click(function() {

        if( $("#dark").hasClass("dark") ) {
            $("body").css("backgroundColor", "black");
            $("p, h3, a").css("color", "white");
            $("#dark").html("밝게보기"); //innerHTML
            $("#dark").addClass("white"); //클래스 속성 삭제
            $("#dark").removeClass("dark"); //클래스 속성 추가
        } else {
            $("body").css("backgroundColor", "white");
            $("p, h3, a").css("color", "black");
            $("#dark").html("어둡게보기"); //innerHTML
            $("#dark").addClass("dark"); //클래스 속성 추가
            $("#dark").removeClass("white"); //클래스 속성 삭제
        }

        });

        //name버튼 이벤트
        $("#name").click(function() {

            if( $("#name").hasClass("name") ) {
                
                $(".inner > p").html("김지원<br>19세<br>ive liz, eleven");
                $(".inner > a").css("display", "none"); //가림
                $("#name").html("이름보기");
                $("#name").addClass("cont"); //클래스 속성 삭제
                $("#name").removeClass("name");

            } else {
                var str = "잘들어 지금 내가 하는 말 장난이 아냐 니가 놀랠지도 모르지만 얼마 전부터 내 머릿속은 너로 가득차 있어 나도 모르게 처음엔 설마.. 설마.. 했는데 확실히 알았어 난 니가 여자로 보여 너의 하나부터 열까지 다 내 맘을 녹이기엔 충분해 진심이야 정말 언제 부턴가 난 니가 너무 아름다운 여자로 보여 매일 마주하는 의미가 없던 이 길 마저 자꾸 설레지고 있어 난 전혀 몰랐는데 원래 이렇게 예뻤나 내 눈이 또 널 훔쳐보게 만들어 이제서야 내 맘을 알았어 너도 더 이상 나를 참지마 니가 여자로 보여 너의 하나부터 열까지 다 내 맘을 녹이기엔 충분해 진심이야 정말 언제 부턴가 난 니가 너무 아름다운 여자로 보여..."

                $(".text").html(str);
                $(".inner > a").css("display", "none"); //가림
                $("#name").html("내용보기");
                $("#name").addClass("name"); //클래스 속성 삭제
                $("#name").removeClass("cont");


            }

        });

});