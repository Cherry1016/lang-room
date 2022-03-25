interface PinyinDict {
    [key: string]: {
        [key: string]: string
    }
}

interface DefDict {
    [key: string]: string
}


export const ListLevel1 = ['爱', '爱好', '八', '爸爸', '吧', '白', '白天', '百', '班', '半', '半年', '半天', '帮', '帮忙', '包', '包子', '杯', '杯子', '北', '北边', '北京', '本', '本子', '比', 
'别', '别的', '别人', '病', '病人', '不大', '不对', '不客气', '不用', '不', '菜', '茶', '差', '常', '常常', '唱', '唱歌', '车', '车票', '车上', '车站', '吃', '吃饭', '出', '出来', '出去', '穿', '床', '次', '从', '错', '打', '打车', '打电话', '打开', '打球', '大', '大学', '大学生', '到', '得到', '地', '的', '等', '地 ', '地点', '地方', '地上', '地图', '弟弟', '第', '点', '电', '电话', '电脑', '电视', '电视机', '电影', '电影院', '东', '东边', '东西', '动', '动作', '都', '读', '读书', '对', '对不起', '多', '多少', '饿', '儿子', '二', '饭', '饭店', '房间', '房子', '放', '放假', '放学', '飞', '飞机', '非常', '分', '风', '干', '干净', '干 ', '干什么', '高', '高兴', 
'告诉', '哥哥', '歌', '个', '给', '跟', '工人', '工作', '关', '关上', '贵', '国', '国家', '国外', '过', '还', '还是', '还有', '孩子', '汉语', '汉字', '好', '好吃', '好看', '好听', '好玩儿', '号', '喝', '和', '很', '后', '后边', '后天', '花', '话', '坏', '还 ', '回', '回答', '回到', '回家', '回来', '回去', '会', '火车', '机场', '机票', '鸡蛋', '几', '记', '记得', '记住', '家', '家里', '家人', '间', '见', '见面', '教', '叫', '教学楼', '姐姐', '介绍', '今年', '今天', '进', '进来', '进去', '九', '就', '觉得', '开', '开车', '开会', '开玩笑', '看', '看病', '看到', '看见', '考', '考试', '渴', '课', '课本', '课文', '口', '块', '快', '来', '来到', '老', '老人', '老师', '了', '累', '冷', '里', '里边', '两', '零｜〇', '六', '楼', '楼上', '楼下', '路', '路口', '路上', '妈妈', '马路', '马上', '吗', '买', '慢', '忙', '毛', '没', '没关系', '没什么', '没事儿', '没有', '妹妹', '门', '门口', '门票', '们', '米饭', '面包', '面条儿', '名字', '明白', '明年', '明天', '拿', '哪', '哪里', '哪儿', '哪些', '那', '那边', '那里', '那儿', '那些', '奶', '奶奶', '男', '男孩儿', '男朋友', '男人', '男生', '南', '南边', '难', '呢', '能', '你', '你们', '年', '您', '牛奶', '女', '女儿', 
'女孩儿', '女朋友', '女人', '女生', '旁边', '跑', '朋友', '票', '七', '起', '起床', '起来', '汽车', '前', '前边', '前天', '钱', '钱包', '请', '请假', '请进', '请问', '请坐', '球', '去', '去年', '热', '人', '认识', '认真', '日', '日期', '肉', '三', '山', '商场', '商店', '上', '上班', '上边', '上车', '上次', '上课', '上网', '上午', ' 上学', '少', '谁', '身上', '身体', '什么', '生病', '生气', '生日', '十', '时候', '时间', '事', '试', '是', '是不是', '手', '手机', '书', '书包', '书店', '树', '水', ' 水果', '睡', '睡觉', '说', '说话', '四', '送', '岁', '他', '他们', '她', '她们', '太', '天', '天气', '听', '听到', '听见', '听写', '同学', '图书馆', '外', '外边', 
'外 国', '外语', '玩儿', '晚', '晚饭', '晚上', '网上', '网友', '忘', '忘记', '问', '我', '我们', '五', '午饭', '西', '西边', '洗', '洗手间', '喜欢', '下', '下班', '下边', 
'下车', '下次', '下课', '下午', '下雨', '先', '先生', '现在', '想', '小', '小孩儿', '小姐', '小朋友', '小时', '小学', '小学生', '笑', '写', '谢谢', '新', '新年', '星期', '星期日', '星期天', '行', '休息', '学', '学生', '学习', '学校', '学院', '要', '爷爷', '也', '页', '一', '衣服', '医生', '医院', '一半', '一会儿', '一块儿', '一下儿', '一样', '一边', '一点儿', '一起', '一些', '用', '有', '有的', '有名', '有时候', '有一些', '有用', '右', '右边', '雨', '元', '远', '月', '再', '再见', '在', '在家', '早', '早饭', '早上', '怎么', '站', '找', '找到', '这', '这边', '这里', '这儿', '这些', '着', '真', '真的', '正', '正在', '知道', '知识', '中', '中国', '中间', '中文', 
'中午', '中学', '中学生', '重', '重要', '住', '准备', '桌子', '字', '走', '走路', '最', '最好', '最后', '昨天', '左', '左边', '坐', '坐下', '做', '有时']

