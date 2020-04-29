function nightDayHandler(self){
  if(self.value === 'night'){
    $('body').css('backgroundColor','black')
    $('body').css('color','white')
    $('a').css('color','powderblue')
    self.value = 'day'
  }else{
    $('body').css('backgroundColor','white')
    $('body').css('color','black')
    $('a').css('color','blue')
    self.value = 'night'
  }
}
