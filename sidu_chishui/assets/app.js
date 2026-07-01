const phases = [
  {
    title: '遵义会议后：纠偏与寻找出路', date: '1935.1 中旬', short: '从被动转入主动',
    intent: '在湘江战役后中央红军损失严重的背景下，重新确立因敌变化、灵活机动的军事指挥原则。',
    decision: '不再按原先僵化路线硬闯，而是在川黔滇交界寻找敌军缝隙和新的战略空间。',
    risk: '兵力疲惫、补给困难，国民党军多路压迫，北上或东进都可能遭遇封锁。',
    result: '战略决策从“执行既定路线”转向“依据敌情与地形不断调整”。',
    route: ['遵义','桐梓','土城'], enemy: ['重庆','泸州','遵义','贵阳']
  },
  {
    title: '土城青杠坡后：一渡赤水', date: '1935.1 下旬', short: '战术受挫后的即时改向',
    intent: '土城、青杠坡战斗未达预期后，快速判断继续北渡长江条件不足。',
    decision: '放弃原定硬北上方案，转向西渡赤水，进入川南、扎西方向，先脱离不利接触。',
    risk: '若继续恋战或迟疑，红军可能被川军和追兵夹击在赤水河东岸。',
    result: '一渡赤水使红军摆脱被动战场，并为后续回旋创造第一层空间。',
    route: ['土城','太平渡','扎西'], enemy: ['泸州','土城','遵义']
  },
  {
    title: '扎西整编：由脱险转入再机动', date: '1935.2 上旬', short: '整编、补给、判断敌缝',
    intent: '在扎西地区短暂调整，压缩队伍、恢复组织和作战能力。',
    decision: '观察敌军重心被牵向川南后，准备回师黔北，打击相对薄弱目标。',
    risk: '扎西不是安全根据地，停留过久会被多路围堵重新压缩。',
    result: '红军开始从“避敌脱险”转入“诱敌离位、回打薄弱处”。',
    route: ['扎西','太平渡','二郎滩'], enemy: ['重庆','泸州','赤水']
  },
  {
    title: '二渡赤水：桐梓、娄山关、遵义大捷', date: '1935.2 中下旬', short: '回师黔北、阶段反击',
    intent: '利用敌军判断红军仍在川南一带的时间差，突然东返黔北。',
    decision: '二渡赤水后进取桐梓、娄山关、遵义，集中优势兵力歼击相对孤立之敌。',
    risk: '反击虽能振奋士气，但若沉迷攻城夺地，可能被大兵团重新合围。',
    result: '取得长征以来重要胜利，扭转士气，同时继续保持机动而非固守遵义。',
    route: ['二郎滩','桐梓','娄山关','遵义'], enemy: ['贵阳','遵义','桐梓']
  },
  {
    title: '苟坝会议：否决打鼓新场方案', date: '1935.3 上旬', short: '避免局部胜利诱惑',
    intent: '面对是否攻打打鼓新场的意见分歧，重新审视侧背风险和敌军机动。',
    decision: '最终放弃可能导致侧背受敌的攻打方案，强化快速集中指挥机制。',
    risk: '如果盲目攻坚，可能把主动机动变成被动消耗。',
    result: '组织层面形成更利于快速决策的指挥机制，为后续三渡、四渡连续变向奠基。',
    route: ['遵义','苟坝','鲁班场'], enemy: ['遵义','贵阳','仁怀']
  },
  {
    title: '鲁班场后：三渡赤水、制造北上假象', date: '1935.3 中旬', short: '以渡河制造误判',
    intent: '鲁班场作战后，继续利用赤水河渡口调动敌军。',
    decision: '由茅台附近三渡赤水，向川南方向摆出北上姿态，吸引蒋介石和川军重心北移。',
    risk: '若敌军识破意图并提前封锁渡口，红军将被压缩在赤水河谷附近。',
    result: '敌军判断再度被拉向“红军北渡长江”，红军赢得再转向窗口。',
    route: ['鲁班场','茅台','土城'], enemy: ['泸州','土城','赤水']
  },
  {
    title: '四渡赤水：回到黔北并南渡乌江', date: '1935.3 下旬', short: '突然折返、脱离围堵',
    intent: '趁敌军北移，迅速四渡赤水折回黔北，再向南突破乌江。',
    decision: '不与敌主力争长短，而以快节奏连续转向，抢在敌军完成新合围前南下。',
    risk: '连续机动对体力、纪律、渡河保障和情报判断要求极高。',
    result: '红军跳出敌人在川南黔北预设的围堵框架，把战役带入贵阳、云南方向。',
    route: ['土城','太平渡','遵义','乌江渡'], enemy: ['泸州','遵义','贵阳']
  },
  {
    title: '佯攻贵阳：调出滇军', date: '1935.4 上旬', short: '打击对手指挥预期',
    intent: '以逼近贵阳的态势刺激蒋介石调动滇军入黔，从而打开云南方向空隙。',
    decision: '不真正夺取贵阳，而是利用政治中心压力诱发敌军跨区调兵。',
    risk: '佯动过浅不足以调敌，过深则可能陷入贵阳周边重兵区。',
    result: '敌军重心被迫再调，红军获得入滇通道。',
    route: ['乌江渡','贵阳','龙里','曲靖'], enemy: ['贵阳','昆明','曲靖']
  },
  {
    title: '入滇渡金沙江：战略脱险', date: '1935.4 下旬—5月上旬', short: '跳出合围圈',
    intent: '穿过云南后，抢渡金沙江，摆脱几十万敌军围追堵截。',
    decision: '以迅速机动避开昆明、曲靖等强点，转向金沙江渡口完成战略转移。',
    risk: '如果渡江窗口关闭，红军可能在云南腹地再陷围堵。',
    result: '成功渡过金沙江，四渡赤水战役的战略效果最终显现。',
    route: ['曲靖','昆明侧翼','金沙江渡口'], enemy: ['贵阳','曲靖','昆明']
  }
];

