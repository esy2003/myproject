var jehong=jehong || {};

jehong.main=(()=>{
   var init=(ctx)=>{
      alert('sessionStorage_getItem_movie_seq is '+sessionStorage.getItem('movie_seq'));
      jehong.session.init(ctx);
      logic();
      drawMovieChart();
   };
   var logic=()=>{
      
   };
   var drawMovieChart=()=>{
      $.ajax({
         url : sessionStorage.getItem('ctx')+'/get/movieChart',
         method : 'POST',
         contentType : 'application/json',
         context: this,
         success : d=>{
        	 
        	 alert('0번쨰 ? '+d.movieChart[0].name);
            var date
            /*var calDate=(x)=>{
               date=new Date(x);
               calDate=date.getFullYear()+'년'+(date.getMonth()+1)+'월'+date.getDate()+'일';
               return calDate; 
            };*/
             $('#movie_chart').append('<ol id="ol"></ol>');
              for(var i=0;i<4;i++){
                 date=new Date(d.movieChart[i].release_date);
                 releaseDate=date.getFullYear()+'년'+(date.getMonth()+1)+'월'+date.getDate()+'일';
                 $('#ol').append(
 '<li><div class="box-image"><strong class="rank">No.'+(i+1)+'</strong><span class="thumb-image"><img class="movie_steelcut" src="'+d.movieChart[i].poster+'" name="'+d.movieChart[i].movie_seq+'"><span class="ico-grade grade-'+d.movieChart[i].age_limit+'">12세이상</span></span><span class="screentype"></span></div><div class="box-contents"><strong class="title">'+d.movieChart[i].name+'</strong><div class="score"><strong class="percent">예매율<span>'+d.movieChart[i].reserve_rate+'%</span></strong><!--[2015-12-10]에그포인트적용범위1~3위.start:add_mwpark--><div class="egg-gage small"><span class="egg great"></span><span class="percent">99%</span></div><!--[2015-12-10]에그포인트적용범위1~3위.end:add_mwpark--><!--[2015-12-11]무비차트평점개편별점UI삭제start:del_mwpark<div class="point"><em>102.0</em></div>[2015-12-11]무비차트평점개편별점UI삭제start:del_mwpark--></div><span class="txt-info"><strong>'+releaseDate+'<span> 개봉</span></strong></span><span class="like"><button id="likeBtn_'+d.movieChart[i].movie_seq+'" class="btn-like" onclick="jehong.main.likeMovie('+d.movieChart[i].movie_seq+')" value="'+d.movieChart[i].like_count+'">영화찜하기</button><span class="count"><strong><i id="likeText'+d.movieChart[i].movie_seq+'">'+d.movieChart[i].like_count+'</i><span>명이선택</span></strong><i class="corner-RT"></i><i class="corner-LT"></i><i class="corner-LB"></i><i class="corner-RB"></i><i class="corner-arrow"></i></span><a class="link-reservation" onclick="jehong.main.goReservation('+d.movieChart[i].movie_seq+')">예매</a></span></div></li>'      
                 );
              }
              
              $('#movie_chart').append('<ol id="ol2"></ol>');
              for(var i=4;i<8;i++){
                 date=new Date(d.movieChart[i].release_date);
                 releaseDate=date.getFullYear()+'년'+(date.getMonth()+1)+'월'+date.getDate()+'일';
                 $('#ol2').append(                       
'<li><div class="box-image"><strong class="rank">No.'+(i+1)+'</strong><span class="thumb-image"><img class="movie_steelcut" src="'+d.movieChart[i].poster+'" name="'+d.movieChart[i].movie_seq+'"><span class="ico-grade grade-'+d.movieChart[i].age_limit+'">12세이상</span></span><span class="screentype"></span></div><div class="box-contents"><strong class="title">'+d.movieChart[i].name+'</strong><div class="score"><strong class="percent">예매율<span>'+d.movieChart[i].reserve_rate+'%</span></strong><!--[2015-12-10]에그포인트적용범위1~3위.start:add_mwpark--><div class="egg-gage small"><span class="egg great"></span><span class="percent">99%</span></div><!--[2015-12-10]에그포인트적용범위1~3위.end:add_mwpark--><!--[2015-12-11]무비차트평점개편별점UI삭제start:del_mwpark<div class="point"><em>102.0</em></div>[2015-12-11]무비차트평점개편별점UI삭제start:del_mwpark--></div><span class="txt-info"><strong>'+releaseDate+'<span> 개봉</span></strong></span><span class="like"><button id="likeBtn_'+d.movieChart[i].movie_seq+'" class="btn-like" onclick="jehong.main.likeMovie('+d.movieChart[i].movie_seq+')" value="'+d.movieChart[i].like_count+'">영화찜하기</button><span class="count"><strong><i id="likeText'+d.movieChart[i].movie_seq+'">'+d.movieChart[i].like_count+'</i><span>명이선택</span></strong><i class="corner-RT"></i><i class="corner-LT"></i><i class="corner-LB"></i><i class="corner-RB"></i><i class="corner-arrow"></i></span><a class="link-reservation" onclick="jehong.main.goReservation('+d.movieChart[i].movie_seq+')">예매</a></span></div></li>'      
                 );
              }
              for(var i=0;i<10;i++){
                 $('#searchList').append(
                       '<li><a onclick="jehong.main.goDetail('+d.movieChart[i].movie_seq+')">'+(i+1)+'. <strong>'+d.movieChart[i].name+'</strong></a><em><span class="new">NEW</span></em></li>'      
                 );
              }
              
              var date=new Date();
               today=date.getFullYear()+'년'+(date.getMonth()+1)+'월'+date.getDate()+'일';
              $('.searchrank').append('<p class="date">'+today+'</p>')
              
              
              
              /*$('.movie_steelcut').click(()=>{
                 alert('$_this is '+$(this).attr("name"));
                 sessionStorage.setItem('movie_seq',$(this).attr("name"));
                 location.href=sessionStorage.getItem('ctx')+'/movieDetail';
                 event.stopPropagation();
              });*/
              $(".movie_steelcut").on("click", function() {
                 alert($(this).attr("name"));
                 sessionStorage.setItem('movie_seq',$(this).attr("name"));
                 location.href=sessionStorage.getItem('ctx')+'/movieDetail';
                 event.stopPropagation();
              });
              
                $('.cols-rank').prepend(
                         '<div class="col-rank-trailer">'
                          +'<h3>인기 트레일러</h3>'
                          +'<div class="sect-popular-trailer">'
                              +'<div id="ctl00_PlaceHolderContent_ucListFooter_wrap_info_trailer" class="wrap-info-trailer">'
                                  +'<!-- 트레일러 이미지 -->'
                                  +'<div class="box-image trailer">'
                                      +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147895">'
                                          +'<span class="thumb-image" name="'+d.movieChart[0].movie_seq+'">'
                                              +'<img src="http://img.youtube.com/vi/'+d.movieChart[0].trailer+'/1.jpg">'
                                              +'<span class="ico-play">영상보기</span>'
                                          +'</span>'
                                      +'</a>'
                                  +'</div>'
                                  +'<div class="box-image">'
                                      +'<a href="/movies/detail-view/?midx=79949">'
                                          +'<span class="thumb-image">'
                                              +'<img src="'+d.movieChart[0].poster+'">'
                                              +'<span class="ico-grade grade-19">청소년 관람불가</span>'
                                          +'</span>'
                                      +'</a>'
                                  +'</div>'
                                  +'<div class="box-contents">'
                                      +'<a href="/movies/detail-view/?midx=79949">'
                                          +'<strong class="title">'+d.movieChart[0].name+'</strong>'
                                      +'</a>'
                                      +'<span class="txt-info">'
                                          +'<em class="genre">'+d.movieChart[0].genre+'</em>'
                                          +'<span>'
                                              +'<i>2017.09.25</i>'
                                              +'<strong>개봉</strong>'
                                              +'<em class="dday">D-1</em>'
                                          +'</span>'
                                      +'</span>'
                                      +'<span class="screentype">'
                                              +'<a class="imax" href="#" title="IMAX 상세정보 바로가기" data-regioncode="07">IMAX</a>'
                                              +'<a class="forDX" href="#" title="4DX 상세정보 바로가기" data-regioncode="4D14">4DX</a>'
                                      +'</span>'
                                  +'</div>'
                              +'</div>'
                              +'<ul>'
                                  +'<li>'
                                      +'<div class="box-image">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147896">'
                                              +'<span class="thumb-image" name ="'+d.movieChart[1].movie_seq+'">'
                                                  +'<img src="http://img.youtube.com/vi/'+d.movieChart[1].trailer+'/1.jpg" style="width:126px;height:71px;">'
                                                  +'<span class="ico-play">영상보기</span>'
                                              +'</span>'
                                          +'</a>'
                                      +'</div>'
                                      +'<div class="box-contents">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147896">'
                                              +'<strong class="title">'+d.movieChart[1].name+'</strong>'
                                          +'</a>'
                                          +'<span class="txt-info">'
                                          +'<em class="genre">'+d.movieChart[1].genre+'</em>'
                                          +'<span>'
                                              +'<i>2017.10.19</i>'
                                              +'<strong>개봉</strong>'
                                              +'<em class="dday">D-23</em>'
                                          +'</span>'
                                      +'</span>'
                                      +'</div>'
                                  +'</li>'
                                  +'<li>'
                                      +'<div class="box-image">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147923">'
                                              +'<span class="thumb-image" name ="'+d.movieChart[2].movie_seq+'">'
                                                  +'<img src="http://img.youtube.com/vi/'+d.movieChart[2].trailer+'/1.jpg" alt="[범죄도시]예고편-범죄도시" style="width:126px;height:71px;">'
                                                  +'<span class="ico-play">영상보기</span>'
                                              +'</span>'
                                          +'</a>'
                                      +'</div>'
                                      +'<div class="box-contents">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147923">'
                                              +'<strong class="title">'+d.movieChart[2].name+'</strong>'
                                          +'</a>'
                                          +'<span class="txt-info">'
                                          +'<em class="genre">'+d.movieChart[2].genre+'</em>'
                                          +'<span>'
                                              +'<i>2017.10.03</i>'
                                              +'<strong>개봉</strong>'
                                              +'<em class="dday">D-7</em>'
                                          +'</span>'
                                      +'</span>'
                                      +'</div>'
                                  +'</li>'
                                  +'<li>'
                                      +'<div class="box-image">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147907">'
                                              +'<span class="thumb-image" name ="'+d.movieChart[3].movie_seq+'">'
                                                  +'<img src="http://img.youtube.com/vi/'+d.movieChart[3].trailer+'/1.jpg" alt="[남한산성]설민석의 스페셜 역사 영상" style="width:126px;height:71px;">'
                                                  +'<span class="ico-play">영상보기</span>'
                                              +'</span>'
                                          +'</a>'
                                      +'</div>'
                                      +'<div class="box-contents">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147907">'
                                              +'<strong class="title">'+d.movieChart[3].name+'</strong>'
                                          +'</a>'
                                          +'<span class="txt-info">'
                                          +'<em class="genre">'+d.movieChart[3].genre+'</em>'
                                          +'<span>'
                                              +'<i>2017.10.03</i>'
                                              +'<strong>개봉</strong>'
                                              +'<em class="dday">D-7</em>'
                                          +'</span>'
                                      +'</span>'
                                      +'</div>'
                                  +'</li>'
                                  +'<li>'
                                      +'<div class="box-image">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147815">'
                                              +'<span class="thumb-image"  name ="'+d.movieChart[4].movie_seq+'">'
                                                  +'<img src="http://img.youtube.com/vi/'+d.movieChart[4].trailer+'/1.jpg" alt="[어 퍼펙트 데이]메인 예고편-어 퍼펙트 데이" style="width:126px;height:71px;">'
                                                  +'<span class="ico-play">영상보기</span>'
                                              +'</span>'
                                          +'</a>'
                                      +'</div>'
                                      +'<div class="box-contents">'
                                          +'<a href="#" title="새창" class="movie_player_popup" data-gallery-idx="147815">'
                                              +'<strong class="title">'+d.movieChart[4].name+'</strong>'
                                          +'</a>'
                                          +'<span class="txt-info">'
                                          +'<em class="genre">'+d.movieChart[4].genre+'</em>'
                                          +'<span>'
                                              +'<i>2017.09.21</i>'
                                              +'<strong>개봉</strong>'
                                          +'</span>'
                                      +'</span>'
                                      +'</div>'
                                  +'</li>'
                              +'</ul>'
                          +'</div><!-- .sect-popular-trailer -->'
                      +'</div><!-- .col-rank-trailer -->'
                      
                );
                
                /*$(".movie_steelcut").on("click", function() {
                    alert($(this).attr("name"));
                    sessionStorage.setItem('movie_seq',$(this).attr("name"));
                    location.href=sessionStorage.getItem('ctx')+'/movieDetail';
                    event.stopPropagation();
                 });*/
                $('.thumb-image').on("click", function() {
                    var i = $(this).attr("name");
                    alert('clikck thumb-image !');
                       $('html').append(
                           '<div class="mask" style="position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 100; background-color: rgba(0, 0, 0, 0.8);"></div>'
                           +'<div class="layer-wrap" style="margin-top: -355px; margin-left: -510px; position: fixed;" tabindex="0"><div class="popwrap">'
                               +'<div class="sect-layerplayer">'
                                   +'<div class="cols-pop-player">'
                                       +'<h1 class="title" id="movie_player_popup_title"><span class="ico-trailer hd">HD</span>['+d.movieChart[i].name+'] 예고편</h1>'
                                       +'<div class="col-pop-player">'
                                           +'<div class="warp-pop-player" style="position: relative;">'
                                               +'<iframe id="ifrm_movie_player_popup" name="ifrm_movie_player_popup" src="http://www.youtube.com/embed/'+d.movieChart[i].trailer+'" style="width:750px;height:450px;" ameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>'
                                           +'</div><!-- .warp-pop-player -->'
                                           +'<div class="descri-trailer">'
                                               +'<strong class="title">영상설명</strong>'
                                               +'<textarea readonly="readonly" id="movie_player_popup_caption" style="width:750px">'+d.movieChart[i].introduce+'</textarea>'
                                           +'</div>'
                           +'</div><!-- .col-player -->'
                                       +'<div class="col-pop-playerinfo">'
                                           
                                           +'<div id="movie_player_popup_movie_info">'
                                               +'<div class="box-image">'
                                                   +'<a href="/movies/detail-view/?midx=80090" title="신과함께 상세보기 새창">'
                                                   +'<span class="thumb-image"><img src="'+d.movieChart[i].poster+'" alt="신과함께 포스터"><span class="ico-grade grade-none">미정</span></span></a>'
                                               +'</div>'
                                           +'<div class="box-contents">'
                                               +'<a href="/movies/detail-view/?midx=80090" title="신과함께 상세보기 새창"><strong class="title">'+d.movieChart[i].name+'</strong></a>'
                                           +'<span class="txt-info" style="margin-bottom:2px;"><em class="genre">'+d.movieChart[i].name+'</em><span><i>2017.12.20</i><strong>개봉</strong><em class="dday">D-64</em>'
                                           +'</span></span></div></div>'

                                           +'<div class="sect-trailer">'
                                               +'<strong class="title">신규영상</strong>'
                                               +'<ul>'
                                               +'</ul>'
                                           +'</div>'
                                       +'</div><!-- .col-playerinfo -->'
                                   +'</div><!-- .cols-player -->'
                                   +'<button type="button" class="btn-close">닫기</button>'
                           +'    </div>'
                           +'</div></div>'
                     );
                     $('.btn-close').click(()=>{
                         alert('btn-close');
                         $('.mask').remove();
                         $('.layer-wrap').remove();
                       });
                    
                       });
                    //More Content View
                   $('.btn-more-fontbold').click(()=>{
                      $('#movie_chart').append('<ol id="movie_more_container" class="list-more"></ol>');
                      for(var i=8;i<d.movieChart.length;i++){
                         $('.list-more').append(
                               '<li style="float: left; width: 260px; margin: 0 0 -3px 0; padding: 30px 0 30px 64px; border-top: 3px solid #241d1e; border-bottom: 3px solid #241d1e;";"><div class="box-image"><span class="thumb-image"><img class="movie_steelcut" src="'+d.movieChart[i].poster+'" name="'+d.movieChart[i].movie_seq+'"><span class="ico-grade grade-'+d.movieChart[i].age_limit+'">15세 이상</span></span><span class="screentype"></span></div><div class="box-contents" style=" width: 193px";><strong class="title">'+d.movieChart[i].name+'</strong><div class="score"><strong class="percent">예매율<span>'+d.movieChart[i].reserve_rate+'%</span></strong><!--[2015-12-14] 평점 개편 에그 포인트 및 에그 이미지 노출 추가. start : add_mwpark--><div class="egg-gage small"><span class="egg good"></span><span class="percent">'+d.movieChart[i].score+'%</span></div><!--[2015-12-14] 평점 개편 에그 포인트 및 에그 이미지 노출 추가. end : add_mwpark--></div><span class="txt-info"><strong>'+calDate(d.movieChart[i].release_date)+'<span>개봉</span></strong></span><span class="like"><button class="btn-like" value="80061">영화 찜하기</button><span class="count"><strong><i>'+d.movieChart[i].like_count+'</i><span>명이 선택</span></strong><i class="corner-RT"></i><i class="corner-LT"></i><i class="corner-LB"></i><i class="corner-RB"></i><i class="corner-arrow"></i></span><a class="link-reservation" name="'+d.movieChart[i].movie_seq+'">예매</a></span></div></li>'
                         );
                      }
                      $('.btn-more-fontbold').remove();
                      $(".movie_steelcut, .li_searchList").on("click", function() {
                          alert($(this).attr("name"));
                          sessionStorage.setItem('movie_seq',$(this).attr("name"));
                          location.href=sessionStorage.getItem('ctx')+'/movieDetail';
                          event.stopPropagation();
                       });
                      $('.link-reservation').on("click", function() {
                           alert('go Movie Reservation !');
                           alert($(this).attr("name"));
                           sessionStorage.setItem('movie_seq',$(this).attr("name"));
                           location.href=sessionStorage.getItem('ctx')+"/reservation";
                        });
                   });
                   $(".movie_steelcut, .li_searchList").on("click", function() {
                       alert($(this).attr("name"));
                       sessionStorage.setItem('movie_seq',$(this).attr("name"));
                       location.href=sessionStorage.getItem('ctx')+'/movieDetail';
                       event.stopPropagation();
                    });
                   
                   $('.link-reservation').on("click", function() {
                        alert('go Movie Reservation !');
                        alert($(this).attr("name"));
                        sessionStorage.setItem('movie_seq',$(this).attr("name"));
                        location.href=sessionStorage.getItem('ctx')+"/reservation";
                     });
            },
            error : (x,s,m)=>{
               alert('에러가발생');
            }
         });
      }
   
   var goReservation=(x)=>{
	   sessionStorage.setItem('movie_seq',x);
	   location.href=sessionStorage.getItem('ctx')+"/reservation";
   };
   
   var goDetail=(x)=>{
	   sessionStorage.setItem('movie_seq',x);
	   location.href=sessionStorage.getItem('ctx')+"/movieDetail";
   };
   
   var likeMovie=(x)=>{
	   
	   var likeNum=$('#likeBtn_'+x+'').val()*1+1;
	      $('#likeText'+x+'').text(likeNum);
	      $('#likeBtn_'+x+'').removeAttr("onclick");
	      $('#likeBtn_'+x+'').attr("class","btn-del");
	      
	      $.ajax({
	             url : sessionStorage.getItem('ctx')+'/put/movieLike',
	             method : 'POST',
	             data : JSON.stringify({
	               'like_count' : likeNum,
	               'movie_seq' : x
	            }),
	             contentType : 'application/json',
	             success : d=>{
	                if(d.msg=='success'){
	                	alert('좋아요 성공!');
	                }
	             },
	             error : (x,s,m)=>{
	                alert('에러가발생');
	             }
	          });  
   };
   
   return {
      init : init,
      logic : logic,
      goReservation : goReservation,
      goDetail : goDetail,
      likeMovie : likeMovie
   };
})();

jehong.session=
{
   init : function(ctx){
      sessionStorage.setItem('ctx',ctx);
      sessionStorage.setItem('js',ctx+"/resources/js");
      sessionStorage.setItem('css',ctx+"/resources/css");
      sessionStorage.setItem('img',ctx+"/resources/img");
   },
   getPath : function(x){
      return sessionStorage.getItem(x);
   }
}