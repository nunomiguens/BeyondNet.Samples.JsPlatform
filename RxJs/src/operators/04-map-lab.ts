import { fromEvent } from "rxjs";
import { map, pluck, tap } from "rxjs/operators";
const html = document.createElement("div");
html.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet erat a felis malesuada dapibus nec sed augue. Fusce lorem mauris, sodales in sapien congue, ullamcorper maximus erat. Sed mollis dictum nisl at hendrerit. Morbi blandit in lectus in eleifend. Cras lobortis facilisis orci, vitae aliquam nisi fermentum et. Sed mattis ornare est quis tempor. Vivamus laoreet neque eget est egestas egestas non in turpis. Pellentesque vitae turpis id leo feugiat semper ac quis velit.
<br/><br/>
Sed vel justo a ante efficitur vulputate id eget est. Vivamus nunc velit, volutpat sit amet magna at, blandit hendrerit eros. Nunc tincidunt dignissim vehicula. Donec lacinia lobortis purus non condimentum. Aenean et porttitor justo. Fusce nec fermentum lorem. Fusce lacus nibh, dapibus eget nisl eu, dictum tincidunt velit. Morbi rutrum cursus metus, a egestas nulla pharetra aliquam. Ut id viverra eros. Vivamus pretium libero ut lectus efficitur euismod. Nunc vitae metus dui. Nam ex neque, imperdiet a condimentum at, convallis quis magna.
<br/><br/>
Praesent quis consectetur eros. Pellentesque vestibulum ac quam in tincidunt. Curabitur sodales mauris vitae risus scelerisque molestie. Nullam non ultricies lorem. Maecenas sed nulla quis turpis semper tincidunt sed in leo. In in nisl quis orci vulputate vestibulum. Etiam gravida pretium ante, eget mollis neque blandit ut. Aenean molestie semper orci, eget tristique urna sollicitudin imperdiet. Praesent semper placerat mauris, quis consectetur lorem placerat et. Integer auctor aliquam vehicula. Aliquam erat volutpat. Vestibulum condimentum et enim ut hendrerit. Nulla pellentesque, dui facilisis vehicula hendrerit, justo ipsum vestibulum est, ut auctor quam mi eget eros.
<br/><br/>
Phasellus sodales risus lorem. Vestibulum in convallis ligula, a faucibus sapien. Ut sollicitudin neque non suscipit tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dignissim velit. Nam eget consectetur sapien. Suspendisse rhoncus libero tincidunt nibh iaculis, mollis dignissim risus mollis. Suspendisse vehicula nisl vitae facilisis scelerisque. Praesent metus justo, cursus at libero eu, ornare convallis massa.
<br/><br/>
Mauris suscipit consectetur sollicitudin. Phasellus ultricies enim nec libero tincidunt vulputate. Quisque porttitor pretium metus, ut interdum nunc. Integer varius, nibh et pellentesque placerat, dui quam bibendum lectus, eu malesuada odio nisl ut ex. Integer posuere sit amet magna sed eleifend. Aenean vestibulum enim magna, vitae interdum enim rutrum ut. Maecenas ornare, neque id commodo dictum, lorem eros lacinia lectus, eu sollicitudin orci neque non lacus. Integer at tincidunt turpis. Sed euismod lacus nibh, vitae fringilla est aliquet eu. Ut turpis dui, consequat ut lacus in, sodales molestie dui. Cras in faucibus felis. Integer at sagittis turpis.
`;

const body = document.querySelector("body");
body.append(html);

const pbHtml = document.createElement("div");
pbHtml.setAttribute("class", "progress-bar");
body.append(pbHtml);

const calcScroll = (event) => {
  const {
    scrollHeight,
    scrollTop,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent(document, "scroll");

const pb$ = scroll$.pipe(map(calcScroll), tap(console.log));

pb$.subscribe((percent) => {
  pbHtml.style.width = `${percent}%`;
});
