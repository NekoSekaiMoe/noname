window.noname_update = {
	version: "1.10.11.3",
	update: "NULL", //新版本更新文件较多，直接强制进行全量更新
	changeLog: [
		"跟进v1.10.15.1的更新内容（by 棘手怀念摧毁），已跟进#1989前的Pull requests",
		// "即将跟进：#1989/#1994/#2004/#2008/#2009/#2011/#2015/#2016/#2019/#2029/#2031/#2032/#2033/#2037/#2038/#2039/#2040/#2041/#2042/#2043/#2045/#2046...",
		// "计划提前跟进：神武将、国战-紫气东来、国战-全武将无双、老友季、君子六艺、星火燎原、异构将（崔令仪、刘懿君、清河公主等）、#2210/#2234/#2350?",
		// "提前跟进中：#3032、一将成名、OL·魔、威系列、兵势篇、蚀心入魔、四象封印（#2405等）",
		// "已提前跟进：",
		// "#2160/#2170/#2179/#2203/#2325/#2345/#2410/#2478/#2531/#2542/#2588/#2792/#2817/#2830/#2831/#2832/#2834/#2871/#2894/#2926/#2934/#2966/#3108/#3310/#3377/#3391",
		// "新杀张琪瑛、OL吕玲绮、手杀崔芙、曲阿小将",
		// "十二生肖",
		// "剑阁四将",
		// "表情包更新",
		// "其他更新略",
		
		// 备忘：
		// roundEnd时机待修复（部分模式有武将阵亡后时机触发有问题？）
		// phaseAny时机待适配
		// event.checkKuanggu、event.checkJiushi等待适配（现暂时要先改成新本体noname\library\assembly\buildin.js里的代码）
		// typeof get.strNumber待适配
		// player.addExtraEquip待适配（视为装备）
		// docs\skin-guide.md本体换肤待适配
		// #3391：get.tag(card, "losehp")修复为get.tag(card, "loseHp")
		
		// extra
		// addVirtualEquip、$addVirtualEquip、addVirtualJudge、$addVirtualJudge、game.addGlobalSkill("equipEnable");、removeVirtualEquip、removeVirtualJudge等待适配（26神黄月英zc26_shenxie待修复）
		// bingshi
		// get.addNewRowList待适配（势陆郁生mb_luyusheng暂时可用）
		// sxrm
		// 疑蒋干sxrmzongheng待修复
		// 加魔势力？还是先临时修改为神势力吧（by 棘手怀念摧毁）
	],
	files: [],
};
