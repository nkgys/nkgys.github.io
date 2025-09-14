// Questions data
const questions = [
  // Moisture category (5 questions)
  {
    question: "洗顔後、タオルで顔を拭いてすぐの状態に最も近いのは？",
    options: [
      { text: "すでにつっぱりを感じ、肌が少しヒリヒリする", scores: { moisture: -3, sensitivity: 2 } },
      { text: "しっとりしていて、慌てて保湿しなくても快適", scores: { moisture: 1 } },
      { text: "つっぱりは無いが、すぐに皮脂が出てくる感覚がある", scores: { sebum: 2 } },
      { text: "頬は少しつっぱるが、Tゾーンはベタつきを感じる", scores: { moisture: -2, sebum: 1 } }
    ]
  },
  {
    question: "洗顔後10分程度、何もつけずに放置すると肌はどうなりますか？",
    options: [
      { text: "顔全体が強くつっぱり、部分的に粉がふく", scores: { moisture: -3 } },
      { text: "頬や口周りはつっぱるが、おでこや鼻は気にならない", scores: { moisture: -2 } },
      { text: "特に変化はない、もしくは全体がしっとりしている", scores: {} },
      { text: "Tゾーンを中心に皮脂が浮き始め、テカってくる", scores: { sebum: 3 } }
    ]
  },
  {
    question: "朝、起きた時の肌の状態は？",
    options: [
      { text: "乾燥していて、ハリがないように感じる", scores: { moisture: -2, firmness: -1 } },
      { text: "全体的にベタつき、枕に顔をつけたくないと感じる", scores: { sebum: 3 } },
      { text: "Tゾーンはベタつくが、頬はカサついている", scores: { sebum: 2, moisture: -2 } },
      { text: "ベタつきもカサつきもなく、調子が良いことが多い", scores: { moisture: 1 } }
    ]
  },
  {
    question: "お昼過ぎ、あなたの肌はどうなっていますか？",
    options: [
      { text: "肌が乾燥でつっぱり、部分的に粉がふいて見える", scores: { moisture: -3 } },
      { text: "Tゾーンがかなりベタつき、触ると指に皮脂がつく", scores: { sebum: 3 } },
      { text: "目元や口元はカサつくのに、Tゾーンはテカっている", scores: { moisture: -2, sebum: 2 } },
      { text: "全体的に透明感がなく、なんとなく顔色が暗く見える", scores: { pigmentation: 2 } }
    ]
  },
  {
    question: "朝、保湿（乳液やクリームなど）をした後の肌は、どのようになりますか？",
    options: [
      { text: "すぐに保湿感がなくなり、物足りなさを感じる", scores: { moisture: -3 } },
      { text: "しばらくするとベタつきやテカリを感じる", scores: { sebum: 2 } },
      { text: "日によって、なじみが良かったり悪かったり、調子が安定しない", scores: { sensitivity: 1 } },
      { text: "しっとり感が持続し、ちょうど良い状態に感じる", scores: { moisture: 1 } }
    ]
  },
  {
    question: "日中、肌を触った時の感触は？",
    options: [
      { text: "常にサラサラしているか、カサついている", scores: { sebum: -2 } },
      { text: "しっとり、もっちりしていることが多い", scores: { moisture: 1, firmness: 1 } },
      { text: "表面はベタつくのに、内側が乾燥しているような感覚がある", scores: { sebum: 2, moisture: -2 } },
      { text: "ゴワゴワと硬く感じる", scores: { moisture: -2, firmness: -1 } }
    ]
  },
  {
    question: "あなたのニキビ・吹き出物の特徴は？",
    options: [
      { text: "赤く腫れて炎症を起こしやすい、痛みを伴うことがある", scores: { sensitivity: 2 } },
      { text: "白ニキビや黒ニキビ（コメド）がTゾーンにできやすい", scores: { sebum: 2 } },
      { text: "あごやフェイスラインに、しこりのように繰り返しできる", scores: { sensitivity: 1, firmness: -1 } },
      { text: "ほとんどできたことがない", scores: {} }
    ]
  },
  {
    question: "肌の赤みについて、最も当てはまるものは？",
    options: [
      { text: "常に頬や小鼻の周りに赤みがある", scores: { sensitivity: 3 } },
      { text: "寒暖差や感情の変化で、顔が赤くなりやすい", scores: { sensitivity: 2 } },
      { text: "ニキビ跡が赤く残りやすい", scores: { sensitivity: 2, pigmentation: 1 } },
      { text: "赤みで悩んだことはほとんどない", scores: { sensitivity: -1 } }
    ]
  },
  {
    question: "スキンケア中に、ピリピリとした刺激を感じることはありますか？",
    options: [
      { text: "頻繁にある。特に体調が悪い時や季節の変わり目", scores: { sensitivity: 3 } },
      { text: "たまにある。特定の化粧品を使った時だけ", scores: { sensitivity: 1 } },
      { text: "ほとんどない", scores: { sensitivity: -1 } }
    ]
  },
  {
    question: "毛穴の悩みで、最も近いものはどれですか？",
    options: [
      { text: "鼻の黒ずみや角栓が気になる", scores: { sebum: 3 } },
      { text: "頬の毛穴が、縦長の涙型に開いている", scores: { firmness: -3 } },
      { text: "顔全体の毛穴が開いており、オレンジの皮のように見える", scores: { sebum: 2, firmness: -2 } },
      { text: "毛穴の悩みは特にない", scores: { firmness: 1 } }
    ]
  },
  {
    question: "肌のくすみやシミについて、最も気になるのは？",
    options: [
      { text: "顔全体が黄ぐすみ、または茶ぐすみして見える", scores: { pigmentation: 2 } },
      { text: "目尻の下あたりに、モヤっとしたシミ（肝斑など）がある", scores: { pigmentation: 3 } },
      { text: "小さなシミ・そばかすが頬全体に広がっている", scores: { pigmentation: 2 } },
      { text: "透明感があり、くすみやシミは気にならない", scores: { pigmentation: -1 } }
    ]
  },
  {
    question: "目元や口元の状態は？",
    options: [
      { text: "乾燥によるちりめんジワが目立つ", scores: { moisture: -3, firmness: -2 } },
      { text: "笑った時の表情ジワが、元に戻りにくくなった", scores: { firmness: -3 } },
      { text: "目の下にクマができやすく、色が定着している", scores: { pigmentation: 2, firmness: -1 } },
      { text: "ふっくらとしていて、特に悩みはない", scores: { firmness: 1 } }
    ]
  },
  {
    question: "肌を指で軽くつまんだ時、どう感じますか？",
    options: [
      { text: "ハリがなく、薄い皮膚をつまんでいる感じ", scores: { firmness: -3 } },
      { text: "弾力があり、押し返すようなもっちり感がある", scores: { firmness: 2 } },
      { text: "硬くてゴワついている感じ", scores: { moisture: -2, firmness: -1 } }
    ]
  },
  {
    question: "自分の肌のキメ（肌表面の模様）はどう見えますか？",
    options: [
      { text: "細かく整っており、三角形の模様が見える", scores: { moisture: 1, firmness: 1 } },
      { text: "流れやかさつきで、キメがほとんど見えない", scores: { moisture: -3 } },
      { text: "キメが粗く、毛穴の開きと一体化している", scores: { sebum: 2, firmness: -2 } }
    ]
  },
  {
    question: "ニキビや傷跡は、治った後どうなりますか？",
    options: [
      { text: "茶色いシミ（色素沈着）になって長く残る", scores: { pigmentation: 3 } },
      { text: "赤みがずっと続く", scores: { sensitivity: 2 } },
      { text: "クレーターのように凹みが残ることがある", scores: { firmness: -2 } },
      { text: "いつの間にかきれいに消えている", scores: { pigmentation: -1 } }
    ]
  },
  {
    question: "紫外線を浴びた後の肌は？（日焼け止め使用の有無に関わらず）",
    options: [
      { text: "すぐにヒリヒリして赤くなるが、黒くはなりにくい", scores: { sensitivity: 2 } },
      { text: "赤くなった後、確実に黒くなる（サンバーン→サンタン）", scores: { pigmentation: 2 } },
      { text: "赤くならず、いつの間にか黒くなっている（サンタン）", scores: { pigmentation: 3 } },
      { text: "あまり変化を感じない", scores: {} }
    ]
  },
  {
    question: "睡眠時間は平均してどのくらいですか？",
    options: [
      { text: "6時間未満で、寝不足を感じることが多い", scores: { firmness: -1, pigmentation: 1 } },
      { text: "6〜7時間程度", scores: {} },
      { text: "7時間以上、しっかり眠れている", scores: { firmness: 1 } }
    ]
  },
  {
    question: "食生活で、当てはまるものは？",
    options: [
      { text: "甘いものや脂っこいものをよく食べる", scores: { sebum: 1 } },
      { text: "野菜や果物はあまり食べない", scores: { firmness: -1 } },
      { text: "バランスを意識しているが、外食やコンビニも多い", scores: {} },
      { text: "バランスの良い食事を自炊することが多い", scores: { pigmentation: -1 } }
    ]
  },
  {
    question: "感じるストレスの度合いは？",
    options: [
      { text: "常に強いストレスを感じている", scores: { sensitivity: 1, sebum: 1 } },
      { text: "時々、強いストレスを感じることがある", scores: {} },
      { text: "あまりストレスは感じない", scores: { sensitivity: -1 } }
    ]
  },
  {
    question: "普段、体を動かす習慣はありますか？",
    options: [
      { text: "全くない", scores: { firmness: -1 } },
      { text: "週に1〜2回程度", scores: {} },
      { text: "週に3回以上、定期的に運動している", scores: { firmness: 1 } }
    ]
  },
  {
    question: "主に過ごす場所の環境は？",
    options: [
      { text: "エアコンが効いた乾燥した室内にいることが多い", scores: { moisture: -2 } },
      { text: "屋外で紫外線を浴びる機会が多い", scores: { pigmentation: 1, moisture: -1 } },
      { text: "特に乾燥も紫外線も気にならない環境だ", scores: {} }
    ]
  },
  {
    question: "スキンケアで重視することは？",
    options: [
      { text: "とにかく保湿力。しっとり重めのテクスチャが好き", scores: { moisture: -1 } },
      { text: "ベタつかないこと。さっぱりした使用感が好き", scores: { sebum: 1 } },
      { text: "低刺激であること。使えるものが限られる", scores: { sensitivity: 1 } },
      { text: "エイジングケア効果。ハリやシワへの効果を期待する", scores: { firmness: -1 } }
    ]
  }
];
// Questions data with categories and weights