export const PinyinDict: PinyinDict = {
    len1: {
        '爱': 'ài',
        '八': 'bā',  
        '吧': 'ba',  
        '白': 'bái', 
        '百': 'bǎi', 
        '班': 'bān', 
        '半': 'bàn', 
        '帮': 'bāng',
        '包': 'bāo', 
        '杯': 'bēi', 
        '北': 'běi', 
        '本': 'běn', 
        '比': 'bǐ',
        '别': 'bié',
        '病': 'bìng',
        '不': 'bù',
        '菜': 'cài',
        '茶': 'chá',
        '差': 'chà',
        '常': 'cháng',
        '唱': 'chàng',
        '车': 'chē',
        '吃': 'chī',
        '出': 'chū',
        '穿': 'chuān',
        '床': 'chuáng',
        '次': 'cì',
        '从': 'cóng',
        '错': 'cuò',
        '打': 'dǎ',
        '大': 'dà',
        '到': 'dào',
        '地': 'de',
        '的': 'de',
        '等': 'děng',
        '第': 'dì',
        '点': 'diǎn',
        '电': 'diàn',
        '东': 'dōng',
        '动': 'dòng',
        '都': 'dōu',
        '读': 'dú',
        '对': 'duì',
        '多': 'duō',
        '饿': 'è',
        '二': 'èr',
        '饭': 'fàn',
        '放': 'fàng',
        '飞': 'fēi',
        '分': 'fēn',
        '风': 'fēng',
        '干': 'gān',
        '高': 'gāo',
        '歌': 'gē',
        '个': 'gè',
        '给': 'gěi',
        '跟': 'gēn',
        '关': 'guān',
        '贵': 'guì',
        '国': 'guó',
        '过': 'guò',
        '还': 'hái',
        '好': 'hǎo',
        '号': 'hào',
        '喝': 'hē',
        '和': 'hé',
        '很': 'hěn',
        '后': 'hòu',
        '花': 'huā',
        '话': 'huà',
        '坏': 'huài',
        '回': 'huí',
        '会': 'huì',
        '几': 'jǐ',
        '记': 'jì',
        '家': 'jiā',
        '间': 'jiān',
        '见': 'jiàn',
        '教': 'jiāo',
        '叫': 'jiào',
        '进': 'jìn',
        '九': 'jiǔ',
        '就': 'jiù',
        '开': 'kāi',
        '看': 'kàn',
        '考': 'kǎo',
        '渴': 'kě',
        '课': 'kè',
        '口': 'kǒu',
        '块': 'kuài',
        '快': 'kuài',
        '来': 'lái',
        '老': 'lǎo',
        '了': 'le',
        '累': 'lèi',
        '冷': 'lěng',
        '里': 'lǐ',
        '两': 'liǎng',
        '六': 'liù',
        '楼': 'lóu',
        '路': 'lù',
        '吗': 'ma',
        '买': 'mǎi',
        '慢': 'màn',
        '忙': 'máng',
        '毛': 'máo',
        '没': 'méi',
        '门': 'mén',
        '们': 'men',
        '拿': 'ná',
        '哪': 'nǎ',
        '那': 'nà',
        '奶': 'nǎi',
        '男': 'nán',
        '南': 'nán',
        '难': 'nán',
        '呢': 'ne',
        '能': 'néng',
        '你': 'nǐ',
        '年': 'nián',
        '您': 'nín',
        '女': 'nǚ',
        '跑': 'pǎo',
        '票': 'piào',
        '七': 'qī',
        '起': 'qǐ',
        '前': 'qián',
        '钱': 'qián',
        '请': 'qǐng',
        '球': 'qiú',
        '去': 'qù',
        '热': 'rè',
        '人': 'rén',
        '日': 'rì',
        '肉': 'ròu',
        '三': 'sān',
        '山': 'shān',
        '上': 'shàng',
        '少': 'shǎo',
        '谁': 'shéi',
        '十': 'shí',
        '事': 'shì',
        '试': 'shì',
        '是': 'shì',
        '手': 'shǒu',
        '书': 'shū',
        '树': 'shù',
        '水': 'shuǐ',
        '睡': 'shuì',
        '说': 'shuō',
        '四': 'sì',
        '送': 'sòng',
        '岁': 'suì',
        '他': 'tā',
        '她': 'tā',
        '太': 'tài',
        '天': 'tiān',
        '听': 'tīng',
        '外': 'wài',
        '晚': 'wǎn',
        '忘': 'wàng',
        '问': 'wèn',
        '我': 'wǒ',
        '五': 'wǔ',
        '西': 'xī',
        '洗': 'xǐ',
        '下': 'xià',
        '先': 'xiān',
        '想': 'xiǎng',
        '小': 'xiǎo',
        '笑': 'xiào',
        '写': 'xiě',
        '新': 'xīn',
        '行': 'xíng',
        '学': 'xué',
        '要': 'yào',
        '也': 'yě',
        '页': 'yè',
        '一': 'yī',
        '用': 'yòng',
        '有': 'yǒu',
        '右': 'yòu',
        '雨': 'yǔ',
        '元': 'yuán',
        '远': 'yuǎn',
        '月': 'yuè',
        '再': 'zài',
        '在': 'zài',
        '早': 'zǎo',
        '站': 'zhàn',
        '找': 'zhǎo',
        '这': 'zhè',
        '着': 'zhe',
        '真': 'zhēn',
        '正': 'zhèng',
        '中': 'zhōng',
        '重': 'zhòng',
        '住': 'zhù',
        '字': 'zì',
        '走': 'zǒu',
        '最': 'zuì',
        '左': 'zuǒ',
        '坐': 'zuò',
        '做': 'zuò'
    },
    len2: {
        '爱好': 'ài hào',
        '爸爸': 'bàba',     
        '白天': 'bái tiān', 
        '半年': 'bàn nián', 
        '半天': 'bàn tiān', 
        '帮忙': 'bāng máng',
        '包子': 'bāo zi',   
        '杯子': 'bēi zi',   
        '北边': 'běi biān', 
        '北京': 'běi jīng', 
        '本子': 'běn zi',   
        '别的': 'bié de',   
        '别人': 'bié·rén',
        '病人': 'bìng rén',
        '不大': 'bú dà',
        '不对': 'bú duì',
        '不用': 'bú yòng',
        '常常': 'cháng cháng',
        '唱歌': 'chàng gē',
        '车票': 'chē piào',
        '车上': 'chē shàng',
        '车站': 'chē zhàn',
        '吃饭': 'chī fàn',
        '出来': 'chū lái',
        '出去': 'chū qù',
        '打车': 'dǎ chē',
        '打开': 'dǎ kāi',
        '打球': 'dǎ qiú',
        '大学': 'dà xué',
        '得到': 'dé dào',
        '地 ': 'dì',
        '地点': 'dìdiǎn',
        '地方': 'dìfang',
        '地上': 'dì shàng',
        '地图': 'dìtú',
        '弟弟': 'dì di',
        '电话': 'diàn huà',
        '电脑': 'diànnǎo',
        '电视': 'diànshì',
        '电影': 'diànyǐng',
        '东边': 'dōng biān',
        '东西': 'dōngxi',
        '动作': 'dòngzuò',
        '读书': 'dú shū',
        '多少': 'duōshao',
        '儿子': 'érzi',
        '饭店': 'fàndiàn',
        '房间': 'fángjiān',
        '房子': 'fáng zi',
        '放假': 'fàng jià',
        '放学': 'fàng xué',
        '飞机': 'fēijī',
        '非常': 'fēicháng',
        '干净': 'gānjìng',
        '干 ': 'gàn',
        '高兴': 'gāoxìng',
        '告诉': 'gàosu',
        '哥哥': 'gē ge',
        '工人': 'gōngrén',
        '工作': 'gōngzuò',
        '关上': 'guān shàng',
        '国家': 'guójiā',
        '国外': 'guó wài',
        '还是': 'háishi',
        '还有': 'hái yǒu',
        '孩子': 'háizi',
        '汉语': 'hànyǔ',
        '汉字': 'hàn zì',
        '好吃': 'hǎochī',
        '好看': 'hǎo kàn',
        '好听': 'hǎo tīng',
        '后边': 'hòu biān',
        '后天': 'hòu tiān',
        '还 ': 'huán',
        '回答': 'huídá',
        '回到': 'huí dào',
        '回家': 'huí jiā',
        '回来': 'huí lái',
        '回去': 'huí qù',
        '火车': 'huǒ chē',
        '机场': 'jīchǎng',
        '机票': 'jī piào',
        '鸡蛋': 'jīdàn',
        '记得': 'jìdé',
        '记住': 'jì zhù',
        '家里': 'jiā lǐ',
        '家人': 'jiā rén',
        '见面': 'jiànmiàn',
        '姐姐': 'jiě jie',
        '介绍': 'jièshào',
        '今年': 'jīn nián',
        '今天': 'jīntiān',
        '进来': 'jìn lái',
        '进去': 'jìn qù',
        '觉得': 'juéde',
        '开车': 'kāi chē',
        '开会': 'kāi huì',
        '看病': 'kàn bìng',
        '看到': 'kàn dào',
        '看见': 'kànjiàn',
        '考试': 'kǎoshì',
        '课本': 'kè běn',
        '课文': 'kè wén',
        '来到': 'lái dào',
        '老人': 'lǎo rén',
        '老师': 'lǎoshī',
        '里边': 'lǐ biān',
        '楼上': 'lóu shàng',
        '楼下': 'lóu xià',
        '路口': 'lù kǒu',
        '路上': 'lù shàng',
        '妈妈': 'mā ma',
        '马路': 'mǎ lù',
        '马上': 'mǎshàng',
        '没有': 'méi yǒu',
        '妹妹': 'mèi mei',
        '门口': 'mén kǒu',
        '门票': 'mén piào',
        '米饭': 'mǐfàn',
        '面包': 'miànbāo',
        '名字': 'míngzi',
        '明白': 'míngbai',
        '明年': 'míng nián',
        '明天': 'míngtiān',
        '哪里': 'nǎ lǐ',
        '哪儿': 'nǎr',
        '哪些': 'nǎ xiē',
        '那边': 'nà biān',
        '那里': 'nà lǐ',
        '那儿': 'nàr',
        '那些': 'nà xiē',
        '奶奶': 'nǎinai',
        '男人': 'nán ren',
        '男生': 'nán shēng',
        '南边': 'nán biān',
        '你们': 'nǐ men',
        '牛奶': 'niúnǎi',
        '女儿': 'nǚ’ér',
        '女人': 'nǚ ren',
        '女生': 'nǚ shēng',
        '旁边': 'pángbiān',
        '朋友': 'péngyou',
        '起床': 'qǐchuáng',
        '起来': 'qǐlái',
        '汽车': 'qì chē',
        '前边': 'qián biān',
        '前天': 'qián tiān',
        '钱包': 'qián bāo',
        '请假': 'qǐngjià',
        '请进': 'qǐng jìn',
        '请问': 'qǐng wèn',
        '请坐': 'qǐng zuò',
        '去年': 'qùnián',
        '认识': 'rènshi',
        '认真': 'rènzhēn',
        '日期': 'rìqī',
        '商场': 'shāng chǎng',
        '商店': 'shāngdiàn',
        '上班': 'shàngbān',
        '上边': 'shàng biān',
        '上车': 'shàng chē',
        '上次': 'shàng cì',
        '上课': 'shàng kè',
        '上网': 'shàngwǎng',
        '上午': 'shàngwǔ',
        '上学': 'shàng xué',
        '身上': 'shēn shàng',
        '身体': 'shēntǐ',
        '什么': 'shénme',
        '生病': 'shēngbìng',
        '生气': 'shēngqì',
        '生日': 'shēngrì',
        '时候': 'shíhou',
        '时间': 'shíjiān',
        '手机': 'shǒujī',
        '书包': 'shū bāo',
        '书店': 'shū diàn',
        '水果': 'shuǐguǒ',
        '睡觉': 'shuìjiào',
        '说话': 'shuōhuà',
        '他们': 'tā men',
        '她们': 'tā men',
        '天气': 'tiānqì',
        '听到': 'tīng dào',
        '听见': 'tīng jiàn',
        '听写': 'tīng xiě',
        '同学': 'tóngxué',
        '外边': 'wài biān',
        '外国': 'wài guó',
        '外语': 'wài yǔ',
        '玩儿': 'wánr',
        '晚饭': 'wǎn fàn',
        '晚上': 'wǎnshang',
        '网上': 'wǎng shàng',
        '网友': 'wǎng yǒu',
        '忘记': 'wàngjì',
        '我们': 'wǒmen',
        '午饭': 'wǔ fàn',
        '西边': 'xī biān',
        '喜欢': 'xǐhuan',
        '下班': 'xià bān',
        '下边': 'xià biān',
        '下车': 'xià chē',
        '下次': 'xià cì',
        '下课': 'xià kè',
        '下午': 'xiàwǔ',
        '下雨': 'xiàyǔ',
        '先生': 'xiānsheng',
        '现在': 'xiànzài',
        '小姐': 'xiǎojiě',
        '小时': 'xiǎoshí',
        '小学': 'xiǎo xué',
        '谢谢': 'xièxie',
        '新年': 'xīn nián',
        '星期': 'xīngqī',
        '休息': 'xiūxi',
        '学生': 'xuésheng',
        '学习': 'xuéxí',
        '学校': 'xuéxiào',
        '学院': 'xué yuàn',
        '爷爷': 'yéye',
        '衣服': 'yīfu',
        '医生': 'yīshēng',
        '医院': 'yīyuàn',
        '一半': 'yí bàn',
        '一样': 'yíyàng',
        '一边': 'yìbiān',
        '一起': 'yìqǐ',
        '一些': 'yì xiē',
        '有的': 'yǒu de',
        '有名': 'yǒumíng',
        '有用': 'yǒu yòng',
        '右边': 'yòubian',
        '再见': 'zàijiàn',
        '在家': 'zài jiā',
        '早饭': 'zǎo fàn',
        '早上': 'zǎoshang',
        '怎么': 'zěnme',
        '找到': 'zhǎo dào',
        '这边': 'zhè biān',
        '这里': 'zhè lǐ',
        '这儿': 'zhèr',
        '这些': 'zhè xiē',
        '真的': 'zhēn de',
        '正在': 'zhèngzài',
        '知道': 'zhīdào',
        '知识': 'zhīshi',
        '中国': 'zhōngguó',
        '中间': 'zhōngjiān',
        '中文': 'zhōngwén',
        '中午': 'zhōngwǔ',
        '中学': 'zhōng xué',
        '重要': 'zhòngyào',
        '准备': 'zhǔnbèi',
        '桌子': 'zhuōzi',
        '走路': 'zǒu lù',
        '最好': 'zuìhǎo',
        '最后': 'zuìhòu',
        '昨天': 'zuótiān',
        '左边': 'zuǒbian',
        '坐下': 'zuò xià',
        '有时': 'yǒu shí',
    },
    len3: {
        '不客气': 'bú kè qì',
        '打电话': 'dǎ diàn huà',   
        '大学生': 'dà xué shēng',  
        '电视机': 'diàn shì jī',   
        '电影院': 'diàn yǐng yuàn',
        '对不起': 'duìbuqǐ',       
        '干什么': 'gàn shén me',   
        '好玩儿': 'hǎo wánr',      
        '教学楼': 'jiào xué lóu',  
        '开玩笑': 'kāiwánxiào',    
        '零｜〇': 'líng ｜ líng',  
        '没关系': 'méiguānxi',     
        '没什么': 'méi shén me',
        '没事儿': 'méi shìr',
        '面条儿': 'miàn tiáor',
        '男孩儿': 'nán háir',
        '男朋友': 'nán péng yǒu',
        '女孩儿': 'nǚ háir',
        '女朋友': 'nǚ péng yǒu',
        '是不是': 'shì bú shì',
        '图书馆': 'túshūguǎn',
        '洗手间': 'xǐshǒujiān',
        '小孩儿': 'xiǎo háir',
        '小朋友': 'xiǎo péng yǒu',
        '小学生': 'xiǎo xué shēng',
        '星期日': 'xīng qī rì',
        '星期天': 'xīng qī tiān',
        '一会儿': 'yíhuìr',
        '一块儿': 'yí kuàir',
        '一下儿': 'yí xiàr',
        '一点儿': 'yīdiǎnr',
        '有时候': 'yǒu shí hòu',
        '有一些': 'yǒu yì xiē',
        '中学生': 'zhōng xué shēng',
    }
}