const nodes = {
  '重庆': {x:760,y:70,type:'enemy'}, '泸州': {x:520,y:105,type:'enemy'}, '赤水': {x:365,y:125,type:'enemy'},
  '土城': {x:425,y:210,type:'key'}, '青杠坡': {x:478,y:220,type:'key'}, '太平渡': {x:438,y:178,type:'key'}, '二郎滩': {x:458,y:188,type:'key'},
  '扎西': {x:235,y:286,type:'key'}, '桐梓': {x:590,y:250,type:'key'}, '娄山关': {x:595,y:304,type:'key'}, '遵义': {x:615,y:360,type:'key'},
  '苟坝': {x:552,y:415,type:'key'}, '鲁班场': {x:475,y:385,type:'key'}, '茅台': {x:432,y:345,type:'key'},
  '仁怀': {x:505,y:360,type:'place'}, '乌江渡': {x:610,y:505,type:'key'}, '贵阳': {x:705,y:585,type:'enemy'}, '龙里': {x:776,y:615,type:'place'},
  '曲靖': {x:510,y:660,type:'place'}, '昆明': {x:330,y:660,type:'enemy'}, '昆明侧翼': {x:300,y:655,type:'key'}, '金沙江渡口': {x:215,y:600,type:'key'}
};

const decisions = [
  ['遵义会议后的战略纠偏','从执行既定路线转向因敌、因地、因势机动。','建立纠错机制，重新把战役目标锁定为保存主力、摆脱围堵、争取新空间。'],
  ['土城受挫后的即时改向','青杠坡、土城战斗未达预期后，不再硬拼川军。','迅速一渡赤水，避免把局部战斗拖成被动消耗。'],
  ['扎西整编与回师黔北','在川南滇黔边短暂调整后，判断敌军重心北移。','不是停下来求稳，而是整编后重新寻找敌缝。'],
  ['二渡赤水后的阶段反击','回师黔北，夺取桐梓、娄山关、遵义。','用局部胜利恢复士气，但不被胜利绑定在固定地域。'],
  ['苟坝会议否决打鼓新场','把多数意见放回侧背风险、敌军机动和后勤边界中检验。','避免“看似机会”的攻坚战演变成系统性风险。'],
  ['鲁班场后三渡赤水','通过向川南方向的动作制造北渡长江假象。','让敌人按错误预期调兵，红军获得再折返窗口。'],
  ['四渡赤水与南渡乌江','趁敌北移后突然折返，突破乌江转向贵阳方向。','把战役中心从赤水河谷转向更大范围战略机动。'],
  ['佯攻贵阳、入滇渡金沙江','用政治压力调出滇军，避开强点，抢渡金沙江。','最终跳出围堵圈，完成战略脱险。']
];

