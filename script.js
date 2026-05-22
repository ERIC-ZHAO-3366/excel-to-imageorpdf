document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.getElementById('titleInput');
    const subtitleInput = document.getElementById('subtitleInput');
    const subSubtitleInput = document.getElementById('subSubtitleInput');
    const subtitleIndentInput = document.getElementById('subtitleIndentInput');
    const subtitleIndentValue = document.getElementById('subtitleIndentValue');
    const titleSizeInput = document.getElementById('titleSizeInput');
    const titleSizeValue = document.getElementById('titleSizeValue');
    const subtitleSizeInput = document.getElementById('subtitleSizeInput');
    const subtitleSizeValue = document.getElementById('subtitleSizeValue');
    const subSubtitleSizeInput = document.getElementById('subSubtitleSizeInput');
    const subSubtitleSizeValue = document.getElementById('subSubtitleSizeValue');
    const tableTitle = document.getElementById('tableTitle');
    const tableSubtitle = document.getElementById('tableSubtitle');
    const tableSubSubtitle = document.getElementById('tableSubSubtitle');
    const exportBtn = document.getElementById('exportBtn');
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    const captureArea = document.getElementById('capture-area');
    const excelInput = document.getElementById('excelInput');
    const widthInput = document.getElementById('widthInput');
    const widthValue = document.getElementById('widthValue');
    const opacityInput = document.getElementById('opacityInput');
    const opacityValue = document.getElementById('opacityValue');
    const randomBgBtn = document.getElementById('randomBgBtn');
    const bgPresetSelect = document.getElementById('bgPresetSelect');
    const bgColor1 = document.getElementById('bgColor1');
    const bgColor2 = document.getElementById('bgColor2');
    const bgAngle = document.getElementById('bgAngle');
    const headerColorInput = document.getElementById('headerColorInput');
    const fontSelect = document.getElementById('fontSelect');
    const textAlignSelect = document.getElementById('textAlignSelect');
    const noteAlignSelect = document.getElementById('noteAlignSelect');
    const uploadFontBtn = document.getElementById('uploadFontBtn');
    const fontInput = document.getElementById('fontInput');
    const titleColorInput = document.getElementById('titleColorInput');
    const subtitleColorInput = document.getElementById('subtitleColorInput');
    const subSubtitleColorInput = document.getElementById('subSubtitleColorInput');
    const headerTextColorInput = document.getElementById('headerTextColorInput');
    const tableTextColorInput = document.getElementById('tableTextColorInput');
    const noteColorInput = document.getElementById('noteColorInput');
    const blurInput = document.getElementById('blurInput');
    const grainCheckbox = document.getElementById('grainCheckbox');
    const grainIntensityInput = document.getElementById('grainIntensityInput');
    const toggleShapesBtn = document.getElementById('toggleShapesBtn');
    const clearShapesBtn = document.getElementById('clearShapesBtn');
    const bgShapesContainer = document.getElementById('bg-shapes-container');
    const noteInput = document.getElementById('noteInput');
    const randomQuoteCheckbox = document.getElementById('randomQuoteCheckbox');
    const refreshQuoteBtn = document.getElementById('refreshQuoteBtn');
    const tableNote = document.getElementById('tableNote');
    const table = document.querySelector('.styled-table');
    
    let lastFileName = ''; // 记录上一次导入的文件名

    // 实时更新标题
    titleInput.addEventListener('input', (e) => {
        tableTitle.textContent = e.target.value || '表格标题';
    });

    // 实时更新副标题
    subtitleInput.addEventListener('input', (e) => {
        tableSubtitle.textContent = e.target.value;
    });

    // 实时更新二级副标题
    subSubtitleInput.addEventListener('input', (e) => {
        tableSubSubtitle.textContent = e.target.value;
    });

    // 实时更新副标题缩进
    subtitleIndentInput.addEventListener('input', (e) => {
        const val = e.target.value;
        captureArea.style.setProperty('--subtitle-indent', `${val}px`);
        if (subtitleIndentValue) subtitleIndentValue.textContent = `${val}px`;
    });

    // 实时更新标题大小
    titleSizeInput.addEventListener('input', (e) => {
        const val = e.target.value;
        tableTitle.style.setProperty('--title-size', `${val}px`);
        if (titleSizeValue) titleSizeValue.textContent = `${val}px`;
    });

    // 实时更新副标题大小
    subtitleSizeInput.addEventListener('input', (e) => {
        const val = e.target.value;
        tableSubtitle.style.setProperty('--subtitle-size', `${val}px`);
        if (subtitleSizeValue) subtitleSizeValue.textContent = `${val}px`;
    });

    // 实时更新二级副标题大小
    subSubtitleSizeInput.addEventListener('input', (e) => {
        const val = e.target.value;
        tableSubSubtitle.style.setProperty('--sub-subtitle-size', `${val}px`);
        if (subSubtitleSizeValue) subSubtitleSizeValue.textContent = `${val}px`;
    });

    const defaultQuotes = [
        '人生就像一盒巧克力，你永远不知道下一块是什么味道。——《阿甘正传》',
        '希望是美好的，也许是人间至善，而美好的事物永不消逝。——《肖申克的救赎》',
        '我要给他一个他无法拒绝的条件。——《教父》',
        '坦白说，亲爱的，我一点也不在乎。——《乱世佳人》',
        '我会回来的！——《终结者》',
        '愿原力与你同在。——《星球大战》',
        '你跳，我跳。——《泰坦尼克号》',
        '我养你啊！——《喜剧之王》',
        '能力越大，责任越大。——《蜘蛛侠》',
        '要么像英雄一样死去，要么苟活到目睹自己变成恶棍。——《蝙蝠侠：黑暗骑士》',
        '爱就意味着你永远不必说抱歉。——《爱情故事》',
        '把枪留下，把卡诺里饼带上。——《教父》',
        '人，得自个儿成全自个儿。——《霸王别姬》',
        '我是你爸爸。——《星球大战：帝国反击战》',
        '如果你有梦想，就要去捍卫它。——《当幸福来敲门》',
        '我能看见死人。——《第六感》',
        '你建好了，他就会来。——《梦幻之地》',
        '路？我们要去的地方不需要路。——《回到未来》',
        '暴力永远不能取胜，保持尊严，才会赢得真正的胜利。——《绿皮书》',
        '我还是大明星，是银幕变小了。——《日落大道》',
        '懦怯囚禁人的灵魂，希望可以感受自由。强者自救，圣者渡人。——《肖申克的救赎》',
        '系好你们的安全带，这将是一个颠簸的夜晚。——《彗星美人》',
        '对我来说，你是我整个世界上最初和最后爱的人。——《霸王别姬》',
        '有的人活到25岁就死了，只是到75岁才埋葬。——《本杰明·巴顿奇事》',
        '我命由我不由天！——《哪吒之魔童降世》',
        '伟大的人不是生来就伟大，而是在成长过程中显示其伟大。——《教父》',
        '如果你建好了，他就会来。——《梦幻之地》',
        '我正在这走呢，我正在这走呢！——《午夜牛郎》',
        '今晚我要吃一个老朋友。——《沉默的羔羊》',
        '超越极限！——《玩具总动员》',
        '你想要啊？你想要就说吧，你不说我怎么知道你想要呢？——《大话西游之大圣娶亲》',
        '如果不能跟我喜欢的人在一起，就算让我做玉皇大帝我也不会开心。——《大话西游之大圣娶亲》',
        '做人不快乐，长生不老又有什么用。——《大话西游之大圣娶亲》',
        '生而不养，养而不教，何以为家。——《何以为家》',
        '生活是一堆狗屎，不比我的鞋子值钱。——《何以为家》',
        '机遇稍纵即逝，要用你每滴汗水来争取。——《摔跤吧！爸爸》',
        '我们永远无法选择出身，但可以选择朋友。——《何以为家》',
        '你让我想成为一个更好的人。——《尽善尽美》',
        '当人们无法做到时，他们会告诉你同样不可能。——《当幸福来敲门》',
        '该来的总会来，面对它时要勇敢。——《哈利·波特与魔法石》',
        '当你说“不”时，你要使“不”听上去像“是”一样好听。——《教父》',
        '痛苦和恐惧不是死亡，还有挽回的余地。——《教父》',
        '让朋友低估你的优点，让敌人高估你的缺点。——《教父》',
        '我喜欢凝固汽油弹在清晨的味道。——《现代启示录》',
        '拿钱给我看！——《甜心先生》',
        '因为有你，才有了这么完美的我。——《甜心先生》',
        '从相遇的那一刻起你就已经征服了我。——《甜心先生》',
        '棒球场上没有眼泪！——《女子棒球队》',
        '永别了。——《卡萨布兰卡》',
        '我正在这走呢，我正在这走呢！——《午夜牛郎》',
        '我吃了他的肝，就着蚕豆和一瓶基安蒂红酒。——《沉默的羔羊》',
        '贪婪，找不到比这更好的词了，这是个好东西。——《华尔街》',
        '算了吧，杰克，这是唐人街。——《唐人街》',
        '杀死野兽的不是飞机，而是美女。——《金刚》',
        '把你的臭爪子从我身上拿开，你这该死的脏猩猩。——《人猿星球》',
        '我疯了，我再也受不了了！——《电视台风云》',
        '先飞的笨鸟，终究会找到自己的天空。——《活着》',
        '生活的选择在于我们如何面对。——《活着》',
        '幸福不是追求长生，而是实现小小的生活愿望。——《飞屋环游记》',
        '成为金牌得主，便是传奇的开始。——《摔跤吧！爸爸》',
        '生活中的悲欢离合，尽在每一餐的分享中。——《饮食男女》',
        '身体可以被禁锢，但思想的自由永存。——《饮食男女》',
        '不要把自己看得太重要，人生就是一场旅程。——《绿皮书》',
        '我不知道自己想要什么，但我清楚不想要的。——《喜剧之王》',
        '坚持做自己，才是最大的勇气。——《喜剧之王》',
        '隐藏真相很痛苦，就算怀着秘密抓住了幸福，想必也不会有真正的幸福感受。——《嫌疑人x的献身》',
        '当你最认为困难的时候，其实就是你最接近成功的时候。——《当幸福来敲门》',
        '如果你获得了银牌，你总会被遗忘；如果赢得了金牌，你会成为典范。——《摔跤吧！爸爸》',
        '我们永远无法选择出身，但可以选择朋友。——《何以为家》',
        '不管你做什么都要做到极致，上班就认真工作，笑就尽情大笑，吃东西时就像是最后一餐那样去享受。——《绿皮书》',
        '你把自己的幸福拱手相让，去追求一些根本不会让你幸福的东西。——《乱世佳人》',
        '两个不同的人光有爱情是不够的。——《乱世佳人》',
        '纸上谈兵没什么作用。——《乱世佳人》',
        '永别了，武器。——《永别了，武器》',
        '我要吃一个老朋友。——《沉默的羔羊》',
        '每个人都会死，但并非每个人都曾真正活过。——《勇敢的心》',
        '爱是让我们靠近的力量，不是分离的力量。——《星际穿越》',
        '你让我想成为一个更好的人。——《尽善尽美》',
        '接近真理需要穿过一片危险的丛林。——《七宗罪》',
        '明天，又是新的一天。——《乱世佳人》',
        '我还是大明星，是银幕变小了。——《日落大道》',
        '我正在这走呢，我正在这走呢！——《午夜牛郎》',
        '你建好了，他就会来。——《梦幻之地》',
        '路？我们要去的地方不需要路。——《回到未来》',
        '愿原力与你同在。——《星球大战》',
        '我会回来的。——《终结者》',
        '我能看见死人。——《第六感》',
        '超越极限！——《玩具总动员》',
        '你得让我看到钱景！——《甜心先生》',
        '把枪留下，把卡诺里饼带上。——《教父》',
        '棒球场上没有眼泪！——《女子棒球队》',
        '从相遇的那一刻起你就已经征服了我。——《甜心先生》',
        '如果你有梦想，就要去捍卫它。——《当幸福来敲门》',
        '希望是美好的，也许是人间至善，而美好的事物永不消逝。——《肖申克的救赎》',
        '如果你获得了银牌，你总会被遗忘；如果赢得了金牌，你会成为典范。——《摔跤吧！爸爸》',
        '机遇稍纵即逝，努力争取才能改变命运。——《摔跤吧！爸爸》',
        '孤独的人，常常最懂得他人的痛苦。——《摔跤吧！爸爸》',
        '用心去生活，才会发现真正的幸福。——《绿皮书》',
        '不要把自己看得太重要，人生就是一场旅程。——《绿皮书》',
        '如果不能跟我喜欢的人在一起，就算让我做玉皇大帝我也不会开心。——《大话西游之大圣娶亲》',
        '电影发明后，人类的生命至少延长了三倍。——《一一》',
        '你不在的时候，我有个机会去过了一段年轻时候的日子。本来以为，我再活一次的话，也许会有什么不一样。结果……还是差不多，没什么不同。只是突然觉得，再活一次的话，好像真的没有必要，真的没有必要。——《一一》',
        '我只能看到前面，看不到后面，这样不是就有一半的事情看不到了吗？——《一一》',
        '怎么跟妈讲的东西都是一样的，我一连跟她讲了几天，我每天讲的一模一样，早上做什么，下午做什么，晚上做什么，几分钟就讲完了。——《一一》',
        '其实真的是没有什么不一样，好像我每天在跟妈讲话一样，只是那个位子换了一下，我就好像是妈妈，他们就好像是我。——《一一》',
        '没有一棵树，没有一朵云，是不美丽的，所以人也应该这样。——《一一》',
        '为什么我们都害怕“第一次”？每一天都是第一次，每个早晨都是新的，同一天不可能重复过两次，每天早晨，我们也从来不会不敢起床，为什么？——《一一》',
        '我从来没爱过另外一个人。——《一一》',
        '婆婆，为什么这个世界和我们想的，都不一样呢？——《一一》',
        '婆婆，我好想你，我觉得我也老了。——《一一》',
        '做的都不是自己喜欢做的事，怎么会快乐呢？——《一一》',
        '我记得第一次牵你的手，也是在平交道前，你记得吗？——《一一》',
        '以前听同学说，你的生活过得很辛苦，好像觉得跟自己有关，很在意。——《一一》',
        '你看这些年，我这么辛苦，我这么努力。嘿！我从早忙到晚。你知不知道，我一点都不快乐？——《一一》',
        '如果电影跟过生活一样，那谁还会想去看电影？过生活就好啦！——《一一》',
        '本来以为，我再活一次的话，也许会有什么不一样。结果……还是差不多，没什么不同。——《一一》',
        '可是我想知道她在难过什么，我从后面看不到啊。——《一一》',
        '以前我爸爸每一天都在听音乐，我很讨厌他听音乐……——《一一》',
        '阿瑞，我从来没爱过另外一个人。——《一一》',
        '只是突然觉得，再活一次的话，好像真的没有必要，真的没有必要。——《一一》'
    ];

    let quotes = defaultQuotes;
    let currentRandomQuote = '';

    // 初始化随机名言
    if (quotes.length > 0) {
        pickRandomQuote();
        // 默认开启随机名言，如果没有输入备注
        if (!noteInput.value) {
            randomQuoteCheckbox.checked = true;
            updateNoteDisplay();
        }
    }

    // 尝试加载外部名言文件（如果环境支持）
    fetch('motto.txt')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(text => {
            const fileQuotes = text.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0)
                .map(line => line.replace(/^\d+\.\s*/, '')); // 去掉序号
            
            if (fileQuotes.length > 0) {
                quotes = fileQuotes;
                // 如果当前使用的是默认名言，且用户没有手动修改过，可以考虑刷新
                // 但为了体验平滑，这里暂不强制刷新，下次点击刷新时会使用新列表
            }
        })
        .catch(err => console.log('Using default quotes. Failed to load motto.txt:', err));

    function pickRandomQuote() {
        if (quotes.length === 0) return;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        currentRandomQuote = quotes[randomIndex];
    }

    function updateNoteDisplay() {
        if (randomQuoteCheckbox.checked) {
            tableNote.textContent = currentRandomQuote;
        } else {
            tableNote.textContent = noteInput.value;
        }
    }

    // 实时更新备注
    noteInput.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && randomQuoteCheckbox.checked) {
            randomQuoteCheckbox.checked = false;
        }
        updateNoteDisplay();
    });

    // 随机名言开关
    randomQuoteCheckbox.addEventListener('change', () => {
        if (randomQuoteCheckbox.checked) {
            noteInput.value = ''; // 清空手动输入
            if (!currentRandomQuote && quotes.length > 0) {
                pickRandomQuote();
            }
        }
        updateNoteDisplay();
    });

    // 刷新名言
    refreshQuoteBtn.addEventListener('click', () => {
        pickRandomQuote();
        if (!randomQuoteCheckbox.checked) {
            randomQuoteCheckbox.checked = true;
            noteInput.value = '';
        }
        updateNoteDisplay();
    });

    // 实时更新宽度
    widthInput.addEventListener('input', (e) => {
        const width = e.target.value;
        if (width) {
            // 设置 CSS 变量控制单元格最大宽度（换行阈值）
            table.style.setProperty('--max-cell-width', `${width}em`);
            
            // 清除之前的 table min-width 设置，防止冲突
            table.style.minWidth = 'auto';
            captureArea.style.minWidth = 'auto';
            
            if (widthValue) widthValue.textContent = width;
        }
    });
    
    // 初始化宽度
    if (widthInput.value) {
        table.style.setProperty('--max-cell-width', `${widthInput.value}em`);
        table.style.minWidth = 'auto';
        captureArea.style.minWidth = 'auto';
    }

    // 实时更新透明度
    opacityInput.addEventListener('input', (e) => {
        const val = e.target.value;
        opacityValue.textContent = val;
        // 更新 CSS 变量
        table.style.setProperty('--bg-opacity', val);
    });

    // 实时更新磨砂程度
    blurInput.addEventListener('input', (e) => {
        const val = e.target.value;
        table.style.setProperty('--glass-blur', `${val}px`);
    });

    // 实时更新颗粒感
    grainCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            // 显示强度滑块
            grainIntensityInput.style.display = 'inline-block';
            
            // 添加颗粒感图层
            let grain = document.getElementById('bg-grain-layer');
            if (!grain) {
                grain = document.createElement('div');
                grain.id = 'bg-grain-layer';
                grain.classList.add('bg-grain');
                captureArea.appendChild(grain);
            }
            grain.style.display = 'block';
            // 设置初始透明度
            grain.style.opacity = grainIntensityInput.value;
        } else {
            // 隐藏强度滑块
            grainIntensityInput.style.display = 'none';
            
            // 隐藏颗粒感图层
            const grain = document.getElementById('bg-grain-layer');
            if (grain) {
                grain.style.display = 'none';
            }
        }
    });

    // 实时更新颗粒强度
    grainIntensityInput.addEventListener('input', (e) => {
        const grain = document.getElementById('bg-grain-layer');
        if (grain) {
            grain.style.opacity = e.target.value;
        }
    });

    // 实时更新表头背景颜色
    headerColorInput.addEventListener('input', (e) => {
        table.style.setProperty('--header-color', e.target.value);
    });

    // 上传自定义字体
    uploadFontBtn.addEventListener('click', () => fontInput.click());

    // 辅助函数：从 TTC 中提取第一个字体
    function extractFirstFontFromTTC(buffer) {
        const data = new DataView(buffer);
        const tag = data.getUint32(0, false);
        
        // 检查是否为 TTC (tag 'ttcf' = 0x74746366)
        if (tag !== 0x74746366) {
            throw new Error('Not a valid TTC file');
        }
        
        const version = data.getUint32(4, false);
        const numFonts = data.getUint32(8, false);
        
        if (numFonts === 0) {
            throw new Error('TTC file contains no fonts');
        }
        
        // 获取第一个字体的 Offset Table 偏移量
        const offset0 = data.getUint32(12, false);
        
        // 读取第一个字体的 Table Directory
        // Offset Table (12 bytes) + Table Records
        const numTables = data.getUint16(offset0 + 4, false);
        
        // 计算新文件大小
        // Header (12 bytes) + Table Records (16 * numTables) + Data
        let headerSize = 12 + 16 * numTables;
        let totalSize = headerSize;
        let tables = [];
        
        for (let i = 0; i < numTables; i++) {
            const recordOffset = offset0 + 12 + 16 * i;
            const tableTag = data.getUint32(recordOffset, false);
            const checkSum = data.getUint32(recordOffset + 4, false);
            const offset = data.getUint32(recordOffset + 8, false);
            const length = data.getUint32(recordOffset + 12, false);
            
            // 对齐 4 字节
            const paddedLength = (length + 3) & ~3;
            
            tables.push({
                tag: tableTag,
                checkSum: checkSum,
                offset: offset,
                length: length,
                paddedLength: paddedLength
            });
            
            totalSize += paddedLength;
        }
        
        // 创建新的 ArrayBuffer
        const newBuffer = new ArrayBuffer(totalSize);
        const newData = new DataView(newBuffer);
        const newBytes = new Uint8Array(newBuffer);
        const originalBytes = new Uint8Array(buffer);
        
        // 写入 Offset Table
        // sfnt version (from original)
        newData.setUint32(0, data.getUint32(offset0, false), false);
        newData.setUint16(4, numTables, false);
        newData.setUint16(6, data.getUint16(offset0 + 6, false), false); // searchRange
        newData.setUint16(8, data.getUint16(offset0 + 8, false), false); // entrySelector
        newData.setUint16(10, data.getUint16(offset0 + 10, false), false); // rangeShift
        
        let currentOffset = headerSize;
        
        // 写入 Table Records 和 数据
        for (let i = 0; i < numTables; i++) {
            const table = tables[i];
            const recordOffset = 12 + 16 * i;
            
            newData.setUint32(recordOffset, table.tag, false);
            newData.setUint32(recordOffset + 4, table.checkSum, false);
            newData.setUint32(recordOffset + 8, currentOffset, false); // 新的 Offset
            newData.setUint32(recordOffset + 12, table.length, false);
            
            // 复制数据
            newBytes.set(originalBytes.subarray(table.offset, table.offset + table.length), currentOffset);
            
            currentOffset += table.paddedLength;
        }
        
        return newBuffer;
    }

    fontInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 使用文件名作为字体名称（去掉扩展名）
        const fontName = file.name.replace(/\.[^/.]+$/, "");
        const isTTC = file.name.toLowerCase().endsWith('.ttc');
        
        try {
            const arrayBuffer = await file.arrayBuffer();
            let fontBuffer = arrayBuffer;

            // 如果是 TTC 文件，提取第一个字体
            if (isTTC) {
                try {
                    fontBuffer = extractFirstFontFromTTC(arrayBuffer);
                    console.log('TTC 字体提取成功');
                } catch (ttcError) {
                    console.warn('TTC 提取失败，尝试直接加载:', ttcError);
                }
            }

            const fontFace = new FontFace(fontName, fontBuffer);
            
            await fontFace.load();
            document.fonts.add(fontFace);
            
            // 添加到下拉列表
            const option = document.createElement('option');
            option.value = fontName; // 直接使用字体名称
            option.textContent = fontName;
            fontSelect.appendChild(option);
            
            // 选中新字体
            fontSelect.value = fontName;
            // 触发更新
            captureArea.style.setProperty('--font-family', fontName);
            
            alert(`字体 "${fontName}" 加载成功！`);
        } catch (err) {
            console.error('字体加载失败:', err);
            alert('字体加载失败，请确保文件格式正确 (.ttf, .otf, .woff, .ttc)。');
        }
        
        // 清空 input
        fontInput.value = '';
    });

    // 实时更新字体
    fontSelect.addEventListener('change', (e) => {
        captureArea.style.setProperty('--font-family', e.target.value);
    });

    // 实时更新对齐方式
    textAlignSelect.addEventListener('change', (e) => {
        const align = e.target.value;
        tableTitle.style.textAlign = align;
        tableSubtitle.style.textAlign = align;
        tableSubSubtitle.style.textAlign = align;
    });

    // 实时更新备注对齐方式
    noteAlignSelect.addEventListener('change', (e) => {
        tableNote.style.textAlign = e.target.value;
    });

    // 实时更新标题颜色
    titleColorInput.addEventListener('input', (e) => {
        tableTitle.style.setProperty('--title-color', e.target.value);
    });

    // 实时更新副标题颜色
    subtitleColorInput.addEventListener('input', (e) => {
        tableSubtitle.style.setProperty('--subtitle-color', e.target.value);
    });
    // 实时更新二级副标题颜色
    subSubtitleColorInput.addEventListener('input', (e) => {
        tableSubSubtitle.style.setProperty('--sub-subtitle-color', e.target.value);
    });
    // 实时更新表头文字颜色
    headerTextColorInput.addEventListener('input', (e) => {
        table.style.setProperty('--header-text-color', e.target.value);
    });

    // 实时更新表格文字颜色
    tableTextColorInput.addEventListener('input', (e) => {
        table.style.setProperty('--table-text-color', e.target.value);
    });

    // 实时更新备注颜色
    noteColorInput.addEventListener('input', (e) => {
        tableNote.style.setProperty('--note-color', e.target.value);
    });

    // 生成随机不规则形状
    function generateRandomShapes() {
        bgShapesContainer.innerHTML = ''; // 清空现有形状
        const count = Math.floor(Math.random() * 5) + 3; // 3-7个形状

        for (let i = 0; i < count; i++) {
            const shape = document.createElement('div');
            shape.classList.add('bg-shape');
            
            // 随机大小
            const size = Math.floor(Math.random() * 300) + 100; // 100-400px
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            
            // 随机位置
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.transform = 'translate(-50%, -50%)'; // 居中定位
            
            // 随机颜色 (使用半透明白色或互补色，这里简单用白色/浅色)
            const opacity = (Math.random() * 0.3 + 0.1).toFixed(2); // 0.1 - 0.4
            shape.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
            
            // 随机不规则圆角 (Blob shape)
            // 格式: top-left top-right bottom-right bottom-left / ...
            const r1 = Math.floor(Math.random() * 40) + 30; // 30-70%
            const r2 = Math.floor(Math.random() * 40) + 30;
            const r3 = Math.floor(Math.random() * 40) + 30;
            const r4 = Math.floor(Math.random() * 40) + 30;
            const r5 = Math.floor(Math.random() * 40) + 30;
            const r6 = Math.floor(Math.random() * 40) + 30;
            const r7 = Math.floor(Math.random() * 40) + 30;
            const r8 = Math.floor(Math.random() * 40) + 30;
            
            shape.style.borderRadius = `${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%`;
            
            bgShapesContainer.appendChild(shape);
        }
    }

    toggleShapesBtn.addEventListener('click', generateRandomShapes);
    
    clearShapesBtn.addEventListener('click', () => {
        bgShapesContainer.innerHTML = '';
    });

    // 生成随机颜色 (HSL)
    function getRandomColor(baseHue = null, variation = 40) {
        let hue;
        if (baseHue !== null) {
            // 在基准色相附近随机偏移
            hue = (baseHue + Math.floor(Math.random() * variation * 2) - variation) % 360;
            if (hue < 0) hue += 360;
        } else {
            hue = Math.floor(Math.random() * 360);
        }
        const saturation = Math.floor(Math.random() * 40) + 60; // 60-100% 饱和度
        const lightness = Math.floor(Math.random() * 30) + 45; // 45-75% 亮度
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // 设置随机渐变背景 (3-4色)
    function setRandomGradient() {
        const angle = Math.floor(Math.random() * 360);
        // 随机决定是3色还是4色
        const colorCount = Math.random() > 0.5 ? 3 : 4;
        const colors = [];
        
        // 随机选择一种生成策略
        // 0: 邻近色 (和谐)
        // 1: 互补色/对比色 (大胆)
        // 2: 随机色 (多彩)
        const strategy = Math.floor(Math.random() * 3);
        
        let baseHue = Math.floor(Math.random() * 360);
        
        for (let i = 0; i < colorCount; i++) {
            let color;
            if (strategy === 0) {
                // 邻近色：色相递增
                const hue = (baseHue + (i * 40) + Math.floor(Math.random() * 20 - 10)) % 360;
                const s = Math.floor(Math.random() * 30) + 60;
                const l = Math.floor(Math.random() * 20) + 50;
                color = `hsl(${hue}, ${s}%, ${l}%)`;
            } else if (strategy === 1) {
                // 对比色：在色环对面取色
                let hue;
                if (i < 2) {
                    hue = (baseHue + Math.floor(Math.random() * 40 - 20)) % 360;
                } else {
                    hue = (baseHue + 180 + Math.floor(Math.random() * 40 - 20)) % 360;
                }
                const s = Math.floor(Math.random() * 30) + 60;
                const l = Math.floor(Math.random() * 20) + 50;
                color = `hsl(${hue}, ${s}%, ${l}%)`;
            } else {
                // 随机色：完全随机
                color = getRandomColor();
            }
            colors.push(color);
        }

        // 构建渐变字符串
        let gradientStr = `linear-gradient(${angle}deg`;
        colors.forEach((color, index) => {
            // 均匀分布
            const percent = Math.floor((index / (colors.length - 1)) * 100);
            gradientStr += `, ${color} ${percent}%`;
        });
        gradientStr += `)`;

        captureArea.style.background = gradientStr;
    }

    // 生成随机不规则弧线 (Arcs) - 使用 Canvas 绘制以确保 html2canvas 兼容性
    function generateRandomShapes() {
        bgShapesContainer.innerHTML = ''; // 清空现有形状
        
        // 创建 Canvas
        const canvas = document.createElement('canvas');
        const width = bgShapesContainer.offsetWidth;
        const height = bgShapesContainer.offsetHeight;
        
        // 设置 Canvas 分辨率 (考虑设备像素比，但 html2canvas 通常按 CSS 像素处理，这里简单设为 1:1 或 2倍)
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        
        const ctx = canvas.getContext('2d');
        bgShapesContainer.appendChild(canvas);

        const count = Math.floor(Math.random() * 10) + 8; // 8-17个弧线

        for (let i = 0; i < count; i++) {
            // 随机参数
            const centerX = Math.random() * width;
            const centerY = Math.random() * height;
            const radius = Math.floor(Math.random() * 200) + 150; // 半径 150-350
            const startAngle = Math.random() * Math.PI * 2;
            const arcLength = (Math.random() * 90 + 60) * (Math.PI / 180); // 60-150度弧长 (弧度)
            const endAngle = startAngle + arcLength;
            const thickness = Math.floor(Math.random() * 15) + 5; // 5-20px 线宽
            const opacity = (Math.random() * 0.2 + 0.1).toFixed(2); // 透明度

            // 绘制渐变弧线
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            
            // 创建线性渐变模拟 conic 效果 (简化版，沿着弧线的切线方向或径向不太好做，
            // 这里使用 createConicGradient 如果支持，或者用 ShadowBlur 模拟发光)
            
            try {
                // 尝试使用 createConicGradient (现代浏览器支持)
                const gradient = ctx.createConicGradient(startAngle, centerX, centerY);
                // 渐变：透明 -> 白色 -> 透明
                // 0deg (relative to startAngle) -> transparent
                // arcLength/2 -> white
                // arcLength -> transparent
                
                // Conic gradient is 0-360 deg (0-2PI). 
                // We need to map our arc relative positions to 0-1 stops.
                // But conic gradient spins around center.
                // We can set stops based on angles.
                
                // Normalize angles to 0-1 range for gradient stops if needed, 
                // but createConicGradient takes angle in radians as start.
                // Stops are 0.0 to 1.0 representing 0 to 360 degrees from startAngle.
                
                // We only want to paint the segment from 0 to arcLength.
                // arcLength in fraction of circle = arcLength / (2*PI)
                const arcFraction = arcLength / (2 * Math.PI);
                
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(arcFraction / 2, `rgba(255, 255, 255, ${opacity})`);
                gradient.addColorStop(arcFraction, `rgba(255, 255, 255, 0)`);
                // The rest is transparent
                gradient.addColorStop(arcFraction + 0.01, `rgba(255, 255, 255, 0)`);
                
                ctx.strokeStyle = gradient;
            } catch (e) {
                // Fallback for browsers without createConicGradient
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            }

            ctx.lineWidth = thickness;
            ctx.lineCap = 'round'; // 圆头
            
            // 添加模糊效果
            ctx.shadowBlur = Math.random() * 3 + 1;
            ctx.shadowColor = "white";
            
            ctx.stroke();
            
            // Reset shadow for next iteration (optional, but good practice if mixing styles)
            ctx.shadowBlur = 0;
        }
    }

    toggleShapesBtn.addEventListener('click', generateRandomShapes);
    
    clearShapesBtn.addEventListener('click', () => {
        bgShapesContainer.innerHTML = '';
    });

    // 绑定按钮事件
    randomBgBtn.addEventListener('click', () => {
        setRandomGradient();
        bgPresetSelect.value = 'custom'; // 切换到自定义，因为随机生成的颜色不在预设中
    });

    // 预设渐变配置
    const gradients = {
        'blue-purple': ['#667eea', '#764ba2'],
        'sunset': ['#eb3349', '#f45c43'],
        'ocean': ['#2193b0', '#6dd5ed'],
        'forest': ['#11998e', '#38ef7d'],
        'cherry': ['#ff9a9e', '#fad0c4']
    };

    // 应用当前选择的渐变
    function applyGradient() {
        const c1 = bgColor1.value;
        const c2 = bgColor2.value;
        const angle = bgAngle.value;
        captureArea.style.background = `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 100%)`;
    }

    // 监听预设选择
    bgPresetSelect.addEventListener('change', (e) => {
        const preset = e.target.value;
        if (preset !== 'custom' && gradients[preset]) {
            const [c1, c2] = gradients[preset];
            bgColor1.value = c1;
            bgColor2.value = c2;
            applyGradient();
        }
    });

    // 监听颜色和角度变化
    [bgColor1, bgColor2, bgAngle].forEach(input => {
        input.addEventListener('input', () => {
            bgPresetSelect.value = 'custom';
            applyGradient();
        });
    });

    // 页面加载时自动设置一次 (如果不是随机的话，这里可以初始化为默认预设)
    // setRandomGradient(); // 之前是随机，现在改为使用默认预设
    // 初始化默认预设
    if (bgPresetSelect.value !== 'custom' && gradients[bgPresetSelect.value]) {
        const [c1, c2] = gradients[bgPresetSelect.value];
        bgColor1.value = c1;
        bgColor2.value = c2;
        applyGradient();
    } else {
        setRandomGradient();
    }

    // 监听 Excel 文件上传
    excelInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });

                // 获取第一个工作表
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];

                // 将工作表转换为 JSON 数据 (二维数组)
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (jsonData.length > 0) {
                    renderTable(jsonData);
                    // 默认使用文件名作为标题（去掉扩展名）
                    const fileName = file.name.replace(/\.[^/.]+$/, "");
                    
                    // 只有当文件名发生变化时，才自动更新标题
                    // 这样可以防止用户在微调同一个 Excel 文件并反复导入时，丢失已手动修改的标题
                    if (fileName !== lastFileName) {
                        titleInput.value = fileName;
                        tableTitle.textContent = fileName;
                        lastFileName = fileName;
                    }
                }
            } catch (error) {
                console.error('Excel 解析错误:', error);
                alert('Excel 文件解析失败，请检查文件是否损坏或格式是否正确。');
            } finally {
                // 无论成功与否，都清空 input，确保下一次能触发 change 事件
                // 即使是同名文件也能重新导入
                excelInput.value = '';
            }
        };
        reader.readAsArrayBuffer(file);
    });

    // 渲染表格函数
    function renderTable(data) {
        // 清空现有表格内容
        table.innerHTML = '';

        // 创建表头
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = data[0]; // 假设第一行是表头

        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText || ''; // 处理空单元格
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // 创建表体
        const tbody = document.createElement('tbody');
        // 从第二行开始遍历数据
        for (let i = 1; i < data.length; i++) {
            const rowData = data[i];
            // 跳过空行
            if (rowData.length === 0) continue;

            const tr = document.createElement('tr');
            // 确保每一行单元格数量与表头一致，防止错位
            for (let j = 0; j < headers.length; j++) {
                const td = document.createElement('td');
                td.textContent = rowData[j] !== undefined ? rowData[j] : '';
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
    }

    function getAdaptiveCaptureOptions() {
        const rect = captureArea.getBoundingClientRect();
        const baseWidth = Math.max(1, Math.ceil(rect.width));
        const baseHeight = Math.max(1, Math.ceil(rect.height));

        // 对超大内容做保守缩放，避免浏览器在超大画布下截断
        const maxDimension = 8192;
        const maxArea = 67000000;
        const idealScale = 2;
        const safeScale = Math.min(
            idealScale,
            maxDimension / baseWidth,
            maxDimension / baseHeight,
            Math.sqrt(maxArea / (baseWidth * baseHeight))
        );

        return {
            width: baseWidth,
            height: baseHeight,
            scale: Math.max(1, Number.isFinite(safeScale) ? safeScale : 1)
        };
    }

    // 显示加载/进度提示
    function showLoading(message) {
        let overlay = document.getElementById('exportLoadingOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'exportLoadingOverlay';
            Object.assign(overlay.style, {
                position: 'fixed',
                top: '0', left: '0', width: '100%', height: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                zIndex: '9999', color: '#fff', fontSize: '20px',
                fontFamily: 'sans-serif'
            });
            const spinner = document.createElement('div');
            Object.assign(spinner.style, {
                border: '6px solid rgba(255,255,255,0.3)',
                borderTop: '6px solid #fff',
                borderRadius: '50%',
                width: '50px', height: '50px',
                animation: 'spin 1s linear infinite',
                marginBottom: '15px'
            });
            if (!document.getElementById('spinKeyframes')) {
                const style = document.createElement('style');
                style.id = 'spinKeyframes';
                style.textContent = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
                document.head.appendChild(style);
            }
            const text = document.createElement('div');
            text.id = 'exportLoadingText';
            overlay.appendChild(spinner);
            overlay.appendChild(text);
            document.body.appendChild(overlay);
        }
        document.getElementById('exportLoadingText').textContent = message;
        overlay.style.display = 'flex';
    }

    function hideLoading() {
        const overlay = document.getElementById('exportLoadingOverlay');
        if (overlay) overlay.style.display = 'none';
    }

    // 导出图片
    exportBtn.addEventListener('click', async () => {
        if (!window.snapdom) {
            alert('SnapDOM 未加载成功，请刷新页面后重试。');
            return;
        }

        try {
            showLoading('正在生成图片，请稍候...');
            // 给 UI 渲染一点时间来显示 loading
            await new Promise(resolve => setTimeout(resolve, 50));
            
            const options = getAdaptiveCaptureOptions();
            const img = await window.snapdom.toPng(captureArea, {
                ...options,
                embedFonts: true
            });

            const link = document.createElement('a');
            link.download = `${tableTitle.textContent}.png`;
            link.href = img.src;
            link.click();
        } catch (err) {
            console.error('导出失败:', err);
            alert('导出图片失败，请查看控制台错误信息。');
        } finally {
            hideLoading();
        }
    });

    // 导出 PDF（单页自适应，不分页，完整保留长表格）
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', async () => {
            if (!window.snapdom) {
                alert('SnapDOM 未加载成功，请刷新页面后重试。');
                return;
            }

            try {
                showLoading('正在渲染高清 PDF，这可能需要几十秒，请耐心等待...');
                await new Promise(resolve => setTimeout(resolve, 50));

                const options = getAdaptiveCaptureOptions();
                const canvas = await window.snapdom.toCanvas(captureArea, {
                    ...options,
                    embedFonts: true,
                    backgroundColor: '#ffffff'
                });

                const { jsPDF } = window.jspdf;

                // PDF 阅读器（如 Adobe Acrobat，Chrome 等）对页面长宽有最大物理尺寸限制（14400 pt = 200 英寸）
                // 超过这个高度会被裁剪掉无法显示。
                // 解决方案：通过换算将页面物理尺寸成比例压缩在 14400pt 内，而保持原图像素分辨率不变
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                
                // 将像素换算到 pt (假设 1px ≈ 0.75pt)
                let pdfWidth = imgWidth * 0.75;
                let pdfHeight = imgHeight * 0.75;
                const maxPt = 14400; // 安全最大尺寸 (pt)
                
                const scale = Math.min(1, maxPt / pdfWidth, maxPt / pdfHeight);
                pdfWidth *= scale;
                pdfHeight *= scale;

                const doc = new jsPDF({
                    orientation: pdfWidth > pdfHeight ? 'l' : 'p',
                    unit: 'pt',
                    format: [pdfWidth, pdfHeight],
                    compress: true
                });

                // 无视页面长度，保持和导出图片一致的原始高宽和清晰度
                // 画布依然采用原始高清像素渲染到这个（更小的）物理尺寸的页面上，利用缩放保证不被裁剪
                doc.addImage(canvas, 'PNG', 0, 0, pdfWidth, pdfHeight);
                doc.save(`${tableTitle.textContent}.pdf`);
            } catch (err) {
                console.error('导出PDF失败:', err);
                alert('导出PDF失败，请查看控制台错误信息。');
            } finally {
                hideLoading();
            }
        });
    }
});
