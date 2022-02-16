var img = {
  blue: '<img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-5mpSEguXLPr7Vn35c18lwmO7Eu9TwjVbs8xVqZm_3J4TGcVU3YFCE-Ae5weq81JXovJXLyiRjvyFw4nfD30vgN-NX6nY/360fx360f"/>',
  blue2: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLMbfEk3tD4ctlteXI8oTht1i1uRQ5fTz3JY-Qcg82MwrTq1C-xLvpgJK56J7LmnY3vSIq7XeLmRK000xLaORxxavJqBhIHi8/360fx360f"/>',
  purple: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7ODHTjNL69Siq4yCkP_gDLfQhGxUppMlj7qQoNmg2wHj8xVvMGGhcIadIQ84Z1rSrAK8ku3r0ZPtu5XAmyN9-n515U3JtjU/360fx360f"/>',
  purple2: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PLfYQJS7cumlZe0m_7zO6_ummpD78A_2u_HpN2giwfl-ENrMDrwJYSXdwU4MlzUq1jvlLjo0JC4vprOnSFisz5iuygXqnotbQ/360fx360f"/>',
  pink: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5ntbN9J7yjRrj80Y9Y2GicdXBew84NQuGrAK4l-3nhpG_6smaznFlsyd343_czhPmn1gSOaDw15cN/360fx360f"/>',
  pink2: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX5MrLVk2Vu5Mx2gv3--Y3nj1H6r0plMm-lcNSRIQc6Z1GE-1e6wObt1JG46cmbmHo37yAn4HjfmUTmhAYMMLKVxXRrDQ/360fx360f"/>',
  red: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yglB89IT6mOoWUegM-aFvX_Fe_yO3q1Ja6vsnMn3Q163YntH6Lnxfh1UpFbrdng_SACQLJQIlmyYc/360fx360f"/>',
  red2: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09Kzm7-FmP7mDLfYkWNF18lwmO7Eu46l21aw_UpsYTrycIGUdldoYQqE_la3xLq80J7pupjKnSZiuHRxtnbD30vgpp1SOH0/360fx360f"/>',
  yellow: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmcjgOrzUhFRe-sR_jez--YXygECLpxIuNDztII_Bd1doM16E_Qe_xr29hcS_tJmbnHNnuyZz7HrenB2zgBlLarQ8gOveFwvcAFHlzA/360fx360f"/>',
  yellow2: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6vdk3lu-M1wmeySyoD8j1yglB89IT6mOo_GIQ82NFjS_1nol-ftg57pupqbmCAy7iUisXbYlxK-iU1IOuJuhaGACQLJIyTq34k/360fx360f"/>',
  yellow3: '<img src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlY20jfL2IbrummJW4NFOhujT8om73wO2r0tuYD37ctKVJwQ_MgrQ-FLrxuy705butZ2YmCZhvSci7XrZywv330_lrW6K0g/360fx360f"/>'
}

function reset(){
  $('.card').remove();
  for (var i = 0; i < 210; i++){
    var element = '<div class="card" style="background-color: lightblue;" data-name="P250 | Valence" id=itemNumber'+i+'>'+img.blue+'</div>';
    var rand = random(1,10000)/100;
    if (rand < 50){
      element = '<div class="card" style="background-color: lightblue;" data-name="USP-S | Blueprint" id=itemNumber'+i+'>'+img.blue2+'</div>';
    }
    if (rand < 20){
      element = '<div class="card" style="background-color: purple;" data-name="Desert Eagle | Night" id=itemNumber'+i+'>'+img.purple+'</div>';
    }
    if (rand < 20){
      element = '<div class="card" style="background-color: purple;" data-name="AWP | PAW" id=itemNumber'+i+'>'+img.purple2+'</div>';
    }
    if (rand < 5){
      element = '<div class="card" style="background-color: hotpink;" data-name="AK-47 | Frontside Misty" id=itemNumber'+i+'>'+img.pink+'</div>';
    }
    if (rand < 5){
      element = '<div class="card" style="background-color: hotpink;" data-name="Glock-18 | Bullet Queen" id=itemNumber'+i+'>'+img.pink2+'</div>';
    }
    if (rand < 2){
      element = '<div class="card" style="background-color: red;" data-name="M4A1-S | Hyper Beast" id=itemNumber'+i+'>'+img.red+'</div>';
    }
    if (rand < 2){
      element = '<div class="card" style="background-color: red2;" data-name="M4A4 | Neo-Noir" id=itemNumber'+i+'>'+img.red2+'</div>';
    }
    if (rand < 0.5){
      element = '<div class="card" style="background-color: yellow;" data-name="M9 Bayonet | Tiger Tooth" id=itemNumber'+i+'>'+img.yellow+'</div>';
    }
    if (rand < 0.5){
      element = '<div class="card" style="background-color: yellow;" data-name="Butterfly Knife | Doppler" id=itemNumber'+i+'>'+img.yellow2+'</div>';
    }
    if (rand < 0.5){
      element = '<div class="card" style="background-color: yellow;" data-name="Skeleton Knife | Slaughter" id=itemNumber'+i+'>'+img.yellow3+'</div>';
    }

    $('#cardList').append(element);
  }
  $('.card').first().css('margin-left',-1000);
}

function openCase(){
  reset();
  var rand = random(1000,20000);
  var childNumber = Math.floor(rand/100)+4;
  var timings = ["easeInOutBack","easeOutExpo","easeInOutBounce","easeOutQuad","swing","easeOutElastic","easeInOutElastic"];
  var timing = timings[random(0,timings.length)];
  var reward = $('#itemNumber'+childNumber).attr('data-name');
  
  $('.card').first().animate({
    marginLeft: -rand
  }, 5000, timing, function(){
    
    var src = $('#itemNumber'+childNumber+' img').attr('src');
    
    $('#dialog-msg').html("You drop "+reward+""+"<br><img src="+src+">");
    
    $('#dialog').dialog({
      modal: true,
      title: "New drop!",
      resizeable: false,
      draggable: false,
      width: 400,
      buttons: {
        "%diamonds% diamonds ! !":function(){
          $(this).dialog("close");
        }
      }
    });
  });
  
}

function random(min, max){
  return Math.floor((Math.random()*(max - min))+min);
}