const mapSources = {
  wall: {src:'assets/maps/four-map-wall.jpg', title:'四图对读总览', caption:'四图对读总览：把地形广域、地形核心、战役示意和原创推演图放在同一张看板中，适合投屏开场或手机快速浏览。'},
  terrainWide: {src:'assets/maps/terrain-wide.jpg', title:'地形广域图', caption:'地形广域图：用于观察四川、贵州、云南、重庆交界的大范围地形起伏、交通通道和战略空间。'},
  terrainCore: {src:'assets/maps/terrain-core.jpg', title:'地形核心图', caption:'地形核心图：用于观察赤水、习水、仁怀、遵义之间的山地道路、河谷和渡口周边地形。'},
  campaignOfficial: {src:'assets/maps/campaign-official.jpg', title:'战役示意图', caption:'战役示意图：用于核对四渡赤水、南渡乌江、入滇、渡金沙江的总体路线和敌我行动方向。图面带有原制图标识，请保留。'},
  originalTerrain: {src:'assets/maps/original-terrain.svg', title:'原创底图', caption:'原创底图：江南AI工作小组制作的教学推演图，强调战役节点、河流方向和决策逻辑，不作为测绘地图。'}
};

let currentPhase = 0;
let currentMap = 'sandbox';
let imageZoom = 1;
let playTimer = null;
let svgView = 'wide';
let deferredPrompt = null;

const $ = (id) => document.getElementById(id);
const timelineEl = $('timeline');
const phaseCard = $('phaseCard');
const decisionGrid = $('decisionGrid');
const sandboxSvg = $('sandboxSvg');
const imageViewer = $('imageViewer');
const mapImage = $('mapImage');
const mapCaption = $('mapCaption');

