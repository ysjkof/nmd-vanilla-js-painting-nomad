# study-vanilla-js-painting-nomad

```
function onMouseMove(event){
  console.log(event);
}

canvas.addEventListener('mousemove', onMouseMove);
```

event 로그에 offsetX, Y는 canvas안에서 위치. clientX, Y는 윈도우 전체에서 위치.
