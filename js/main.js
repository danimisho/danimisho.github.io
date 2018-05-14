console.log('it works');

SVG.on(document, 'DOMContentLoaded', function() {
  if (SVG.supported) {
  var draw = SVG('drawing').size(1000,1000)

  var patternOne = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1084').size(1000, 1000)
  })

  var patternTwo = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1083').size(1000, 1000)
  })

  var patternThree = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1082').size(1000, 1000)
  })

  var patternFour = draw.pattern(1000, 1000, function(add) {
  add.image('https://picsum.photos/1000/1000?image=1081').size(1000, 1000)
  })


  var xOne = (Math.round((Math.random() * 800))) + 100
  var yOne = (Math.round((Math.random() * 800))) + 100
  var xTwo = (Math.round((Math.random() * 800))) + 100
  var yTwo = (Math.round((Math.random() * 800))) + 100
  var xThree = (Math.round((Math.random() * 800))) + 100
  var yThree = (Math.round((Math.random() * 800))) + 100
  var xFour = (Math.round((Math.random() * 800))) + 100
  var yFour = (Math.round((Math.random() * 800))) + 100

  var circleOne = draw.circle(0).fill('url(#SvgjsPattern1008)').stroke('black').attr({'stroke-width' : 5}).move(xOne, yOne).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(xOne, yOne).loop()
  var circleTwo = draw.circle(0).fill('url(#SvgjsPattern1010)').stroke('black').attr({'stroke-width' : 5}).move(xTwo, yTwo).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(xTwo, yTwo).loop()
  var circleThree = draw.circle(0).fill('url(#SvgjsPattern1012)').stroke('black').attr({'stroke-width' : 5}).move(xThree, yThree).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(xThree, yThree).loop()
  var circleFour = draw.circle(0).fill('url(#SvgjsPattern1014)').stroke('black').attr({'stroke-width' : 5}).move(xFour, yFour).animate(300, '>', 0).radius(100).animate(300, '>', 0).radius(95).loop(1).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(Math.round((Math.random() * 800)), Math.round((Math.random() * 800))).animate(10000, '<>', 0).move(xFour, yFour).loop()



} else {
  alert('SVG not supported')
}
})