// Advice content
const adviceContent = {
  moisture: {
    1: '<h4>💧 水分不足のあなたへの処方箋</h4><p>肌の潤いを守り、育てるための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> ヒト型セラミド（セラミドEOP, NP, APなど）、ワセリン、スクワラン、ヘパリン類似物質</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 鶏むね肉、卵、大豆製品、青魚、アマニ油、レバー、うなぎ、緑黄色野菜</li><li><strong>💡 おすすめの生活習慣:</strong> 保湿剤は5分以内に塗る。洗浄力の弱いクレンジングを選ぶ。手で優しく洗う。</li></ul>',
    2: '<h4>💧 水分不足のあなたへの処方箋</h4><p>肌の潤いを守り、育てるための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> ヒアルロン酸、コラーゲン、エラスチン、アミノ酸（NMFの主成分）</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 豚肉、玄米、バナナ、牡蠣、赤身肉、カシューナッツ</li><li><strong>💡 おすすめの生活習慣:</strong> 洗顔はぬるま湯で。加湿器を使う。こまめな水分補給。</li></ul>',
    3: '<h4>💧 水分不足のあなたへの処方箋</h4><p>肌の潤いを守り、育てるための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> NMF（天然保湿因子）関連成分、グリセリン、植物エキス（ハトムギ、アロエベラなど）</li><li><strong>🥗 おすすめの食事・栄養素:</strong> パプリカ、ブロッコリー、キウイ、緑茶、ベリー類、アーモンド</li><li><strong>💡 おすすめの生活習慣:</strong> 365日日焼け止めを塗る。十分な睡眠。肌を擦らない。</li></ul>'
  },
  sebum: {
    1: '<h4>🧈 皮脂バランスのあなたへの処方箋</h4><p>皮脂のバランスを整え、健康的な肌を育てるための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> スクワラン、ホホバオイル、シアバター、マカデミアナッツ脂肪酸</li><li><strong>🥗 おすすめの食事・栄養素:</strong> アボカド、オリーブオイル、ナッツ類、アーモンド、かぼちゃ</li><li><strong>💡 おすすめの生活習慣:</strong> オイル美容を取り入れる。あぶらとり紙は使わない。保湿力の高いクレンジングを選ぶ。</li></ul>',
    2: '<h4>🧈 皮脂バランスのあなたへの処方箋</h4><p>皮脂のバランスを整え、健康的な肌を育てるための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> セラミド、グリセリン、アルガンオイル</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 特定の栄養素に偏らない、バランスの取れた食事</li><li><strong>💡 おすすめの生活習慣:</strong> 季節や体調でスキンケアを微調整する。ゴシゴシ洗顔をしない。健やかな生活習慣を心掛ける。</li></ul>',
    3: '<h4>🧈 皮脂バランスのあなたへの処方箋</h4><p>皮脂のバランスを整え、健康的な肌を育てるための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> ビタミンC誘導体、サリチル酸（BHA）、ノイバラ果実エキス</li><li><strong>🥗 おすすめの食事・栄養素:</strong> レバー、卵、マグロ、きのこ類、海藻類、玄米</li><li><strong>💡 おすすめの生活習慣:</strong> オイルフリーやノンコメドジェニックの製品を選ぶ。高GI値の食品を控える。</li></ul>',
    4: '<h4>🧈 皮脂バランスのあなたへの処方箋</h4><p>皮脂のバランスを整え、健康的な肌を育てるための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> アゼライン酸、クレイ（泥）、グリコール酸（AHA）</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 牡蠣、赤身肉、玄米、全粒粉パン、野菜中心の食事</li><li><strong>💡 おすすめの生活習慣:</strong> 洗顔は1日2回まで。週1〜2回のスペシャルケア（酵素洗顔など）を取り入れる。リラックスする時間を作る。</li></ul>'
  },
  sensitivity: {
    1: '<h4>🌿 敏感肌のあなたへの処方箋</h4><p>肌のバリアを強化し、穏やかな状態を保つための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> レチノール、バクチオール、高濃度のビタミンC、グリコール酸（AHA）※低濃度のものから試しましょう</li><li><strong>🥗 おすすめの食事・栄養素:</strong> バランスの取れた食事で、健康な肌の土台を維持</li><li><strong>💡 おすすめの生活習慣:</strong> 基本のケアを丁寧に続ける。肌の不調を感じたら攻めのケアは休む。</li></ul>',
    2: '<h4>🌿 敏感肌のあなたへの処方箋</h4><p>肌のバリアを強化し、穏やかな状態を保つための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> グリチルリチン酸2K、アラントイン、CICA（ツボクサエキス）、セラミド</li><li><strong>🥗 おすすめの食事・栄養素:</strong> ヨーグルト、味噌などの発酵食品、きのこ類、魚介類</li><li><strong>💡 おすすめの生活習慣:</strong> パッチテストを行う。刺激になりやすい成分（アルコール、香料など）を避ける。花粉などから肌を守る下地を活用する。</li></ul>',
    3: '<h4>🌿 敏感肌のあなたへの処方箋</h4><p>肌のバリアを強化し、穏やかな状態を保つための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> ワセリン、セラミド、スクワラン、シンプルな処方の製品</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 青魚、アマニ油。香辛料やアルコールなど刺激の強い食品は避ける。</li><li><strong>💡 おすすめの生活習慣:</strong> シンプルなスキンケアステップにする。肌に触れるものは天然素材を選ぶ。体調が悪い時は特に優しくケアする。</li></ul>'
  },
  pigmentation: {
    1: '<h4>🎨 色素沈着のあなたへの処方箋</h4><p>透明感のある肌を保ち、色素沈着を防ぐための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> ビタミンC誘導体、ビタミンE、コエンザイムQ10、アスタキサンチン</li><li><strong>🥗 おすすめの食事・栄養素:</strong> トマト、スイカ、にんじん、ナッツとフルーツ</li><li><strong>💡 おすすめの生活習慣:</strong> 365日日焼け止めを塗る。サングラスや帽子を活用する。質の良い睡眠。</li></ul>',
    2: '<h4>🎨 色素沈着のあなたへの処方箋</h4><p>透明感のある肌を保ち、色素沈着を防ぐための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> トラネキサム酸、アルブチン、コウジ酸、プラセンタエキス</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 高野豆腐、ごま、にんにく、柑橘類、ピーマン</li><li><strong>💡 おすすめの生活習慣:</strong> 日焼け止めを2〜3時間おきに塗り直す。肌を擦らない。ブルーライト対策。</li></ul>',
    3: '<h4>🎨 色素沈着のあなたへの処方箋</h4><p>透明感のある肌を保ち、色素沈着を防ぐための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> 4MSK、ルシノール、レチノール、ハイドロキノン（医師指導のもと）</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 赤ワイン、カカオ、ベリー類、色の濃い野菜</li><li><strong>💡 おすすめの生活習慣:</strong> 飲む日焼け止めを併用する。スキー場などでの紫外線対策も徹底。美白ケアは3ヶ月以上継続する。</li></ul>'
  },
  firmness: {
    1: '<h4>🧬 ハリ・弾力のあなたへの処方箋</h4><p>肌の弾力を維持し、若々しさを保つための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> ビタミンC誘導体、ナイアシンアミド、フラーレン、アスタキサンチン</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 鶏肉とピーマン、赤身肉、ほうれん草、あさり</li><li><strong>💡 おすすめの生活習慣:</strong> 紫外線A波（UVA）を徹底的に防御する。糖質の摂りすぎに注意。質の良い睡眠。</li></ul>',
    2: '<h4>🧬 ハリ・弾力のあなたへの処方箋</h4><p>肌の弾力を維持し、若々しさを保つための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> レチノール、ペプチド、成長因子（EGF, FGFなど）</li><li><strong>🥗 おすすめの食事・栄養素:</strong> 納豆、豆腐、豆乳、牡蠣、赤身肉</li><li><strong>💡 おすすめの生活習慣:</strong> 表情筋トレーニングや美顔器を取り入れる。正しい姿勢を意識する。頭皮マッサージ。</li></ul>',
    3: '<h4>🧬 ハリ・弾力のあなたへの処方箋</h4><p>肌の弾力を維持し、若々しさを保つための具体的なアクションプランです。</p><ul><li><strong>✨ 有効な美容成分:</strong> 高濃度のレチノール、ヒト幹細胞培養液、DMAE</li><li><strong>🥗 おすすめの食事・栄養素:</strong> ハーブティー（カモミールなど）、生姜、シナモン、抗酸化力の高い食品</li><li><strong>💡 おすすめの生活習慣:</strong> 急激なダイエットを避ける。睡眠環境を見直す。美容医療も選択肢の一つとして情報収集する。</li></ul>'
  }
};