export const DefDict: DefDict = {
    '爱': 'love',
    '爱好': 'hobby',
    '八': 'eight',
    '爸爸': 'dad',
    '吧': 'interjection particle',
    '白': 'white',
    '白天': 'day',
    '百': 'hundred',
    '班': 'class',
    '半': 'half',
    '半年': 'half a year',        
    '半天': 'half day',
    '帮': 'help',
    '帮忙': 'help',
    '包': 'package',
    '包子': 'bun',
    '杯': 'cup',
    '杯子': 'cup',
    '北': 'north',
    '北边': 'North side',
    '北京': 'Beijing',
    '本': 'measure word for books',
    '本子': 'book',
    '比': 'particle used for comparison',
    '别': 'Don’t',
    '别的': 'other',
    '别人': 'other people',
    '病': 'disease',
    '病人': 'patient',
    '不大': 'not big',
    '不对': 'wrong',
    '不客气': 'You’re welcome',
    '不用': 'No need to',
    '不': 'No',
    '菜': 'dish',
    '茶': 'tea',
    '差': 'differ from; bad; short of',
    '常': 'often',
    '常常': 'often',
    '唱': 'sing',
    '唱歌': 'sing',
    '车': 'car',
    '车票': 'ticket',
    '车上': 'in the car',
    '车站': 'station',
    '吃': 'eat',
    '吃饭': 'have meal',
    '出': 'out',
    '出来': 'come',
    '出去': 'go out',
    '穿': 'wear',
    '床': 'bed',
    '次': 'measure word for times/frequency',
    '从': 'from',
    '错': 'wrong',
    '打': '"hit/take"',
    '打车': 'take a taxi',
    '打电话': 'make a phonecall',
    '打开': 'turn on',
    '打球': 'play ball',
    '大': '"large',
    '大学': 'university',
    '大学生': 'university student',
    '到': 'reach',
    '得到': 'get',
    '地': 'auxiliary word',
    '的': '(aux.)',
    '等': 'wait',
    '地 ': 'ground',
    '地点': 'location',
    '地方': 'local',
    '地上': 'on the ground',
    '地图': 'Map',
    '弟弟': 'younger brother',
    '第': 'auxiliary word for ordinal numbers',
    '点': 'spot',
    '电': 'electricity',
    '电话': 'phone',
    '电脑': 'Computer',
    '电视': 'television',
    '电视机': 'television',
    '电影': 'Film',
    '电影院': 'cinema; movie theater',
    '东': 'east',
    '东边': 'east side',
    '东西': 'thing',
    '动': 'move',
    '动作': 'action',
    '都': 'all',
    '读': 'read',
    '读书': 'reading; study',
    '对': 'right',
    '对不起': 'I’m sorry.',
    '多': 'many; much; more',
    '多少': 'how much',
    '饿': 'hungry',
    '儿子': 'Son',
    '二': 'Two',
    '饭': 'rice; meal',
    '饭店': 'restaurant',
    '房间': 'Room',
    '房子': 'house; building',
    '放': 'discharge',
    '放假': 'holiday; have a holiday',
    '放学': 'off school',
    '飞': 'fly',
    '飞机': 'aircraft',
    '非常': 'very',
    '分': 'minute; point; part;',
    '风': 'wind',
    '干': 'dry',
    '干净': 'clean',
    '干 ': 'do',
    '干什么': 'What to do',
    '高': 'high',
    '高兴': 'happy',
    '告诉': 'tell',
    '哥哥': 'elder brother',
    '歌': 'song',
    '个': 'individual',
    '给': 'give',
    '跟': 'with',
    '工人': 'Worker',
    '工作': 'work',
    '关': 'shut; close; turn off',
    '关上': 'close;shut to; turn off',
    '贵': 'noble',
    '国': 'country; state; nation',
    '国家': 'Country',
    '国外': 'foreign; oversea; abroad',
    '过': 'pass',
    '还': 'also; still; yet',
    '还是': 'still',
    '还有': 'also; in addition; besides',
    '孩子': 'Children',
    '汉语': 'Chinese',
    '汉字': 'Chinese character',
    '好': 'good',
    '好吃': 'Yummy',
    '好看': 'good looking',
    '好听': 'pleasant to hear',
    '好玩儿': 'fun; interesting',
    '号': 'Number/date',
    '喝': 'drink',
    '和': 'and',
    '很': 'very',
    '后': 'back; behind; after; later',
    '后边': 'behind; back',
    '后天': 'day after tomorrow',
    '花': 'flower',
    '话': 'word; words',
    '坏': 'bad',
    '还 ': 'return; pay back',
    '回': 'go back; return',
    '回答': 'Answer',
    '回到': 'back to',
    '回家': 'go home; return home',
    '回来': 'come back; return',
    '回去': 'go back',
    '会': 'can; be able to',
    '火车': 'train',
    '机场': 'Airport',
    '机票': 'air ticket',
    '鸡蛋': 'Egg',
    '几': 'several',
    '记': 'remember',
    '记得': 'remember',
    '记住': 'remember; keep in mind',
    '家': 'home',
    '家里': 'In the home',
    '家人': 'family',
    '间': 'between; measure word for rooms',
    '见': 'see; meet',
    '见面': 'meet',
    '教': 'teach',
    '叫': 'call; be called',
    '教学楼': 'teaching building',
    '姐姐': 'elder sister',
    '介绍': 'introduce',
    '今年': 'this year',
    '今天': 'Today',
    '进': 'enter',
    '进来': 'come in',
    '进去': 'go in',
    '九': 'Nine',
    '就': 'as soon as; right away; then',
    '觉得': 'Think',
    '开': 'open',
    '开车': 'drive; drive a car',
    '开会': 'have a meeting',
    '开玩笑': 'Make fun of',
    '看': 'see',
    '看病': 'see a doctor',
    '看到': 'see',
    '看见': 'seeing',
    '考': 'test; examine',
    '考试': 'Examination',
    '渴': 'thirsty',
    '课': 'course',
    '课本': 'textbook',
    '课文': 'text',
    '口': 'mouth',
    '块': 'block',
    '快': 'fast',
    '来': 'come',
    '来到': 'come; arrive',
    '老': 'old; aged',
    '老人': 'old people; the aged',
    '老师': 'Teacher',
    '了': 'past tense marker',
    '累': 'tired',
    '冷': 'cold',
    '里': 'in',
    '里边': 'inside',
    '两': 'two',
    '零｜〇': 'zero',
    '六': 'Six',
    '楼': 'floor',
    '楼上': 'upstairs',
    '楼下': 'downstairs',
    '路': 'road',
    '路口': 'intersection; crossing',
    '路上': 'on the road',
    '妈妈': 'mom',
    '马路': 'road; street',
    '马上': 'Right off',
    '吗': 'auxiliary word',
    '买': 'buy',
    '慢': 'slow',
    '忙': 'busy',
    '毛': 'a fractional unit of money in China (measure word)',
    '没': 'no',
    '没关系': 'No problem',
    '没什么': 'It’s nothing',
    '没事儿': 'It’s okay',
    '没有': 'have not; no',
    '妹妹': 'younger sister',
    '门': 'door',
    '门口': 'doorway',
    '门票': 'tickets',
    '们': 'plural marker for pronouns',
    '米饭': 'Steamed Rice',
    '面包': 'Bread',
    '面条儿': 'noodles',
    '名字': 'Name',
    '明白': 'clear',
    '明年': 'next year',
    '明天': 'Tomorrow',
    '拿': 'take',
    '哪': 'which',
    '哪里': 'where',
    '哪儿': 'where',
    '哪些': 'which',
    '那': 'that',
    '那边': 'there',
    '那里': 'there',
    '那儿': 'there',
    '那些': 'those',
    '奶': 'milk',
    '奶奶': 'grandma',
    '男': 'Man',
    '男孩儿': 'boy',
    '男朋友': 'boyfriend',
    '男人': 'man',
    '男生': 'boy',
    '南': 'south',
    '南边': 'south; south side',
    '难': 'disaster; blame',
    '呢': 'auxiliary word',
    '能': 'can',
    '你': 'you',
    '你们': 'you',
    '年': 'year',
    '您': 'you',
    '牛奶': 'milk',
    '女': 'woman',
    '女儿': 'daughter',
    '女孩儿': 'girl',
    '女朋友': 'girlfriend',
    '女人': 'woman',
    '女生': 'girl',
    '旁边': 'Side',
    '跑': 'run',
    '朋友': 'Friend',
    '票': 'ticket',
    '七': 'Seven',
    '起': 'get up; start; rise',
    '起床': 'Get up',
    '起来': 'get up',
    '汽车': 'car',
    '前': 'front',
    '前边': 'in front',
    '前天': 'the day before yesterday',
    '钱': 'money',
    '钱包': 'wallet',
    '请': 'please',
    '请假': 'ask for leave',
    '请进': 'please come in',
    '请问': 'excuse me',
    '请坐': 'please have a seat',
    '球': 'ball',
    '去': 'go',
    '去年': 'Last year',
    '热': 'heat',
    '人': 'people',
    '认识': 'know',
    '认真': 'earnest',
    '日': 'date',
    '日期': 'Date',
    '肉': 'meat',
    '三': 'Three',
    '山': 'mountain',
    '商场': 'mall; shopping mall',
    '商店': 'Shop',
    '上': 'upper',
    '上班': 'go to work',
    '上边': 'above; on',
    '上车': 'get on',
    '上次': 'last time',
    '上课': 'attend class; have a class',
    '上网': 'Surf the Internet',
    '上午': 'morning',
    '上学': 'go to school',
    '少': 'less',
    '谁': 'who',
    '身上': 'body; on one’s body',
    '身体': 'body',
    '什么': 'What',
    '生病': 'Fall ill',
    '生气': 'get angry',
    '生日': 'Birthday',
    '十': 'Ten',
    '时候': 'time',
    '时间': 'time',
    '事': 'thing',
    '试': 'try',
    '是': 'yes',
    '是不是': 'isn’t it?',
    '手': 'hand',
    '手机': 'Mobile phone',
    '书': 'book',
    '书包': 'school bag',
    '书店': 'bookstore',
    '树': 'tree',
    '水': 'water',
    '水果': 'Fruits',
    '睡': 'sleep',
    '睡觉': 'sleep',
    '说': 'speak',
    '说话': 'talk',
    '四': 'Four',
    '送': 'give',
    '岁': '"year',
    '他': 'he',
    '他们': 'they',
    '她': 'she',
    '她们': 'they',
    '太': 'too',
    '天': 'day',
    '天气': 'weather',
    '听': 'hear',
    '听到': 'hear',
    '听见': 'hear',
    '听写': 'dictation; dictate',
    '同学': 'Classmate',
    '图书馆': 'Library',
    '外': '"abroad',
    '外边': 'outside',
    '外国': 'foreign country',
    '外语': 'foreign language',
    '玩儿': 'play',
    '晚': 'late',
    '晚饭': 'dinner',
    '晚上': 'Night',
    '网上': 'online',
    '网友': 'net friend',
    '忘': 'forget',
    '忘记': 'forget',
    '问': 'ask',
    '我': 'I',
    '我们': 'We',
    '五': 'Five',
    '午饭': 'lunch',
    '西': 'west',
    '西边': 'west; west side',
    '洗': 'wash',
    '洗手间': 'Restroom',
    '喜欢': 'like',
    '下': 'below; under; next; go down; get off',
    '下班': 'get off work',
    '下边': 'below; under',
    '下车': 'get off',
    '下次': 'next time',
    '下课': 'finish class',
    '下午': 'Afternoon',
    '下雨': 'rain',
    '先': 'before',
    '先生': 'Sir',
    '现在': 'Now',
    '想': 'think',
    '小': 'Small',
    '小孩儿': 'child; kid',
    '小姐': 'Miss',
    '小朋友': 'child; kid',
    '小时': 'hour',
    '小学': 'primary school; elementary schoo',
    '小学生': 'elementary school student',
    '笑': 'laugh',
    '写': 'write',
    '谢谢': 'Thank you',
    '新': 'new',
    '新年': 'New Year',
    '星期': 'week',
    '星期日': 'Sunday',
    '星期天': 'Sunday',
    '行': 'That’s ok',
    '休息': 'Rest',
    '学': 'learn; study',
    '学生': 'Student',
    '学习': 'Study',
    '学校': 'School',
    '学院': 'college; academy',
    '要': 'want',
    '爷爷': 'grandpa',
    '也': 'also',
    '页': 'page',
    '一': 'One',
    '衣服': 'clothes',
    '医生': 'Doctor',
    '医院': 'Hospital',
    '一半': 'half',
    '一会儿': 'A little while',
    '一块儿': 'together',
    '一下儿': 'a little bit',
    '一样': 'equally',
    '一边': 'One side',
    '一点儿': 'a little bit',
    '一起': 'together',
    '一些': 'some',
    '用': 'use',
    '有': 'have',
    '有的': 'some',
    '有名': 'Famous',
    '有时候': 'sometimes',
    '有一些': 'some',
    '有用': 'useful',
    '右': 'right',
    '右边': 'Right',
    '雨': 'rain',
    '元': 'element; Yuan',
    '远': 'far',
    '月': 'month',
    '再': 'again',
    '再见': 'Bye',
    '在': 'stay; in process of',
    '在家': 'at home',
    '早': 'early',
    '早饭': 'breakfast',
    '早上': 'Morning',
    '怎么': 'How',
    '站': 'station',
    '找': 'look for',
    '找到': 'find',
    '这': 'Here',
    '这边': 'here',
    '这里': 'here',
    '这儿': 'here',
    '这些': 'these',
    '着': 'in process of',
    '真': 'really',
    '真的': 'really',
    '正': 'just; exactly',
    '正在': 'in process of',
    '知道': 'know',
    '知识': 'knowledge',
    '中': 'middle; in',
    '中国': 'China',
    '中间': 'Middle',
    '中文': 'Chinese',
    '中午': 'Noon',
    '中学': 'middle school',
    '中学生': 'middle School student',
    '重': 'heavy',
    '重要': 'important',
    '住': 'live',
    '准备': 'Get ready',
    '桌子': 'Table',
    '字': '"word',
    '走': '"go',
    '走路': 'walk',
    '最': 'most',
    '最好': 'Best',
    '最后': 'Last',
    '昨天': 'Yesterday',
    '左': 'left',
    '左边': 'left',
    '坐': 'sit',
    '坐下': 'sit down',
    '做': 'do',
    '有时': 'sometimes',
}