function esc(s){return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function pts(names){return names.map(n => nodes[n]).filter(Boolean).map(p => `${p.x},${p.y}`).join(' ');}
function pointList(names){return names.map(n => nodes[n]).filter(Boolean);}

function renderTimeline(){
  timelineEl.innerHTML = phases.map((p,i)=>`<button class="time-item ${i===currentPhase?'active':''}" data-phase="${i}"><b>${i+1}. ${esc(p.short)}</b><span>${esc(p.date)}</span><em>${esc(p.title)}</em></button>`).join('');
  timelineEl.querySelectorAll('[data-phase]').forEach(btn=>btn.addEventListener('click',()=>setPhase(Number(btn.dataset.phase))));
}

function renderPhase(){
  const p = phases[currentPhase];
  phaseCard.innerHTML = `
    <div class="phase-date">${esc(p.date)}</div>
    <h2>${currentPhase+1}. ${esc(p.title)}</h2>
    <p>${esc(p.intent)}</p>
    <div class="phase-detail">
      <div class="detail"><b>关键决策</b><span>${esc(p.decision)}</span></div>
      <div class="detail"><b>主要风险</b><span>${esc(p.risk)}</span></div>
      <div class="detail"><b>行动后果</b><span>${esc(p.result)}</span></div>
    </div>`;
}

function renderDecisions(){
  decisionGrid.innerHTML = decisions.map((d,i)=>`<article class="decision"><div class="no">D${String(i+1).padStart(2,'0')}</div><h3>${esc(d[0])}</h3><ul><li>${esc(d[1])}</li><li>${esc(d[2])}</li></ul></article>`).join('');
}

function polyline(names, cls, marker=true){
  const p = pts(names);
  if(!p) return '';
  return `<polyline class="${cls}" points="${p}" ${marker?'marker-end="url(#arrowRed)"':''}/>`;
}
function enemyLine(names){
  const p = pts(names);
  if(!p) return '';
  return `<polyline class="enemy-active" points="${p}" marker-end="url(#arrowBlue)"/>`;
}
function drawNodes(activeNames){
  const active = new Set(activeNames);
  return Object.entries(nodes).map(([name,n])=>{
    const fill = n.type==='enemy' ? '#3179d8' : n.type==='key' ? '#d94735' : '#f1c668';
    const activeCls = active.has(name) ? ' active' : '';
    const labelDy = name.length>3 ? -14 : -12;
    return `<g class="node${activeCls}" data-node="${esc(name)}" tabindex="0" role="button" aria-label="${esc(name)}"><circle class="halo" cx="${n.x}" cy="${n.y}" r="${active.has(name)?20:0}"/><circle cx="${n.x}" cy="${n.y}" r="9" fill="${fill}"/><text class="node-label" x="${n.x+12}" y="${n.y+labelDy}" fill="#2a2119">${esc(name)}</text></g>`;
  }).join('');
}

function renderSandboxSvg(){
  const p = phases[currentPhase];
  const activeNames = [...p.route, ...p.enemy];
  const oldRoutes = phases.map(ph => polyline(ph.route,'route-old',false)).join('');
  const enemy = enemyLine(p.enemy);
  const activeRoute = polyline(p.route,'route-active',true);
  const viewBox = svgView === 'core' ? '330 115 410 410' : '0 0 1000 720';
  sandboxSvg.setAttribute('viewBox', viewBox);
  sandboxSvg.innerHTML = `
    <defs>
      <linearGradient id="terrain" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#eef0ba"/><stop offset=".42" stop-color="#d7d69b"/><stop offset="1" stop-color="#b4c28f"/></linearGradient>
      <filter id="glow"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#7a241c" flood-opacity=".65"/></filter>
      <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#d94735"/></marker>
      <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3179d8"/></marker>
      <pattern id="ridge" width="80" height="42" patternUnits="userSpaceOnUse"><path d="M0 35 C22 8 48 8 80 35" fill="none" stroke="#6f7d5b" stroke-width="2" opacity=".18"/><path d="M-20 18 C8 0 36 0 62 18" fill="none" stroke="#6f7d5b" stroke-width="1.5" opacity=".14"/></pattern>
    </defs>
    <rect width="1000" height="720" fill="url(#terrain)"/>
    <rect width="1000" height="720" fill="url(#ridge)" opacity=".85"/>
    <path class="province" d="M135 70 C250 110 290 210 250 330 C215 438 300 560 405 650"/>
    <path class="province" d="M520 40 C505 175 570 290 665 355 C750 418 760 520 720 680"/>
    <path class="province" d="M150 560 C300 530 420 560 545 625 C650 680 775 665 940 690"/>
    <path class="road" d="M520 105 C500 180 520 250 590 305 C635 345 625 430 610 505 C600 560 650 590 705 585"/>
    <path class="road" d="M235 286 C355 245 420 215 520 105"/>
    <path class="road" d="M432 345 C505 355 560 375 615 360"/>
    <path class="road" d="M705 585 C620 615 530 650 330 660 C280 645 245 625 215 600"/>
    <path class="river" d="M50 88 C170 48 280 90 395 70 C540 42 690 55 860 86"/>
    <text class="river-label" x="95" y="72">长江</text>
    <path class="river" d="M405 92 C430 142 410 205 455 250 C496 300 421 345 450 420 C480 476 446 530 470 590"/>
    <text class="river-label" x="372" y="305" transform="rotate(78 372 305)">赤水河</text>
    <path class="river" d="M385 492 C470 455 575 475 675 510 C760 545 870 520 955 560"/>
    <text class="river-label" x="744" y="548">乌江</text>
    <path class="river" d="M55 610 C180 585 260 640 410 620 C520 600 630 655 780 630"/>
    <text class="river-label" x="110" y="635">金沙江</text>
    <text x="30" y="38" font-size="28" font-weight="900" fill="#6d3528">中央红军四渡赤水与南渡乌江 · 离线动态沙盘</text>
    <text x="32" y="67" font-size="15" fill="#6c5846">红色实线：当前阶段红军行动；红色虚线：全战役主要路线；蓝色虚线：国民党军围堵/判断方向。点位为教学级近似，不作测绘依据。</text>
    ${oldRoutes}
    ${enemy}
    ${activeRoute}
    ${drawNodes(activeNames)}
    <g transform="translate(760 112)"><rect x="0" y="0" width="205" height="88" rx="14" fill="rgba(255,248,220,.86)" stroke="#856a45"/><circle cx="18" cy="23" r="7" fill="#d94735"/><text x="34" y="28" font-size="14" fill="#3b2d1f">红军/渡口/决策点</text><circle cx="18" cy="50" r="7" fill="#3179d8"/><text x="34" y="55" font-size="14" fill="#3b2d1f">国民党军方向</text><circle cx="18" cy="74" r="7" fill="#f1c668"/><text x="34" y="79" font-size="14" fill="#3b2d1f">地名/通道节点</text></g>
  `;
  sandboxSvg.querySelectorAll('[data-node]').forEach(g=>{
    g.addEventListener('click',()=>{
      const name = g.getAttribute('data-node');
      const idx = phases.findIndex(ph => ph.route.includes(name));
      if(idx >= 0) setPhase(idx);
    });
  });
}

function setPhase(i){
  currentPhase = (i + phases.length) % phases.length;
  renderTimeline();
  renderPhase();
  if(currentMap === 'sandbox') renderSandboxSvg();
}

function showMap(kind){
  currentMap = kind;
  document.querySelectorAll('.map-btn').forEach(b=>b.classList.toggle('active', b.dataset.map===kind));
  imageZoom = 1;
  mapImage.style.width = '100%';
  if(kind === 'sandbox'){
    sandboxSvg.classList.remove('hidden');
    imageViewer.classList.add('hidden');
    mapCaption.textContent = '综合动态沙盘：用原创 SVG 展示河流、要点、红军阶段路线与国民党军围堵方向。点击下方时间线可切换阶段。';
    renderSandboxSvg();
  }else{
    const src = mapSources[kind];
    sandboxSvg.classList.add('hidden');
    imageViewer.classList.remove('hidden');
    mapImage.src = src.src;
    mapImage.alt = src.title;
    mapCaption.textContent = src.caption + ' 可用“放大/缩小”查看细节，手机端可横向拖动。';
    imageViewer.scrollTo({top:0,left:0});
  }
}

function changeZoom(delta){
  if(currentMap === 'sandbox') return;
  imageZoom = Math.max(0.65, Math.min(3.2, imageZoom + delta));
  mapImage.style.width = `${Math.round(imageZoom*100)}%`;
}
function fitMap(){
  imageZoom = 1;
  mapImage.style.width = '100%';
  imageViewer.scrollTo({top:0,left:0,behavior:'smooth'});
}

function setupNavigation(){
  document.querySelectorAll('[data-jump]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.jump)?.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
}

function setupMapButtons(){
  document.querySelectorAll('[data-map]').forEach(btn=>btn.addEventListener('click',()=>showMap(btn.dataset.map)));
  $('fitMap').addEventListener('click', fitMap);
  $('zoomIn').addEventListener('click', ()=>changeZoom(.25));
  $('zoomOut').addEventListener('click', ()=>changeZoom(-.25));
  $('viewWide').addEventListener('click', ()=>{svgView='wide'; showMap('sandbox');});
  $('viewCore').addEventListener('click', ()=>{svgView='core'; showMap('sandbox');});
  $('prevPhase').addEventListener('click', ()=>setPhase(currentPhase-1));
  $('nextPhase').addEventListener('click', ()=>setPhase(currentPhase+1));
  $('playPhase').addEventListener('click', ()=>{
    if(playTimer){clearInterval(playTimer); playTimer=null; $('playPhase').textContent='自动播放'; return;}
    $('playPhase').textContent='停止播放';
    playTimer = setInterval(()=>setPhase(currentPhase+1), 2600);
  });
}

const simulatorOptions = [
  {id:'afterTucheng', label:'土城受挫后的选择', options:[
    ['history','立即西渡赤水，脱离不利接触', {initiative:18,enemy:12,intel:7,logistics:4,risk:-18}],
    ['hold','继续在土城方向恋战', {initiative:-16,enemy:-4,intel:2,logistics:-12,risk:24}],
    ['retreat','向遵义方向直接后撤', {initiative:-8,enemy:4,intel:1,logistics:-4,risk:10}]
  ]},
  {id:'returnQianbei', label:'扎西后的选择', options:[
    ['history','敌军北移后回师黔北', {initiative:17,enemy:15,intel:8,logistics:2,risk:-10}],
    ['stay','继续滞留川滇边', {initiative:-10,enemy:-3,intel:0,logistics:-8,risk:18}],
    ['north','强行北渡长江', {initiative:-5,enemy:-8,intel:-3,logistics:-14,risk:22}]
  ]},
  {id:'gouba', label:'苟坝会议后的选择', options:[
    ['history','否决打鼓新场，保持机动', {initiative:14,enemy:8,intel:10,logistics:4,risk:-15}],
    ['attack','攻打打鼓新场', {initiative:-6,enemy:-6,intel:-2,logistics:-10,risk:20}],
    ['wait','原地等待敌情更清楚', {initiative:-12,enemy:0,intel:6,logistics:-6,risk:14}]
  ]},
  {id:'guiyang', label:'南渡乌江后的选择', options:[
    ['history','佯攻贵阳，调动滇军', {initiative:18,enemy:18,intel:8,logistics:0,risk:-16}],
    ['capture','强攻贵阳', {initiative:-8,enemy:-10,intel:2,logistics:-16,risk:26}],
    ['east','转向湘西会合', {initiative:-12,enemy:-3,intel:-6,logistics:-8,risk:22}]
  ]}
];
const baseScore = {initiative:48, enemy:45, intel:50, logistics:55, risk:52};
const labels = {initiative:'主动权', enemy:'敌协同受扰', intel:'情报清晰度', logistics:'后勤承压', risk:'合围风险'};

function renderSimulator(){
  const choices = $('choices');
  choices.innerHTML = simulatorOptions.map(s=>`<div class="choice"><label for="${s.id}">${esc(s.label)}</label><select id="${s.id}">${s.options.map(o=>`<option value="${o[0]}">${esc(o[1])}</option>`).join('')}</select></div>`).join('');
  simulatorOptions.forEach(s=>$(s.id).addEventListener('change', updateSimulator));
  updateSimulator();
}
function updateSimulator(){
  const score = {...baseScore};
  const chosen=[];
  simulatorOptions.forEach(s=>{
    const val = $(s.id).value;
    const opt = s.options.find(o=>o[0]===val);
    chosen.push(opt[1]);
    for(const [k,v] of Object.entries(opt[2])) score[k]+=v;
  });
  for(const k of Object.keys(score)) score[k]=Math.max(0,Math.min(100,score[k]));
  $('bars').innerHTML = Object.entries(score).map(([k,v])=>`<div class="barrow"><span>${labels[k]}</span><div class="track"><div class="fill" style="width:${v}%"></div></div><b>${v}</b></div>`).join('');
  const historical = Array.from(document.querySelectorAll('#choices select')).every(sel=>sel.value==='history');
  $('resultText').innerHTML = historical ? '<b>历史路径：</b>该组合体现四渡赤水的核心逻辑：不把胜负押在单一战斗，而通过连续机动、诱敌离位、突然折返和政治压力调动，逐步把敌军数量优势转化为协同负担。' : `<b>备选路径：</b>当前选择为“${chosen.map(esc).join(' / ')}”。如果主动权下降而合围风险上升，说明方案可能把红军重新带入固定战场或攻坚消耗；如果敌协同受扰上升，说明方案更有利于制造对手判断和调度成本。`;
}

function setupPwa(){
  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
  }
  window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault(); deferredPrompt = e; const btn=$('installBtn'); btn.hidden=false;
    btn.addEventListener('click',async()=>{btn.hidden=true; if(deferredPrompt){deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null;}});
  });
}

function init(){
  renderTimeline(); renderPhase(); renderDecisions(); renderSandboxSvg(); renderSimulator(); setupNavigation(); setupMapButtons(); setupPwa();
}
init();