// State
let currentQuestionIndex = 0;
let scores = { moisture: 0, sebum: 0, sensitivity: 0, pigmentation: 0, firmness: 0 };

// DOM elements
const topPage = document.getElementById('top-page');
const diagnosisPage = document.getElementById('diagnosis-page');
const resultPage = document.getElementById('result-page');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionContainer = document.getElementById('question-container');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const statusDetails = document.getElementById('status-details');
const adviceContainer = document.getElementById('advice-container');

// Functions
function startDiagnosis() {
  topPage.classList.remove('active');
  diagnosisPage.classList.add('active');
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <h3>${question.question}</h3>
    ${question.options.map((option, index) => 
      `<button class="option" data-index="${index}">${option.text}</button>`
    ).join('')}
  `;
  updateProgress();
}

function updateProgress() {
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  progressBar.style.setProperty('--progress', `${progress}%`);
  progressText.textContent = `${currentQuestionIndex} / ${questions.length}`;
}

function nextQuestion(optionIndex) {
  const question = questions[currentQuestionIndex];
  const selectedOption = question.options[optionIndex];
  Object.keys(selectedOption.scores).forEach(key => {
    scores[key] += selectedOption.scores[key] * question.weight;
  });

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  diagnosisPage.classList.remove('active');
  resultPage.classList.add('active');

  // Calculate skin type
  let skinType = '';
  if (scores.moisture <= -3 && scores.sebum <= 2) {
    skinType = '乾燥肌';
  } else if (scores.moisture >= 3 && scores.sebum >= 3) {
    skinType = '脂性肌';
  } else if (scores.moisture <= -3 && scores.sebum >= 3) {
    skinType = '混合肌（インナードライ）';
  } else {
    skinType = '普通肌';
  }

  // Update result title with strong tag for skin type
  resultTitle.innerHTML = `あなたの肌タイプは「<strong>${skinType}</strong>」の可能性が高いです`;
  resultDescription.textContent = `${skinType}の特徴とケア方法について詳しく解説します。`;

  // Summary box content
  const summaryCharacteristics = {
    '乾燥肌': '肌の水分が不足し、カサつきやすい状態です。適切な保湿が重要です。',
    '脂性肌': '皮脂の分泌が多く、テカリやニキビができやすい状態です。過剰な皮脂を抑えるケアが必要です。',
    '混合肌（インナードライ）': '部分的に乾燥し、部分的に脂っぽい複合的な肌質です。バランスの良いケアが求められます。',
    '普通肌': 'バランスの取れた健康的な肌状態です。基本的なスキンケアを継続しましょう。'
  };
  const summaryCarePolicy = {
    '乾燥肌': '保湿を中心に、刺激の少ないスキンケアを心がけましょう。',
    '脂性肌': '洗顔を適切に行い、油分のコントロールを意識しましょう。',
    '混合肌（インナードライ）': '乾燥部分と脂性部分の両方に対応したケアを行いましょう。',
    '普通肌': '基本のスキンケアを継続し、肌の健康を維持しましょう。'
  };
  document.getElementById('summary-characteristics').textContent = summaryCharacteristics[skinType];
  document.getElementById('summary-care-policy').textContent = summaryCarePolicy[skinType];

  // Status details
  const axes = [
    { key: 'moisture', name: '💧 水分量 (Moisture)', levels: ['深刻な乾燥状態', '水分不足ぎみ', '理想的な水分量'] },
    { key: 'sebum', name: '🧈 皮脂量 (Sebum)', levels: ['皮脂が少ない', '適度な皮脂量', '皮脂が多め', '過剰な皮脂状態'] },
    { key: 'sensitivity', name: '🌿 敏感度 (Sensitivity)', levels: ['比較的丈夫な肌', 'やや敏感傾向', '非常に敏感な肌'] },
    { key: 'pigmentation', name: '🎨 色素沈着 (Pigmentation)', levels: ['シミ・くすみができにくい', 'ややできやすい傾向', '非常にできやすい傾向'] },
    { key: 'firmness', name: '🧬 ハリ・弾力 (Firmness)', levels: ['ハリのある状態', 'ハリ不足の傾向', 'エイジングサインが顕著'] }
  ];

  statusDetails.innerHTML = axes.map(axis => {
    const score = scores[axis.key];
    let level = 1;
    if (axis.key === 'moisture') {
      if (score <= -6) level = 1;
      else if (score <= -3) level = 2;
      else level = 3;
    } else if (axis.key === 'sebum') {
      if (score <= -2) level = 1;
      else if (score <= 2) level = 2;
      else if (score <= 5) level = 3;
      else level = 4;
    } else if (axis.key === 'sensitivity') {
      if (score <= -1) level = 1;
      else if (score <= 2) level = 2;
      else level = 3;
    } else if (axis.key === 'pigmentation') {
      if (score <= -1) level = 1;
      else if (score <= 2) level = 2;
      else level = 3;
    } else if (axis.key === 'firmness') {
      if (score <= -3) level = 3;
      else if (score <= -1) level = 2;
      else level = 1;
    }

    const percentage = Math.min(100, Math.max(0, ((score + 10) / 20) * 100));

    // Calculate confidence based on score deviation from thresholds
    let confidence = 70; // base confidence
    if (level === 1) confidence = 80;
    else if (level === 2) confidence = 85;
    else if (level === 3) confidence = 90;
    else if (level === 4) confidence = 95;

    // Determine color class for progress-fill
    let colorClass = '';
    if (axis.key === 'moisture' && score <= -8) {
      colorClass = 'warning';
    } else if (axis.key === 'sensitivity' && score >= 9) {
      colorClass = 'danger';
    } else if (axis.key === 'firmness' && score <= -9) {
      colorClass = 'warning';
    }

    return `
      <div class="status-box">
        <h4>${axis.name}</h4>
        <p>スコア: ${score}（${axis.levels[level - 1]}） - 確信度: ${confidence}%</p>
        <div class="progress-bar">
          <div class="progress-fill ${colorClass}" style="width: ${percentage}%"></div>
        </div>
      </div>
    `;
  }).join('');

  // Advice
  adviceContainer.innerHTML = axes.map(axis => {
    let level = 1;
    if (axis.key === 'moisture') {
      if (scores[axis.key] <= -6) level = 1;
      else if (scores[axis.key] <= -3) level = 2;
      else level = 3;
    } else if (axis.key === 'sebum') {
      if (scores[axis.key] <= -2) level = 1;
      else if (scores[axis.key] <= 2) level = 2;
      else if (scores[axis.key] <= 5) level = 3;
      else level = 4;
    } else if (axis.key === 'sensitivity') {
      if (scores[axis.key] <= -1) level = 1;
      else if (scores[axis.key] <= 2) level = 2;
      else level = 3;
    } else if (axis.key === 'pigmentation') {
      if (scores[axis.key] <= -1) level = 1;
      else if (scores[axis.key] <= 2) level = 2;
      else level = 3;
    } else if (axis.key === 'firmness') {
      if (scores[axis.key] <= -3) level = 3;
      else if (scores[axis.key] <= -1) level = 2;
      else level = 1;
    }

    return `<div class="advice-box">${adviceContent[axis.key][level]}</div>`;
  }).join('');
}

function restart() {
  currentQuestionIndex = 0;
  scores = { moisture: 0, sebum: 0, sensitivity: 0, pigmentation: 0, firmness: 0 };
  resultPage.classList.remove('active');
  topPage.classList.add('active');
}

// Event listeners
document.getElementById('start-btn').addEventListener('click', startDiagnosis);
document.getElementById('start-btn-bottom').addEventListener('click', startDiagnosis);
document.getElementById('restart-btn').addEventListener('click', restart);

questionContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('option')) {
    const optionIndex = parseInt(e.target.dataset.index);
    nextQuestion(optionIndex);
  }
});
