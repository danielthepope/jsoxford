!function(){"use strict";function a(c){$.ajax({url:c,type:"GET",cache:!1,dataType:"jsonp",crossDomain:!0,success:function(c){Array.prototype.push.apply(k,c.results),c.meta.next?a(c.meta.next):b()}})}function b(){var a,b,c=[],d=0,e=[];if(j){for(b=0;15>b;b++){for(a=Math.floor(Math.random()*k.length)+1;e.indexOf(a)>=0||!k[a].photo;)a=Math.floor(Math.random()*k.length)+1;e.push(a),c.push($("<a/>").addClass("memberThumbnail icon-thumb_"+k[a].photo.photo_id).attr("href",k[a].link).attr("title",k[a].name))}d=k.length-15}else for(b=0;b<k.length;b++)k[b].photo?c.push($("<a/>").addClass("memberThumbnail icon-thumb_"+k[b].photo.photo_id).attr("href",k[b].link).attr("title",k[b].name)):d++;d&&c.push($("<a/>").attr("href","https://www.meetup.com/JSOxford/members").text("...plus others.")),$("#MeetupMembers").append(c),$("#Members").removeClass("hidden").find("h3").prepend(k.length+" ")}function c(a){var b="";return b+=a.getFullYear()+"-",a.getMonth()+1<10&&(b+="0"),b+=a.getMonth()+1,b+="-",b+=a.getDate()}function d(a){var b,d,f,h=[],i=new Date(new Date-864e5);for(b=0,d=a.length;d>b;b++){if(a[b].created>i){var j=e(a[b],!0);h.push(j)}a[b].updated>i&&(f=new Date(a[b].time),$("[data-date^="+c(f)+"]").has(".meetupIcon").each(function(){$(this).find(".title").text(a[b].name),$(this).find(".postContent").html(a[b].description),$(this).find(".attendees").text(a[b].yes_rsvp_count)}))}h=g(h),$("#UpcomingEvents").append(h)}function e(a,b){var c=new Date(a.time),d=$("<div/>"),e=$("<h2/>"),g=$("<a/>"),h=$("<img/>").attr("src","/img/meetup.png").attr("alt","Meetup"),i=$("<div/>");return d.addClass("post"),d.data("date",c.getFullYear()+"-"+(c.getMonth()<9?"0":"")+(c.getMonth()+1)+"-"+c.getDate()),e.addClass("post-title row"),i.addClass("col-xs-9"),i.append(h),g.attr("href",a.event_url),g.text(a.name),i.append(g),e.append(i),e.append(f(a,b)),d.append(e),d.append(a.description),d}function f(a,b){var c=new Date(a.time),d=c.getHours()>=12?"PM":"AM",e=$("<div/>").addClass("eventInfo col-xs-3"),f=c.toDateString().split(" "),g=f[1],h=f[0],i=$("<span/>").addClass("eventDate").text(h+" "+g+" "+c.getDate()+" "),j=$("<span/>").addClass("eventTime").text((c.getHours()>=12?c.getHours()-12:c.getHours())+":"+(c.getMinutes()<10?"0":"")+c.getMinutes()+" "+d),k=b?"going":"went",l=$("<a/>").attr("href",a.event_url).text(a.yes_rsvp_count+" "+k);if(e.append(i).append(j).append(l),b){var m=$("<a/>").attr("href",a.event_url).text(a.rsvp_limit-a.yes_rsvp_count+" spots left");e.append(m)}return e}function g(a){var b=a.sort(function(a,b){if(a.data("date")&&b.data("date")){var c=new Date(a.data("date").toString().split(" ")[0]),d=new Date(b.data("date").toString().split(" ")[0]);return c===d?0:d>c?1:-1}});return b}var h="https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_id=17778422&photo-host=secure&page=100&fields=&order=time&status=past%2Cupcoming&desc=false&sig_id=153356042&sig=66887b77c34d304571d20465b10229ce582b7e02",i="https://api.meetup.com/2/members?offset=0&format=json&group_id=17778422&only=photo%2Cname%2Clink&photo-host=secure&page=200&order=name&sig_id=153356042&sig=4d8e3265b4374b84aabb8efcc26eb8107a3ec81b",j=(window.maxEventsToShow||10,window.matchMedia&&window.matchMedia("(max-width: 600px)").matches),k=[];a(i),$.ajax({url:h+"&offset=0",type:"GET",cache:!1,dataType:"jsonp",crossDomain:!0,success:function(a){d(a.results)}})}();
//# sourceMappingURL=script.js.map