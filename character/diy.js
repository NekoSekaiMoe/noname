import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "diy",
		connect: true,
		connectBanned: [
			"diy_tianyu",
			"diy_yangyi",
			"diy_lukang",
			"ns_huamulan",
			"ns_yuji",
			"ns_duangui",
			"ns_liuzhang",
		],
		character: {
			noname: ["female", "key", 3, ["noname_zhuyuan", "noname_duocai"]],

			ns_huangchengyan: ["male", "shu", 3, ["nslongyue", "nszhenyin"]],
			ns_sunchensunjun: ["male", "wu", 5, ["nsxianhai", "nsxingchu"]],
			ns_yuanxi: ["male", "qun", 4, ["nsshengyan", "nsdaizhan"]],
			ns_caoshuang: ["male", "wei", 4, ["nsjiquan", "nsfuwei"]],
			ns_sunyi: ["male", "wu", 4, ["nsguolie"]],
			ns_huangwudie: ["female", "shu", 4, ["nsdiewu", "nslingying", "nspojian"]],
			ns_chentai: ["male", "wei", 4, ["nsweiyuan", "nsjuxian"]],
			ns_zhangning: ["female", "qun", 3, ["nsfuzhou", "nsguidao", "nstaiping"]],
			ns_yanghu: ["male", "jin", 3, ["nsbizhao", "nsqingde", "nsyidi"], ["hiddenSkill"]],
			ns_zanghong: ["male", "qun", 4, ["nsshimeng"]],
			ns_ruanji: ["male", "wei", 3, ["nsshizui", "nsxiaoye"]],
			ns_limi: ["male", "jin", 3, ["nstuilun"]],
			ns_zhonglimu: ["male", "wu", 4, ["nskuanhuai", "nsdingbian"]],
			prp_zhugeliang: ["male", "shu", 3, ["nsxingyun", "nshanlang"]],

			ns_zhangwei: ["female", "shu", 3, ["nsqiyue", "nsxuezhu"]],
			diy_wenyang: ["male", "wei", "4/6", ["lvli", "choujue"]],
			// diy_caocao:['male','wei',4,['xicai','diyjianxiong','hujia']],
			diy_hanlong: ["male", "wei", 4, ["siji", "ciqiu"]],
			diy_feishi: ["male", "shu", 3, ["nsshuaiyan", "moshou"]],
			diy_liuyan: ["male", "qun", 3, ["juedao", "geju"]],
			// diy_luxun:['male','wu',3,['shaoying','zonghuo']],
			diy_yuji: ["male", "qun", 3, ["diyguhuo", "diychanyuan"]],
			// diy_zhouyu:['male','wu',3,['jieyan','honglian']],
			// diy_zhouyu:['male','wu',3,['xiongzi','yaliang']],
			diy_caiwenji: ["female", "qun", 3, ["beige", "guihan"]],
			diy_lukang: ["male", "wu", 4, ["luweiyan", "qianxun"]],
			// diy_xuhuang:['male','wei',4,['diyduanliang']],
			// diy_dianwei:['male','wei',4,['diyqiangxi']],
			// diy_huangzhong:['male','shu',4,['liegong','fuli']],
			// diy_weiyan:['male','shu',4,['diykuanggu']],
			diy_zhenji: ["female", "wei", 3, ["diy_jiaoxia", "yiesheng"]],
			// diy_menghuo:['male','shu',4,['huoshou','zaiqix']],
			//re_huangyueying:['female','shu',3,['rejizhi','qicai']],

			diy_liufu: ["male", "wei", 3, ["zhucheng", "duoqi"]],
			diy_xizhenxihong: ["male", "shu", 4, ["fuchou", "jinyan"]],
			diy_liuzan: ["male", "wu", 4, ["kangyin"]],
			diy_zaozhirenjun: ["male", "wei", 3, ["liangce", "jianbi", "diyjuntun"]],
			diy_yangyi: ["male", "shu", 3, ["choudu", "liduan"]],
			diy_tianyu: ["male", "wei", 4, ["chezhen", "youzhan"]],

			ns_zuoci: ["male", "qun", 3, ["nsxinsheng", "nsdunxing"]],
			ns_lvzhi: ["female", "qun", 3, ["nsnongquan", "nsdufu"]],
			ns_wangyun: ["male", "qun", 4, ["liangji", "jugong", "chengmou"]],
			ns_nanhua: ["male", "qun", 3, ["nshuanxian", "nstaiping_nh", "nsshoudao"]],
			ns_nanhua_left: ["male", "qun", 2, [], ["unseen"]],
			ns_nanhua_right: ["female", "qun", 2, [], ["unseen"]],
			ns_huamulan: ["female", "qun", 3, ["nscongjun", "xiaoji", "gongji"]],
			ns_huangzu: ["male", "qun", 4, ["nsjihui", "nsmouyun"]],
			ns_jinke: ["male", "qun", 4, ["nspinmin", "nsshishou"]],
			ns_yanliang: [
				"male",
				"qun",
				4,
				["nsduijue", "nsshuangxiong", "dualside"],
				["dualside:ns_wenchou"],
			],
			ns_wenchou: ["male", "qun", 2, ["nsguanyong", "dualside"], ["unseen"]],

			ns_caocao: ["male", "wei", 4, ["nscaiyi", "nsgefa", "nshaoling"]],
			ns_caocaosp: ["male", "qun", 3, ["nsjianxiong", "nsxionglue"]],
			ns_zhugeliang: ["male", "shu", 3, ["nsguanxing", "kongcheng", "nsyunxing"]],
			ns_wangyue: ["male", "qun", 4, ["nsjianshu", "nscangjian"]],
			ns_yuji: ["male", "qun", 3, ["nsyaowang", "nshuanhuo"]],
			ns_xinxianying: ["female", "wei", 3, ["nsdongcha", "nscaijian", "nsgongjian"]],
			ns_guanlu: ["male", "wei", 3, ["nsbugua", "nstuiyan", "nstianji"]],
			ns_simazhao: ["male", "wei", 3, ["nszhaoxin", "nsxiuxin", "nsshijun"]],
			ns_sunjian: ["male", "wu", 4, ["nswulie", "nshunyou", "nscangxi"]],

			ns_duangui: ["male", "qun", 3, ["nscuanquan", "nsjianning", "nschangshi", "nsbaquan"]],
			ns_zhangbao: ["male", "qun", 3, ["nsfuhuo", "nswangfeng"]],
			ns_masu: ["male", "shu", 3, ["nstanbing", "nsxinzhan"]],
			ns_zhangxiu: ["male", "qun", 4, ["nsbaiming", "nsfuge"]],
			ns_lvmeng: ["male", "wu", 3, ["nsqinxue", "nsbaiyi"]],
			ns_shenpei: ["male", "qun", 3, ["nshunji", "shibei"]],

			ns_yujisp: ["male", "qun", 3, ["nsguhuo"]],
			ns_yangyi: ["male", "shu", 3, ["nsjuanli", "nsyuanchou"]],
			ns_liuzhang: ["male", "qun", 3, ["nsanruo", "nsxunshan", "nskaicheng"]],
			// ns_zhaoyun:['male','qun',3,[]],
			// ns_lvmeng:['male','qun',3,[]],
			// ns_zhaoyunshen:['male','qun',3,[]],
			// ns_lisu:['male','qun',3,[]],
			// ns_sunhao:['male','qun',3,[]],
			ns_xinnanhua: ["male", "qun", 3, ["ns_xiandao", "ns_xiuzheng", "ns_chuanshu"]],
			ns_caimao: ["male", "qun", 4, ["nsdingzhou"]],
			ns_luyusheng: ["female", "wu", 3, ["nshuaishuang", "nsfengli"]],
			ns_chengpu: ["male", "wu", 4, ["decadelihuo", "decadechunlao"]],
			ns_sundeng: ["male", "wu", 4, ["xinkuangbi"]],
			ns_duji: ["male", "wei", 3, ["xinfu_andong", "xinyingshi"]],
			old_majun: ["male", "wei", 3, ["xinfu_jingxie1", "xinfu_qiaosi"]],
			ns_mengyou: ["male", "qun", 4, ["nsmanzhi"]],

			junk_zhangrang: ["male", "qun", 3, ["junktaoluan"], ["sex:male_castrated"]],
			old_bulianshi: ["female", "wu", 3, ["anxu", "zhuiyi"]],
			ol_maliang: ["male", "shu", 3, ["zishu", "xinyingyuan"]],
			junk_liubei: ["male", "shu", 4, ["junkrende", "jijiang"], ["zhu"]],
			junk_huangyueying: ["female", "shu", 3, ["junkjizhi", "junkqicai"]],
			junk_lidian: ["male", "wei", 3, ["xunxun", "junkwangxi"]],
			junk_duanwei: ["male", "qun", 4, ["langmie"]],
			junk_xuyou: ["male", "qun", 3, ["nzry_chenglve", "junkshicai", "nzry_cunmu"]],
			junk_guanyu: ["male", "shu", 4, ["olsbfumeng", "olsbguidao"]],
			junk_liuyan: ["male", "qun", "4/6", ["olpianan", "olyinji", "olkuisi"]],
			
			std_pengyang: ["male", "shu", 3, ["stdxiaofan", "stdtuishi"], ["unseen"]],//不想你，diy牢彭羕
		},
		characterFilter: {
			diy_liuyan(mode) {
				return mode != "chess" && mode != "tafang";
			},
			
			ns_duangui(mode) {
				return mode === "identity" && _status.mode === "normal";
			},
		},
		characterSort: {
			diy: {
				diy_noname: ["noname"],
				diy_yijiang: [
					"ns_huangchengyan",
					"ns_sunchensunjun",
					"ns_yuanxi",
					"ns_caoshuang",
				],
				diy_yijiang2: [
					"ns_chentai",
					"ns_huangwudie",
					"ns_sunyi",
					"ns_zhangning",
					"ns_yanghu",
				],
				diy_yijiang3: [
					"ns_ruanji",
					"ns_zanghong",
					"ns_limi",
					"ns_zhonglimu",
					"prp_zhugeliang",
				],
				diy_tieba: [
					"ns_zuoci",
					"ns_lvzhi",
					"ns_wangyun",
					"ns_nanhua",
					"ns_nanhua_left",
					"ns_nanhua_right",
					"ns_huamulan",
					"ns_huangzu",
					"ns_jinke",
					"ns_yanliang",
					"ns_wenchou",
					"ns_caocao",
					"ns_caocaosp",
					"ns_zhugeliang",
					"ns_wangyue",
					"ns_yuji",
					"ns_xinxianying",
					"ns_guanlu",
					"ns_simazhao",
					"ns_sunjian",
					"ns_duangui",
					"ns_zhangbao",
					"ns_masu",
					"ns_zhangxiu",
					"ns_lvmeng",
					"ns_shenpei",
					"ns_yujisp",
					"ns_yangyi",
					"ns_liuzhang",
					"ns_xinnanhua",
					"ns_luyusheng",
				],
				diy_xushi: [
					"diy_feishi",
					"diy_hanlong",
					"diy_liufu",
					"diy_liuyan",
					"diy_liuzan",
					"diy_tianyu",
					"diy_xizhenxihong",
					"diy_yangyi",
					"diy_zaozhirenjun",
				],
				diy_default: ["diy_yuji", "diy_caiwenji", "diy_lukang", "diy_zhenji", "old_majun"],
				diy_fakenews: [
					"diy_wenyang",
					"ns_zhangwei",
					"ns_caimao",
					"ns_chengpu",
					"ns_sundeng",
					"ns_duji",
					"ns_mengyou",
				],
				diy_trashbin: ["junk_guanyu", "junk_zhangrang", "old_bulianshi", "ol_maliang", "junk_liubei", "junk_huangyueying", "junk_lidian", "junk_duanwei", "junk_xuyou", "junk_liuyan", "std_pengyang"],
			},
		},
		characterIntro: {
			noname: "无名杀的吉祥物。<br>画师：空城<br>技能设计：李木子",
			diy_hanlong:
				"韩龙，魏国刺客。他孤身一人深入到了长城外的敌人领地，成功刺杀了敌方首领轲比能，瓦解了鲜卑民族，曹魏边境因此获得了几十年的安稳。",
			ns_zhangwei:
				"血骑教习·张葳，三国杀集换式卡牌游戏《阵面对决》中的帝畿系列卡牌。游卡桌游官方原创的三国时期女性角色。",
			diy_feishi:
				"字公举，生卒年不详，益州犍为郡南安县（今四川省乐山市）人。刘璋占据益州时，以费诗为绵竹县县令。刘备进攻刘璋夺取益州，费诗举城而降，后受拜督军从事，转任牂牁郡太守，再为州前部司马。",
			diy_lukang: "字幼节，吴郡吴县（今江苏苏州）人。三国时期吴国名将，丞相陆逊次子。",
			diy_liufu:
				"字元颖，沛国相县（今安徽濉溪县西北）人。东汉末年名守。在汉末避难于淮南，说服袁术将戚寄和秦翊率部投奔曹操，曹操大悦，使司徒辟其为掾属。",
			diy_xizhenxihong:
				"习珍，襄阳人。三国时蜀汉将领。先主刘备时曾任零陵北部都尉，加裨将军。建安二十四年，关羽率荆州大军攻打樊城，唯有习珍据城不降。被困月余，直到箭尽粮绝，拔剑自刎而死。习宏，生卒年不详，习珍之弟。曾在东吴入侵蜀汉时建议哥哥习珍伪降，约樊胄举兵。习珍死后，弟弟习宏落在东吴，有问必不答，终身不为孙权发一言。",
			diy_zaozhirenjun:
				"枣祗，生卒年月不详，东汉末年颍川阳翟（今河南省禹州市）人。曾任东阿令、羽林监、屯田都尉、陈留太守等职。任峻（？—204年），字伯达，河南郡中牟县人。曹操每次出征，任峻通常在后方补给军队。后来发生饥荒，枣祗建议实施屯田，任峻被任命为典农中郎将，招募百姓在许下屯田，结果连年丰收，积谷足以装满全部粮仓。",
			diy_yangyi:
				"字威公，襄阳（今湖北襄阳）人，三国时期蜀汉政治家。最初，为荆州刺史傅群的主簿，后投奔关羽，任为功曹。羽遣其至成都，大受刘备赞赏，擢为尚书。建兴三年（225年）任丞相参军，此后一直跟随诸葛亮战斗。亮卒，他部署安全退军。亮生前定蒋琬继己任，仪仅拜中军师。建兴十三年（235年），因多出怨言，被削职流放至汉嘉郡。但杨仪仍不自省，又上书诽谤，言辞激烈，最后下狱，自杀身亡。",
			diy_tianyu:
				"字国让，渔阳雍奴（今天津市武清区东北）人。三国时期曹魏将领。初从刘备，因母亲年老回乡，后跟随公孙瓒，公孙瓒败亡，劝说鲜于辅加入曹操。曹操攻略河北时，田豫正式得到曹操任用，历任颖阴、郎陵令、弋阳太守等。",
			chentai:
				"陈泰（200年～260年），字玄伯，颍川许昌（今河南省许昌市）人。三国时期魏国名将，司空陈群之子。陈泰早年起家员外散骑侍郎，其父陈群死后袭封颍阴侯，历任游击将军、并州、雍州刺史、尚书等职，高平陵政变发生时，陈泰力劝大将军曹爽投降，因此得到掌权的司马氏信任，此后为了回避朝廷的争斗，陈泰主动请求外调雍州任职，任内成功防御蜀将姜维的多次进攻。甘露元年（256年），陈泰被调回朝中任尚书右仆射，曾随司马昭两度抵抗东吴的进攻，后改任左仆射。甘露五年（260年），魏帝曹髦被弑杀，陈泰闻讯后悲痛过度，呕血而死，享年六十一岁。追赠司空，赐谥为穆。",
			huangwudie:
				"黄舞蝶是在现代三国作品中出场的虚拟人物，设定为蜀汉大将黄忠之女，跟随父亲一同投效刘备，在游戏中是一名不错的女将。",
			sunyi: "孙翊（184年～204年），又名孙俨，字叔弼，是孙坚的第三子，孙策、孙权的弟弟。曾被大臣推荐为继承者。孙权继位后，孙翊任丹杨太守，后被身边的人边鸿刺杀。",
			zhangning: "《三国杀·阵面对决》中登场的角色。张角之女，能呼雷掣电。",
			yanghu: "羊祜（221年－278年12月27日），字叔子，泰山郡南城县人。西晋时期杰出的战略家、政治家、文学家，曹魏上党太守羊衜的儿子，名儒蔡邕的女儿蔡文姬的外甥。出身“泰山羊氏”，博学能文，清廉正直。曹魏时期，接受公车征辟，出任中书郎，迁给事黄门侍郎。姐姐嫁给大将军司马师，投靠司马氏家族，仕途平步青云。魏元帝曹奂即位，出任秘书监、相国从事中郎、中领军，统领御林军，兼管内外政事，册封钜平县子，迁。西晋建立后，迁中军将军、散骑常侍、郎中令，册封钜平侯。泰始五年（269年），出任车骑将军、荆州都督，加任开府仪同三司坐镇襄阳，屯田兴学，以德怀柔，深得军民之心；扩充军备，训练士兵，全力准备灭亡孙吴，累迁征南大将军，册封南城侯。咸宁四年，去世，临终前举荐杜预接任职务，获赠侍中、太傅，谥号为“成”。唐宋时期，配享武庙。",
			ns_wangyue:
				"王越，东汉末年游侠（生卒年不详），乃辽东燕山人士，擅使剑术， 三国时期史阿的师父，曹丕的师公，官职虎贲将军。在史书《典论》中略有记载。",
		},
		characterTitle: {
			ns_huangchengyan: "#g竹邀月",
			ns_sunchensunjun: "#gVenusjeu",
			ns_yuanxi: "#g食茸二十四",
			ns_caoshuang: "#g荬庀芬兰",
			ns_chentai: "#g荀彧III荀文若",
			ns_huangwudie: "#g你爸爸来了164",
			ns_sunyi: "#g无民氏4251",
			ns_zhangning: "#g如颍隋行1314",
			ns_yanghu: "#ginCenv",
			ns_ruanji: "#g伯约的崛起",
			ns_zanghong: "#g阿七",
			ns_limi: "#g-心若困兽-",
			ns_zhonglimu: "#gJG赛文♠7",
			prp_zhugeliang: "#g阿开木木W🍀",

			ns_luyusheng: "#g猫咪大院 - 魚と水",
			ns_caimao: "#gP尔号玩家◆",
			diy_wenyang: "#g最粗的梦想XD",
			ns_zuoci: "#bskystarwuwei",
			ns_lvzhi: "#bskystarwuwei",
			ns_wangyun: "#rSukincen",
			ns_guanlu: "#rSukincen",
			ns_xinnanhua: "#rSukincen",
			ns_nanhua: "#g戒除联盟",
			ns_shenpei: "#g戒除联盟",
			ns_huamulan: "#p哎别管我是谁",
			ns_jinke: "#p哎别管我是谁",
			ns_huangzu: "#r小芯儿童鞋",
			ns_lisu: "#r小芯儿童鞋",
			ns_yanliang: "#r丶橙续缘",
			ns_wenchou: "#r丶橙续缘",
			ns_caocao: "#r一瞬间丶遗忘",
			ns_caocaosp: "#g希望教主",
			ns_zhugeliang: "#p死不死什么的",
			ns_xinxianying: "#b扶苏公子",
			ns_zhangbao: "#b扶苏公子",
			ns_wangyue: "#p废城君",
			ns_sunjian: "#b兔子两只2",
			ns_lvmeng: "#b兔子两只2",
			ns_yujisp: "#b兔子两只2",
			ns_yuji: "#g蔚屿凉音",
			ns_simazhao: "#r一纸载春秋",
			ns_duangui: "#b宝宝酱紫萌萌哒",
			ns_masu: "#g修女",
			ns_zhangxiu: "#p本因坊神策",
			ns_yangyi: "#p本因坊神策",
			ns_liuzhang: "#r矮子剑薄荷糖",
			ns_mengyou: "#g残昼厄夜",
		},
		card: {
			nsfuzhou_card: {
				fullskin: true,
				type: "delay",
				wuxieable: false,
				modTarget(card, player, target) {
					return lib.filter.judge(card, player, target);
				},
				enable(card, player) {
					return player.canAddJudge(card);
				},
				filterTarget(card, player, target) {
					return lib.filter.judge(card, player, target) && player == target;
				},
				judge(card) {
					if (get.color(card) == "red") return 0;
					return -4;
				},
				effect() {
					var source = cards[0].storage.nsfuzhou_source;
					if (!source || !source.isIn()) return;
					source.line(player, "thunder");
					switch (result.color) {
						case "black":
							player.damage(source, source.storage.nsfuzhou_damage ? 2 : 1, "thunder");
							player.chooseToDiscard("he", true);
							break;
						case "red":
							source.draw(2);
							if (typeof player.storage.nsfuzhou_num != "number") player.storage.nsfuzhou_num = 0;
							if (source.storage.nsfuzhou_draw) {
								player.recover();
								player.draw();
								player.storage.nsfuzhou_num++;
							} else player.storage.nsfuzhou_num--;
							player.addTempSkill("nsfuzhou_num");
							player.markSkill("nsfuzhou_num");
							break;

						default:
							break;
					}
				},
				ai: {
					basic: {
						order: 1,
						useful: 0,
						value: 0,
					},
					result: {
						target: -1,
					},
					tag: {
						// damage:1,
						// natureDamage:1,
						// thunderDamage:1,
					},
				},
			},
		},
		perfectPair: {
			yuji: ["zuoci"],
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//派对浪客
			nsxingyun: {
				audio: 2,
				enable: "chooseToUse",
				getSixiang(card) {
					if (typeof card == "string") card = { name: card };
					if (card.name == "shan") return "玄武";
					var type = get.type(card, null, false);
					if (type == "delay") return "朱雀";
					if (get.tag(card, "damage")) return "白虎";
					if (get.tag(card, "recover")) return "玄武";
					if (type == "trick") return "青龙";
					return false;
				},
				filter(event, player) {
					if (player.hasSkill("nsxingyun_round")) return false;
					var list = player.getStorage("nsxingyun");
					if (list.length >= 4) return false;
					for (var i of lib.inpile) {
						var type = lib.skill.nsxingyun.getSixiang(i);
						if (!type || list.includes(type)) continue;
						if (event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event))
							return true;
						if (i == "sha") {
							for (var j of lib.inpile_nature) {
								if (
									event.filterCard(
										get.autoViewAs({ name: i, nature: j }, "unsure"),
										player,
										event
									)
								)
									return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var map = { 青龙: [], 朱雀: [], 白虎: [], 玄武: [] };
						var list = player.getStorage("nsxingyun");
						for (var i of lib.inpile) {
							var type = lib.skill.nsxingyun.getSixiang(i);
							if (!type || list.includes(type)) continue;
							if (event.filterCard({ name: i }, player, event))
								map[type].push([get.type2(i, false), "", i]);
							if (i == "sha") {
								for (var j of lib.inpile_nature) {
									if (event.filterCard({ name: i, nature: j }, player, event))
										map[type].push([get.type2(i, false), "", i, j]);
								}
							}
						}
						var dialog = ["星陨", "hidden"];
						for (var i in map) {
							if (map[i].length > 0) {
								dialog.push('<div class="text center">' + i + "</div>");
								dialog.push([map[i], "vcard"]);
							}
						}
						return ui.create.dialog.apply(ui.create, dialog);
					},
					filter(button, player) {
						return _status.event.getParent().filterCard(
							{
								name: button.link[2],
								nature: button.link[3],
							},
							player,
							_status.event.getParent()
						);
					},
					check(button) {
						if (_status.event.getParent().type != "phase") return 1;
						return _status.event.player.getUseValue(
							{
								name: button.link[2],
								nature: button.link[3],
							},
							false
						);
					},
					backup(links, player) {
						return {
							selectCard: 1,
							filterCard: true,
							popname: true,
							position: "hs",
							check(card) {
								return 7 - get.value(card);
							},
							viewAs: { name: links[0][2], nature: links[0][3] },
							precontent() {
								player.addTempSkill("nsxingyun_round");
							},
						};
					},
					prompt(links, player) {
						return (
							"将一张手牌当做" +
							(get.translation(links[0][3]) || "") +
							get.translation(links[0][2]) +
							"使用"
						);
					},
				},
				ai: {
					threaten: 2.6,
					order: 1,
					result: { player: 1 },
				},
				group: "nsxingyun_clear",
				derivation: ["nsxingyun_faq", "bazhen"],
				subSkill: {
					backup: {},
					clear: {
						trigger: { player: "useCardAfter" },
						forced: true,
						popup: false,
						filter(event, player) {
							return (
								event.skill == "nsxingyun_backup" &&
								event.cards.length == 1 &&
								lib.skill.nsxingyun.getSixiang(event.card) !=
									lib.skill.nsxingyun.getSixiang(event.cards[0]) &&
								!player
									.getStorage("nsxingyun")
									.includes(lib.skill.nsxingyun.getSixiang(event.card))
							);
						},
						content() {
							"step 0";
							player.draw(2);
							player.markAuto("nsxingyun", [lib.skill.nsxingyun.getSixiang(trigger.card)]);
							"step 1";
							if (player.getStorage("nsxingyun").length >= 4) player.addSkills("bazhen");
						},
					},
					round: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			nshanlang: {
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return (
						player.countCards("h") > 0 &&
						game.hasPlayer((current) => player != current && player.canCompare(current))
					);
				},
				async cost(event, trigger, player) {
					const goon = player.hasCard(function (card) {
						return get.value(card) <= 7;
					}, "h");
					event.result = await player
						.chooseTarget(
							[1, 3],
							get.prompt("nshanlang"),
							"和至多三名角色进行拼点",
							function (card, player, target) {
								return target != player && player.canCompare(target);
							}
						)
						.set("ai", function (target) {
							if (!_status.event.goon) return false;
							var att = get.attitude(_status.event.player, target);
							if (att >= 0) return 0;
							if (target.hasSkillTag("noh")) att /= 3;
							return -att / Math.sqrt(target.countCards("h"));
						})
						.set("goon", goon)
						.forResult();
				},
				content() {
					"step 0";
					event.max_num = 0;
					targets.sortBySeat();
					player.chooseToCompare(targets).callback = lib.skill.nshanlang.callback;
					"step 1";
					if (event.target) {
						player
							.chooseBool("是否令" + get.translation(target) + "获得一张牌？")
							.set("goon", get.attitude(player, target) > 0)
							.set("ai", () => _status.event.goon);
					} else event.finish();
					"step 2";
					if (result.bool) {
						var card = get.cardPile2(function (card) {
							return !lib.skill.nsxingyun.getSixiang(card);
						});
						if (card) target.gain(card, "gain2");
					}
				},
				callback() {
					var list = [
							[player, event.num1],
							[target, event.num2],
						],
						evt = event.getParent(2);
					for (var i of list) {
						if (i[1] > evt.max_num) {
							evt.max_num = i[1];
							evt.target = i[0];
						} else if (evt.target && i[1] == evt.max_num && i[0] != evt.target) {
							delete evt.target;
						}
					}
				},
			},
			//钟离牧
			nskuanhuai: {
				trigger: { player: "phaseUseBegin" },
				content() {
					"step 0";
					var card = get.discardPile(function (card) {
						return get.type(card) != "basic";
					});
					if (card) player.gain(card, "gain2");
					"step 1";
					player.addTempSkill("nskuanhuai_blocker", "phaseUseAfter");
					player.addTempSkill("nskuanhuai_effect");
				},
				subSkill: {
					blocker: {
						charlotte: true,
						mod: {
							cardEnabled(card) {
								if (get.type(card) == "basic") return false;
							},
							cardSavable(card) {
								if (get.type(card) == "basic") return false;
							},
						},
					},
					effect: {
						trigger: { player: "phaseDiscardEnd" },
						charlotte: true,
						popup: false,
						filter(event, player) {
							return player.hasHistory("lose", function (evt) {
								if (evt.type != "discard" || evt.getParent("phaseDiscard") != event)
									return false;
								for (var i of evt.cards2) {
									if (get.type(i, null, false) == "basic" && get.position(i, true) == "d" && player.hasUseTarget(i)) return true;
								}
								return false;
							});
						},
						content() {
							"step 0";
							var cards = [];
							player.getHistory("lose", function (evt) {
								if (evt.type != "discard" || evt.getParent("phaseDiscard") != trigger)
									return false;
								for (var i of evt.cards2) {
									if (get.type(i, null, false) == "basic" && get.position(i, true) == "d") cards.push(i);
								}
								return false;
							});
							event.cards = cards;
							"step 1";
							var cards2 = event.cards.filter(function (i) {
								return get.position(i, true) == "d" && player.hasUseTarget(i);
							});
							if (cards2.length) {
								player.chooseButton(["宽怀：是否使用其中一张牌？", cards2]);
							} else event.finish();
							"step 2";
							if (result.bool) {
								var card = result.links[0];
								cards.remove(card);
								player.chooseUseTarget(card, true);
								if (cards.length > 0) event.goto(1);
							}
						},
					},
				},
			},
			nsdingbian: {
				trigger: { player: "useCard" },
				forced: true,
				filter(event, player) {
					if (player != _status.currentPhase) return false;
					return get.type(event.card) != "basic";
				},
				content() {
					"step 0";
					player.addTempSkill("nsdingbian_mark");
					player.addMark("nsdingbian_mark", 1, false);
					var storage = player.getStorage("nsdingbian_ignore");
					var goon = false;
					for (var i of lib.inpile) {
						if (get.type(i) == "basic" && !storage.includes(i)) {
							goon = true;
							break;
						}
					}
					if (goon)
						player
							.chooseControl()
							.set("choiceList", [
								"从牌堆中获得一张基本牌",
								"令一种基本牌于本回合内不计入手牌上限",
							])
							.set("prompt", "定边：请选择一项")
							.set("ai", function () {
								var player = _status.event.player;
								var list = ["tao", "shan"],
									list2 = player.getStorage("nsdingbian_ignore");
								list.removeArray(list2);
								if (!list.length) return 0;
								var num1 = player.countCards("hs", function (card) {
										return (
											get.type(card) != "basic" &&
											player.hasValueTarget(card, null, true)
										);
									}),
									num2 = player.getHandcardLimit();
								if (player.countCards("h", list) <= num2 - num1) return 0;
								return 1;
							});
					else event._result = { index: 0 };
					"step 1";
					if (result.index == 0) {
						var card = get.cardPile2(function (card) {
							return get.type(card, null, false) == "basic";
						});
						if (card) player.gain(card, "gain2");
						event.finish();
					} else {
						var list = [],
							storage = player.getStorage("nsdingbian_ignore");
						for (var i of lib.inpile) {
							if (get.type(i) == "basic" && !storage.includes(i)) {
								list.push(i);
							}
						}
						player
							.chooseButton(["令一种基本牌于本回合内不计入手牌上限", [list, "vcard"]], true)
							.set("ai", function (button) {
								var name = button.link[2],
									player = _status.event.player;
								if (name == "sha") return 0;
								var cards = player.getCards("h", name);
								if (!cards.length) return 0;
								return get.value(cards, player);
							});
					}
					"step 2";
					player.markAuto("nsdingbian_ignore", [result.links[0][2]]);
				},
				subSkill: {
					mark: {
						onremove(player) {
							delete player.storage.nsdingbian_mark;
							delete player.storage.nsdingbian_ignore;
						},
						mod: {
							maxHandcard: (player, num) => num - player.countMark("nsdingbian_mark"),
							ignoredHandcard(card, player) {
								if (player.getStorage("nsdingbian_ignore").includes(get.name(card, player))) {
									return true;
								}
							},
							cardDiscardable(card, player, name) {
								if (
									name == "phaseDiscard" &&
									player.getStorage("nsdingbian_ignore").includes(get.name(card, player))
								) {
									return false;
								}
							},
						},
						intro: { content: "手牌上限-#" },
					},
				},
			},
			//李密
			nstuilun: {
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return (
						player.hp > 1 &&
						player.countCards("h") > 1 &&
						player.hasCard(function (card) {
							return lib.filter.cardDiscardable(card, player, "nstuilun");
						}, "h")
					);
				},
				prompt2: "失去任意点体力（至多失去至1点）并弃置任意张手牌（至多弃置至一张）。",
				check(event, player) {
					if (
						game.hasPlayer(function (current) {
							return current != player && current.hp >= player.hp;
						})
					)
						return true;
					return false;
				},
				content() {
					"step 0";
					if (player.hp == 2) event._result = { index: 0 };
					else {
						var list = [];
						for (var i = 1; i < player.hp; i++) {
							list.push(i + "点");
						}
						player.chooseControl(list).set("prompt", "请选择失去体力的量");
					}
					"step 1";
					player.loseHp(1 + result.index);
					"step 2";
					if (
						player.countCards("h") > 1 &&
						player.hasCard(function (card) {
							return lib.filter.cardDiscardable(card, player, "nstuilun");
						}, "h")
					) {
						player.chooseToDiscard("h", true, [1, player.countCards("h") - 1]);
					} else game.delayx();
					"step 3";
					player.addTempSkill("nstuilun_effect", {
						player: "phaseBeginStart",
					});
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { global: "phaseBegin" },
						forced: true,
						popup: false,
						filter(event, player) {
							return (
								player.hp < event.player.hp ||
								(player.hp > 0 && player.countCards("h") < event.player.countCards("h"))
							);
						},
						content() {
							"step 0";
							if (player.hp < trigger.player.hp) {
								player
									.chooseTarget("退论：是否令一名角色回复或失去1点体力？")
									.set("ai", function (target) {
										var eff = get.effect(target, { name: "losehp" }, player, player);
										if (target.isDamaged())
											eff = Math.max(eff, get.recoverEffect(target, player, player));
										return eff;
									});
							} else event.goto(3);
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								event.target = target;
								player.logSkill("nstuilun_effect", target);
								if (target.isHealthy()) event._result = { index: 1 };
								else
									player
										.chooseControl("回复1点体力", "失去1点体力")
										.set("prompt", "令" + get.translation(target) + "…")
										.set("ai", function () {
											var player = _status.event.player,
												target = _status.event.getParent().target;
											if (
												get.recoverEffect(target, player, player) >=
												get.effect(target, { name: "losehp" }, player, player)
											)
												return 0;
											return 1;
										});
							} else event.goto(3);
							"step 2";
							if (result.index == 0) target.recover();
							else target.loseHp();
							"step 3";
							if (trigger.player.countCards("h") > player.countCards("h")) {
								var str = get.cnNumber(player.hp);
								player
									.chooseTarget("退论：是否令一名角色摸一张牌或弃置一张牌？")
									.set("ai", function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										if (att > 0 || target.countCards("he") == 0)
											return get.effect(target, { name: "draw" }, player, player);
										return get.effect(target, { name: "guohe_copy2" }, target, player);
									});
							} else event.finish();
							"step 4";
							if (result.bool) {
								var target = result.targets[0];
								event.target = target;
								player.logSkill("nstuilun_effect", target);
								if (!target.countCards("he")) event._result = { index: 0 };
								else
									player
										.chooseControl("摸一张牌", "弃置一张牌")
										.set("prompt", "令" + get.translation(target) + "…")
										.set("ai", function (player) {
											var evt = _status.event;
											return get.attitude(evt.player, evt.getParent().target) > 0
												? 0
												: 1;
										});
							} else event.finish();
							"step 5";
							if (result.index == 0) target.draw();
							else target.chooseToDiscard("he", true);
						},
					},
				},
			},
			//阮籍
			nsshizui: {
				trigger: { target: "useCardToTargeted" },
				usable: 1,
				filter(event, player) {
					var type = get.type(event.card, null, false);
					return (
						(type == "basic" || type == "trick") &&
						player.countCards("he") > 0 &&
						player.hasUseTarget({ name: "jiu" }, null, true)
					);
				},
				async cost(event, trigger, player) {
					var suit = get.suit(trigger.card),
						cards = trigger.cards.filterInD();
					var str = "弃置一张牌并视为使用一张【酒】";
					if (lib.suit.includes(suit))
						str +=
							"；若弃置" +
							get.translation(suit) +
							"牌，则" +
							get.translation(trigger.card) +
							"对你无效";
					if (cards.length) str += "；若弃置♣牌则获得" + get.translation(cards);
					str += "。";
					var next = player.chooseToDiscard("he", get.prompt("nsshizui"), str, "chooseonly");
					next.set("val1", cards.length ? get.value(cards, player) : 0);
					next.set("val2", -get.effect(player, trigger.card, trigger.player, player));
					next.set("suit", suit);
					next.set("ai", function (card) {
						var base = 2,
							suit = get.suit(card);
						if (suit == "club") base += _status.event.val1;
						if (suit == _status.event.suit) base += _status.event.val2;
						return base - get.value(card);
					});
					event.result = await next.forResult();
				},
				content() {
					"step 0";
					event.suit1 = get.suit(cards[0], player);
					player.discard(cards);
					player.chooseUseTarget("jiu", true);
					"step 1";
					var suit1 = event.suit1,
						suit2 = get.suit(trigger.card, false);
					if (suit1 == suit2 && lib.suit.includes(suit1)) trigger.excluded.add(player);
					if (suit1 == "club") {
						var cards = trigger.cards.filterInD();
						if (cards.length > 0) player.gain(cards, "gain2");
					}
				},
			},
			nsxiaoye: {
				trigger: { global: "phaseJieshuBegin" },
				filter(event, player) {
					return (
						player.hasHistory("useCard", function (evt) {
							return evt.card.name == "jiu";
						}) &&
						event.player.hasHistory("useCard", function (evt) {
							return (
								(evt.card.name == "sha" || get.type(evt.card) == "trick") &&
								player.hasUseTarget({
									name: evt.card.name,
									nature: evt.card.nature,
									isCard: true,
								})
							);
						})
					);
				},
				async cost(event, trigger, player) {
					const list = [];
					trigger.player.getHistory("useCard", function (evt) {
						if (evt.card.name != "sha" && get.type(evt.card) != "trick") return;
						if (evt.card.name == "sha" && evt.card.nature) list.add("sha:" + evt.card.nature);
						else list.add(evt.card.name);
					});
					for (let i = 0; i < list.length; i++) {
						if (list[i].indexOf("sha:") == 0) list[i] = ["基本", "", "sha", list[i].slice(4)];
						else list[i] = [get.type(list[i]), "", list[i]];
					}
					const { result } = await player
						.chooseButton([get.prompt("nsxiaoye"), [list, "vcard"]])
						.set("filterButton", function (button) {
							return player.hasUseTarget({
								name: button.link[2],
								nature: button.link[3],
								isCard: true,
							});
						})
						.set("ai", function (button) {
							return player.getUseValue({
								name: button.link[2],
								nature: button.link[3],
								isCard: true,
							});
						});
					if (result.bool) {
						event.result = {
							bool: true,
							cost_data: {
								card: {
									name: result.links[0][2],
									nature: result.links[0][3],
									isCard: true,
								},
							},
						};
					}
				},
				async content(event, trigger, player) {
					player.chooseUseTarget(true, event.cost_data.card);
				},
			},
			//臧洪
			nsshimeng: {
				enable: "phaseUse",
				usable: 1,
				selectTarget: [1, Infinity],
				filterTarget: true,
				contentBefore() {
					event.getParent()._nsshimeng_count = [0, 0];
				},
				content() {
					"step 0";
					if (!target.isIn()) {
						event.finish();
						return;
					}
					target
						.chooseToUse("使用一张【杀】，或摸一张牌", function (card, player) {
							if (get.name(card) != "sha") return false;
							return lib.filter.cardEnabled.apply(this, arguments);
						})
						.set("addCount", false);
					"step 1";
					if (result.bool) {
						event.getParent()._nsshimeng_count[0]++;
					} else {
						event.getParent()._nsshimeng_count[1]++;
						target.draw();
					}
				},
				contentAfter() {
					var list = event.getParent()._nsshimeng_count;
					if (list[0] < list[1]) {
						player.changeHujia(1);
						player.loseHp();
					}
				},
				ai: {
					order: 3.05,
					result: {
						player(player, target) {
							var att = get.attitude(player, target);
							if (att <= 0) return 0;
							if (player.hp > 1 || player.countCards("hs", ["tao", "jiu"])) return 1;
							if (!ui.selected.targets.length) {
								if (target != player) return 0;
								if (player.hasSha()) return 1;
								return 0;
							}
							if (ui.selected.targets.length > 1 && !target.hasSha()) return 0;
							return 1;
						},
					},
				},
			},
			noname_zhuyuan: {
				enable: "phaseUse",
				position: "he",
				selectCard: 4,
				complexCard: true,
				charlotte: true,
				prompt: "将4张花色各不同的牌交一名角色并令你与其获得【铁骑】和【激昂】直到各自回合结束",
				check(card) {
					if (ui.selected.cards.length && ui.selected.cards[0].name == "du") return 0;
					if (!ui.selected.cards.length && card.name == "du") return 20;
					var player = get.owner(card);
					if (ui.selected.cards.length >= Math.max(2, player.countCards("h") - player.hp)) return 0;
					if (player.hp == player.maxHp || player.countCards("h") <= 1) {
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (
								players[i].hasSkill("haoshi") &&
								!players[i].isTurnedOver() &&
								!players[i].hasJudge("lebu") &&
								get.attitude(player, players[i]) >= 3 &&
								get.attitude(players[i], player) >= 3
							) {
								return 11 - get.value(card);
							}
						}
						if (player.countCards("h") > player.hp) return 10 - get.value(card);
						if (player.countCards("h") > 2) return 6 - get.value(card);
						return -1;
					}
					return 10 - get.value(card);
				},
				filterCard(card, player) {
					var suit = get.suit(card, player);
					for (var i = 0; i < ui.selected.cards.length; i++) {
						if (get.suit(ui.selected.cards[i], player) == suit) return false;
					}
					return true;
				},
				filter(event, player) {
					var suits = [];
					player.countCards("he", function (card) {
						if (suits.length < 4) suits.add(get.suit(card, player));
					});
					if (suits.length < 4) return false;
					var stat = player.getStat();
					if (!stat.noname_zhuyuan) return true;
					return game.hasPlayer(function (current) {
						return current != player && !stat.noname_zhuyuan.includes(current);
					});
				},
				filterTarget(card, player, target) {
					if (player == target) return false;
					var stat = player.getStat();
					if (!stat.noname_zhuyuan) return true;
					return !stat.noname_zhuyuan.includes(target);
				},
				discard: false,
				lose: false,
				delay: false,
				derivation: ["noname_retieji", "noname_jiang"],
				content() {
					"step 0";
					var stat = player.getStat();
					if (!stat.noname_zhuyuan) stat.noname_zhuyuan = [];
					stat.noname_zhuyuan.push(target);
					player.give(cards, target, "visible");
					"step 1";
					game.log(player, "获得了技能", "#g【铁骑】");
					player.addTempSkill("noname_retieji", {
						player: "phaseAfter",
					});
					game.log(player, "获得了技能", "#g【激昂】");
					player.addTempSkill("noname_jiang", {
						player: "phaseAfter",
					});
					game.log(target, "获得了技能", "#g【铁骑】");
					target.addTempSkill("noname_retieji", {
						player: "phaseAfter",
					});
					game.log(target, "获得了技能", "#g【激昂】");
					target.addTempSkill("noname_jiang", {
						player: "phaseAfter",
					});
				},
				mod: {
					targetInRange(card, player) {
						var stat = player.getStat();
						if (stat.noname_zhuyuan) return true;
					},
					cardUsable(card, player) {
						var stat = player.getStat();
						if (!stat.noname_zhuyuan) return Infinity;
					},
				},
				ai: {
					order: 5,
					result: {
						target: 10,
					},
				},
			},
			noname_retieji: {
				inherit: "retieji",
				mark: true,
				marktext: "<img style=width:21px src=" + lib.assetURL + "image/character/noname_machao.png>",
				intro: {
					name: "小无·铁骑",
					content:
						"你使用【杀】指定一名角色为目标后，可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
				},
			},
			noname_jiang: {
				inherit: "jiang",
				mark: true,
				marktext: "<img style=width:21px src=" + lib.assetURL + "image/character/noname_sunce.png>",
				intro: {
					name: "小无·激昂",
					content:
						"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
				},
			},
			noname_duocai: {
				trigger: {
					global: ["loseAfter", "loseAsyncAfter"],
				},
				filter(event, player) {
					if (event.type != "discard" || event.getlx === false) return false;
					var evt = event.getl(player);
					var cards = event.cards.slice(0);
					if (evt && evt.cards) cards.removeArray(evt.cards);
					return cards.filterInD("d").length > 0 && !player.hasSkill("noname_duocai2");
				},
				direct: true,
				charlotte: true,
				content() {
					"step 0";
					if (trigger.delay == false && player != game.me && !player.isOnline()) game.delay();
					var evt = trigger.getl(player);
					var cards = trigger.cards.slice(0);
					cards.removeArray(evt.cards);
					player.chooseButton([get.prompt("noname_duocai"), cards], [1, cards.length]);
					"step 1";
					if (result.bool) {
						player.logSkill("noname_duocai");
						player.addTempSkill("noname_duocai2");
						player.gain(result.links, "gain2");
						if (result.links.length > 2) {
							var filterTarget = function (card, player, target) {
								return target != player && target.countDiscardableCards(player, "hej") > 0;
							};
							if (
								game.hasPlayer(function (current) {
									return filterTarget(null, player, current);
								})
							) {
								player
									.chooseTarget("弃置一名其他角色区域内的一张牌", true, filterTarget)
									.set("ai", function (target) {
										var player = _status.event.player;
										return get.effect(target, { name: "guohe" }, player, player);
									});
							} else event.finish();
						} else {
							if (result.links.length == 2) player.draw();
							else player.recover();
							event.finish();
						}
					} else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						player.discardPlayerCard(target, "hej", true);
					}
				},
			},
			noname_duocai2: { charlotte: true },
			nsbizhao: {
				unique: true,
				trigger: { player: "showCharacterAfter" },
				forced: true,
				hiddenSkill: true,
				filter(event, player) {
					return (
						event.toShow && event.toShow.includes("ns_yanghu") && player != _status.currentPhase
					);
				},
				content() {
					player.addTempSkill("nsbizhao2", {
						player: "phaseBeginStart",
					});
				},
			},
			nsbizhao2: {
				charlotte: true,
				mark: true,
				intro: { content: "其他角色至自己的距离+1" },
				mod: {
					globalTo(source, player, distance) {
						return distance + 1;
					},
				},
			},
			nsqingde: {
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				usable: 1,
				filter(event, player) {
					if (
						!event.card ||
						!event.cards ||
						event.player == event.source ||
						(event.card.name != "sha" && get.type(event.card) != "trick") ||
						event.cards.filterInD().length != 1
					)
						return false;
					var target = lib.skill.nsqingde.logTarget(event, player);
					if (player.hasSkillTag("noCompareSource") || target.hasSkillTag("noCompareTarget"))
						return false;
					return target.countCards("h") > 0;
				},
				logTarget(event, player) {
					if (player == event.source) return event.player;
					return event.source;
				},
				check(event, player) {
					var target = lib.skill.nsqingde.logTarget(event, player);
					return get.attitude(player, target) <= 0;
				},
				content() {
					"step 0";
					var target = lib.skill.nsqingde.logTarget(trigger, player);
					event.target = target;
					var next = player.chooseToCompare(target);
					if (event.triggername == "damageSource") next.set("small", true);
					if (!next.fixedResult) next.fixedResult = {};
					next.fixedResult[player.playerid] = trigger.cards.filterInD()[0];
					"step 1";
					if (result.tie) {
						event.finish();
						return;
					}
					var i = result.bool;
					if (event.triggername == "damageSource") i = !i;
					event.target2 = i ? player : target;
					if (event.triggername == "damageSource") event.goto(3);
					else if (event.target2.isDamaged())
						player
							.chooseBool("是否令" + get.translation(event.target2) + "回复1点体力？")
							.set("ai", function () {
								var evt = _status.event.getParent();
								return get.attitude(evt.player, evt.target2) > 0;
							});
					else event.finish();
					"step 2";
					if (result.bool) event.target2.recover();
					event.finish();
					"step 3";
					player
						.chooseBool("是否令" + get.translation(event.target2) + "摸两张牌？")
						.set("ai", function () {
							var evt = _status.event.getParent();
							return get.attitude(evt.player, evt.target2) > 0;
						});
					"step 4";
					if (result.bool) event.target2.draw(2);
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (target.storage.counttrigger && target.storage.counttrigger.nsqingde) return;
							var num = get.number(card);
							if (typeof num == "number") {
								if (
									target.hasSkillTag("noCompareSource") ||
									player.hasSkillTag("noCompareTarget")
								)
									return;
								var hs = player.getCards("h");
								if (card.cards) hs.removeArray(card.cards);
								if (ui.selected.cards) hs.removeArray(ui.selected.cards);
								if (!hs.length) return;
								for (var i of hs) {
									if (get.number(i) >= num) return;
									if (player.hasSkill("tianbian") && get.suit(card) == "heart") return;
								}
								return "zerotarget";
							}
						},
					},
				},
			},
			nsyidi: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				filterCard: true,
				filterTarget: lib.filter.notMe,
				discard: false,
				lose: false,
				delay: false,
				check(card) {
					var player = _status.event.player;
					if (get.type(card) == "basic") {
						if (
							game.hasPlayer(function (current) {
								return (
									get.attitude(current, player) > 0 &&
									current.getUseValue(card) > player.getUseValue(card, null, true)
								);
							})
						)
							return 5 + Math.random();
						return 0;
					}
					if (
						game.hasPlayer(function (current) {
							return (
								get.attitude(current, player) > 0 &&
								!current.hasJudge("lebu") &&
								current.getUseValue(card) > player.getUseValue(card)
							);
						})
					)
						return 4.7 + Math.random();
					if (
						card.name == "wuxie" &&
						game.hasPlayer(function (current) {
							return get.attitude(current, player) > 0;
						})
					)
						return 5 + Math.random();
					return 4 - get.value(card);
				},
				content() {
					"step 0";
					player.give(cards, target, "visible");
					if (get.type(cards[0], player) != "basic") {
						player.draw();
						event.finish();
					}
					"step 1";
					if (target.getCards("h").includes(cards[0]) && target.hasUseTarget(cards[0]))
						target.chooseUseTarget(cards[0]);
				},
				ai: {
					order: 7,
					result: {
						player(player, target) {
							if (
								!ui.selected.cards.length ||
								get.type(ui.selected.cards[0], player) == "basic"
							)
								return 0;
							if (get.value(ui.selected.cards[0]) < 4) return 2;
							return 0.5;
						},
						target: 1,
					},
				},
			},
			nsfuzhou: {
				enable: "phaseUse",
				usable: 2,
				filter(event, player) {
					if (!player.storage.nstaiping && player.getStat("skill").nsfuzhou) return false;
					return player.countCards("he", { color: "black" }) > 0;
				},
				filterCard: { color: "black" },
				filterTarget(card, player, target) {
					return !target.hasJudge("nsfuzhou_card");
				},
				check(card) {
					return 8 - get.value(card);
				},
				prepare: "give",
				position: "he",
				discard: false,
				lose: false,
				delay: false,
				content() {
					"step 0";
					target.addJudge({ name: "nsfuzhou_card" }, cards[0]);
					cards[0].storage.nsfuzhou_source = player;
					"step 1";
					game.delayx();
				},
				ai: {
					order: 5,
					result: {
						target(player, target) {
							if (player.storage.nsfuzhou_draw) {
								if (
									get.attitude(player, target) > 0 &&
									player.countCards("he", function (card) {
										return get.color(card) == "red";
									})
								) {
									return 1;
								}
								return 0;
							}
							if (player.storage.nsfuzhou_damage) return -2;
							return -1.5;
						},
					},
				},
			},
			nsfuzhou_num: {
				charlotte: true,
				onremove: true,
				mod: {
					maxHandcard(player, num) {
						return num + player.storage.nsfuzhou_num;
					},
				},
				intro: {
					content(num) {
						return "手牌上限" + (num < 0 ? "" : "+") + num;
					},
				},
			},
			nsguidao: {
				trigger: { global: "judge" },
				filter(event, player) {
					return (
						player.countCards("hes", function (card) {
							if (
								player.storage.nstaiping ||
								(_status.connectMode && get.position(card) != "e")
							)
								return true;
							return get.color(card) == "black";
						}) > 0
					);
				},
				direct: true,
				content() {
					"step 0";
					player
						.chooseCard(
							get.translation(trigger.player) +
								"的" +
								(trigger.judgestr || "") +
								"判定为" +
								get.translation(trigger.player.judging[0]) +
								"，" +
								get.prompt("nsguidao"),
							"hes",
							function (card, player) {
								if (!player.storage.nstaiping && get.color(card) != "black") return false;
								var player = _status.event.player;
								var mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
								if (mod2 != "unchanged") return mod2;
								var mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
								if (mod != "unchanged") return mod;
								return true;
							}
						)
						.set("ai", function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							let val = get.value(card);
							if (get.subtype(card) == "equip2") val /= 2;
							else val /= 6;
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result - val;
							}
							return -result - val;
						})
						.set("judging", trigger.player.judging[0]);
					"step 1";
					if (result.bool) {
						player.respond(result.cards, "highlight", "nsguidao", "noOrdering");
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, "的判定牌改为", result.cards[0]);
					}
					"step 3";
					game.delay(2);
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			nstaiping: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter(event, player) {
					return (
						player.getAllHistory("sourceDamage", function (evt) {
							return evt.getParent().name == "nsfuzhou_card";
						}).length > 1 ||
						player.getAllHistory("gain", function (evt) {
							return evt.getParent(2).name == "nsfuzhou_card";
						}).length > 1
					);
				},
				content() {
					player.awakenSkill("nstaiping");
					player.storage.nstaiping = true;
					if (
						player.getAllHistory("sourceDamage", function (evt) {
							return evt.getParent().name == "nsfuzhou_card";
						}).length > 1
					)
						player.storage.nsfuzhou_damage = true;
					if (
						player.getAllHistory("gain", function (evt) {
							return evt.getParent(2).name == "nsfuzhou_card";
						}).length > 1
					)
						player.storage.nsfuzhou_draw = true;
				},
				ai: {
					combo: "nsfuzhou",
				},
				derivation: ["nsfuzhou_damage", "nsfuzhou_draw"],
			},
			nsweiyuan: {
				trigger: { player: "useCardToTargeted" },
				direct: true,
				filter(event, player) {
					return (
						player != event.target &&
						event.targets &&
						event.targets.length == 1 &&
						event.target.isIn() &&
						player.isPhaseUsing() &&
						!player.hasSkill("nsweiyuan2") &&
						game.hasPlayer(function (current) {
							return current != player && current != event.target;
						})
					);
				},
				content() {
					"step 0";
					player
						.chooseTarget(get.prompt2("nsweiyuan"), function (card, player, target) {
							return target != player && target != _status.event.getTrigger().target;
						})
						.set("ai", function (target) {
							return Math.max(Math.random(), get.attitude(player, target));
						});
					"step 1";
					if (result.bool) {
						player.addTempSkill("nsweiyuan2", "phaseUseAfter");
						var target = result.targets[0];
						event.target = target;
						player.logSkill("nsweiyuan", target);
						target
							.chooseCard(
								"he",
								"交给" +
									get.translation(trigger.target) +
									"一张牌并受到1点伤害，或令" +
									get.translation(player) +
									"摸一张牌且可以重复使用牌"
							)
							.set("ai", function (card) {
								if (_status.event.goon) return Math.random();
								return 0;
							})
							.set(
								"goon",
								(function () {
									if (get.attitude(target, player) > 0) return false;
									return Math.random() > 0.5;
								})()
							);
					} else event.finish();
					"step 2";
					if (result.bool) {
						target.gain(result.cards, trigger.target);
						target.damage();
					} else {
						player.addTempSkill("nsweiyuan_use");
						player.draw();
					}
				},
			},
			nsweiyuan2: { charlotte: true },
			nsweiyuan_use_backup: {},
			nsweiyuan_use: {
				enable: "phaseUse",
				charlotte: true,
				sourceSkill: "nsweiyuan",
				mod: {
					cardUsable() {
						if (_status.event.skill == "nsweiyuan_use_backup") return Infinity;
					},
					targetInRange() {
						if (_status.event.skill == "nsweiyuan_use_backup") return true;
					},
				},
				onChooseToUse(event) {
					if (game.online || event.type != "phase") return;
					var list = [];
					event.player.getHistory("useCard", function (evt) {
						var name = evt.card.name;
						var type = get.type(name);
						if (type != "basic" && type != "trick") return;
						if (name == "sha") {
							var nature = evt.card.nature;
							switch (nature) {
								case "fire":
									name = "huosha";
									break;
								case "thunder":
									name = "leisha";
									break;
								case "kami":
									name = "kamisha";
									break;
								case "ice":
									name = "icesha";
									break;
							}
						}
						list.add(type + "咕咕" + name);
					});
					event.set("nsweiyuan_list", list);
				},
				filter(event, player) {
					return (
						player.countCards("h") > 0 && event.nsweiyuan_list && event.nsweiyuan_list.length > 0
					);
				},
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog("围援", [
							event.nsweiyuan_list.map(function (i) {
								return i.split("咕");
							}),
							"vcard",
						]);
					},
					filter(button, player) {
						return lib.filter.cardEnabled(
							{
								name: button.link[2],
								nature: button.link[3],
							},
							player
						);
					},
					check(button) {
						return _status.event.player.getUseValue(
							{
								name: button.link[2],
								nature: button.link[3],
							},
							false
						);
					},
					backup(links, player) {
						return {
							popname: true,
							position: "h",
							filterCard: true,
							ai1(card) {
								return 7 - get.value(card);
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							onuse(links, player) {
								player.removeSkill("nsweiyuan_use");
							},
						};
					},
					prompt(links, player) {
						return (
							"将一张手牌当做" +
							get.translation(links[0][3] || "") +
							get.translation(links[0][2]) +
							"使用"
						);
					},
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			nsjuxian: {
				trigger: { player: "damageBegin2" },
				filter(event, player) {
					return !player.hasSkill("nsjuxian2");
				},
				check(event, player) {
					if (player.countCards("h") + 2 >= player.maxHp)
						return (
							!event.source ||
							!event.source.countCards("he") ||
							get.attitude(player, event.source) > 0
						);
					return true;
				},
				content() {
					"step 0";
					player.addSkill("nsjuxian2");
					player.draw(2);
					"step 1";
					var target = trigger.source;
					if (player.countCards("h") >= player.maxHp && target && target.countCards("he")) {
						player.line(target, "green");
						target.chooseToDiscard("he", true);
					}
				},
			},
			nsjuxian2: {
				trigger: { player: "phaseDrawBefore" },
				forced: true,
				charlotte: true,
				sourceSkill: "nsjuxian",
				content() {
					player.removeSkill("nsjuxian2");
					trigger.cancel();
					game.log(player, "跳过了", "#y摸牌阶段");
				},
			},
			nsdiewu: {
				trigger: {
					player: ["damageEnd", "gainAfter"],
					global: "loseAsyncAfter",
				},
				forced: true,
				locked: false,
				filter(event, player) {
					if (event.name != "damage") return event.getg(player).length > 1;
					return true;
				},
				content() {
					player.addMark("nsdiewu", 1);
				},
				intro: {
					content: "mark",
				},
				group: ["nsdiewu_sha", "nsdiewu_shan", "nsdiewu_draw"],
				subSkill: {
					sha: {
						enable: "chooseToUse",
						viewAs: { name: "sha", isCard: true },
						prompt: "视为使用一张【杀】",
						viewAsFilter(player) {
							return player.countMark("nsdiewu") > 0;
						},
						filterCard: () => false,
						selectCard: -1,
						onuse(links, player) {
							player.removeMark("nsdiewu", 1);
						},
						ai: {
							order() {
								var player = _status.event.player;
								if (!player.storage.nspojian && player.countMark("nsdiewu") <= player.hp)
									return 0;
								return get.order({ name: "sha" }) + 0.1;
							},
						},
					},
					shan: {
						enable: "chooseToUse",
						viewAs: { name: "shan", isCard: true },
						viewAsFilter(player) {
							return player.countMark("nsdiewu") > 0 && !player.storage.nspojian;
						},
						filterCard: () => false,
						selectCard: -1,
						onuse(links, player) {
							player.removeMark("nsdiewu", 1);
						},
						ai: {
							order() {
								var player = _status.event.player;
								if (player.hp > 1 && player.countMark("nsdiewu") <= player.hp) return 0;
								return get.order({ name: "shan" }) - 0.2;
							},
						},
					},
					draw: {
						trigger: { source: "damageEnd" },
						forced: true,
						popup: false,
						filter(event, player) {
							var evt = event.getParent();
							return evt && evt.type == "card" && evt.skill == "nsdiewu_sha";
						},
						content() {
							player.draw();
						},
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag) {
						if (tag == "respondShan" && player.storage.nspojian) return false;
						return player.countMark("nsdiewu") > 0;
					},
				},
			},
			nslingying: {
				mod: {
					cardUsable(card, player, num) {
						if (card.name == "sha") return num + 1;
					},
					targetInRange(card) {
						if (card.name == "sha") return true;
					},
				},
			},
			nspojian: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "fire",
				filter(event, player) {
					return player.countMark("nsdiewu") >= player.hp;
				},
				content() {
					player.awakenSkill("nspojian");
					player.storage.nspojian = true;
					player.loseMaxHp();
					player.draw(2);
					player.addSkill("nsliegong");
				},
				derivation: "nsliegong",
				ai: {
					combo: "nsdiewu"
				},
			},
			nsliegong: {
				inherit: "xinliegong",
			},
			nsguolie: {
				trigger: { player: "phaseDrawBefore" },
				check(event, player) {
					var h1 = player.getUseValue({ name: "sha" }, false);
					var h2 = player.getUseValue({ name: "guohe" });
					return (
						player.countCards("h", function (card) {
							if (get.color(card) == "red") return h1 > 0;
							return h2 > 0;
						}) > 2
					);
				},
				content() {
					trigger.cancel();
					player.addTempSkill("nsguolie2");
				},
			},
			nsguolie2: {
				mod: {
					cardname(card, player) {
						var color = get.color(card, player);
						if (color == "red") return "sha";
						if (color == "black") return "guohe";
					},
					cardnature() {
						return false;
					},
					cardUsable() {
						return Infinity;
					},
					targetInRange() {
						return true;
					},
				},
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				sourceSkill: "nsguolie",
				filter(event, player) {
					var cards = [];
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.player == player) return;
						for (var i of evt.cards) {
							if (get.position(i, true) == "d") cards.push(i);
						}
					});
					return cards.length > 0;
				},
				content() {
					var cards = [];
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.player == player) return;
						if (evt.name == "cardsDiscard" && evt.parent.name == "orderingDiscard") return;
						for (var i of evt.cards) {
							if (get.position(i, true) == "d") cards.push(i);
						}
					});
					player.gain(cards, "gain2");
				},
			},
			nslongyue: {
				init: () => {
					game.addGlobalSkill("nslongyue_ai");
				},
				onremove: () => {
					if (!game.hasPlayer((i) => i.hasSkill("nslongyue"), true))
						game.removeGlobalSkill("nslongyue_ai");
				},
				trigger: { global: "useCard" },
				filter(event, player) {
					return (
						get.type(event.card, "trick") == "trick" &&
						event.player.getHistory("useCard").indexOf(event) == 0
					);
				},
				logTarget: "player",
				check(event, player) {
					return get.attitude(player, event.player) > 0;
				},
				content() {
					trigger.player.draw();
				},
				ai: {
					expose: 0.2,
				},
			},
			nslongyue_ai: {
				mod: {
					aiOrder(player, card, num) {
						if (
							!player.getHistory("useCard").length &&
							get.type(card) == "trick" &&
							game.hasPlayer(function (current) {
								return current.hasSkill("nslongyue") && get.attitude(player, current) >= 0;
							})
						)
							return num + 6;
					},
				},
				trigger: { player: "dieAfter" },
				filter: () => {
					return !game.hasPlayer((i) => i.hasSkill("nslongyue"), true);
				},
				silent: true,
				forceDie: true,
				content: () => {
					game.removeGlobalSkill("nslongyue_ai");
				},
			},
			nszhenyin: {
				trigger: { global: "judge" },
				usable: 1,
				filter(event, player) {
					return _status.currentPhase && _status.currentPhase.countCards("h") > 0;
				},
				logTarget() {
					return _status.currentPhase;
				},
				check(event, player) {
					var target = _status.currentPhase;
					var judge = event.judge(event.player.judging[0]);
					var max = 0;
					var hs = target.getCards("h", function (card) {
						var mod2 = game.checkMod(card, target, "unchanged", "cardEnabled2", target);
						if (mod2 != "unchanged") return mod2;
						var mod = game.checkMod(card, target, "unchanged", "cardRespondable", target);
						if (mod != "unchanged") return mod;
						return true;
					});
					for (var i of hs) {
						var num = event.judge(i) - judge;
						if (num > max) max = num;
					}
					var att = get.attitude(player, target);
					if (att > 0) return max > 0;
					if (att < 0) return max <= 0;
					return false;
				},
				content() {
					"step 0";
					if (
						!_status.currentPhase.countCards("h", function (card) {
							var player = _status.currentPhase;
							var mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
							if (mod2 != "unchanged") return mod2;
							var mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
							if (mod != "unchanged") return mod;
							return true;
						})
					) {
						event.finish();
						return;
					}
					_status.currentPhase
						.chooseCard(
							get.translation(trigger.player) +
								"的" +
								(trigger.judgestr || "") +
								"判定为" +
								get.translation(trigger.player.judging[0]) +
								"，请打出一张手牌进行改判",
							"h",
							true,
							function (card) {
								var player = _status.event.player;
								var mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
								if (mod2 != "unchanged") return mod2;
								var mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
								if (mod != "unchanged") return mod;
								return true;
							}
						)
						.set("ai", function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result / Math.max(0.1, get.value(card));
							} else {
								return -result / Math.max(0.1, get.value(card));
							}
						})
						.set("judging", trigger.player.judging[0]);
					"step 1";
					if (result.bool) {
						_status.currentPhase.respond(result.cards, "highlight").nopopup = true;
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						if (trigger.player.judging[0].clone) {
							trigger.player.judging[0].clone.classList.remove("thrownhighlight");
							game.broadcast(function (card) {
								if (card.clone) {
									card.clone.classList.remove("thrownhighlight");
								}
							}, trigger.player.judging[0]);
							game.addVideo(
								"deletenode",
								player,
								get.cardsInfo([trigger.player.judging[0].clone])
							);
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, "的判定牌改为", result.cards[0]);
						game.delay(2);
					}
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			nsxianhai: {
				trigger: { global: "damageSource" },
				filter(event, player) {
					return (
						event.source &&
						event.source != player &&
						event.source.isIn() &&
						event.source == _status.currentPhase &&
						(event.source.getStat("damage") || 0) > (player.getLastStat("damage") || 0) &&
						!player.hasSkill("nsxianhai_round")
					);
				},
				check(event, player) {
					return player.maxHp > 1 && get.attitude(player, event.source) < -4;
				},
				logTarget: "source",
				content() {
					"step 0";
					player.addTempSkill("nsxianhai_round", "roundStart");
					player.loseMaxHp();
					var list = [];
					for (var i = 1; i < 6; i++) {
						if (trigger.source.hasEnabledSlot(i))
							list.add("equip" + (i == 3 || i == 4 ? "3_4" : i));
					}
					if (list.length) {
						player
							.chooseControl(list)
							.set("prompt", "选择废除" + get.translation(trigger.source) + "的一种装备栏")
							.set("ai", function () {
								var target = _status.event.getTrigger().source;
								if (
									list.includes("equip6") &&
									target.getEquip("equip3") &&
									target.getEquip("equip4")
								)
									return "equip6";
								if (
									list.includes("equip2") &&
									target.getEquip(2) &&
									get.value(target.getEquip(2), target) > 0
								)
									return "equip2";
								if (
									list.includes("equip5") &&
									target.getEquip(5) &&
									get.value(target.getEquip(5), target) > 0
								)
									return "equip5";
								return 0;
							});
					} else event.goto(2);
					"step 1";
					if (result.control != "equip3_4") trigger.source.disableEquip(result.control);
					else {
						trigger.source.disableEquip(3, 4);
					}
					"step 2";
					if (player.awakenedSkills.includes("nsxingchu")) {
						var next = game.createEvent("nsxianhai_clear");
						event.next.remove(next);
						event.getParent("phase").after.push(next);
						next.player = player;
						next.setContent(function () {
							player.restoreSkill("nsxingchu");
						});
					}
					"step 3";
					if (trigger.source) {
						var hs = trigger.source.getCards("h", "shan");
						if (hs.length) trigger.source.discard(hs);
					}
				},
			},
			nsxianhai_round: { charlotte: true },
			nsxingchu: {
				trigger: { global: "die" },
				forceDie: true,
				filter(event, player) {
					return player == event.player || player == event.source;
				},
				limited: true,
				skillAnimation: true,
				animationColor: "wood",
				direct: true,
				content() {
					"step 0";
					player
						.chooseTarget(get.prompt2("nsxingchu"))
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.set("forceDie", true);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("nsxingchu", target);
						player.awakenSkill("nsxingchu");
						var he = trigger.player.getCards("he");
						if (he.length) target.gain(he, trigger.player, "giveAuto", "bySelf");
						target.gainMaxHp();
					}
				},
			},
			nsshengyan: {
				trigger: { player: "judgeEnd" },
				forced: true,
				filter(event, player) {
					return (
						_status.currentPhase &&
						_status.currentPhase.isIn() &&
						(!player.storage.nsshengyan2 ||
							!player.storage.nsshengyan2.includes(event.result.suit))
					);
				},
				logTarget() {
					return _status.currentPhase;
				},
				content() {
					player.addTempSkill("nsshengyan2");
					if (!player.storage.nsshengyan2) player.storage.nsshengyan2 = [];
					_status.currentPhase.addTempSkill("nsshengyan3");
					player.storage.nsshengyan2.add(trigger.result.suit);
					_status.currentPhase.addMark("nsshengyan3", 2, false);
				},
			},
			nsshengyan2: { onremove: true },
			nsshengyan3: {
				mod: {
					maxHandcard(player, num) {
						return num + player.countMark("nsshengyan3");
					},
				},
				onremove: true,
				intro: {
					content: "本回合手牌上限+#",
				},
				marktext: "筵",
			},
			nsdaizhan: {
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter(event, player) {
					return (
						(!player.hasJudge("lebu") || !player.hasJudge("bingliang")) &&
						player.countCards("he", function (card) {
							if (_status.connectMode) return true;
							return get.type(card, "trick") != "trick";
						})
					);
				},
				content() {
					var next = player.chooseToUse();
					next.set("norestore", true);
					next.set("_backupevent", "nsdaizhanx");
					next.set("custom", {
						add: {},
						replace: { window() {} },
					});
					next.backup("nsdaizhanx");
				},
			},
			nsdaizhanx: {
				chooseButton: {
					dialog() {
						var list = ["lebu", "bingliang"];
						var list2 = [];
						for (var i of list) {
							list2.push(["延时锦囊", "", i]);
						}
						return ui.create.dialog(get.prompt("nsdaizhan"), [list2, "vcard"], "hidden");
					},
					filter(button, player) {
						return !player.hasJudge(button.link[2]);
					},
					check(button) {
						if (button.link[2] == "lebu") return 0;
						var player = _status.event.player;
						var delta = player.getHandcardLimit() + player.countCards("j") * 2 + 2 - player.hp;
						if (delta >= 2) return 1 + Math.random();
						if (
							delta >= 0 &&
							!player.countCards("h", function (card) {
								return player.hasValueTarget(card);
							})
						)
							return Math.random();
						return 0;
					},
					backup(links, player) {
						return {
							filterCard(card, player) {
								return (
									get.itemtype(card) == "card" &&
									get.type(card, "trick") != "trick" &&
									player.canAddJudge({
										name: links[0][2],
										cards: [card],
									})
								);
							},
							filterTarget(card, player, target) {
								return player == target;
							},
							check(card) {
								return 8 - get.value(card);
							},
							viewAs: { name: links[0][2] },
							position: "he",
							precontent() {
								player.addTempSkill("nsdaizhany");
								event.result.skill = "nsdaizhan";
							},
							ai: {
								result: {
									target: 1,
								},
							},
						};
					},
					prompt(links) {
						return "将一张牌当做" + get.translation(links[0][2]) + "对自己使用";
					},
				},
			},
			nsdaizhany: {
				trigger: { player: "phaseEnd" },
				forced: true,
				popup: false,
				filter(event, player) {
					return player.countCards("h") < player.getHandcardLimit();
				},
				content() {
					player.drawTo(player.getHandcardLimit());
				},
				ai: {
					nowuxie_judge: true,
				},
			},
			nsjiquan: {
				trigger: {
					global: ["damageEnd", "damageSource"],
				},
				direct: true,
				filter(event, player, name) {
					var target = name == "damageSource" ? event.source : event.player;
					return (
						target &&
						target != player &&
						get.distance(player, target) <= 1 &&
						target.countCards("hej") > 0
					);
				},
				locked(skill, player) {
					return player && player.storage.nsfuwei;
				},
				content() {
					"step 0";
					var target = event.triggername == "damageSource" ? trigger.source : trigger.player;
					event.target = target;
					player
						.choosePlayerCard(target, "hej", player.storage.nsfuwei ? true : 1)
						.set("ai", function (button) {
							var val = get.buttonValue(button);
							if (get.attitude(_status.event.player, get.owner(button.link)) > 0) return -val;
							return val;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("nsjiquan", target);
						player.addToExpansion(result.cards, target, "give").gaintag.add("nsjiquan_mark");
					} else event.finish();
					"step 2";
					game.delayx();
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == "sha") return num + player.getExpansions("nsjiquan_mark").length;
					},
				},
			},
			nsjiquan_mark: {
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				marktext: "威",
			},
			nsfuwei: {
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				unique: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter(event, player) {
					return player.getExpansions("nsjiquan_mark").length > 4;
				},
				content() {
					player.awakenSkill("nsfuwei");
					player.storage.nsfuwei = true;
					player.addSkill("nsdiemou");
					player.addSkill("nszhihuang");
					player.gainMaxHp(2);
				},
				derivation: ["nsdiemou", "nszhihuang"],
				ai: {
					combo: "nsjiquan"
				},
			},
			nsdiemou: {
				trigger: { player: "phaseUseBegin" },
				forced: true,
				filter(event, player) {
					return player.getExpansions("nsjiquan_mark").length > game.players.length;
				},
				content() {
					var cards = player.getExpansions("nsjiquan_mark");
					player.draw(cards.length);
					player.loseMaxHp();
					player.loseToDiscardpile(cards);
					if (cards.length > 4) player.turnOver();
				},
				ai: {
					combo: "nsjiquan"
				},
			},
			nszhihuang: {
				available(mode) {
					return (
						mode == "identity" ||
						mode == "versus" && (_status.mode == "four" || _status.mode == "guandu") ||
						mode == "guozhan"
					);
				},
				group: "nszhihuang_damage",
				trigger: { global: "useCard" },
				usable: 1,
				filter(event, player) {
					return (
						event.player == get.zhu(player) &&
						player.getExpansions("nsjiquan_mark").length > 0 &&
						event.cards &&
						event.cards.filterInD().length > 0
					);
				},
				prompt2(event) {
					return "移去一张“威”并获得" + get.translation(event.cards.filterInD());
				},
				check(event, player) {
					if (["equip", "delay"].includes(get.type(event.card)))
						return get.attitude(player, event.player) < 0;
					return get.value(event.cards.filterInD()) > 0;
				},
				logTarget: "player",
				content() {
					"step 0";
					var cards = player.getExpansions("nsjiquan_mark");
					if (cards.length == 1)
						event._result = {
							bool: true,
							links: cards.slice(0),
						};
					else player.chooseButton(["选择移去一张“威”", cards], true);
					"step 1";
					player.loseToDiscardpile(result.links);
					player.gain(trigger.cards.filterInD(), "gain2", "log");
				},
				ai: {
					combo: "nsjiquan"
				},
			},
			nszhihuang_damage: {
				trigger: { source: "damageBegin1" },
				forced: true,
				sourceSkill: "nszhihuang",
				filter(event, player) {
					var zhu = get.zhu(player);
					return (
						zhu &&
						player.countCards("h") > zhu.countCards("h") &&
						event.getParent().type == "card"
					);
				},
				content() {
					trigger.num++;
				},
			},
			//OL神张角
			junksijun: {
				audio: "sijun",
				inherit: "sijun",
				check(event, player) {
					return ui.cardPile.childNodes.length;
				},
				async content(event, trigger, player) {
					player.removeMark("yizhao", player.countMark("yizhao"));
					const pile = Array.from(ui.cardPile.childNodes);
					if (pile.length) {
						const max = Math.pow(2, Math.min(100, pile.length));
						let bool = false,
							index,
							cards = [];
						for (let i = 0; i < max; i++) {
							let num = 0;
							index = i.toString(2);
							while (index.length < pile.length) {
								index = "0" + index;
							}
							for (var k = 0; k < index.length; k++) {
								if (index[k] == "1") num += get.number(pile[k]);
								if (num > 36) break;
							}
							if (num == 36) {
								bool = true;
								break;
							}
						}
						if (bool) {
							for (let k = 0; k < index.length; k++) {
								if (index[k] == "1") cards.push(pile[k]);
							}
							await player.gain(cards, "gain2");
						} else {
							let total = 0;
							for (const card of pile) {
								total += get.number(card);
								cards.push(card);
								if (total >= 36) break;
							}
						}
						if (cards.length) await player.gain(cards, "gain2");
					}
				},
			},
			//手杀削弱版许攸
			junkshicai: {
				audio: "nzry_shicai_2",
				trigger: { player: "useCardAfter" },
				filter(event, player) {
					if (!event.cards.filterInD("oe").length) return false;
					return (
						player
							.getHistory("useCard", (evt) => get.type2(evt.card) == get.type2(event.card))
							.indexOf(event) == 0
					);
				},
				prompt2(event, player) {
					const cards = event.cards.filterInD("oe");
					return (
						"你可以将" +
						get.translation(cards) +
						(cards.length > 1 ? "以任意顺序" : "") +
						"置于牌堆顶，然后摸一张牌"
					);
				},
				content() {
					"step 0";
					event.cards = trigger.cards.filterInD("oe");
					var lose_list = [];
					event.cards.forEach((card) => {
						var owner = get.owner(card);
						if (owner) {
							var arr = lose_list.find((i) => i[0] == owner);
							if (arr) arr[1].push(card);
							else lose_list.push([owner, [card]]);
						}
					});
					if (lose_list.length) {
						game.loseAsync({
							lose_list: lose_list,
						}).setContent("chooseToCompareLose");
					}
					"step 1";
					if (cards.length > 1) {
						var next = player.chooseToMove("恃才：将牌按顺序置于牌堆顶");
						next.set("list", [["牌堆顶", cards]]);
						next.set(
							"reverse",
							_status.currentPhase && _status.currentPhase.next
								? get.attitude(player, _status.currentPhase.next) > 0
								: false
						);
						next.set("processAI", function (list) {
							var cards = list[0][1].slice(0);
							cards.sort(function (a, b) {
								return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
							});
							return [cards];
						});
					}
					"step 2";
					if (result.bool && result.moved && result.moved[0].length)
						cards = result.moved[0].slice(0);
					cards.reverse();
					game.cardsGotoPile(cards, "insert");
					game.log(player, "将", cards, "置于了牌堆顶");
					player.draw();
				},
				ai: {
					reverseOrder: true,
					skillTagFilter(player) {
						if (
							player.getHistory("useCard", function (evt) {
								return get.type(evt.card) == "equip";
							}).length > 0
						)
							return false;
					},
				},
			},
			//削弱版段煨
			junklangmie: {
				audio: "langmie",
				trigger: { global: "phaseJieshuBegin" },
				direct: true,
				filter(event, player) {
					if (player == event.player || player.countCards("he") == 0) return false;
					var num = 0;
					if (
						event.player.hasHistory("sourceDamage", function (evt) {
							num += evt.num;
							return num >= 2;
						})
					)
						return true;
					var map = {};
					return event.player.hasHistory("useCard", function (i) {
						var name = get.type2(i.card, false);
						if (!map[name]) {
							map[name] = true;
							return false;
						}
						return true;
					});
				},
				content() {
					"step 0";
					var list = [],
						num = 0,
						target = trigger.player;
					event.target = target;
					event.choices = [];
					var map = {};
					if (
						target.hasHistory("useCard", function (i) {
							var name = get.type2(i.card, false);
							if (!map[name]) {
								map[name] = true;
								return false;
							}
							return true;
						})
					) {
						list.push("弃置一张牌，然后摸两张牌");
						event.choices.push("draw");
					}
					if (
						target.hasHistory("sourceDamage", function (evt) {
							num += evt.num;
							return num >= 2;
						})
					) {
						list.push("弃置一张牌，对" + get.translation(target) + "造成1点伤害");
						event.choices.push("damage");
					}
					player
						.chooseControl("cancel2")
						.set("choiceList", list)
						.set("ai", function () {
							var player = _status.event.player;
							var choices = _status.event.getParent().choices.slice(0);
							choices.push("cancel");
							choicex = choices.slice(0);
							var getx = function (a) {
								switch (a) {
									case "draw":
										return 2 * get.effect(player, { name: "draw" }, player, player);
									case "damage":
										return get.damageEffect(
											_status.event.getParent().target,
											player,
											player
										);
									default:
										return 0;
								}
							};
							choices.sort(function (a, b) {
								return getx(b) - getx(a);
							});
							return choicex.indexOf(choices[0]);
						})
						.set("prompt", get.prompt("junklangmie", target));
					"step 1";
					if (result.control == "cancel2") event.finish();
					else {
						event.choice = event.choices[result.index];
						player.chooseToDiscard("he").set("ai", (card) => 7 - get.value(card)).logSkill =
							event.choice == "draw" ? "junklangmie" : ["junklangmie", target];
					}
					"step 2";
					if (result.bool) {
						if (event.choice == "draw") player.draw(2);
						else target.damage();
					}
				},
			},
			//李典光速通渠传说
			junkwangxi: {
				audio: "wangxi",
				trigger: { player: "damageEnd", source: "damageSource" },
				filter(event) {
					if (event._notrigger.includes(event.player)) return false;
					return (
						event.num &&
						event.source &&
						event.player &&
						event.player.isIn() &&
						event.source.isIn() &&
						event.source != event.player
					);
				},
				check(event, player) {
					if (player.isPhaseUsing()) return true;
					if (event.player == player) return get.attitude(player, event.source) > -5;
					return get.attitude(player, event.player) > -5;
				},
				logTarget(event, player) {
					if (event.player == player) return event.source;
					return event.player;
				},
				preHidden: true,
				content() {
					"step 0";
					event.count = trigger.num;
					event.target = lib.skill.junkwangxi.logTarget(trigger, player);
					"step 1";
					player.draw(2).gaintag = ["junkwangxi_tag"];
					event.count--;
					"step 2";
					var cards = player.getCards("he", (card) => card.hasGaintag("junkwangxi_tag"));
					if (cards.length > 0 && target.isIn()) {
						if (cards.length == 1) event._result = { bool: true, cards: cards };
						else
							player.chooseCard(
								"he",
								"忘隙：交给" + get.translation(target) + "一张牌",
								true,
								function (card) {
									return card.hasGaintag("junkwangxi_tag");
								}
							);
					} else event.goto(4);
					"step 3";
					if (result.bool) {
						player.give(result.cards, target);
					}
					"step 4";
					player.removeGaintag("junkwangxi_tag");
					if (event.count && target.isIn() && player.hasSkill("junkwangxi")) {
						player.chooseBool(get.prompt2("junkwangxi", target));
					} else event.finish();
					"step 5";
					if (result.bool) {
						player.logSkill("junkwangxi", target);
						event.goto(1);
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			//2013标准包双蜀黑
			junkjizhi: {
				audio: "jizhi",
				trigger: { player: "useCard" },
				frequent: true,
				filter(event, player) {
					return get.type(event.card) == "trick" && event.card.isCard;
				},
				content() {
					"step 0";
					var card = get.cards()[0];
					event.card = card;
					game.cardsGotoOrdering(card);
					player.showCards(card, get.translation(player) + "发动了【集智】");
					if (get.type(card) != "basic") {
						player.gain(card, "gain2");
						event.finish();
					} else if (!player.countCards("h")) event.finish();
					"step 1";
					player.chooseCard(
						"h",
						"是否用一张手牌交换" + get.translation(card) + "？",
						"若选择「取消」，则" + get.translation(card) + "将被置入弃牌堆。"
					);
					"step 2";
					if (result.bool) {
						var card = result.cards[0];
						player.$throw(card, 1000);
						game.log(player, "将", card, "置于牌堆顶");
						player.lose(card, ui.cardPile, "visible", "insert");
						player.gain(event.card, "gain2");
					}
				},
			},
			junkqicai: {
				mod: {
					targetInRange(card, player, target, now) {
						var type = get.type(card);
						if (type == "trick" || type == "delay") return true;
					},
					canBeDiscarded(card) {
						if (
							get.position(card) == "e" &&
							!["equip3", "equip4", "equip6"].includes(get.subtype(card))
						)
							return false;
					},
				},
			},
			junkrende: {
				audio: "rende",
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				filterTarget: lib.filter.notMe,
				filterCard: true,
				selectCard: [1, Infinity],
				position: "h",
				discard: false,
				lose: false,
				delay: false,
				content() {
					"step 0";
					event.num = cards.length;
					event.targets = targets.slice(0);
					player.give(cards, target);
					if (event.num > 1) player.recover();
					"step 1";
					if (
						player.countCards("h") > 0 &&
						game.hasPlayer((current) => current != player && !targets.includes(current))
					) {
						player.chooseCardTarget({
							prompt: "是否继续分配剩余的手牌",
							prompt2:
								"操作提示：请先选择要分配的手牌，然后再选择一名角色，该角色将获得你选择的所有手牌。",
							filterCard: true,
							selectCard: [1, Infinity],
							filterTarget(card, player, target) {
								return (
									target != player && !_status.event.getParent().targets.includes(target)
								);
							},
						});
					} else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0],
							cards = result.cards;
						player.line(target, "green");
						player.give(cards, target);
						targets.add(target);
						event.num += cards.length;
						if (num < 2 && event.num > 1) player.recover();
						event.goto(1);
					}
				},
			},
			//十周年削弱版张让
			junktaoluan: {
				hiddenCard(player, name) {
					return (
						!player.getStorage("junktaoluan").includes(name) &&
						player.countCards(
							"hes",
							(card) => !player.getStorage("junktaoluan2").includes(get.suit(card))
						) > 0 &&
						!player.hasSkill("junktaoluan3") &&
						lib.inpile.includes(name)
					);
				},
				audio: "taoluan",
				enable: "chooseToUse",
				filter(event, player) {
					return (
						!player.hasSkill("junktaoluan3") &&
						player.countCards("hes", (card) => {
							return lib.inpile.some((name) => {
								if (player.getStorage("junktaoluan2").includes(get.suit(card))) return false;
								if (player.getStorage("junktaoluan").includes(name)) return false;
								if (get.type(name) != "basic" && get.type(name) != "trick") return false;
								if (
									event.filterCard(
										{
											name: name,
											isCard: true,
											cards: [card],
										},
										player,
										event
									)
								)
									return true;
								if (name == "sha") {
									for (var nature of lib.inpile_nature) {
										if (
											event.filterCard(
												{
													name: name,
													nature: nature,
													isCard: true,
													cards: [card],
												},
												player,
												event
											)
										)
											return true;
									}
								}
								return false;
							});
						}) > 0
					);
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (var name of lib.inpile) {
							if (get.type(name) == "basic" || get.type(name) == "trick") {
								if (player.getStorage("junktaoluan").includes(name)) continue;
								list.push([get.translation(get.type(name)), "", name]);
								if (name == "sha") {
									for (var j of lib.inpile_nature) list.push(["基本", "", "sha", j]);
								}
							}
						}
						return ui.create.dialog("滔乱", [list, "vcard"]);
					},
					filter(button, player) {
						return _status.event
							.getParent()
							.filterCard({ name: button.link[2] }, player, _status.event.getParent());
					},
					check(button) {
						var player = _status.event.player;
						var card = {
							name: button.link[2],
							nature: button.link[3],
						};
						if (player.countCards("hes", (cardx) => cardx.name == card.name)) return 0;
						return _status.event.getParent().type == "phase" ? player.getUseValue(card) : 1;
					},
					backup(links, player) {
						return {
							filterCard(card, player) {
								return !player.getStorage("junktaoluan2").includes(get.suit(card));
							},
							audio: "taoluan",
							popname: true,
							check(card) {
								return 7 - get.value(card);
							},
							position: "hse",
							viewAs: { name: links[0][2], nature: links[0][3] },
							onuse(result, player) {
								player.markAuto("junktaoluan2", [get.suit(result.cards[0], player)]);
								var evt = _status.event.getParent("phase");
								if (evt && evt.name == "phase" && !evt.junktaoluan) {
									evt.junktaoluan = true;
									var next = game.createEvent("taoluan_clear");
									_status.event.next.remove(next);
									evt.after.push(next);
									next.player = player;
									next.setContent(function () {
										delete player.storage.junktaoluan2;
									});
								}
								player.markAuto("junktaoluan", [result.card.name]);
							},
						};
					},
					prompt(links, player) {
						return (
							"将一张牌当做" +
							(get.translation(links[0][3]) || "") +
							get.translation(links[0][2]) +
							"使用"
						);
					},
				},
				ai: {
					order: 4,
					save: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag, arg) {
						if (
							!player.countCards(
								"hes",
								(card) => !player.getStorage("junktaoluan2").includes(get.suit(card))
							) ||
							player.hasSkill("taoluan3")
						)
							return false;
						if (tag == "respondSha" || tag == "respondShan") {
							if (arg == "respond") return false;
							return !player
								.getStorage("taoluan")
								.includes(tag == "respondSha" ? "sha" : "shan");
						}
						return (
							!player.getStorage("taoluan").includes("tao") ||
							(!player.getStorage("taoluan").includes("jiu") && arg == player)
						);
					},
					result: {
						player(player) {
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (
									players[i] != player &&
									players[i].countCards("he") &&
									get.attitude(player, players[i]) > 0
								) {
									return 1;
								}
							}
							return 0;
						},
					},
					threaten: 1.9,
				},
				group: "junktaoluan2",
			},
			junktaoluan2: {
				trigger: { player: ["useCardAfter", "respondAfter"] },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "junktaoluan",
				filter(event, player) {
					if (!game.hasPlayer((current) => current != player)) return false;
					return event.skill == "junktaoluan_backup";
				},
				content() {
					"step 0";
					player
						.chooseTarget(
							true,
							function (card, player, target) {
								return target != player;
							},
							"###滔乱###令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别不同的牌；2.你失去1点体力"
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							if (get.attitude(player, target) > 0) {
								if (get.attitude(target, player) > 0) {
									return target.countCards("h");
								}
								return target.countCards("h") / 2;
							}
							return 0;
						});
					"step 1";
					var target = result.targets[0];
					event.target = target;
					player.line(target, "green");
					var type = get.type(trigger.card, "trick");
					target
						.chooseCard(
							"###滔乱###交给" +
								get.translation(player) +
								"一张不为" +
								get.translation(type) +
								"牌的牌，或令其失去1点体力且滔乱无效直到回合结束",
							"he",
							num,
							function (card, player, target) {
								return get.type(card, "trick") != _status.event.cardType;
							}
						)
						.set("cardType", type)
						.set("ai", function (card) {
							if (_status.event.att) {
								return 11 - get.value(card);
							}
							return 0;
						})
						.set("att", get.attitude(target, player) > 0);
					"step 2";
					if (result.bool) {
						target.give(result.cards, player, "visible");
					} else {
						player.addTempSkill("junktaoluan3");
					}
				},
			},
			junktaoluan3: {
				charlotte: true,
				trigger: { player: "phaseEnd" },
				forced: true,
				popup: false,
				sourceSkill: "junktaoluan",
				content() {
					player.loseHp();
				},
			},
			junktaoluan_backup: { charlotte: true },

			nshuaishuang: {
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				content() {
					"step 0";
					var card = get.cardPile(function (card) {
						return card.name == "tao";
					});
					if (card) {
						player.gain(card, "gain2");
					} else event.finish();
					"step 1";
					game.updateRoundNumber();
					player.loseHp();
				},
			},
			nsfengli: {
				trigger: { player: "phaseEnd" },
				direct: true,
				filter(event, player) {
					return (
						player.countCards("h") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && !current.hasSkill("nsfengli_use");
						})
					);
				},
				content() {
					"step 0";
					player
						.chooseTarget(get.prompt2("nsfengli"), function (card, player, target) {
							return target != player && !target.hasSkill("nsfengli_use");
						})
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target) / (5 + target.countCards("h"));
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("nsfengli", target);
						var cards = player.getCards("h");
						player.addShownCards(cards, "visible_nsfengli");
						player.addSkill("nsfengli2");
						target.addSkill("nsfengli_use");
						target.storage.nsfengli_use = player;
					}
				},
				group: ["nsfengli_draw", "nsfengli_clear"],
				onremove(player) {
					player.removeSkill("nsfengli2");
				},
			},
			nsfengli_draw: {
				trigger: {
					player: ["loseAfter", "hideShownCardsAfter"],
					global: [
						"gainAfter",
						"equipAfter",
						"addJudgeAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				direct: true,
				charlotte: true,
				sourceSkill: "nsfengli",
				filter(event, player, name) {
					if (event.name == "hideShownCards") {
						const hs = player.countCards("h");
						return game.hasPlayer((current) => current.countCards("h") < hs);
					}
					var num = 0;
					var evt = event.getl(player);
					if (!evt || !evt.gaintag_map) return false;
					var bool = false;
					for (var i in evt.gaintag_map) {
						if (evt.gaintag_map[i].some((tag) => tag.indexOf("visible_") == 0)) num++;
					}
					if (event.getg) {
						if (event.name == "gain") {
							if (
								event.getlx === false &&
								event.gaintag.some((tag) => tag.indexOf("visible_") == 0)
							)
								num -= event.cards.length;
						} else {
							player.checkHistory("gain", function (evt) {
								if (
									evt.parent == event &&
									evt.gaintag.some((tag) => tag.indexOf("visible_") == 0)
								) {
									num -= evt.cards.length;
								}
							});
						}
					}
					if (num > 0) {
						const hs = player.countCards("h");
						return game.hasPlayer((current) => current.countCards("h") < hs);
					}
				},
				content() {
					"step 0";
					player
						.chooseTarget(
							"奉礼：是否令一名手牌数小于你的其他角色摸一张牌？",
							function (card, player, target) {
								return target != player && target.countCards("h") < player.countCards("h");
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards("h"));
							if (target.hasSkillTag("nogain")) att /= 10;
							return att;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("nsfengli", target);
						target.draw();
					}
				},
			},
			nsfengli_clear: {
				trigger: { player: "phaseBegin" },
				forced: true,
				sourceSkill: "nsfengli",
				filter(event, player) {
					return player.hasSkill("nsfengli2");
				},
				content() {
					var cards = player.getShownCards();
					if (cards.length > 0) player.hideShownCards(cards);
					player.removeSkill("nsfengli2");
				},
			},
			nsfengli2: {
				onremove(player) {
					player.removeGaintag("nsfengli2");
					game.countPlayer(function (current) {
						if (current.storage.nsfengli_use == player) current.removeSkill("nsfengli_use");
					});
				},
			},
			nsfengli_use: {
				hiddenCard(player, name) {
					if (player == _status.currentPhase) return false;
					var target = player.storage.nsfengli_use;
					var cards = target.getShownCards();
					for (var i of cards) {
						if (get.name(i, target) == name) return true;
					}
					return false;
				},
				enable: ["chooseToUse", "chooseToRespond"],
				charlotte: true,
				onremove: true,
				sourceSkill: "nsfengli",
				filter(event, player) {
					if (player == _status.currentPhase) return false;
					var target = player.storage.nsfengli_use;
					var cards = target.getShownCards();
					for (var i of cards) {
						if (
							event.filterCard(
								{
									name: get.name(i, target),
									nature: get.nature(i, target),
									isCard: true,
								},
								player,
								event
							)
						)
							return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var target = player.storage.nsfengli_use;
						var cards = target.getShownCards();
						return ui.create.dialog("奉礼", cards);
					},
					filter(button, player) {
						var evt = _status.event.getParent();
						var target = player.storage.nsfengli_use;
						return evt.filterCard(
							{
								name: get.name(button.link, target),
								nature: get.nature(button.link, target),
								isCard: true,
							},
							player,
							evt
						);
					},
					check(button) {
						var player = _status.event.player;
						var evt = _status.event.getParent();
						if (evt.dying) return get.attitude(player, evt.dying);
						return 1;
					},
					backup(links, player) {
						var target = player.storage.nsfengli_use;
						return {
							viewAs: {
								name: get.name(links[0], target),
								nature: get.nature(links[0], target),
								isCard: true,
							},
							card: links[0],
							filterCard: () => false,
							selectCard: -1,
							precontent() {
								var card = lib.skill.nsfengli_use_backup.card;
								var target = player.storage.nsfengli_use;
								event.target = target;
								player.logSkill("nsfengli", target);
								delete event.result.skill;
								player.showCards(card, get.translation(player) + "发动了【奉礼】");
								target.hideShownCards(card);
							},
						};
					},
					ai: {
						hasSha: true,
						hasShan: true,
						skillTagFilter(player, tag) {
							var name = "s" + tag.slice(4);
							return lib.skill.nsfengli_use.hiddenCard(player, name);
						},
					},
				},
				ai: {
					order: 8,
					result: {
						player: 1,
					},
				},
			},
			ns_chuanshu: {
				audio: ["xingshuai", 2],
				trigger: {
					global: "dying",
				},
				limited: true,
				priority: 8,
				unique: true,
				skillAnimation: true,
				animationColor: "water",
				filter(event, player) {
					return event.player.hp <= 0 && event.player != player;
				},
				check(event, player) {
					return get.attitude(player, event.player) > 0;
				},
				logTarget: "player",
				content() {
					"step 0";
					trigger.player
						.chooseControl("releiji", "guidao")
						.set("prompt", "" + get.translation(trigger.player) + "获得一项技能");
					goon = true;
					if (!goon) {
						event.finish();
					}
					"step 1";
					trigger.player.addSkillLog(result.control);
					trigger.player.recover(1 - trigger.player.hp);
					trigger.player.draw(2);
					trigger.player.storage.ns_chuanshu2 = player;
					trigger.player.addSkill("ns_chuanshu2");
					player.awakenSkill("ns_chuanshu");
				},
			},
			ns_xiandao1: {
				audio: ["huashen", 2],
				forced: true,
				//noLose:true,
				//locked:true,
				//noRemove:true,
				//noDisable:true,
				priority: 10,
				trigger: {
					global: "gameStart",
					player: ["phaseEnd", "enterGame"],
				},
				//filter (event,player){
				//	return player.isAlive();
				//},
				content() {
					var n = [1, 2].randomGet();
					if (n == 1) {
						player.addTempSkill("releiji", {
							player: "phaseUseBegin",
						});
						player.markSkill("releiji", {
							player: "phaseUseBegin",
						});
					}
					if (n == 2) {
						player.addTempSkill("guidao", {
							player: "phaseUseBegin",
						});
						player.markSkill("guidao", { player: "phaseUseBegin" });
					}
				},
			},
			ns_xiandao2: {
				audio: ["huashen", 2],
				forced: true,
				//noLose:true,
				//locked:true,
				//noRemove:true,
				//noDisable:true,
				trigger: {
					player: "damageBefore",
				},
				filter(event, player) {
					if (!event.nature) return false;
					return true;
				},
				content() {
					trigger.cancel();
					//event.finish();
				},
				ai: {
					nofire: true,
					nothunder: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, "natureDamage")) return "zerotarget";
						}
					}
				}
			},
			ns_xiandao: {
				forced: true,
				//noLose:true,
				//locked:true,
				noRemove: true,
				//noDisable:true,
				group: ["ns_xiandao1", "ns_xiandao2"],
			},
			ns_chuanshu2: {
				audio: ["songwei", 2],
				mark: "character",
				intro: {
					content: "当你造成或受到一次伤害后，$摸一张牌",
				},
				nopop: true,
				trigger: {
					source: "damageEnd",
					player: "damageEnd",
				},
				forced: true,
				popup: false,
				sourceSkill: "ns_chuanshu",
				filter(event, player) {
					return player.storage.ns_chuanshu2 && player.storage.ns_chuanshu2.isIn() && event.num > 0;
				},
				content() {
					"step 0";
					game.delayx();
					"step 1";
					var target = player.storage.ns_chuanshu2;
					player.line(target, "green");
					target.draw();
					game.delay();
				},
				onremove: true,
				group: "ns_chuanshu3",
			},
			ns_chuanshu3: {
				audio: 1,
				trigger: {
					player: "dieBegin",
				},
				silent: true,
				onremove: true,
				sourceSkill: "ns_chuanshu",
				filter(event, player) {
					return player.storage.ns_chuanshu2 && player.storage.ns_chuanshu2.isIn();
				},
				content() {
					"step 0";
					game.delayx();
					"step 1";
					var target = player.storage.ns_chuanshu2;
					player.line(target, "green");
					//target.addSkill('ns_chuanshu');
					target.restoreSkill("ns_chuanshu");
					target.update();
				},
				forced: true,
				popup: false,
			},
			ns_xiuzheng: {
				audio: ["xinsheng", 2],
				enable: "phaseUse",
				usable: 1,
				priority: 10,
				filter(event, player) {
					return ui.cardPile.childElementCount + ui.discardPile.childElementCount >= 2;
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					"step 0";
					event.cards = get.cards(2);
					player.showCards(event.cards);
					"step 1";
					if (get.color(event.cards[0]) == "red" && get.color(event.cards[1]) == "red") {
						target.damage("fire");
					}
					if (get.color(event.cards[0]) != get.color(event.cards[1])) {
						player.discardPlayerCard(target, "he", true);
					}
					if (get.color(event.cards[0]) == "black" && get.color(event.cards[1]) == "black") {
						target.damage("thunder");
					}
					"step 2";
					if (event.cards.length) {
						player.gain(event.cards, "gain2");
						game.delay();
					}
					"step 3";
					player.chooseToDiscard(2, "he", "请弃置两张牌", true);
				},
				ai: {
					threaten: 0.5,
					order: 13,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
				},
			},
			nsanruo: {
				unique: true,
				locked: true,
				init(player) {
					if (!player.node.handcards1.cardMod) {
						player.node.handcards1.cardMod = {};
					}
					if (!player.node.handcards2.cardMod) {
						player.node.handcards2.cardMod = {};
					}
					var cardMod = function (card) {
						if (get.info(card).multitarget) return;
						if (card.name == "sha" || get.type(card) == "trick")
							return ["暗弱", "杀或普通锦囊牌对你不可见"];
					};
					player.node.handcards1.cardMod.nsanruo = cardMod;
					player.node.handcards2.cardMod.nsanruo = cardMod;
					player.node.handcards1.classList.add("nsanruo");
					player.node.handcards2.classList.add("nsanruo");
					if (!ui.css.nsanruo) {
						ui.css.nsanruo = lib.init.sheet(
							'.handcards.nsanruo>.card[data-card-type="trick"]:not(*[data-card-multitarget="1"])>*,' +
								'.handcards.nsanruo>.card[data-card-name="sha"]>*{visibility:hidden !important}'
						);
					}
				},
				onremove(player) {
					player.node.handcards1.classList.remove("nsanruo");
					player.node.handcards2.classList.remove("nsanruo");
					delete player.node.handcards1.cardMod.nsanruo;
					delete player.node.handcards2.cardMod.nsanruo;
				},
				ai: {
					neg: true,
				},
			},
			nsxunshan: {
				mod: {
					selectTarget(card, player, range) {
						if (!player.hasSkill("nsanruo")) return;
						if (_status.auto) return;
						if (get.position(card) != "h" || get.owner(card) != player) return;
						if (get.info(card).multitarget) return;
						if (card.name == "sha" || get.type(card) == "trick") range[1] = game.countPlayer();
					},
					// playerEnabled(card,player,target,current){
					// 	if(current==false) return;
					// 	var filter=get.info(card).modTarget;
					// 	if(typeof filter=='boolean'&&filter) return 'forceEnable';
					// 	if(typeof filter=='function'&&filter(card,player,target)) return 'forceEnable';
					// }
					// targetInRange(card,player){
					// 	if(_status.auto) return;
					// 	if(get.position(card)!='h'||get.owner(card)!=player) return;
					// 	if(get.info(card).multitarget) return;
					// 	if(card.name=='sha'||get.type(card)=='trick') return true;
					// }
				},
				ai: {
					combo: "nsanruo",
				},
			},
			nskaicheng: {
				enable: "phaseUse",
				usable: 1,
				zhuSkill: true,
				unique: true,
				filter(event, player) {
					if (!player.hasZhuSkill("nskaicheng")) return false;
					if (
						!player.hasCard(function (card) {
							if (get.info(card).multitarget) return false;
							return card.name == "sha" || get.type(card) == "trick";
						})
					) {
						return false;
					}
					return game.hasPlayer(function (current) {
						return current != player && current.group == "qun";
					});
				},
				filterCard(card) {
					if (get.info(card).multitarget) return false;
					return card.name == "sha" || get.type(card) == "trick";
				},
				filterTarget(card, player, target) {
					return player != target && target.group == "qun";
				},
				lose: false,
				content() {
					"step 0";
					target.chooseBool(function () {
						return get.attitude(target, player) > 0;
					}, "是否将" + get.translation(cards) + "告知" + get.translation(player));
					"step 1";
					if (!player.hasUseTarget(cards[0])) {
						if (result.bool) {
							player
								.chooseControl("确定")
								.set("prompt", "你展示的手牌为" + get.translation(cards));
						} else {
							event.hidden = true;
							player
								.chooseControl("确定")
								.set("prompt", get.translation(target) + "拒绝告知你卡牌信息");
						}
					} else {
						if (result.bool) {
							player.chooseBool(
								"是否使用展示的牌？",
								"你展示的手牌为" +
									get.translation(cards) +
									"。如果你使用此牌，则在结算后摸一张牌；如果你不使用此牌，则结束出牌阶段"
							);
						} else {
							event.hidden = true;
							player.chooseBool(
								"是否使用展示的牌？",
								get.translation(target) +
									"拒绝告知你卡牌信息。如果你使用此牌，则在结算后摸一张牌；如果你不使用此牌，则结束出牌阶段"
							);
						}
					}
					"step 2";
					if (result.bool) {
						player.chooseUseTarget(true, cards[0], event.hidden ? "选择此牌的目标" : null);
					} else {
						var evt = _status.event.getParent("phaseUse");
						if (evt) {
							evt.skipped = true;
						}
						event.finish();
					}
					"step 3";
					player.draw();
				},
				ai: {
					combo: "nsanruo",
				},
			},
			nsjuanli: {
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && target.countCards("h");
				},
				filter(event, player) {
					return player.countCards("h");
				},
				init(player) {
					player.storage.nsjuanli_win = [];
					player.storage.nsjuanli_lose = [];
				},
				intro: {
					content(storage, player) {
						var str = "";
						if (player.storage.nsjuanli_win.length) {
							str +=
								get.translation(player.storage.nsjuanli_win) + "与你距离-1直到与你下次赌牌";
						}
						if (player.storage.nsjuanli_lose.length) {
							if (str.length) {
								str += "；";
							}
							str +=
								get.translation(player.storage.nsjuanli_lose) + "与你距离+1直到与你下次赌牌";
						}
						return str;
					},
				},
				onremove: ["nsjuanli_win", "nsjuanli_lose"],
				content() {
					"step 0";
					player.storage.nsjuanli_win.remove(target);
					player.storage.nsjuanli_lose.remove(target);
					event.prompt2 =
						"赌牌的两名角色分别亮开一张手牌，若花色相同则赌牌平局，若花色不同，则依次亮出牌堆顶的牌直到翻开的牌与其中一人亮出牌的花色相同，则该角色获得赌牌的胜利";
					player.chooseCard("h", true).set("prompt2", event.prompt2);
					"step 1";
					if (result.bool) {
						event.card1 = result.cards[0];
						target.chooseCard("h", true).set("prompt2", event.prompt2);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						event.card2 = result.cards[0];
					} else {
						event.finish();
					}
					"step 3";
					player.$compare(event.card1, event.target, event.card2);
					game.delay(0, 1500);
					game.log(player, "亮出的牌为", event.card1);
					game.log(target, "亮出的牌为", event.card2);
					"step 4";
					var suit1 = get.suit(event.card1);
					var suit2 = get.suit(event.card2);
					if (suit1 == suit2) {
						game.broadcastAll(function (str) {
							var dialog = ui.create.dialog(str);
							dialog.classList.add("center");
							setTimeout(function () {
								dialog.close();
							}, 1000);
						}, "平局");
						game.delay(2);
						if (!player.storage.nsjuanli_win.length && !player.storage.nsjuanli_lose.length) {
							player.unmarkSkill("nsjuanli");
						}
					} else {
						var cards = [];
						for (var i = 0; i < 1000; i++) {
							var current = get.cards();
							if (current && current.length) {
								current = current[0];
								current.discard();
								cards.push(current);
								var suit = get.suit(current);
								if (suit == suit1) {
									player.showCards(cards, get.translation(player) + "赌牌获胜");
									player.storage.nsjuanli_win.add(target);
									target.loseHp();
									player.markSkill("nsjuanli");
									break;
								} else if (suit == suit2) {
									player.showCards(cards, get.translation(target) + "赌牌获胜");
									player.storage.nsjuanli_lose.add(target);
									target.recover();
									player.markSkill("nsjuanli");
									break;
								}
							} else {
								break;
							}
						}
					}
				},
				mod: {
					globalTo(from, to, distance) {
						if (to.storage.nsjuanli_win && to.storage.nsjuanli_win.includes(from)) {
							return distance - 1;
						}
						if (to.storage.nsjuanli_lose && to.storage.nsjuanli_lose.includes(from)) {
							return distance + 1;
						}
					},
				},
				ai: {
					order: 4,
					result: {
						target(player, target) {
							if (target.isHealthy()) {
								return -1 / (1 + target.hp);
							} else {
								return -0.3 / (1 + target.hp);
							}
						},
					},
				},
			},
			nsyuanchou: {
				trigger: { target: "useCardToBefore" },
				forced: true,
				priority: 15,
				check(event, player) {
					return get.effect(event.target, event.card, event.player, player) < 0;
				},
				filter(event, player) {
					return get.type(event.card, "trick") == "trick" && get.distance(event.player, player) > 1;
				},
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (get.type(card, "trick") == "trick" && get.distance(player, target) > 1)
								return "zeroplayertarget";
						},
					},
				},
			},
			nsguhuo: {
				trigger: { player: "useCardAfter" },
				forced: true,
				usable: 2,
				filter(event, player) {
					if (event.parent.name == "nsguhuo") return false;
					if (event.card == event.cards[0]) {
						var type = get.type(event.card, "trick");
						var names = [];
						if (
							get.cardPile(function (card) {
								if (get.type(card, "trick") != type) return false;
								if (get.info(card).multitarget) return false;
								if (names.includes(card.name)) return false;
								if (player.hasUseTarget(card)) {
									return true;
								} else {
									names.add(card.name);
									return false;
								}
							})
						) {
							return true;
						}
					}
					return true;
				},
				content() {
					var type = get.type(trigger.card, "trick");
					var names = [];
					var card = get.cardPile(function (card) {
						if (get.type(card, "trick") != type) return false;
						if (get.info(card).multitarget) return false;
						if (names.includes(card.name)) return false;
						if (player.hasUseTarget(card)) {
							return true;
						} else {
							names.add(card.name);
							return false;
						}
					});
					if (card) {
						var info = get.info(card);
						var targets = game.filterPlayer(function (current) {
							return lib.filter.filterTarget(card, player, current);
						});
						if (targets.length) {
							targets.sort(lib.sort.seat);
							var select = get.select(info.selectTarget);
							if (select[0] == -1 || select[1] == -1) {
								player.useCard(card, targets, "noai");
							} else if (targets.length >= select[0]) {
								var num = select[0] + Math.floor(Math.random() * (select[1] - select[0] + 1));
								player.useCard(card, targets.randomGets(num), "noai");
							}
						}
					}
				},
			},
			nsbaiyi: {
				trigger: { player: "phaseDiscardBefore" },
				forced: true,
				filter(event, player) {
					return player.storage.nsqinxue && player.storage.nsqinxue.length;
				},
				content() {
					"step 0";
					trigger.cancel();
					var num = player.storage.nsqinxue.length;
					player.chooseToDiscard("白衣：请弃置" + get.cnNumber(num) + "张牌", "he", true, num);
					"step 1";
					if (result.bool && result.cards.length) {
						event.goon = true;
						if (result.cards.length == 3) {
							var type = [];
							for (var i = 0; i < result.cards.length; i++) {
								type.add(get.type(result.cards[i], "trick"));
							}
							if (type.length == 3 && trigger.getParent().skill != "nsbaiyi") {
								event.goon = false;
								player.insertPhase();
							}
						}
						if (event.goon) {
							var cards = get.cards(result.cards.length);
							event.cards = cards;
							player.chooseCardButton(cards, "获得一张牌", true);
						}
					}
					"step 2";
					if (event.goon && result.bool && result.links.length) {
						player.gain(result.links, "draw");
						for (var i = 0; i < event.cards.length; i++) {
							if (!result.links.includes(event.cards[i])) {
								event.cards[i].discard();
							}
						}
					}
				},
				ai: {
					threaten: 1.5,
					combo: "nsqinxue",
				},
			},
			nsqinxue: {
				trigger: { player: "useCard" },
				init(player) {
					player.storage.nsqinxue = [];
				},
				forced: true,
				filter(event, player) {
					var type = get.type(event.card, "trick");
					if (player.storage.nsqinxue.includes(type)) return false;
					return ["basic", "trick", "equip"].includes(type);
				},
				content() {
					var type = null;
					var type0 = get.type(trigger.card, "trick");
					switch (type0) {
						case "basic":
							type = "trick";
							break;
						case "trick":
							type = "equip";
							break;
						case "equip":
							type = "basic";
							break;
					}
					var card = get.cardPile(function (card) {
						return get.type(card, "trick") == type;
					});
					if (card) {
						player.gain(card, "gain2");
						player.storage.nsqinxue.push(type0);
					}
				},
				group: "nsqinxue_clear",
				subSkill: {
					clear: {
						trigger: { global: "phaseAfter" },
						silent: true,
						content() {
							player.storage.nsqinxue = [];
						},
					},
				},
			},
			nsfuge: {
				trigger: { player: "phaseAfter" },
				filter(event, player) {
					return !player.storage.nsfuge;
				},
				init(player) {
					lib.onwash.push(function () {
						delete player.storage.nsfuge;
					});
				},
				skillAnimation: true,
				check(event, player) {
					return player.hp == 1 || player.maxHp - player.hp >= 2;
				},
				content() {
					player.storage.nsfuge = true;
					player.insertPhase();
				},
				group: "nsfuge_draw",
				subSkill: {
					draw: {
						trigger: { player: "phaseDrawBegin" },
						silent: true,
						filter(event, player) {
							var evt = event.getParent("phase");
							return evt && evt.skill == "nsfuge";
						},
						content() {
							trigger.num += player.maxHp - player.hp;
						},
					},
				},
			},
			nsbaiming: {
				trigger: { player: "useCard" },
				direct: true,
				filter(event, player) {
					if (player.additionalSkills.nsbaiming) return false;
					return (
						event.card &&
						event.card.name == "sha" &&
						player.storage.nsbaiming &&
						player.storage.nsbaiming.length > 0
					);
				},
				group: "nsbaiming_clear",
				init(player) {
					var check = function (list) {
						for (var i = 0; i < list.length; i++) {
							var info = lib.skill[list[i]];
							if (!info) continue;
							if (info.shaRelated) return true;
							if (info && info.trigger) {
								for (var j in info.trigger) {
									var cond = info.trigger[j];
									if (typeof cond == "string") {
										cond = [cond];
									}
									if (j == "source" || j == "global") {
										if (cond.indexOf("damageBefore") != -1) return true;
										if (cond.indexOf("damageBegin") != -1) return true;
										if (cond.indexOf("damageBegin1") != -1) return true;
										if (cond.indexOf("damageBegin2") != -1) return true;
										if (cond.indexOf("damageEnd") != -1) return true;
										if (cond.indexOf("damageSource") != -1) return true;
										if (cond.indexOf("damageAfter") != -1) return true;
									}
								}
							}
							if (info.shaRelated === false) return false;
							if (get.skillInfoTranslation(list[i], player).includes("【杀】")) return true;
						}
						return false;
					};
					player.storage.nsbaiming = get.gainableSkills(function (info, skill) {
						var list = [skill];
						game.expandSkills(list);
						return check(list);
					}, player);
				},
				content() {
					"step 0";
					var list = player.storage.nsbaiming.slice(0);
					event.skillai = function () {
						return get.max(list, get.skillRank, "item");
					};
					if (event.isMine()) {
						var dialog = ui.create.dialog("forcebutton");
						dialog.add(get.prompt("nsbaiming"));
						var clickItem = function () {
							_status.event._result = this.link;
							dialog.close();
							game.resume();
						};
						for (var i = 0; i < list.length; i++) {
							if (lib.translate[list[i] + "_info"]) {
								var translation = get.translation(list[i]);
								if (translation[0] == "新" && translation.length == 3) {
									translation = translation.slice(1, 3);
								} else {
									translation = translation.slice(0, 2);
								}
								var item = dialog.add(
									'<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' +
										translation +
										"】</div><div>" +
										lib.translate[list[i] + "_info"] +
										"</div></div>"
								);
								item.firstChild.addEventListener("click", clickItem);
								item.firstChild.link = list[i];
							}
						}
						dialog.add(ui.create.div(".placeholder"));
						event.switchToAuto = function () {
							event._result = event.skillai();
							dialog.close();
							game.resume();
						};
						event.confirm = ui.create.confirm("c");
						event.custom.replace.confirm = function () {
							event._result = null;
							dialog.close();
							game.resume();
						};
						_status.imchoosing = true;
						game.pause();
					} else {
						event._result = event.skillai();
					}
					"step 1";
					_status.imchoosing = false;
					if (event.confirm) {
						event.confirm.close();
					}
					if (typeof result == "string") {
						player.logSkill("nsbaiming");
						var link = result;
						player.addAdditionalSkill("nsbaiming", link);
						player.logSkill("nsbaiming");
						player.popup(link);
						game.log(player, "获得了技能", "【" + get.translation(link) + "】");
						game.delay();
						player.storage.nsbaiming.remove(link);
						trigger.nsbaiming = true;
					}
				},
				subSkill: {
					clear: {
						trigger: { player: "useCardAfter" },
						silent: true,
						filter(event) {
							return event.nsbaiming == true;
						},
						content() {
							player.removeAdditionalSkill("nsbaiming");
						},
					},
				},
			},
			nsxinzhan: {
				enable: "phaseUse",
				filterCard: [1, Infinity],
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				usable: 1,
				selectCard: [1, Infinity],
				check(card) {
					var player = _status.event.player;
					if (
						player.countCards("h") >= 8 &&
						game.hasPlayer(function (current) {
							return current.isDamaged() && get.attitude(player, current) > 3;
						})
					) {
						if (ui.selected.cards.length >= 6) {
							return 0;
						}
						return 1;
					} else {
						if (ui.selected.cards.length >= 2) {
							return 0;
						}
						if (
							player.countCards("h", function (card) {
								return get.value(card) < 0;
							})
						) {
							return 8 - get.value(card, player, "raw");
						} else {
							return 4 - get.value(card, player, "raw");
						}
					}
				},
				discard: false,
				prepare: "give2",
				content() {
					target.gain(cards, player);
					var num = Math.floor(cards.length / 2);
					if (num >= 3) {
						target.loseMaxHp(true);
					} else if (num) {
						target.loseHp(num);
					}
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							if (ui.selected.cards.length >= 6) {
								if (target.isDamaged()) return 2;
								return 1;
							}
							if (ui.selected.cards.length == 1) {
								return 1;
							}
							return -1;
						},
					},
				},
			},
			nstanbing: {
				trigger: { player: "phaseDrawBegin" },
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				direct: true,
				content() {
					"step 0";
					player.chooseToDiscard("h", get.prompt2("nstanbing")).set("ai", function (card) {
						if (!player.needsToDiscard(1)) {
							return get.translation(card.name).length - 1;
						}
						return 0;
					}).logSkill = "nstanbing";
					"step 1";
					if (result.bool) {
						player.draw(get.translation(result.cards[0].name).length);
						player.addTempSkill("nstanbing_sha");
					}
				},
				subSkill: {
					sha: {
						mod: {
							cardEnabled(card, player) {
								if (card.name == "sha") {
									return false;
								}
							},
							cardUsable(card, player) {
								if (card.name == "sha") {
									return false;
								}
							},
						},
					},
				},
			},
			nswangfeng: {
				trigger: { global: "judge" },
				filter(event, player) {
					return player.countCards("he", { color: "red" }) > 0;
				},
				direct: true,
				content() {
					"step 0";
					player
						.chooseCard(
							get.translation(trigger.player) +
								"的" +
								(trigger.judgestr || "") +
								"判定为" +
								get.translation(trigger.player.judging[0]) +
								"，" +
								get.prompt("nswangfeng"),
							"he",
							function (card) {
								return get.color(card) == "red";
							}
						)
						.set("ai", function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result;
							} else {
								return -result;
							}
						})
						.set("judging", trigger.player.judging[0]);
					"step 1";
					if (result.bool) {
						player.respond(result.cards, "highlight");
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.logSkill("nswangfeng");
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						if (!get.owner(result.cards[0], "judge")) {
							trigger.position.appendChild(result.cards[0]);
						}
						game.log(trigger.player, "的判定牌改为", result.cards[0]);
					}
					"step 3";
					game.delay(2);
				},
				ai: {
					tag: {
						rejudge: 1,
					},
				},
			},
			nsfuhuo: {
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				filterTarget(card, player, target) {
					return player != target && !target.hasSkill("nsfuhuo2");
				},
				prepare: "throw",
				discard: false,
				content() {
					target.$gain2(cards);
					target.storage.nsfuhuo2 = cards[0];
					target.addSkill("nsfuhuo2");
					target.storage.nsfuhuo3 = player;
					ui.special.appendChild(cards[0]);
					target.syncStorage("nsfuhuo2");
				},
				check(card) {
					return 6 - get.value(card);
				},
				ai: {
					expose: 0.1,
					order: 4,
					result: {
						target(player, target) {
							if (target.hasSkillTag("maixie")) return 0;
							return -1;
						},
					},
				},
				group: ["nsfuhuo_die", "nsfuhuo_gain"],
				subSkill: {
					die: {
						trigger: { player: "dieBegin" },
						silent: true,
						content() {
							for (var i = 0; i < game.players.length; i++) {
								if (
									game.players[i].hasSkill("nsfuhuo2") &&
									game.players[i].storage.nsfuhuo3 == player
								) {
									game.players[i].removeSkill("nsfuhuo2");
								}
							}
						},
					},
					gain: {
						trigger: { player: "phaseBegin" },
						silent: true,
						content() {
							for (var i = 0; i < game.players.length; i++) {
								if (
									game.players[i].hasSkill("nsfuhuo2") &&
									game.players[i].storage.nsfuhuo3 == player
								) {
									var card = game.players[i].storage.nsfuhuo2;
									game.players[i].removeSkill("nsfuhuo2");
									game.players[i].$give(card, player);
									player.gain(card);
								}
							}
						},
					},
				},
			},
			nsfuhuo2: {
				trigger: { player: ["respondAfter", "useCardAfter"] },
				forced: true,
				priority: 10,
				mark: "card",
				popup: false,
				sourceSkill: "nsfuhuo",
				filter(event, player) {
					return (
						event.card &&
						event.card.name == "shan" &&
						player.storage.nsfuhuo3 &&
						player.storage.nsfuhuo3.isIn()
					);
				},
				content() {
					"step 0";
					player.storage.nsfuhuo3.logSkill("nsfuhuo", player);
					player.judge(function (card) {
						var suit = get.suit(card);
						if (suit == "heart" || suit == "diamond") {
							return -1;
						} else {
							return 0;
						}
					});
					"step 1";
					var source = player.storage.nsfuhuo3;
					if (result.suit == "diamond") {
						player.damage("fire", source);
						if (player.countCards("h")) {
							player.randomDiscard("h");
						}
					} else if (result.suit == "heart") {
						player.damage("fire", 2, source);
					}
				},
				intro: {
					content: "card",
				},
				onremove(player) {
					player.storage.nsfuhuo2.discard();
					delete player.storage.nsfuhuo2;
					delete player.storage.nsfuhuo3;
				},
				ai: {
					noShan: true,
				},
			},
			nshunji: {
				enable: "phaseUse",
				viewAs: { name: "wanjian" },
				usable: 1,
				delay: 0,
				selectCard: 0,
				group: ["nshunji_damage", "nshunji_draw"],
				subSkill: {
					draw: {
						trigger: { player: "useCard" },
						silent: true,
						filter(event) {
							return event.skill == "nshunji";
						},
						content() {
							player.draw();
						},
					},
					damage: {
						trigger: { global: "damageAfter" },
						silent: true,
						filter(event) {
							return event.getParent(2).skill == "nshunji";
						},
						content() {
							"step 0";
							if (player.countCards("he")) {
								trigger.player
									.discardPlayerCard(player, "混击", "he")
									.set("boolline", true)
									.set(
										"prompt2",
										"弃置" + get.translation(player) + "的一张牌，或取消并摸一张牌"
									);
							} else {
								trigger.player.draw();
								event.finish();
							}
							"step 1";
							if (!result.bool) {
								trigger.player.draw();
							}
						},
					},
				},
			},
			nsbaquan: {
				trigger: { player: "phaseEnd" },
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				check(event, player) {
					if (player.hasShan() || player.hujia > 0) return false;
					var nh = player.countCards("h");
					if (player.hp == 1) {
						return nh <= 3;
					}
					if (player.hp == 2) {
						return nh <= 1;
					}
					return false;
				},
				content() {
					var cards = player.getCards("h");
					player.discard(cards);
					player.changeHujia(cards.length);
					player.storage.nsbaquan = true;
				},
				group: "nsbaquan_clear",
				subSkill: {
					clear: {
						trigger: { player: "phaseBegin" },
						forced: true,
						filter(event, player) {
							return player.storage.nsbaquan && player.hujia > 0;
						},
						content() {
							player.changeHujia(-player.hujia);
							game.log(player, "失去了所有护甲");
							delete player.storage.nsbaquan;
						},
					},
				},
			},
			nschangshi: {
				mode: ["identity"],
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.identity == "fan";
				},
				filterTarget(card, player, target) {
					if (target == player) return false;
					if (ui.selected.targets.length) {
						return target.hp != ui.selected.targets[0].hp;
					}
					return true;
				},
				multitarget: true,
				selectTarget: 2,
				content() {
					game.broadcastAll(
						function (player, targets) {
							player.showIdentity();
							var tmp = targets[0].hp;
							targets[0].hp = targets[1].hp;
							targets[1].hp = tmp;
							targets[0].update();
							targets[1].update();
							if (Math.abs(targets[0].hp - targets[1].hp) == 1) {
								player.loseHp();
							}
							//else{
							//player.die();
							//}
						},
						player,
						targets
					);
				},
				ai: {
					order: 10,
					result: {
						player(player, target) {
							if (
								ui.selected.targets.length &&
								Math.abs(target.hp - ui.selected.targets[0].hp) === 1
							) return get.effect(player, {name: "losehp"}, player, player) / 10;
							return 0;
						},
						target(player, target) {
							let att = get.attitude(player, target), max;
							if (!ui.selected.targets.length) {
								let search = false;
								game.countPlayer(cur => {
									if (
										player === cur ||
										target === cur ||
										(cur.hp - target.hp) * (get.attitude(player, cur) - att) >= 0
									) return false;
									if (!search) {
										max = Math.min(cur.hp, target.maxHp) - target.hp;
										search = true;
									}
									else if (att > 0) max = Math.max(max, Math.min(cur.hp, target.maxHp) - target.hp);
									else max = Math.min(max, Math.min(cur.hp, target.maxHp) - target.hp);
								});
								if (target === get.zhu(player)) return 2 * max;
								return max;
							}
							max = Math.min(ui.selected.targets[0].hp, target.maxHp) - target.hp;
							if (target === get.zhu(player)) return 2 * max;
							return max;
						},
					},
				},
			},
			nsjianning: {
				mode: ["identity"],
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.identity == "nei";
				},
				filterTarget(card, player, target) {
					return target.countCards("h") < player.countCards("h");
				},
				content() {
					"step 0";
					if (!player.identityShown) {
						game.broadcastAll(function (player) {
							player.showIdentity();
						}, player);
					}
					player.swapHandcards(target);
					"step 1";
					target.damage();
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							if (
								!player.countCards("h", function (card) {
									return get.value(card) >= 8;
								}) &&
								player.countCards("h") - target.countCards("h") <= 1
							) {
								if (
									target.hp == 1 ||
									player.countCards("h", function (card) {
										return get.value(card) < 0;
									})
								) {
									return get.damageEffect(target, player, target);
								}
							}
							return 0;
						},
					},
				},
			},
			nscuanquan: {
				mode: ["identity"],
				init(player) {
					player.storage.nscuanquan = 0;
				},
				forced: true,
				unique: true,
				forceunique: true,
				skillAnimation: true,
				animationColor: "thunder",
				trigger: { player: "damageAfter" },
				filter(event, player) {
					return player.identity == "zhong" && player.storage.nscuanquan == 3 && game.zhu && game.zhu.isZhu;
				},
				group: "nscuanquan_count",
				subSkill: {
					count: {
						trigger: { player: "damageEnd" },
						silent: true,
						content() {
							player.storage.nscuanquan++;
						},
					},
				},
				logTarget() {
					return [game.zhu];
				},
				content() {
					player.awakenSkill("nscuanquan");
					game.broadcastAll(function (player) {
						var tmp = player.maxHp;
						player.identity = "zhu";
						player.maxHp = game.zhu.hp;
						player.showIdentity();
						player.update();
						game.zhu.identity = "zhong";
						game.zhu.maxHp = tmp;
						game.zhu.showIdentity();
						game.zhu.update();
						game.zhu = player;
					}, player);
					event.trigger("zhuUpdate");
				},
			},
			nstianji: {
				trigger: { global: "dying" },
				priority: 6,
				unique: true,
				skillAnimation: true,
				animationColor: "water",
				filter(event, player) {
					return event.player.hp <= 0 && event.player != player;
				},
				logTarget: "player",
				check(event, player) {
					return get.attitude(player, event.player) > 1;
				},
				content() {
					"step 0";
					player.awakenSkill("nstianji");
					player.loseMaxHp();
					"step 1";
					trigger.player.recover(1 - trigger.player.hp);
					"step 2";
					trigger.player.gainMaxHp();
				},
			},
			nsbugua: {
				group: "nsbugua_use",
				ai: {
					threaten: 1.4,
				},
				subSkill: {
					use: {
						enable: "phaseUse",
						usable: 1,
						filterCard: true,
						check(card) {
							return 9 - get.value(card);
						},
						filter(event, player) {
							// if(!player.storage.nstuiyan2_done&&player.getStat().skill.nsbugua_use){
							// 	return false;
							// }
							return player.countCards("he");
						},
						position: "he",
						ai: {
							order: 9.5,
							result: {
								player: 1,
							},
						},
						content() {
							"step 0";
							player.throwDice();
							"step 1";
							var cards = get.cards(6);
							var cards2 = cards.slice(0);
							var card = cards2.splice(event.num - 1, 1)[0];
							player
								.showCards(get.translation(player) + "亮出了" + get.translation(card), cards)
								.set("hiddencards", cards2);
							card.discard();
							var name = null;
							switch (get.suit(card)) {
								case "club": {
									if (card.number % 2 == 0) {
										name = "guohe";
									} else {
										name = "jiedao";
									}
									break;
								}
								case "spade": {
									if (card.number % 2 == 0) {
										name = "nanman";
									} else {
										name = "juedou";
									}
									break;
								}
								case "diamond": {
									if (card.number % 2 == 0) {
										name = "shunshou";
									} else {
										name = "huogong";
									}
									break;
								}
								case "heart": {
									if (card.number % 2 == 0) {
										name = "wuzhong";
									} else {
										name = "wanjian";
									}
									break;
								}
							}
							var togain = get.cardPile(name, "cardPile");
							if (togain) {
								player.gain(togain, "gain2");
							} else {
								player.draw();
							}
							event.list = cards2;
							"step 2";
							player.chooseCardButton(
								event.list,
								true,
								"按顺序将牌置于牌堆顶（先选择的在上）",
								event.list.length
							);
							"step 3";
							var list = result.links.slice(0);
							while (list.length) {
								ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
							}
						},
					},
					twice: {},
				},
			},
			nstuiyan: {
				trigger: { player: "useCard" },
				filter(event, player) {
					return (
						_status.currentPhase == player &&
						event.getParent("phaseUse", true) &&
						!player.hasSkill("nstuiyan_fail") &&
						typeof player.storage.nstuiyan == "number" &&
						event.card.number > player.storage.nstuiyan
					);
				},
				frequent: true,
				priority: 2,
				content() {
					player.draw();
				},
				onremove(player) {
					delete player.storage.nstuiyan;
					delete player.storage.nstuiyan_done;
					delete player.storage.nstuiyan2;
					delete player.storage.nstuiyan2_done;
				},
				intro: {
					mark(dialog, content, player) {
						if (player.storage.nstuiyan_done) {
							dialog.addText("推演摸牌已结束");
						} else {
							dialog.addText("上一张点数：" + player.storage.nstuiyan);
						}
						if (player.storage.nstuiyan2_done) {
							dialog.addText("总点数8的倍数已达成");
						} else {
							dialog.addText("总点数：" + player.storage.nstuiyan2);
						}
					},
					content(storage, player) {
						var str = "";
						if (player.storage.nstuiyan_done) {
							str += "推演摸牌已结束；";
						} else {
							str += "上一张牌点数：" + storage + "；";
						}
						if (player.storage.nstuiyan2_done) {
							str += "总点数8的倍数已达成";
						} else {
							str += "总点数：" + player.storage.nstuiyan2;
						}
						return str;
					},
					markcount(storage, player) {
						if (player.storage.nstuiyan2_done) {
							if (player.storage.nstuiyan_done) {
								return 0;
							} else {
								return player.storage.nstuiyan;
							}
						} else {
							return player.storage.nstuiyan2;
						}
					},
				},
				group: ["nstuiyan_use", "nstuiyan_clear"],
				subSkill: {
					bugua: {
						trigger: { player: "useCardAfter" },
						direct: true,
						filter(event, player) {
							return player.countCards("h");
						},
						content() {
							"step 0";
							player.removeSkill("nstuiyan_bugua");
							player
								.chooseToDiscard("he", "推演：是否发动一次【卜卦】？")
								.set("ai", function (card) {
									return 8 - get.value(card);
								})
								.set("logSkill", "nstuiyan");
							"step 1";
							if (result.bool) {
								event.insert(lib.skill.nsbugua.subSkill.use.content, { player: player });
							}
						},
					},
					use: {
						trigger: { player: "useCard" },
						silent: true,
						priority: -1,
						filter(event, player) {
							return (
								_status.currentPhase == player &&
								event.getParent("phaseUse", true) &&
								typeof event.card.number == "number"
							);
						},
						content() {
							if (typeof player.storage.nstuiyan2 != "number") {
								player.storage.nstuiyan2 = 0;
							}
							if (
								!player.hasSkill("nstuiyan_fail") &&
								(trigger.card.number <= player.storage.nstuiyan ||
									typeof trigger.card.number != "number")
							) {
								player.storage.nstuiyan_done = true;
								player.addTempSkill("nstuiyan_fail");
							}
							player.storage.nstuiyan = trigger.card.number;
							player.storage.nstuiyan2 += trigger.card.number;
							if (player.storage.nstuiyan2 % 8 == 0 && !player.storage.nstuiyan2_done) {
								player.storage.nstuiyan2_done = true;
								player.addTempSkill("nstuiyan_bugua");
							}
							player.markSkill("nstuiyan");
						},
					},
					clear: {
						trigger: { player: ["phaseUseAfter", "phaseAfter"] },
						silent: true,
						content() {
							delete player.storage.nstuiyan;
							delete player.storage.nstuiyan_done;
							delete player.storage.nstuiyan2;
							delete player.storage.nstuiyan2_done;
							player.unmarkSkill("nstuiyan");
						},
					},
					fail: {},
				},
				ai: {
					threaten: 1.4,
				},
			},
			nsshijun: {
				trigger: { source: "damageBegin" },
				forced: true,
				content() {
					trigger.num++;
					trigger.nsshijun = true;
				},
				subSkill: {
					hp: {
						trigger: { source: "damageAfter" },
						silent: true,
						filter(event) {
							return event.nsshijun;
						},
						content() {
							player.loseHp();
						},
					},
				},
				group: "nsshijun_hp",
				ai: {
					halfneg: true,
				},
			},
			nszhaoxin: {
				mark: true,
				intro: {
					mark(dialog, content, player) {
						var hs = player.getCards("h");
						if (hs.length) {
							dialog.addSmall(hs);
						} else {
							dialog.addText("无手牌");
						}
					},
					content(content, player) {
						var hs = player.getCards("h");
						if (hs.length) {
							return get.translation(hs);
						} else {
							return "无手牌";
						}
					},
				},
				locked: true,
				ai: {
					neg: true,
				},
			},
			nsxiuxin: {
				mod: {
					targetEnabled(card, player, target) {
						var suit = get.suit(card);
						if (suit && !target.countCards("h", { suit: suit })) {
							return false;
						}
					},
				},
			},
			nscangxi: {
				unique: true,
				global: "nscangxi2",
				locked: false,
				zhuSkill: true,
				init(player) {
					player.storage.nscangxi = 0;
				},
				intro: {
					content: "手牌上限+#",
				},
				mod: {
					maxHandcard(player, num) {
						return num + player.storage.nscangxi;
					},
				},
			},
			nscangxi2: {
				trigger: { player: "phaseDiscardEnd" },
				sourceSkill: "nscangxi",
				filter(event, player) {
					if (!event.cards || event.cards.length <= 1) return false;
					if (player.group != "wu") return false;
					return game.hasPlayer(function (target) {
						return player != target && target.hasZhuSkill("nscangxi", player);
					});
				},
				direct: true,
				content() {
					"step 0";
					var list = game.filterPlayer(function (current) {
						return current != player && current.hasZhuSkill("nscangxi", player);
					});
					list.sortBySeat();
					event.list = list;
					"step 1";
					if (event.list.length) {
						var current = event.list.shift();
						event.current = current;
						player
							.chooseBool(get.prompt("nscangxi", current))
							.set("choice", get.attitude(player, current) > 0);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.logSkill("nscangxi", event.current);
						player
							.judge(function (card) {
								return _status.event.att * (get.color(card) == "black" ? 1 : 0);
							})
							.set("att", get.sgnAttitude(player, event.current));
					} else {
						event.goto(1);
					}
					"step 3";
					switch (key) {
						case "black":
							var name = get.translation(event.current.name);
							var att = 0;
							if (event.current.needsToDiscard()) {
								att = 1;
							}
							player
								.chooseControlList(["令" + name + "摸一张牌展示", "令" + name + "手牌上永久+1", "弃置一张牌并令" + name + "获得一张本回合进入弃牌堆的牌"], function () {
									return _status.event.att;
								})
								.set("att", att);
							break;

						case "red":
							event.goto(1);
							break;

						default:
							break;
					}
					"step 4";
					switch (result.index) {
						case 0:
							event.current.draw("visible");
							break;
						case 1: {
							if (typeof event.current.storage.nscangxi != "number") {
								event.current.storage.nscangxi = 0;
							}
							event.current.storage.nscangxi++;
							event.current.syncStorage("nscangxi");
							event.current.markSkill("nscangxi");
							break;
						}
						case 2: {
							player.chooseToDiscard(true, "he");
							break;
						}
					}
					if (result.index != 2) {
						event.goto(1);
					}
					"step 5";
					if (result.bool) {
						var discarded = get.discarded();
						if (discarded.length) {
							event.current
								.chooseCardButton("选择一张获得之", discarded, true)
								.set("ai", function (button) {
									return get.value(button.link);
								});
						} else {
							event.goto(1);
						}
					} else {
						event.goto(1);
					}
					"step 6";
					if (result.bool && result.links && result.links.length) {
						event.current.gain(result.links, "gain2");
					}
					event.goto(1);
				},
			},
			nswulie: {
				trigger: { player: "phaseBegin" },
				skillAnimation: true,
				animationColor: "metal",
				unique: true,
				check() {
					return false;
				},
				filter(event, player) {
					return ui.discardPile.childElementCount > 0;
				},
				content() {
					"step 0";
					player.awakenSkill("nswulie");
					player.loseMaxHp();
					"step 1";
					player.chooseCardButton(
						Array.from(ui.discardPile.childNodes),
						"将至多3张任意顺置于牌堆顶（先选择的在上）",
						true,
						[1, 3]
					);
					"step 2";
					if (result.bool) {
						var cards = result.links.slice(0);
						while (cards.length) {
							ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
						}
						player.addTempSkill("nswulie_end");
					}
				},
				subSkill: {
					end: {
						trigger: { player: "phaseEnd" },
						check() {
							return false;
						},
						filter(event, player) {
							return ui.discardPile.childElementCount > 0;
						},
						content() {
							"step 0";
							player.loseMaxHp();
							"step 1";
							player.chooseCardButton(
								Array.from(ui.discardPile.childNodes),
								"将至多3张任意顺置于牌堆顶（先选择的在上）",
								true,
								[1, 3]
							);
							"step 2";
							if (result.bool) {
								var cards = result.links.slice(0);
								while (cards.length) {
									ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
								}
							}
						},
					},
				},
			},
			nshunyou: {
				enable: "phaseUse",
				usable: 1,
				filterCard: { type: "basic" },
				filter(event, player) {
					return player.countCards("h", { type: "basic" });
				},
				content() {
					"step 0";
					var equip = null,
						trick = null;
					for (var i = 0; i < ui.discardPile.childElementCount; i++) {
						var type = get.type(ui.discardPile.childNodes[i], "trick");
						if (type == "trick") {
							trick = ui.discardPile.childNodes[i];
						} else if (type == "equip") {
							equip = ui.discardPile.childNodes[i];
						}
						if (trick && equip) {
							break;
						}
					}
					var list = [];
					if (trick) list.push(trick);
					if (equip) list.push(equip);
					if (!list.length) {
						player.draw(Math.min(3, 1 + player.maxHp - player.hp));
					} else {
						player.gain(list, "gain2");
						event.equip = equip;
					}
					"step 1";
					if (event.equip && get.owner(event.equip) == player) {
						player
							.chooseTarget(
								"是否将" + get.translation(event.equip) + "装备给一其角色？",
								function (card, player, target) {
									return target != player;
								}
							)
							.set("ai", function (target) {
								var att = get.attitude(_status.event.player, target);
								if (att > 1) {
									if (!target.getEquip(_status.event.subtype)) return att;
								}
								return 0;
							})
							.set("subtype", get.subtype(event.equip));
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.line(result.targets, "green");
						player.$give(event.equip, result.targets[0]);
						player.lose(event.equip, ui.special);
					} else {
						event.finish();
					}
					"step 3";
					game.delay(0.5);
					"step 4";
					result.targets[0].equip(event.equip);
					"step 5";
					game.delay();
				},
				check(card) {
					return 7 - get.value(card);
				},
				ai: {
					order: 7,
					result: {
						player: 1,
					},
				},
			},
			nsgongjian: {
				trigger: { player: "phaseDiscardEnd" },
				forced: true,
				filter(event, player) {
					if (event.cards && event.cards.length > 0) {
						return game.hasPlayer(function (current) {
							return current.hp > player.hp;
						});
					}
					return false;
				},
				content() {
					"step 0";
					player
						.chooseTarget("恭俭：将弃置的牌交给一名体力值大于你的角色", function (card, player, target) {
								return target.hp > player.hp;
							}
						)
						.set("ai", function (target) {
							return (
								get.attitude(_status.event.player, target) /
								Math.sqrt(target.countCards("h") + 1)
							);
						});
					"step 1";
					if (result.bool) {
						player.line(result.targets, "green");
						result.targets[0].gain(trigger.cards, "gain2");
					}
				},
				ai: {
					halfneg: true
				},
			},
			nscaijian: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					var nh = player.countCards("h");
					return nh && nh <= player.maxHp;
				},
				content() {
					"step 0";
					player.showHandcards();
					event.num = player.countCards("h");
					"step 1";
					player.directgain(get.cards(event.num));
					player
						.chooseCard(
							"将" + get.cnNumber(event.num) + "张手牌以按顺序置于牌堆顶（先选择的在上）",
							event.num,
							true
						)
						.set("ai", function (card) {
							return -get.value(card);
						});
					"step 2";
					if (result.bool) {
						player.lose(result.cards, ui.special)._triggered = null;
						event.cards = result.cards.slice(0);
					} else {
						event.finish();
					}
					"step 3";
					if (player == game.me && _status.auto) {
						game.delay();
					}
					"step 4";
					while (event.cards.length) {
						var current = event.cards.pop();
						current.fix();
						ui.cardPile.insertBefore(current, ui.cardPile.firstChild);
					}
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
			},
			nsdongcha: {
				trigger: { player: "damageBefore" },
				forced: true,
				priority: 15,
				filter(event, player) {
					if (get.type(event.card, "trick") == "trick") {
						if (event.getParent(2).name == "useCard") {
							return event.getParent(2).targets.length == 1;
						}
						return true;
					}
					return false;
				},
				content() {
					trigger.cancel();
				},
				ai: {
					notrick: true,
					effect: {
						target(card, player, target, current) {
							if (
								get.type(card) == "trick" &&
								get.tag(card, "damage") &&
								!get.tag(card, "multitarget")
							) {
								return "zeroplayertarget";
							}
						},
					},
				},
				group: "nsdongcha_cancel",
				subSkill: {
					cancel: {
						trigger: { target: "useCardToAfter" },
						silent: true,
						filter(event, player) {
							return (
								get.type(event.card, "trick") == "trick" &&
								_status.currentPhase == event.player &&
								event.player != player
							);
						},
						content() {
							player.addTempSkill("nsdongcha_disable");
						},
					},
					disable: {
						trigger: { target: "useCardToBefore" },
						forced: true,
						priority: 15,
						onremove: true,
						filter(event, player) {
							return (
								event.player == _status.currentPhase &&
								get.type(event.card, "trick") == "trick"
							);
						},
						content() {
							trigger.cancel();
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.type(card, "trick") == "trick" && _status.currentPhase == player)
										return "zeroplayertarget";
								},
							},
						},
					},
				},
			},
			nsjianxiong: {
				trigger: { target: "useCardToBefore" },
				direct: true,
				content() {
					"step 0";
					player.chooseToUse(
						function (card) {
							return !get.info(card).multitarget;
						},
						get.prompt("nsjianxiong", trigger.player),
						trigger.player,
						-1
					);
					"step 1";
					if (event.damaged) {
						trigger.cancel();
						if (get.color(trigger.card) == "black") {
							player.draw();
						}
					}
				},
				subSkill: {
					damage: {
						trigger: { source: "damageAfter" },
						silent: true,
						filter(event, player) {
							return event.getParent(4).name == "nsjianxiong";
						},
						content() {
							trigger.getParent(4).damaged = true;
						},
					},
				},
				group: "nsjianxiong_damage",
				ai: {
					effect: {
						player(card, player, target) {
							if (_status.currentPhase != player) return;
							if (get.tag(card, "damage") && !player.needsToDiscard(1) && target.hp > 1) {
								return "zeroplayertarget";
							}
						},
					},
				},
			},
			nsxionglue: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.countCards("h", { color: "black" });
				},
				check(card) {
					return 7 - get.value(card);
				},
				filterCard: { color: "black" },
				content() {
					"step 0";
					var list = get.inpile("trick");
					list = list.randomGets(3);
					for (var i = 0; i < list.length; i++) {
						list[i] = ["锦囊", "", list[i]];
					}
					var dialog = ui.create.dialog("选择一张锦囊牌加入你的手牌", [list, "vcard"], "hidden");
					player.chooseButton(dialog, true).set("ai", function (button) {
						var card = { name: button.link[2] };
						var value = get.value(card);
						return value;
					});
					"step 1";
					if (result.bool) {
						player.gain(game.createCard(result.buttons[0].link[2]), "draw");
					}
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
			},
			nshuanhuo: {
				trigger: { player: ["loseHpAfter", "damageAfter"] },
				filter(event, player) {
					if (
						game.countPlayer(function (current) {
							return current != player && !current.isUnseen(2);
						}) < 2
					)
						return false;
					if (event.name == "damage") return event.num > 1;
					return true;
				},
				direct: true,
				skillAnimation: true,
				animationColor: "thunder",
				content() {
					"step 0";
					player
						.chooseTarget(2, get.prompt2("nshuanhuo"), function (card, player, target) {
							return target != player && !target.isUnseen(2);
						})
						.set("ai", function (target) {
							var att = get.attitude(player, target);
							if (ui.selected.targets.length) {
								if (att < 0) {
									return get.rank(target, true) - get.rank(ui.selected.targets[0], true);
								}
							} else {
								if (att >= 0) {
									return 1 / (1 + get.rank(target, true));
								}
							}
							return 0;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("nshuanhuo", result.targets);
					} else {
						event.finish();
					}
					"step 2";
					var name1 = result.targets[0].name;
					var name2 = result.targets[1].name;
					result.targets[0].reinit(name1, name2, false);
					result.targets[1].reinit(name2, name1, false);
				},
			},
			nsyaowang: {
				trigger: { player: "phaseBegin" },
				direct: true,
				createDialog(player, target, onlylist) {
					var names = [];
					var list = [];
					if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
					if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
					var pss = player.getSkills();
					for (var i = 0; i < names.length; i++) {
						var info = lib.character[names[i]];
						if (info) {
							var skills = info[3];
							for (var j = 0; j < skills.length; j++) {
								if (
									lib.translate[skills[j] + "_info"] &&
									lib.skill[skills[j]] &&
									!lib.skill[skills[j]].unique &&
									!pss.includes(skills[j])
								) {
									list.add(skills[j]);
								}
							}
						}
					}
					if (onlylist) return list;
					var dialog = ui.create.dialog("forcebutton");
					dialog.add("选择获得一项技能");
					_status.event.list = list;
					var clickItem = function () {
						_status.event._result = this.link;
						game.resume();
					};
					for (i = 0; i < list.length; i++) {
						if (lib.translate[list[i] + "_info"]) {
							var translation = get.translation(list[i]);
							if (translation[0] == "新" && translation.length == 3) {
								translation = translation.slice(1, 3);
							} else {
								translation = translation.slice(0, 2);
							}
							var item = dialog.add(
								'<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' +
									translation +
									"】</div><div>" +
									lib.translate[list[i] + "_info"] +
									"</div></div>"
							);
							item.firstChild.addEventListener("click", clickItem);
							item.firstChild.link = list[i];
						}
					}
					dialog.add(ui.create.div(".placeholder"));
					return dialog;
				},
				content() {
					"step 0";
					player
						.chooseTarget(get.prompt2("nsyaowang"), function (card, player, target) {
							var names = [];
							if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
							if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
							var pss = player.getSkills();
							for (var i = 0; i < names.length; i++) {
								var info = lib.character[names[i]];
								if (info) {
									var skills = info[3];
									for (var j = 0; j < skills.length; j++) {
										if (
											lib.translate[skills[j] + "_info"] &&
											lib.skill[skills[j]] &&
											!lib.skill[skills[j]].unique &&
											!pss.includes(skills[j])
										) {
											return true;
										}
									}
								}
								return false;
							}
						})
						.set("ai", function (target) {
							if (get.attitude(_status.event.player, target) > 0) return Math.random();
							return 0;
						});
					"step 1";
					if (result.bool) {
						event.target = result.targets[0];
						player.logSkill("nsyaowang", event.target);
					} else {
						event.finish();
					}
					"step 2";
					event.skillai = function (list) {
						return get.max(list, get.skillRank, "item");
					};
					if (event.isMine()) {
						event.dialog = lib.skill.nsyaowang.createDialog(player, target);
						event.switchToAuto = function () {
							event._result = event.skillai(event.list);
							game.resume();
						};
						_status.imchoosing = true;
						game.pause();
					} else {
						event._result = event.skillai(lib.skill.nsyaowang.createDialog(player, target, true));
					}
					"step 3";
					_status.imchoosing = false;
					if (event.dialog) {
						event.dialog.close();
					}
					player.addTempSkill(result);
					player.popup(result);
					game.log(player, "获得了", "【" + get.translation(result) + "】");
					var names = [];
					for (var i = 0; i < game.players.length; i++) {
						names.add(game.players[i].name);
						names.add(game.players[i].name1);
						names.add(game.players[i].name2);
					}
					for (var i = 0; i < game.dead.length; i++) {
						names.add(game.dead[i].name);
						names.add(game.dead[i].name1);
						names.add(game.dead[i].name2);
					}
					var list = get.gainableSkills(function (info, skill, name) {
						if (names.includes(name)) return false;
						return true;
					});
					var skill = list.randomGet();
					target.popup(skill);
					target.addTempSkill(skill, { player: "phaseAfter" });
					game.log(target, "获得了", "【" + get.translation(skill) + "】");
				},
			},
			nsjianshu: {
				trigger: { player: "shaBegin" },
				forced: true,
				filter(event, player) {
					return !event.directHit && player.getEquip(1);
				},
				priority: -1,
				content() {
					if (typeof trigger.shanRequired == "number") {
						trigger.shanRequired++;
					} else {
						trigger.shanRequired = 2;
					}
				},
			},
			nscangjian: {
				trigger: { source: "damageEnd" },
				direct: true,
				filter(event) {
					return event.player.isIn() && event.player.countCards("e");
				},
				content() {
					player.gainPlayerCard(
						trigger.player,
						"e",
						get.prompt("nscangjian", trigger.player)
					).logSkill = ["nscangjian", trigger.player];
				},
			},
			nsyunxing: {
				trigger: { global: "dieAfter" },
				forced: true,
				check(event, player) {
					return event.player.group == "wei" || (event.player.group == "wu" && player.hp == 1);
				},
				filter(event, player) {
					return ["wei", "shu", "wu", "qun"].includes(event.player.group);
				},
				content() {
					"step 0";
					switch (trigger.player.group) {
						case "wei":
							player.draw();
							break;
						case "shu":
							player.loseHp();
							break;
						case "wu":
							player.recover();
							break;
						case "qun": {
							var evt = _status.event.getParent("phaseUse");
							if (evt && evt.name == "phaseUse") {
								evt.skipped = true;
							}
							var evt = _status.event.getParent("phase");
							if (evt && evt.name == "phase") {
								evt.finish();
							}
							break;
						}
					}
					if (
						trigger.player.group != "wei" ||
						!game.hasPlayer(function (current) {
							return current.countCards("h");
						})
					) {
						event.finish();
					}
					"step 1";
					player
						.chooseTarget("弃置一名角色的一张手牌", true, function (card, player, target) {
							return target.countCards("h");
						})
						.set("ai", function (target) {
							if (target.hasSkillTag("noh")) return 0;
							return -get.attitude(_status.event.player, target);
						});
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.discardPlayerCard(target, true, "h");
						player.line(target, "green");
					}
				},
				group: "nsyunxing_self",
				subSkill: {
					self: {
						trigger: { player: "dieBegin" },
						direct: true,
						content() {
							"step 0";
							player
								.chooseTarget(get.prompt("nsyunxing"), function (card, player, target) {
									return target != player;
								})
								.set("prompt2", "令一名其他角色翻面")
								.set("ai", function (target) {
									var att = get.attitude(_status.event.player, target);
									if (target.isTurnedOver()) {
										if (att > 2) {
											return att * 2;
										} else {
											return att;
										}
									} else {
										return -att;
									}
								});
							"step 1";
							if (result.bool) {
								player.logSkill("nsyunxing", result.targets);
								result.targets[0].turnOver();
							}
						},
					},
				},
			},
			nsguanxing: {
				trigger: { player: "phaseBegin" },
				forced: true,
				filter(event, player) {
					return player.hp > 0;
				},
				content() {
					"step 0";
					event.cards = get.cards(game.countPlayer());
					event.chosen = [];
					event.num = player.hp;
					"step 1";
					var js = player.getCards("j");
					var pos;
					var choice = -1;
					var getval = function (card, pos) {
						if (js[pos]) {
							return get.judge(js[pos])(card);
						} else {
							return get.value(card);
						}
					};
					for (pos = 0; pos < Math.min(event.cards.length, js.length + 2); pos++) {
						var max = getval(event.cards[pos], pos);
						for (var j = pos + 1; j < event.cards.length; j++) {
							var current = getval(event.cards[j], pos);
							if (current > max) {
								choice = j;
								max = current;
							}
						}
						if (choice != -1) {
							break;
						}
					}
					player
						.chooseCardButton("观星：选择要移动的牌（还能移动" + event.num + "张）", event.cards)
						.set("filterButton", function (button) {
							return !_status.event.chosen.includes(button.link);
						})
						.set("chosen", event.chosen)
						.set("ai", function (button) {
							return button.link == _status.event.choice ? 1 : 0;
						})
						.set("choice", event.cards[choice]);
					event.pos = pos;
					"step 2";
					if (result.bool) {
						var card = result.links[0];
						var index = event.cards.indexOf(card);
						event.card = card;
						event.chosen.push(card);
						event.cards.remove(event.card);
						var buttons = event.cards.slice(0);
						player
							.chooseControl(function () {
								return _status.event.controlai;
							})
							.set("controlai", event.pos || 0)
							.set("sortcard", buttons)
							.set("tosort", card);
					} else {
						event.goto(4);
					}
					"step 3";
					if (typeof result.index == "number") {
						if (result.index > event.cards.length) {
							ui.cardPile.appendChild(event.card);
						} else {
							event.cards.splice(result.index, 0, event.card);
						}
						event.num--;
						if (event.num > 0) {
							event.goto(1);
						}
					}
					"step 4";
					while (event.cards.length) {
						ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
					}
					var js = player.getCards("j");
					if (js.length == 1) {
						if (get.judge(js[0])(ui.cardPile.firstChild) < 0) {
							player.addTempSkill("guanxing_fail");
						}
					}
				},
				ai: {
					guanxing: true,
				},
			},
			nshaoling: {
				skillAnimation: true,
				animationColor: "water",
				unique: true,
				limited: true,
				enable: "phaseUse",
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					"step 0";
					player.awakenSkill("nshaoling");
					event.targets = game.filterPlayer();
					event.targets.remove(player);
					event.targets.remove(target);
					event.targets.sortBySeat();
					"step 1";
					if (event.targets.length) {
						event.current = event.targets.shift();
						if (event.current.countCards("he") && target.isAlive()) {
							event.current
								.chooseToUse({ name: "sha" }, target, -1, "号令")
								.set(
									"prompt2",
									"选择一项：1. 对" +
										get.translation(event.current) +
										"使用一张杀；2. 取消并交给" +
										get.translation(player) +
										"一张牌，然后视" +
										get.translation(player) +
										"为对你使用一张杀"
								);
						}
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool == false) {
						if (event.current.countCards("he")) {
							event.current.chooseCard("he", true, "交给" + get.translation(player) + "一张牌");
						} else {
							event.goto(4);
						}
					} else {
						event.goto(1);
					}
					"step 3";
					if (result.bool) {
						event.current.give(result.cards, player);
					}
					"step 4";
					player.useCard({ name: "sha" }, event.current, false);
					event.goto(1);
				},
				ai: {
					order: 5,
					result: {
						target(player, target) {
							var players = game.filterPlayer();
							if (player.hp > 1) {
								if (game.phaseNumber < game.players.length) return 0;
								if (player.hasUnknown()) return 0;
							}
							var effect = 0;
							for (var i = 0; i < players.length; i++) {
								if (
									players[i] != target &&
									players[i] != player &&
									players[i].countCards("he")
								)
									effect += get.effect(target, { name: "sha" }, players[i], target);
							}
							return effect;
						},
					},
				},
			},
			nsgefa: {
				enable: "chooseToUse",
				filter(event, player) {
					return player.hp <= 0;
				},
				filterCard: { suit: "club" },
				position: "hse",
				viewAs: { name: "tao" },
				prompt: "将一张梅花牌当桃使用",
				check(card) {
					return 15 - get.value(card);
				},
				ai: {
					skillTagFilter(player) {
						return player.countCards("hes", { suit: "club" }) > 0;
					},
					threaten: 1.5,
					save: true,
					respondTao: true,
				},
			},
			nscaiyi: {
				trigger: { global: "drawAfter" },
				check(event, player) {
					if (get.attitude(player, event.player) >= 0) return false;
					if (get.effect(event.player, { name: "sha" }, player, player) <= 0) return false;
					if (get.effect(player, { name: "sha" }, event.player, player) >= 0) return true;
					return player.hasShan() && player.hp >= event.player.hp;
				},
				filter(event, player) {
					return player != event.player && Array.isArray(event.result) && event.result.length > 0;
				},
				logTarget: "player",
				content() {
					"step 0";
					player.viewCards(get.translation(trigger.player) + "摸到的牌", trigger.result);
					if (!event.isMine()) {
						game.delayx();
					}
					"step 1";
					var list = [];
					for (var i = 0; i < trigger.result.length; i++) {
						if (trigger.result[i].name == "sha") {
							list.push(trigger.result[i]);
						}
					}
					if (list.length) {
						player.useCard({ name: "sha" }, trigger.player);
					} else {
						trigger.player.useCard({ name: "sha" }, player);
					}
				},
			},
			nspinmin: {
				trigger: { player: "dieBefore" },
				forced: true,
				filter(event, player) {
					return player.maxHp > 0 && event.getParent().name != "giveup";
				},
				content() {
					trigger.cancel();
					player.hp = 1;
					player.update();
					if (_status.currentPhase == player) {
						var num = 4;
						// if(game.countPlayer()>=7){
						// 	num=5;
						// }
						if (!player.hasSkill("nspinmin_used") && player.maxHp < num) {
							player.gainMaxHp(true);
							player.addTempSkill("nspinmin_used");
						}
					} else {
						player.loseMaxHp(true);
					}
				},
				subSkill: {
					used: {},
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, "save")) {
								if (_status.currentPhase == player) return 0;
								if (target.maxHp > 1 && player != target) return 0;
							}
							if (get.tag(card, "recover")) {
								if (_status.currentPhase == player) return 0;
							}
						},
					},
				}
			},
			nsshishou: {
				trigger: { player: "loseEnd" },
				forced: true,
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					for (var i = 0; i < event.cards.length; i++) {
						if (event.cards[i].original == "h") return true;
					}
					return false;
				},
				content() {
					"step 0";
					player.loseHp();
					"step 1";
					player.draw();
				},
				group: "nsshishou_use",
				subSkill: {
					use: {
						mod: {
							cardEnabled(card, player) {
								if (_status.currentPhase != player) return;
								if (get.cardCount(true, player) >= 4) {
									return false;
								}
							},
						},
					},
				},
				ai: {
					neg: true,
				},
			},
			nsduijue: {
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter(event, player) {
					return player.countCards("h");
				},
				content() {
					"step 0";
					var color = {
						black: player.countCards("h", function (card) {
							return get.color(card) == "red" && get.value(card) < 8;
						}),
						red: player.countCards("h", function (card) {
							return get.color(card) == "black" && get.value(card) < 8;
						}),
					};
					player
						.chooseToDiscard(get.prompt2("nsduijue"))
						.set("ai", function (card) {
							var num = _status.event.color[get.color(card)];
							if (_status.event.goon && num >= 1) {
								return 7 + num - get.value(card);
							}
						})
						.set(
							"goon",
							game.hasPlayer(function (current) {
								return get.effect(current, { name: "juedou" }, player, player) > 0;
							})
						)
						.set("color", color)
						.set("logSkill", "nsduijue");
					"step 1";
					if (result.bool) {
						player.addTempSkill("nsduijue_use", "phaseUseAfter");
						player.storage.nsduijue_use = get.color(result.cards[0]);
					}
				},
				subSkill: {
					use: {
						enable: "phaseUse",
						viewAs: { name: "juedou" },
						usable: 2,
						filter(event, player) {
							return player.hasCard(function (card) {
								return get.color(card) != player.storage.nsduijue_use;
							}, "hs");
						},
						position: "hs",
						filterCard(card, player) {
							return get.color(card) != player.storage.nsduijue_use;
						},
						check(card) {
							return 8 - get.value(card);
						},
						ai: {
							basic: {
								order: 10,
							},
						},
					},
				},
			},
			nsshuangxiong: {
				unique: true,
				trigger: { player: "juedouBegin", target: "juedouBegin" },
				check(event, player) {
					return player.isTurnedOver();
				},
				content() {
					player.turnOver();
				},
				ai: {
					combo: "nsduijue"
				},
			},
			nsguanyong: {
				enable: "chooseToRespond",
				filterCard: true,
				viewAs: { name: "sha" },
				viewAsFilter(player) {
					if (!player.countCards("hs")) return false;
				},
				position: "hs",
				prompt: "将一张手牌当杀打出",
				check(card) {
					return 7 - get.value(card);
				},
				ai: {
					respondSha: true,
					skillTagFilter(player, tag, arg) {
						if (arg != "respond") return false;
						if (!player.countCards("hs")) return false;
					},
				},
			},
			nsjihui: {
				trigger: { global: "discardAfter" },
				filter(event, player) {
					return event.cards.length >= 3;
				},
				forced: true,
				content() {
					player.insertPhase();
					player.storage.nsjihui_use = _status.currentPhase;
					player.addSkill("nsjihui_use");
				},
				subSkill: {
					use: {
						mark: "character",
						intro: {
							content: "使用牌只能指定自己与$为目标",
						},
						trigger: { player: "phaseAfter" },
						forced: true,
						popup: false,
						filter(event, player) {
							return event.skill == "nsjihui";
						},
						onremove: true,
						content() {
							player.removeSkill("nsjihui_use");
						},
						mod: {
							playerEnabled(card, player, target) {
								if (player != target && player.storage.nsjihui_use != target) return false;
							},
						},
					},
				},
			},
			nsmouyun: {
				enable: "phaseUse",
				round: 2,
				filterTarget(card, player, target) {
					return target.isMinHp() && target != player && target.isDamaged();
				},
				content() {
					if (target.isDamaged()) {
						player.discardPlayerCard(target, "hej", target.maxHp - target.hp, true);
					}
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							return target.hp - target.maxHp;
						},
					},
				},
			},
			nscongjun: {
				forbid: ["guozhan"],
				unique: true,
				forceunique: true,
				locked: true,
				init(player) {
					if (player.storage.nscongjun_show) return false;
					var change = function (target) {
						if (target == player) {
							var list;
							if (_status.connectMode) {
								list = get.charactersOL(function (i) {
									return lib.character[i][0] != "male";
								});
							} else {
								list = get.gainableCharacters(function (info) {
									return info[0] == "male";
								});
							}
							var name = list.randomGet();
							target.reinit("ns_huamulan", name, "nosmooth");
							target.storage.nscongjun_show = name;
							target.addSkill("nscongjun_show");
							player._inits.remove(change);
							player.hp = player.maxHp;
							player.update();
						}
					};
					if (!player._inits) {
						player._inits = [];
					}
					player._inits.push(change);
				},
				subSkill: {
					show: {
						trigger: { global: "useCard" },
						filter(event, player) {
							return (
								player.getEnemies().includes(event.player) &&
								event.card.name == "wuxie" &&
								event.getRand() < 0.1
							);
						},
						direct: true,
						skillAnimation: true,
						animationColor: "thunder",
						content() {
							"step 0";
							game.delay(0.5);
							"step 1";
							player.reinit(player.storage.nscongjun_show, "ns_huamulan", "nosmooth");
							player.logSkill("nscongjun_show");
							"step 2";
							player.removeSkill("nscongjun_show");
							player.line(trigger.player, "green");
							trigger.player.damage(2);
						},
					},
				},
			},
			nstaiping_nh: {
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return !event.nshuanxian && player.getSubPlayers("nshuanxian").length;
				},
				direct: true,
				priority: -0.1,
				content() {
					"step 0";
					event.num = trigger.num;
					"step 1";
					var left = player.storage.nshuanxian_left;
					var right = player.storage.nshuanxian_right;
					var list = [];
					var choice = 0;
					var hpleft = 0;
					var maxleft = 0;
					if (left && player.hasSkill(left)) {
						if (player.storage[left].hp < player.storage[left].maxHp) {
							list.push("令幻身·左回复1点体力");
							hpleft = player.storage[left].hp;
						}
						list.push("令幻身·左增加1点体力上限");
						maxleft = player.storage[left].hp;
					}
					if (left && player.hasSkill(right)) {
						if (player.storage[right].hp < player.storage[right].maxHp) {
							list.push("令幻身·右回复1点体力");
							if (
								!hpleft ||
								player.storage[right].hp < hpleft ||
								(player.storage[right].hp == hpleft && Math.random() < 0.5)
							) {
								choice = list.length - 1;
							}
						}
						list.push("令幻身·右增加1点体力上限");
						if (!hpleft && maxleft && choice == 0) {
							if (
								player.storage[right].maxHp < maxleft ||
								(player.storage[right].maxHp == maxleft && Math.random() < 0.5)
							) {
								choice = list.length - 1;
							}
						}
					}
					if (!list.length) {
						event.finish();
						return;
					}
					event.map = {};
					for (var i = 0; i < list.length; i++) {
						event.map["选项" + get.cnNumber(i + 1, true)] = list[i];
					}
					player
						.chooseControlList(list, function () {
							return _status.event.choice;
						})
						.set("prompt", get.prompt("nstaiping_nh"))
						.set("choice", choice);
					"step 2";
					var left = player.storage.nshuanxian_left;
					var right = player.storage.nshuanxian_right;
					if (result.control != "cancel2") {
						player.logSkill("nstaiping_nh");
						switch (event.map[result.control]) {
							case "令幻身·左回复1点体力":
								player.storage[left].hp++;
								break;
							case "令幻身·左增加1点体力上限":
								player.storage[left].maxHp++;
								break;
							case "令幻身·右回复1点体力":
								player.storage[right].hp++;
								break;
							case "令幻身·右增加1点体力上限":
								player.storage[right].maxHp++;
								break;
						}
						game.log(player, event.map[result.control].replace(/一/, "了一"));
					}
					"step 3";
					if (event.num > 1) {
						event.num--;
						event.goto(1);
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					combo: "nshuanxian",
				},
			},
			nsshoudao: {
				group: ["nsshoudao_gain", "nsshoudao_die"],
				subSkill: {
					gain: {
						trigger: { player: "subPlayerDie" },
						forced: true,
						filter(event, player) {
							var left = player.storage.nshuanxian_left;
							if (left && player.hasSkill(left)) return false;
							var right = player.storage.nshuanxian_right;
							if (right && player.hasSkill(right)) return false;
							if (!player.storage.nshuanxian_damage) return false;
							return true;
						},
						content() {
							player.addSkill("releiji");
							player.addSkill("guidao");
						},
					},
					die: {
						trigger: { player: "dieBegin" },
						direct: true,
						filter(event, player) {
							if (game.countPlayer() <= 2) return false;
							var left = player.storage.nshuanxian_left;
							if (left && player.hasSkill(left)) return true;
							var right = player.storage.nshuanxian_right;
							if (right && player.hasSkill(right)) return true;
							return false;
						},
						content() {
							"step 0";
							var str;
							var left = player.storage.nshuanxian_left;
							var right = player.storage.nshuanxian_right;
							if (left && player.hasSkill(left) && right && player.hasSkill(right)) {
								str = "令一名其他角色获得技能【雷击】和【鬼道】";
							} else {
								str = "令一名其他角色获得技能【雷击】或【鬼道】";
							}
							if (trigger.source) {
								str += "（" + get.translation(trigger.source) + "除外）";
							}
							player
								.chooseTarget(function (card, player, target) {
									return target != player && target != _status.event.source;
								}, get.prompt("nsshoudao"))
								.set("ai", function (target) {
									if (target.hasSkill("releiji")) return 0;
									return get.attitude(_status.event.player, target);
								})
								.set("source", trigger.source)
								.set("prompt2", str);
							"step 1";
							var goon = false;
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("nsshoudao", target);
								var left = player.storage.nshuanxian_left;
								var right = player.storage.nshuanxian_right;
								if (left && player.hasSkill(left) && right && player.hasSkill(right)) {
									target.addSkillLog("releiji");
									target.addSkillLog("guidao");
								} else {
									event.target = target;
									player
										.chooseControl("releiji", "guidao")
										.set("prompt", "令" + get.translation(target) + "获得一项技能");
									goon = true;
								}
							}
							if (!goon) {
								event.finish();
							}
							"step 2";
							event.target.addSkillLog(result.control);
						},
					},
				},
				ai: {
					combo: "nshuanxian"
				},
			},
			nshuanxian: {
				trigger: { global: "gameStart", player: "enterGame" },
				forced: true,
				nosub: true,
				unique: true,
				group: [
					"nshuanxian_left",
					"nshuanxian_right",
					"nshuanxian_damage",
					"nshuanxian_swap",
					"nshuanxian_draw",
				],
				content() {
					player.storage.nshuanxian_right = player.addSubPlayer({
						name: "ns_nanhua_right",
						skills: ["nshuanxian_left", "nshuanxian_draw", "nshuanxian_swap"],
						hp: 2,
						maxHp: 2,
						hs: get.cards(2),
						skill: "nshuanxian",
						intro: "你的本体回合结束后，切换至此随从并进行一个额外的回合；若你的上家与下家不同，在你的下家的准备阶段，切换至此随从",
						intro2: "当前回合结束后切换回本体",
						onremove(player) {
							delete player.storage.nshuanxian_right;
						},
					});
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, "damage")) {
								if (!target.hasFriend()) return;
								if (target.hp <= 2) return;
								if (!target.storage.nshuanxian_damage) {
									if (get.attitude(player, target) < 0 || get.tag(card, "multineg"))
										return [0, 1];
									return [1, 1];
								}
							}
						},
					},
				},
				// mod:{
				// 	globalFrom(from,to,distance){
				//
				// 	},
				// 	globalTo(from,to,distance){
				//
				// 	}
				// },
				// global:'nshuanxian_choose',
				subSkill: {
					chosen: {},
					leftdist: {
						mod: {
							globalFrom(from, to, distance) {},
							globalTo(from, to, distance) {},
						},
					},
					rightdist: {
						mod: {
							globalFrom(from, to, distance) {},
							globalTo(from, to, distance) {},
						},
					},
					swap: {
						trigger: { global: "phaseBegin" },
						forced: true,
						popup: false,
						filter(event, player) {
							return event.player != player;
						},
						priority: 20,
						content() {
							var next = player.getNext();
							var prev = player.getPrevious();
							var left = player.storage.nshuanxian_left;
							var right = player.storage.nshuanxian_right;
							if (prev == next || (trigger.player != next && trigger.player != prev)) {
								if (player.hasSkill("subplayer")) {
									player.exitSubPlayer();
								}
							} else if (prev == trigger.player && player.name != left && left) {
								if (!player.hasSkill("subplayer")) {
									player.callSubPlayer(left);
								} else {
									player.toggleSubPlayer(left);
								}
							} else if (next == trigger.player && player.name != right && right) {
								if (!player.hasSkill("subplayer")) {
									player.callSubPlayer(right);
								} else {
									player.toggleSubPlayer(right);
								}
							}
						},
					},
					damage: {
						trigger: { player: "damageEnd" },
						forced: true,
						filter(event, player) {
							return !player.storage.nshuanxian_damage;
						},
						content() {
							player.storage.nshuanxian_damage = true;
							player.storage.nshuanxian_left = player.addSubPlayer({
								name: "ns_nanhua_left",
								skills: ["nshuanxian_middle", "nshuanxian_draw", "nshuanxian_swap"],
								hp: 2,
								maxHp: 2,
								hs: get.cards(2),
								skill: "nshuanxian",
								intro: "你的本体回合开始前，切换至此随从并进行一个额外的回合；若你的上家与下家不同，在你的上家的准备阶段，切换至此随从",
								intro2: "当前回合结束后切换回本体",
								onremove(player) {
									delete player.storage.nshuanxian_left;
								},
							});
							trigger.nshuanxian = true;
						},
					},
					draw: {
						trigger: { player: "phaseDrawBegin" },
						silent: true,
						filter(event) {
							return event.num > 0;
						},
						content() {
							trigger.num--;
						},
					},
					left: {
						trigger: { player: "phaseBefore" },
						forced: true,
						popup: false,
						priority: 40,
						filter(event, player) {
							if (event.skill == "nshuanxian_middle") return false;
							if (event.skill == "nshuanxian_right") return false;
							var left = player.storage.nshuanxian_left;
							if (player.hasSkill("subplayer")) {
								if (!left) return player.name == player.storage.nshuanxian_right;
								return player.storage.subplayer.skills.includes(left);
							} else {
								if (!left) return false;
								return player.hasSkill(left);
							}
						},
						content() {
							if (player.hasSkill("subplayer")) {
								var left = player.storage.nshuanxian_left;
								if (left && player.storage.subplayer.skills.includes(left)) {
									player.toggleSubPlayer(player.storage.nshuanxian_left);
								} else {
									player.exitSubPlayer();
								}
							} else {
								player.callSubPlayer(player.storage.nshuanxian_left);
							}
						},
					},
					middle: {
						trigger: { player: ["phaseAfter", "phaseCancelled"] },
						forced: true,
						popup: false,
						priority: -40,
						filter(event, player) {
							if (player.hasSkill("nshuanxian_chosen")) return false;
							return true;
						},
						content() {
							player.exitSubPlayer();
							player.insertPhase(null, true);
						},
					},
					right: {
						trigger: { player: ["phaseAfter", "phaseCancelled"] },
						forced: true,
						popup: false,
						priority: -40,
						filter(event, player) {
							if (player.hasSkill("nshuanxian_chosen")) return false;
							if (player.hasSkill("subplayer")) return false;
							var right = player.storage.nshuanxian_right;
							if (!right) return false;
							return player.hasSkill(right);
						},
						content() {
							player.callSubPlayer(player.storage.nshuanxian_right);
							player.insertPhase(null, true);
							player.addTempSkill("nshuanxian_chosen", ["phaseBegin", "phaseCancelled"]);
						},
					},
					end: {
						trigger: { player: ["phaseAfter", "phaseCancelled"] },
						forced: true,
						popup: false,
						priority: -40,
						filter(event, player) {
							if (player.hasSkill("nshuanxian_chosen")) return false;
							return true;
						},
						content() {
							if (player.hasSkill("subplayer")) {
								player.exitSubPlayer();
							}
						},
						content_old() {
							"step 0";
							var controls = ["本体"];
							var left = player.storage.nshuanxian_left;
							var right = player.storage.nshuanxian_right;
							if (player.hasSkill("subplayer")) {
								if (player.storage.subplayer.skills.includes(left)) {
									controls.unshift("幻身·左");
								}
								if (player.storage.subplayer.skills.includes(right)) {
									controls.push("幻身·右");
								}
							} else {
								if (player.hasSkill(left)) {
									controls.unshift("幻身·左");
								}
								if (player.hasSkill(right)) {
									controls.push("幻身·右");
								}
							}
							if (controls.length > 1) {
								player
									.chooseControl(controls, function (event, player) {
										return Math.floor(Math.random() * _status.event.num);
									})
									.set("prompt", "选择一个形态直到下一回合开始")
									.set("num", controls.length);
							} else {
								event.finish();
							}
							"step 1";
							switch (result.control) {
								case "幻身·左": {
									if (!player.hasSkill("subplayer")) {
										player.callSubPlayer(player.storage.nshuanxian_left);
									} else {
										player.toggleSubPlayer(player.storage.nshuanxian_left);
									}
									break;
								}
								case "幻身·右": {
									if (!player.hasSkill("subplayer")) {
										player.callSubPlayer(player.storage.nshuanxian_right);
									}
									break;
								}
								default: {
									if (player.hasSkill("subplayer")) {
										player.exitSubPlayer();
									}
									break;
								}
							}
							player.addTempSkill("nshuanxian_chosen", "phaseBegin");
						},
					},
				},
			},
			nsnongquan: {
				enable: "phaseUse",
				// usable:4,
				filter(event, player) {
					return player.countCards("h") == 1 && player.canUse("wuzhong", player);
				},
				direct: true,
				delay: 0,
				content() {
					player.useCard({ name: "wuzhong" }, player.getCards("h"), player, "nsnongquan");
				},
				ai: {
					order: 10,
					result: {
						player(player, target) {
							return 10 - get.value(player.getCards("h")[0]);
						},
					},
				},
			},
			nsdufu: {
				trigger: { source: "damageBefore" },
				check(event, player) {
					return event.player.hasSkillTag("maixie");
				},
				direct: true,
				content() {
					"step 0";
					player
						.chooseTarget(get.prompt2("nsdufu"), function (card, player, target) {
							return target != player;
						})
						.set("ai", function (target) {
							if (_status.event.bool) {
								return -get.attitude(_status.event.player, target);
							}
							return 0;
						})
						.set("bool", trigger.player.hasSkillTag("maixie_defend"));
					"step 1";
					if (result.bool) {
						player.logSkill("nsdufu", result.targets);
						trigger.source = result.targets[0];
					}
				},
			},
			yiesheng: {
				enable: "phaseUse",
				filterCard: { color: "black" },
				filter(event, player) {
					return player.countCards("h", { color: "black" }) > 0;
				},
				selectCard: [1, Infinity],
				prompt: "弃置任意张黑色手牌并摸等量的牌",
				check(card) {
					return 5 - get.value(card);
				},
				content() {
					player.draw(cards.length);
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			liangji: {
				audio: ["liangji", 2],
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && !target.hasSkill("liangji_1");
				},
				content() {
					"step 0";
					player
						.chooseCard("h", "环计：将一张牌置于" + get.translation(target) + "的武将牌上", true)
						.set("ai", function (card) {
							if (get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
								return 7 - get.value(card);
							}
							return -get.value(card);
						});
					"step 1";
					if (result.bool) {
						player.$give(result.cards, target);
						player.lose(result.cards, ui.special);
						target.storage.liangji_1 = result.cards;
						target.storage.liangji_1_source = target;
						target.syncStorage("liangji_1");
						target.addSkill("liangji_1");
					}
				},
				ai: {
					order: 1,
					result: {
						target(player, target) {
							if (get.attitude(player, target) > 0) {
								return Math.sqrt(target.countCards("he"));
							}
							return 0;
						},
						player: 1,
					},
				},
				subSkill: {
					1: {
						trigger: {
							player: "phaseDrawBegin",
						},
						forced: true,
						mark: true,
						intro: {
							content: "cards",
						},
						content() {
							"step 0";
							var cards = player.storage.liangji_1;
							if (cards) {
								player.gain(cards, "gain2");
							}
							player.storage.liangji_1 = 0;
							"step 1";
							if (player.sex == "male") player.addTempSkill("wushuang");
							if (player.sex == "female") player.addTempSkill("lijian");
							player.removeSkill("liangji_1");
						},
						sub: true,
					},
				},
			},
			jugong: {
				audio: ["jingong", 2],
				trigger: {
					global: "damageEnd",
				},
				usable: 1,
				frequent: true,
				locked: false,
				marktext: "功",
				init(player) {
					player.storage.jugong = [];
				},
				filter(event, player) {
					return (
						event.card &&
						(event.card.name == "sha" || event.card.name == "juedou") &&
						event.notLink() &&
						_status.currentPhase != player
					);
				},
				content() {
					"step 0";
					player.draw();
					"step 1";
					if (player.countCards("h")) {
						player.chooseCard("将" + get.cnNumber(1) + "张手牌置于武将牌上作为“功”", 1, true);
					} else {
						event.finish();
					}
					"step 2";
					if (result.cards && result.cards.length) {
						player.lose(result.cards, ui.special);
						player.storage.jugong = player.storage.jugong.concat(result.cards);
						player.syncStorage("jugong");
						player.markSkill("jugong");
						game.log(player, "将", result.cards, "置于武将牌上作为“功”");
					}
				},
				intro: {
					content: "cards",
				},
				group: "jugong_1",
				subSkill: {
					1: {
						trigger: {
							player: "damageBegin",
						},
						filter(event, player) {
							return player.storage.jugong.length > 1;
						},
						content() {
							"step 0";
							player.chooseCardButton("移去两张“功”", 2, player.storage.jugong, true);
							"step 1";
							if (event.directresult || result.bool) {
								player.logSkill("jugong");
								var links = event.directresult || result.links;
								for (var i = 0; i < links.length; i++) {
									player.storage.jugong.remove(links[i]);
								}
								player.syncStorage("jugong");
								if (!player.storage.jugong.length) {
									player.unmarkSkill("jugong");
								} else {
									player.markSkill("jugong");
								}
								player.$throw(links);
								game.log(player, "被移去了", links);
								for (var i = 0; i < links.length; i++) {
									ui.discardPile.appendChild(links[i]);
								}
							}
							"step 2";
							trigger.cancel();
						},
						sub: true,
					},
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								if (!target.hasFriend()) return;
								if (target.hp >= 4) return [0.5, get.tag(card, "damage") * 2];
								if (!target.hasSkill("paiyi") && target.hp > 1)
									return [0.5, get.tag(card, "damage") * 1.5];
								if (target.hp == 3) return [0.5, get.tag(card, "damage") * 0.2];
								if (target.hp == 2) return [0.1, get.tag(card, "damage") * 0.1];
							}
						},
					},
				},
			},
			chengmou: {
				audio: ["moucheng", 2],
				trigger: {
					player: "phaseDrawBegin",
				},
				frequent: true,
				filter(event, player) {
					return player.storage.jugong.length > 0;
				},
				content() {
					"step 0";
					if (player.storage.jugong.length > 2) player.loseHp();
					"step 1";
					var cards = player.storage.jugong;
					if (cards) {
						player.gain(cards, "gain2");
					}
					player.storage.jugong = [];
					"step 2";
					trigger.cancel();
				},
				ai: {
					combo: "jugong",
				},
			},
			nsxinsheng: {
				trigger: { source: "damageEnd" },
				frequent: true,
				filter(event, player) {
					return player.isHealthy();
				},
				content() {
					player.gainMaxHp(trigger.num, true);
					player.draw(trigger.num);
				},
			},
			nsdunxing: {
				trigger: { player: "damageBefore" },
				filter(event, player) {
					return player.isDamaged();
				},
				content() {
					trigger.cancel();
					player.loseMaxHp(trigger.num, true);
					player.draw(trigger.num);
				},
			},
			liangce: {
				enable: "phaseUse",
				viewAs: { name: "wugu" },
				usable: 1,
				filterCard: { type: "basic" },
				position: "hs",
				filter(event, player) {
					return player.countCards("hs", { type: "basic" }) > 0;
				},
				check(card) {
					return 6 - get.value(card);
				},
				group: "liangce2",
			},
			liangce2: {
				trigger: { global: "wuguRemained" },
				direct: true,
				sourceSkill: "liangce",
				filter(event) {
					return event.remained.filterInD().length > 0;
				},
				content() {
					"step 0";
					var du = 0;
					for (var i = 0; i < trigger.remained.length; i++) {
						if (trigger.remained[i].name == "du") du++;
					}
					var dialog = ui.create.dialog(get.prompt("liangce"), trigger.remained, "hidden");
					dialog.classList.add("noselect");
					player.chooseTarget(dialog).set("ai", function (target) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (du >= trigger.remained.length / 2) return -att;
						return att;
					});
					"step 1";
					if (result.bool) {
						player.logSkill("liangce", result.targets);
						result.targets[0].gain(trigger.remained.slice(0), "gain2", "log");
						trigger.remained.length = 0;
					}
				},
			},
			jianbi: {
				trigger: { target: "useCardToTargeted" },
				priority: 5,
				filter(event, player) {
					if (get.type(event.card) != "trick") return false;
					if (get.info(event.card).multitarget) return false;
					if (event.targets.length < 2) return false;
					return true;
				},
				direct: true,
				content() {
					"step 0";
					player
						.chooseTarget(get.prompt("jianbi"), [1, 1], function (card, player, target) {
							return _status.event.getTrigger().targets.includes(target);
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var eff = -get.effect(target, trigger.card, trigger.player, _status.event.player);
							if (trigger.card.name == "wugu" && eff == 0 && get.attitude(player, target) < 0) {
								return 0.01;
							}
							return eff;
						});
					"step 1";
					if (result.bool) {
						event.targets = result.targets;
						if (event.isMine()) {
							player.logSkill("jianbi", event.targets);
							event.finish();
						}
						for (var i = 0; i < result.targets.length; i++) {
							trigger.getParent().excluded.add(result.targets[i]);
						}
						game.delay();
					} else {
						event.finish();
					}
					"step 2";
					player.logSkill("jianbi", event.targets);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, "multineg")) {
								return "zerotarget";
							}
							if (get.tag(card, "multitarget")) {
								var info = get.info(card);
								if (info.selectTarget == -1 && !info.multitarget) {
									return [1, Math.min(3, 1 + target.maxHp - target.hp)];
								}
							}
						},
					},
				},
			},
			diyjuntun: {
				enable: "phaseUse",
				filter: (event, player) =>
					player.hasCard((card) => lib.skill.diyjuntun.filterCard(card, player), "he"),
				position: "he",
				filterCard: (card, player) => get.type(card) == "equip" && player.canRecast(card),
				check(card) {
					var player = _status.event.player;
					var he = player.getCards("he");
					var subtype = get.subtype(card);
					var value = get.equipValue(card);
					for (var i = 0; i < he.length; i++) {
						if (
							he[i] != card &&
							get.subtype(he[i]) == subtype &&
							get.equipValue(he[i]) >= value
						) {
							return 10;
						}
					}
					if (!player.needsToDiscard()) {
						return 4 - get.equipValue(card);
					}
					return 0;
				},
				content() {
					player.recast(cards);
				},
				discard: false,
				lose: false,
				delay: false,
				prompt: "将一张装备牌置入弃牌堆并摸一张牌",
				ai: {
					basic: {
						order: 8.5,
					},
					result: {
						player: 1,
					},
				},
			},
			choudu: {
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				position: "he",
				filterTarget(card, player, target) {
					return lib.filter.cardEnabled({ name: "diaobingqianjiang" }, target);
				},
				check(card) {
					return 6 - get.value(card);
				},
				content() {
					var list = game.filterPlayer();
					list.sortBySeat(target);
					target.useCard({ name: "diaobingqianjiang" }, list);
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							if (get.attitude(player, target) <= 1) return 0;
							return game.countPlayer(function (current) {
								return get.effect(current, { name: "diaobingqianjiang" }, target, player);
							});
						},
					},
				},
			},
			liduan: {
				trigger: { global: "gainAfter" },
				filter(event, player) {
					if (event.player == player) return false;
					if (_status.currentPhase == event.player) return false;
					if (event.cards.length != 1) return false;
					return (
						get.type(event.cards[0]) == "equip" &&
						get.position(event.cards[0]) == "h" &&
						event.player.hasUseTarget(event.cards[0])
					);
				},
				logTarget: "player",
				check(event, player) {
					var att = get.attitude(player, event.player);
					var subtype = get.subtype(event.cards[0]);
					if (att > 0) {
						if (event.player.countCards("h") >= player.countCards("h") + 2) return true;
						return (
							event.player.countCards("e", {
								subtype: subtype,
							}) == 0
						);
					} else {
						return event.player.countCards("e", { subtype: subtype }) > 0;
					}
				},
				content() {
					"step 0";
					var bool = false;
					var subtype = get.subtype(trigger.cards[0]);
					var current = trigger.player.getEquip("e", parseInt(subtype[5]));
					var att = get.attitude(trigger.player, player);
					if (current) {
						if (att > 0) {
							bool = true;
						} else {
							if (get.equipValue(current) > get.equipValue(trigger.cards[0])) {
								bool = true;
							}
						}
					}
					trigger.player
						.chooseCard("立断")
						.set(
							"prompt2",
							"将一张手牌交给" +
								get.translation(player) +
								"，或取消并使用" +
								get.translation(trigger.cards)
						).ai = function (card) {
						if (bool) {
							if (att > 0) {
								return 8 - get.value(card);
							} else {
								return 4 - get.value(card);
							}
						} else {
							if (att <= 0) return -get.value(card);
							return 0;
						}
					};
					"step 1";
					if (result.bool) {
						player.gain(result.cards, trigger.player);
						trigger.player.$give(1, player);
					} else {
						trigger.player.chooseUseTarget(trigger.cards[0], true);
					}
				},
			},
			jinyan: {
				mod: {
					cardEnabled(card, player) {
						if (
							_status.event.skill != "jinyan" &&
							player.hp <= 2 &&
							get.type(card, "trick") == "trick" &&
							get.color(card) == "black"
						)
							return false;
					},
					cardUsable(card, player) {
						if (
							_status.event.skill != "jinyan" &&
							player.hp <= 2 &&
							get.type(card, "trick") == "trick" &&
							get.color(card) == "black"
						)
							return false;
					},
					cardRespondable(card, player) {
						if (
							_status.event.skill != "jinyan" &&
							player.hp <= 2 &&
							get.type(card, "trick") == "trick" &&
							get.color(card) == "black"
						)
							return false;
					},
					cardSavable(card, player) {
						if (
							_status.event.skill != "jinyan" &&
							player.hp <= 2 &&
							get.type(card, "trick") == "trick" &&
							get.color(card) == "black"
						)
							return false;
					},
				},
				enable: ["chooseToUse", "chooseToRespond"],
				filterCard(card) {
					return get.type(card, "trick") == "trick" && get.color(card) == "black";
				},
				viewAsFilter(player) {
					if (player.hp > 2) return false;
					if (
						!player.hasCard(function (card) {
							return get.type(card, "trick") == "trick" && get.color(card) == "black";
						})
					)
						return false;
				},
				viewAs: { name: "sha" },
				prompt: "将一张黑色锦囊牌当作【杀】使用或打出",
				check() {
					return 1;
				},
				ai: {
					respondSha: true,
					skillTagFilter(player) {
						if (player.hp > 2) return false;
						if (
							!player.hasCard(function (card) {
								return get.type(card, "trick") == "trick" && get.color(card) == "black";
							})
						)
							return false;
					},
				},
			},
			fuchou: {
				trigger: { target: "shaBefore" },
				filter(event, player) {
					return player.countCards("he") > 0;
				},
				direct: true,
				content() {
					"step 0";
					var bool = false;
					if (!player.hasShan() && get.effect(player, trigger.card, trigger.player, player) < 0) {
						bool = true;
					}
					player.chooseCard("he", get.prompt("fuchou", trigger.player)).set("ai", function (card) {
						var player = _status.event.player;
						if (bool) {
							if (player.hp <= 1) {
								if (get.tag(card, "save")) return 0;
								return 8 - get.value(card);
							}
							return 6 - get.value(card);
						}
						return -get.value(card);
					});
					"step 1";
					if (result.bool) {
						trigger.cancel();
						player.logSkill("fuchou", trigger.player);
						trigger.player.gain(result.cards, player);
						if (get.position(result.cards[0]) == "h") {
							player.$give(1, trigger.player);
						} else {
							player.$give(result.cards, trigger.player);
						}
						player.storage.fuchou2.add(trigger.player);
					}
				},
				group: "fuchou2",
			},
			fuchou2: {
				init(player) {
					player.storage.fuchou2 = [];
				},
				forced: true,
				trigger: { global: "phaseAfter" },
				sourceSkill: "fuchou",
				filter(event, player) {
					for (var i = 0; i < player.storage.fuchou2.length; i++) {
						if (player.storage.fuchou2[i].isAlive()) return true;
					}
					return false;
				},
				content() {
					"step 0";
					if (player.storage.fuchou2.length) {
						var target = player.storage.fuchou2.shift();
						if (target.isAlive()) {
							player.draw();
							if (player.canUse("sha", target, false) && player.hasSha()) {
								player.chooseToUse(
									{ name: "sha" },
									target,
									-1,
									"对" + get.translation(target) + "使用一张杀，或失去1点体力"
								);
							} else {
								player.loseHp();
								event.redo();
							}
						}
					} else {
						event.finish();
					}
					"step 1";
					if (!result.bool) {
						player.loseHp();
					}
					event.goto(0);
				},
			},
			chezhen: {
				mod: {
					globalFrom(from, to, distance) {
						if (from.countCards("e")) return distance - 1;
					},
					globalTo(from, to, distance) {
						if (!to.countCards("e")) return distance + 1;
					},
				},
			},
			youzhan: {
				trigger: { global: "shaBefore" },
				direct: true,
				filter(event, player) {
					return (
						get.distance(player, event.target) <= 1 && player.countCards("he", { type: "equip" })
					);
				},
				content() {
					"step 0";
					var bool =
						get.attitude(player, trigger.player) < 0 && get.attitude(player, trigger.target) > 0;
					var next = player.chooseToDiscard(
						"he",
						{ type: "equip" },
						get.prompt("youzhan", trigger.target)
					);
					next.ai = function (card) {
						if (bool) {
							return 7 - get.value(card);
						}
						return 0;
					};
					next.logSkill = ["youzhan", trigger.target];
					"step 1";
					if (result.bool) {
						event.youdiinfo = {
							source: trigger.player,
							evt: trigger,
						};
						trigger.target.useCard({ name: "youdishenru" });
					}
				},
			},
			kangyin: {
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && target.countCards("he") > 0;
				},
				content() {
					"step 0";
					player.loseHp();
					"step 1";
					player.discardPlayerCard(target, true);
					"step 2";
					if (player.isDamaged() && result.links && result.links.length) {
						if (get.type(result.links[0]) == "basic") {
							player
								.chooseTarget(
									[1, player.maxHp - player.hp],
									"选择至多" + get.cnNumber(player.maxHp - player.hp) + "名角色各摸一张牌"
								)
								.set("ai", function (target) {
									return get.attitude(_status.event.player, target);
								});
						} else {
							player.storage.kangyin2 = player.maxHp - player.hp;
							player.addTempSkill("kangyin2");
							event.finish();
						}
					} else {
						event.finish();
					}
					"step 3";
					if (result.targets && result.targets.length) {
						result.targets.sort(lib.sort.seat);
						player.line(result.targets, "green");
						game.asyncDraw(result.targets);
					}
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							if (player.hp >= 4) return -1;
							if (player.hp == 3 && !player.needsToDiscard()) return -1;
							return 0;
						},
					},
				},
			},
			kangyin2: {
				mark: true,
				intro: {
					content: "到其他角色的距离-#；使用【杀】的额外目标数上限+#",
				},
				onremove: true,
				mod: {
					globalFrom(from, to, distance) {
						return distance - from.storage.kangyin2;
					},
					selectTarget(card, player, range) {
						if (card.name == "sha" && range[1] != -1) range[1] += player.storage.kangyin2;
					},
				},
			},
			duoqi: {
				trigger: { global: "discardAfter" },
				filter(event, player) {
					if (_status.currentPhase == player) return false;
					if (!player.storage.zhucheng || !player.storage.zhucheng.length) return false;
					var evt = event.getParent("phaseUse");
					if (evt && evt.name == "phaseUse") return true;
					return false;
				},
				direct: true,
				content() {
					"step 0";
					var bool = false;
					if (get.attitude(player, trigger.player) < 0 && trigger.player.needsToDiscard()) {
						bool = true;
					}
					player
						.chooseCardButton(
							get.prompt("zhucheng", _status.currentPhase),
							player.storage.zhucheng
						)
						.set("ai", function (button) {
							return _status.event.bool ? 1 : 0;
						})
						.set("bool", bool);
					"step 1";
					if (result.bool) {
						player.logSkill("zhucheng", _status.currentPhase);
						player.$throw(result.links[0]);
						player.storage.zhucheng.remove(result.links[0]);
						result.links[0].discard();
						player.syncStorage("zhucheng");
						if (player.storage.zhucheng.length == 0) {
							player.unmarkSkill("zhucheng");
						} else {
							player.updateMarks();
						}
						var evt = trigger.getParent("phaseUse");
						if (evt && evt.name == "phaseUse") {
							evt.skipped = true;
						}
					}
				},
				ai: {
					expose: 0.2,
					combo: "zhucheng",
				},
			},
			zhucheng: {
				trigger: { player: "phaseEnd" },
				filter(event, player) {
					return !player.storage.zhucheng || !player.storage.zhucheng.length;
				},
				check(event, player) {
					if (player.storage.zhucheng && player.storage.zhucheng.length) {
						if (!player.hasShan()) return false;
						if (player.storage.zhucheng.length >= 2) return false;
					}
					return true;
				},
				intro: {
					content: "cards",
				},
				content() {
					if (player.storage.zhucheng && player.storage.zhucheng.length) {
						player.gain(player.storage.zhucheng, "gain2");
						delete player.storage.zhucheng;
						player.unmarkSkill("zhucheng");
					} else {
						var cards = get.cards(Math.max(1, player.maxHp - player.hp));
						player.$gain2(cards);
						player.storage.zhucheng = cards;
						player.markSkill("zhucheng");
					}
				},
				ai: {
					target(card, player, target, current) {
						if (card.name == "sha" && player.storage.zhucheng && player.storage.zhucheng.length) {
							if (player.storage.zhucheng.length >= 2) {
								if (
									!player.hasFriend() &&
									player.countCards("he") - 2 < player.storage.zhucheng.length
								)
									return "zeroplayertarget";
								return 0.1;
							} else {
								var he = player.getCards("he");
								var sha = false;
								for (var i = 0; i < he.length; i++) {
									if (he[i] == "sha" && !sha) {
										sha = true;
									} else {
										if (get.value(he[i]) <= 6) {
											return [1, 0, 1, -0.5];
										}
									}
								}
								return "zeroplayertarget";
							}
						}
					},
				},
				group: "zhucheng2",
			},
			zhucheng2: {
				trigger: { target: "shaBefore" },
				sourceSkill: "zhucheng",
				check(event, player) {
					if (get.attitude(event.player, player) <= 0) return true;
					return get.effect(player, event.card, event.player, player) <= 0;
				},
				filter(event, player) {
					return player.storage.zhucheng && player.storage.zhucheng.length > 0;
				},
				content() {
					"step 0";
					var bool = false;
					if (get.effect(player, trigger.card, trigger.player, trigger.player) >= 0) {
						bool = true;
					}
					var num = player.storage.zhucheng.length;
					trigger.player
						.chooseToDiscard("弃置" + get.cnNumber(num) + "张牌，或令杀无效", "he", num)
						.set("ai", function (card) {
							if (_status.event.bool) {
								return 10 - get.value(card);
							}
							return 0;
						})
						.set("bool", bool);
					"step 1";
					if (!result.bool) {
						trigger.cancel();
					}
				},
			},
			diy_jiaoxia: {
				//audio:['jiaoxia',2],
				trigger: { target: "useCardToBegin" },
				filter(event, player) {
					return event.card && get.color(event.card) == "red";
				},
				frequent: true,
				content() {
					player.draw();
				},
				ai: {
					effect(card, player, target) {
						if (get.color(card) == "red") return [1, 1];
					},
				},
			},
			zaiqix: {
				trigger: { player: "phaseDrawBefore" },
				filter(event, player) {
					return player.hp < player.maxHp;
				},
				check(event, player) {
					if (1 + player.maxHp - player.hp < 2) {
						return false;
					} else if (1 + player.maxHp - player.hp == 2) {
						return player.countCards("h") >= 2;
					}
					return true;
				},
				content() {
					"step 0";
					trigger.cancel();
					event.cards = get.cards(player.maxHp - player.hp + 1);
					player.showCards(event.cards);
					"step 1";
					var num = 0;
					for (var i = 0; i < event.cards.length; i++) {
						if (get.suit(event.cards[i]) == "heart") {
							num++;
							event.cards[i].discard();
							event.cards.splice(i--, 1);
						}
					}
					if (num) {
						player.recover(num);
					}
					"step 2";
					if (event.cards.length) {
						player.gain(event.cards);
						player.$gain2(event.cards);
						game.delay();
					}
				},
				ai: {
					threaten(player, target) {
						if (target.hp == 1) return 2;
						if (target.hp == 2) return 1.5;
						return 1;
					},
				},
			},
			batu: {
				trigger: { player: "phaseEnd" },
				frequent: true,
				filter(event, player) {
					return player.countCards("h") < game.countGroup();
				},
				content() {
					player.draw(game.countGroup() - player.countCards("h"));
				},
				ai: {
					threaten: 1.3,
				},
			},
			diyzaiqi: {
				trigger: { player: "phaseDrawBegin" },
				forced: true,
				filter(event, player) {
					return player.hp < player.maxHp;
				},
				content() {
					trigger.num += player.maxHp - player.hp;
				},
				ai: {
					threaten(player, target) {
						if (target.hp == 1) return 2.5;
						if (target.hp == 2) return 1.8;
						return 0.5;
					},
					maixie: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, "damage")) {
								if (target.hp == target.maxHp) return [0, 1];
							}
							if (get.tag(card, "recover") && player.hp >= player.maxHp - 1) return [0, 0];
						},
					},
				},
			},
			diykuanggu: {
				trigger: { source: "damageEnd" },
				forced: true,
				content() {
					if (get.distance(trigger.player, player, "attack") > 1) {
						player.draw(trigger.num);
					} else {
						player.recover(trigger.num);
					}
				},
			},
			diyduanliang: {
				group: ["diyduanliang1", "diyduanliang2"],
				ai: {
					threaten: 1.2,
				},
			},
			diyduanliang1: {
				enable: "phaseUse",
				usable: 1,
				discard: false,
				sourceSkill: "diyduanliang",
				filter(event, player) {
					var cards = player.getCards("he", { color: "black" });
					for (var i = 0; i < cards.length; i++) {
						var type = get.type(cards[i]);
						if (type == "basic") return true;
					}
					return false;
				},
				prepare: "throw",
				position: "he",
				filterCard(card) {
					if (get.color(card) != "black") return false;
					var type = get.type(card);
					return type == "basic";
				},
				filterTarget(card, player, target) {
					return lib.filter.filterTarget({ name: "bingliang" }, player, target);
				},
				check(card) {
					return 7 - get.value(card);
				},
				content() {
					player.useCard({ name: "bingliang" }, target, cards).animate = false;
					player.draw();
				},
				ai: {
					result: {
						target(player, target) {
							return get.effect(target, { name: "bingliang" }, player, target);
						},
					},
					order: 9,
				},
			},
			diyduanliang2: {
				mod: {
					targetInRange(card, player, target) {
						if (card.name == "bingliang") {
							if (get.distance(player, target) <= 2) return true;
						}
					},
				},
			},
			guihan: {
				unique: true,
				enable: "chooseToUse",
				skillAnimation: "epic",
				limited: true,
				filter(event, player) {
					if (event.type != "dying") return false;
					if (player != event.dying) return false;
					return true;
				},
				filterTarget(card, player, target) {
					return target.hasSex("male") && player != target;
				},
				content() {
					"step 0";
					player.awakenSkill("guihan");
					player.recover();
					"step 1";
					player.draw(2);
					"step 2";
					target.recover();
					"step 3";
					target.draw(2);
					// if(lib.config.mode=='identity'){
					// 	player.node.identity.style.backgroundColor=get.translation('weiColor');
					// 	player.group='wei';
					// }
				},
				ai: {
					skillTagFilter(player) {
						if (player.storage.guihan) return false;
						if (player.hp > 0) return false;
					},
					save: true,
					result: {
						player: 4,
						target(player, target) {
							if (target.hp == target.maxHp) return 2;
							return 4;
						},
					},
					threaten(player, target) {
						if (!target.storage.guihan) return 0.8;
					},
				},
			},
			luweiyan: {
				enable: "phaseUse",
				usable: 1,
				filterCard(card) {
					return get.type(card) != "basic";
				},
				position: "hse",
				filter(event, player) {
					return player.hasCard(function (card) {
						return get.type(card) != "basic";
					}, "hes");
				},
				viewAs: { name: "shuiyanqijun" },
				prompt: "将一张非基本牌当【水攻】使用",
				check(card) {
					return 8 - get.value(card);
				},
				group: "luweiyan2",
			},
			luweiyan2: {
				trigger: { player: "useCardAfter" },
				direct: true,
				sourceSkill: "luweiyan",
				filter(event, player) {
					if (event.skill != "luweiyan") return false;
					for (var i = 0; i < event.targets.length; i++) {
						if (player.canUse("sha", event.targets[i], false)) {
							return true;
						}
					}
					return false;
				},
				content() {
					"step 0";
					player
						.chooseTarget("是否视为使用一张杀？", function (card, player, target) {
							return (
								_status.event.targets.includes(target) && player.canUse("sha", target, false)
							);
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, { name: "sha" }, player, player);
						})
						.set("targets", trigger.targets);
					"step 1";
					if (result.bool) {
						player.useCard({ name: "sha" }, result.targets, false);
					}
				},
			},
			yaliang: {
				inherit: "wangxi",
			},
			xiongzi: {
				trigger: { player: "phaseDrawBegin" },
				forced: true,
				content() {
					trigger.num += 1 + Math.floor(player.countCards("e") / 2);
				},
			},
			honglian: {
				trigger: { player: "damageEnd" },
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				filter(event, player) {
					return (
						event.source &&
						event.source != player &&
						event.source.countCards("he", { color: "red" }) > 0
					);
				},
				content() {
					trigger.source.discard(trigger.source.getCards("he", { color: "red" }));
				},
				ai: {
					expose: 0.1,
					result: {
						threaten: 0.8,
						target(card, player, target) {
							if (get.tag(card, "damage") && get.attitude(target, player) < 0) {
								return [1, 0, 0, -player.countCards("he", { color: "red" })];
							}
						},
					},
				},
			},
			diyguhuo: {
				trigger: { player: "phaseBegin" },
				forced: true,
				filter(event, player) {
					return player.countCards("hej") > 0;
				},
				content() {
					"step 0";
					player.draw(2);
					"step 1";
					var next = player.discardPlayerCard(player, "hej", 2, true);
					next.ai = function (button) {
						if (get.position(button.link) == "j") return 10;
						return -get.value(button.link);
					};
					next.filterButton = function (button) {
						return lib.filter.cardDiscardable(button.link, player);
					};
				},
				ai: {
					effect: {
						target(card) {
							if (get.type(card) == "delay") return [0, 0.5];
						},
					},
				},
			},
			diychanyuan: {
				trigger: { player: "dieBegin" },
				forced: true,
				filter(event) {
					return event.source != undefined;
				},
				content() {
					trigger.source.loseMaxHp(true);
				},
				ai: {
					threaten(player, target) {
						if (target.hp == 1) return 0.2;
					},
					result: {
						target(card, player, target, current) {
							if (target.hp <= 1 && get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -5];
								return [1, 0, 0, -2];
							}
						},
					},
				},
			},
			zonghuo: {
				trigger: { source: "damageBefore" },
				direct: true,
				priority: 10,
				filter(event) {
					return event.nature != "fire";
				},
				content() {
					"step 0";
					player.chooseToDiscard(get.prompt("zonghuo")).ai = function (card) {
						var att = get.attitude(player, trigger.player);
						if (trigger.player.hasSkillTag("nofire")) {
							if (att > 0) return 8 - get.value(card);
							return -1;
						}
						if (att < 0) {
							return 7 - get.value(card);
						}
						return -1;
					};
					"step 1";
					if (result.bool) {
						player.logSkill("zonghuo", trigger.player, "fire");
						trigger.nature = "fire";
					}
				},
			},
			shaoying: {
				trigger: { source: "damageAfter" },
				direct: true,
				filter(event) {
					return event.nature == "fire";
				},
				content() {
					"step 0";
					player.chooseTarget(get.prompt("shaoying"), function (card, player, target) {
						return get.distance(trigger.player, target) <= 1 && trigger.player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player, "fire");
					};
					"step 1";
					if (result.bool) {
						var card = get.cards()[0];
						card.discard();
						player.showCards(card);
						event.bool = get.color(card) == "red";
						event.target = result.targets[0];
						player.logSkill("shaoying", event.target, false);
						trigger.player.line(event.target, "fire");
					} else {
						event.finish();
					}
					"step 2";
					if (event.bool) {
						event.target.damage("fire");
					}
				},
			},
			tiangong: {
				group: ["tiangong2"],
				trigger: { player: "damageBefore" },
				filter(event) {
					if (event.nature == "thunder") return true;
				},
				forced: true,
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (card.name == "tiesuo") return 0;
							if (get.tag(card, "thunderDamage")) return 0;
						},
					},
					threaten: 0.5,
				},
			},
			tiangong2: {
				trigger: { source: "damageAfter" },
				sourceSkill: "tiangong",
				filter(event) {
					if (event.nature == "thunder") return true;
				},
				forced: true,
				popup: false,
				priority: 1,
				content() {
					player.draw();
				},
			},
			xicai: {
				inherit: "jianxiong",
			},
			diyjianxiong: {
				mode: ["identity", "guozhan"],
				trigger: { global: "dieBefore" },
				forced: true,
				filter(event, player) {
					if (_status.currentPhase !== player) return false;
					if (get.mode() === "identity") return event.player != game.zhu;
					return get.mode() === "guozhan" && event.player.isFriendOf(player);
				},
				content() {
					game.broadcastAll(
						function (target, group) {
							if (get.mode() === "identity") {
								target.identity = group;
								target.setIdentity(group);
								target.identityShown = true;
							} else {
								target.trueIdentity = lib.group
									.slice(0)
									.filter(i => group !== i)
									.randomGet();
							}
						},
						trigger.player,
						get.mode() === "identity" ? "fan" : player.getGuozhanGroup()
					);
				},
			},
			nsshuaiyan: {
				trigger: { global: "recoverAfter" },
				filter(event, player) {
					return event.player != player && _status.currentPhase != player;
				},
				logTarget: "player",
				content() {
					"step 0";
					var att = get.attitude(trigger.player, player);
					var bool = 0;
					if (att < 0) {
						if (trigger.player.countCards("e") == 0 && trigger.player.countCards("h") > 2)
							bool = 1;
						else if (trigger.player.countCards("he") == 0) bool = 1;
					} else if (att == 0 && trigger.player.countCards("he") == 0) {
						bool = 1;
					}
					trigger.player
						.chooseControl(function () {
							return _status.event.bool;
						})
						.set("prompt", "率言")
						.set("bool", bool)
						.set("choiceList", [
							"令" + get.translation(player) + "摸一张牌",
							"令" + get.translation(player) + "弃置你一张牌",
						]);
					"step 1";
					if (result.control == "选项一") {
						player.draw();
						event.finish();
					} else if (trigger.player.countCards("he")) {
						player.discardPlayerCard(trigger.player, true, "he");
					} else {
						event.finish();
					}
				},
				ai: {
					threaten: 1.2,
				},
			},
			moshou: {
				mod: {
					targetEnabled(card, player, target, now) {
						if (card.name == "bingliang" || card.name == "lebu") return false;
					},
				},
			},
			siji: {
				trigger: { player: "phaseDiscardEnd" },
				frequent: true,
				filter(event, player) {
					if (event.cards) {
						for (var i = 0; i < event.cards.length; i++) {
							if (event.cards[i].name == "sha") return true;
						}
					}
					return false;
				},
				content() {
					var num = 0;
					for (var i = 0; i < trigger.cards.length; i++) {
						if (trigger.cards[i].name == "sha") num++;
					}
					player.draw(2 * num);
				},
			},
			ciqiu: {
				trigger: { source: "damageBegin1" },
				forced: true,
				filter(event) {
					return event.card && event.card.name == "sha" && event.player.isHealthy();
				},
				content() {
					"step 0";
					trigger.num++;
					if (trigger.num >= trigger.player.hp) {
						trigger.player.addTempSkill("ciqiu_dying");
						player.removeSkill("ciqiu");
					}
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (
								card.name == "sha" &&
								target.isHealthy() &&
								get.attitude(player, target) > 0
							) {
								return [1, -2];
							}
						},
					},
				},
			},
			ciqiu_dying: {
				trigger: { player: "dyingBegin" },
				forced: true,
				silent: true,
				firstDo: true,
				content() {
					player.die();
				},
				popup: false,
			},
			juedao: {
				enable: "phaseUse",
				filter(event, player) {
					return player.isLinked() == false;
				},
				filterCard: true,
				check(card) {
					return 6 - get.value(card);
				},
				content() {
					if (player.isLinked() == false) player.link();
				},
				ai: {
					link: true,
					order: 2,
					result: {
						player(player) {
							if (player.isLinked()) return 0;
							return 1;
						},
					},
					effect: {
						target(card, player, target) {
							if (card.name == "tiesuo") {
								if (target.isLinked()) {
									return [0, -0.5];
								} else {
									return [0, 0.5];
								}
							}
						},
					},
				},
				mod: {
					globalFrom(from, to, distance) {
						if (from.isLinked()) return distance + 1;
					},
					globalTo(from, to, distance) {
						if (to.isLinked()) return distance + 1;
					},
				},
			},
			geju: {
				trigger: { player: "phaseBegin" },
				frequent: true,
				filter(event, player) {
					var list = [];
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (player != players[i]) list.add(players[i].group);
					}
					list.remove("unknown");
					for (var i = 0; i < players.length; i++) {
						if (players[i] != player) {
							if (lib.filter.targetInRange({ name: "sha" }, players[i], player)) {
								list.remove(players[i].group);
							}
						}
					}
					return list.length > 0;
				},
				content() {
					var list = [];
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (player != players[i]) list.add(players[i].group);
					}
					list.remove("unknown");
					for (var i = 0; i < players.length; i++) {
						if (players[i] != player) {
							if (lib.filter.targetInRange({ name: "sha" }, players[i], player)) {
								list.remove(players[i].group);
							}
						}
					}
					if (list.length > 0) player.draw(list.length);
				},
			},
			diyqiangxi: {
				enable: "phaseUse",
				usable: 1,
				filterCard(card) {
					return get.subtype(card) == "equip1";
				},
				selectCard: [0, 1],
				filterTarget(card, player, target) {
					if (player == target) return false;
					return get.distance(player, target, "attack") <= 1;
				},
				content() {
					"step 0";
					if (cards.length == 0) {
						player.loseHp();
					}
					"step 1";
					target.damage();
					"step 2";
					if (target.isAlive() && target.countCards("he")) {
						player.discardPlayerCard(target);
					}
				},
				check(card) {
					return 10 - get.value(card);
				},
				position: "he",
				ai: {
					order: 8,
					result: {
						player(player, target) {
							if (ui.selected.cards.length) return 0;
							if (player.hp >= target.hp) return -0.9;
							if (player.hp <= 2) return -10;
							return -2;
						},
						target(player, target) {
							if (player.hp <= 1) return 0;
							return get.damageEffect(target, player);
						},
					},
				},
				threaten: 1.3,
			},
			nsdingzhou: {
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && target.countCards("hej") > 0;
				},
				content() {
					"step 0";
					var cards = target.getCards("hej");
					if (get.isLuckyStar(player)) {
						var cardx = ui.cardPile.firstChild;
						if (cardx) {
							var color = get.color(card),
								cardsx = cards.filter(function (i) {
									return get.color(i) == color;
								});
							if (cardsx.length > 0) cards = cardsx;
						}
					}
					var card = cards.randomGet();
					event.card = card;
					player.gain(card, target, "giveAuto", "bySelf");
					player.draw();
					"step 1";
					if (Array.isArray(result) && get.color(card) != get.color(result[0])) player.loseHp();
				},
				ai: {
					order: 7,
					result: { target: -1 },
				},
			},
			//比原版更令人难以吐槽的神孙权
			junkyuheng: {
				audio: "yuheng",
				trigger: { player: "phaseBegin" },
				forced: true,
				keepSkill: true,
				filter(event, player) {
					return player.hasCard(function (card) {
						return lib.filter.cardDiscardable(card, player, "junkyuheng");
					}, "he");
				},
				content() {
					"step 0";
					const num = player.getCards("he").reduce((arr, card) => arr.add(get.suit(card, player)), []).length;
					player
						.chooseToDiscard("he", true, [1, num], function (card, player) {
							if (!ui.selected.cards.length) return true;
							var suit = get.suit(card, player);
							for (var i of ui.selected.cards) {
								if (get.suit(i, player) == suit) return false;
							}
							return true;
						})
						.set("complexCard", true)
						.set("ai", function (card) {
							if (!player.hasValueTarget(card)) return 5;
							return 5 - get.value(card);
						});
					"step 1";
					if (result.bool) {
						var skills = lib.skill.junkyuheng.derivation.randomGets(result.cards.length);
						player.addAdditionalSkills("junkyuheng", skills, true);
					}
				},
				group: "junkyuheng_remove",
				derivation: [
					"olbingyi",
					"shenxing",
					"xiashu",
					"old_anxu",
					"rezhiheng",
					"xinanguo",
					"lanjiang",
					"xinfu_guanwei",
					"dimeng",
					"xindiaodu",
					"xingxue",
					"jiexun",
					"olhongyuan",
					"xinfu_youdi",
					"bizheng",
				],
				subSkill: {
					remove: {
						audio: "yuheng",
						trigger: { player: "phaseEnd" },
						forced: true,
						filter(event, player) {
							return (
								player.additionalSkills.junkyuheng &&
								player.additionalSkills.junkyuheng.length > 0
							);
						},
						async content(event, trigger, player) {
							const skillslength = player.additionalSkills.junkyuheng.length;
							await player.removeAdditionalSkills("junkyuheng");
							await player.draw(skillslength);
						},
					},
				},
			},
			junkdili: {
				audio: "dili",
				trigger: { player: "changeSkillsAfter" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "wood",
				filter(event, player) {
					if (!event.addSkill.length) return false;
					var skills = player.getSkills(null, false, false).filter(function (i) {
						var info = get.info(i);
						// 临时修复（by 棘手怀念摧毁）
						return info && !info.charlotte && !info.equipSkill;
						// return info && !info.charlotte;
					});
					return skills.length > player.maxHp;
				},
				content() {
					"step 0";
					player.awakenSkill("junkdili");
					player.loseMaxHp();
					"step 1";
					var skills = player.getSkills(null, false, false).filter(function (i) {
						if (i == "junkdili") return false;
						var info = get.info(i);
						// 临时修复（by 棘手怀念摧毁）
						return info && !info.charlotte && !info.equipSkill;
						// return info && !info.charlotte;
					});
					var list = [];
					for (var skill of skills) {
						list.push([
							skill,
							'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' +
								get.translation(skill) +
								"】</div><div>" +
								lib.translate[skill + "_info"] +
								"</div></div>",
						]);
					}
					var next = player.chooseButton(["请选择失去任意个技能", [list, "textbutton"]]);
					next.set("forced", true);
					next.set("selectButton", [1, skills.length]);
					next.set("ai", function (button) {
						var skill = button.link,
							skills = _status.event.skills.slice(0);
						skills.removeArray(["xinanguo", "lanjiang", "rezhiheng", "junkyuheng"]);
						switch (ui.selected.buttons.length) {
							case 0:
								if (skills.includes(skill)) return 2;
								if (skill == "junkyuheng") return 1;
								return Math.random();
							case 1:
								if (skills.length < 2) return 0;
								if (skills.includes(skill)) return 2;
								if (skill == "junkyuheng") return 1;
								return 0;
							case 2:
								if (skills.includes(skill)) return 2;
								if (skill == "junkyuheng") return 1;
								return 0;
							default:
								return 0;
						}
					});
					next.set("skills", skills);
					"step 2";
					if (result.bool) {
						var skills = result.links;
						player.removeSkills(skills.slice(0));
					}
					var list = lib.skill.junkdili.derivation;
					list = list.slice(0, Math.min(skills.length, list.length));
					player.addSkills(list);
				},
				ai: {
					combo: "junkyuheng"
				},
				derivation: ["junkshengzhi", "junkquandao", "junkchigang"],
			},
			junkshengzhi: {
				audio: "dili_shengzhi",
				trigger: { player: ["logSkill", "useSkillAfter"] },
				forced: true,
				filter(event, player) {
					if (event.type != "player") return false;
					var skill = get.sourceSkillFor(event);
					if (get.is.locked(skill)) return false;
					var info = get.info(skill);
					return !info.charlotte;
				},
				content() {
					player.addTempSkill("junkshengzhi_effect");
				},
				subSkill: {
					effect: {
						mod: {
							cardUsable: () => Infinity,
							targetInRange: () => true,
						},
						trigger: { player: "useCard1" },
						forced: true,
						charlotte: true,
						popup: false,
						firstDo: true,
						content() {
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								player.getStat().card[trigger.card.name]--;
							}
							player.removeSkill("junkshengzhi_effect");
						},
						mark: true,
						intro: { content: "使用下一张牌无距离和次数限制" },
					},
				},
			},
			junkquandao: {
				audio: "dili_quandao",
				trigger: { player: "useCard" },
				forced: true,
				filter(event, player) {
					return event.card.name == "sha" || get.type(event.card, null, false) == "trick";
				},
				async content(event, trigger, player) {
					const cards1 = player.getCards("h", (card) => get.name(card) === "sha"),
						cards2 = player.getCards("h", (card) => get.type(card) === "trick");
					if (cards1.length !== cards2.length) {
						const num = cards1.length - cards2.length,
							cards = num > 0 ? cards1 : cards2;
						let i = 0;
						cards.forEach((card) => {
							if (i < Math.abs(num) && lib.filter.cardDiscardable(card, player, "junkquandao"))
								i++;
						});
						if (i > 0) {
							await player.chooseToDiscard(
								i,
								true,
								`权道：请弃置${get.cnNumber(i)}张${num > 0 ? "杀" : "普通锦囊牌"}`,
								num > 0
									? (card) => get.name(card) === "sha"
									: (card) => get.type(card) === "trick"
							);
						}
					}
					await player.draw();
				},
			},
			junkchigang: {
				audio: "dili_chigang",
				trigger: { player: "phaseJudgeBefore" },
				forced: true,
				zhuanhuanji: true,
				mark: true,
				marktext: "☯",
				content() {
					player.changeZhuanhuanji("junkchigang");
					trigger.cancel();
					var next = player[player.storage.junkchigang ? "phaseDraw" : "phaseUse"]();
					event.next.remove(next);
					trigger.getParent().next.push(next);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.type(card) == "delay") return "zerotarget";
						},
					},
				},
				intro: {
					content(storage) {
						return (
							"转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的" +
							(storage ? "出牌阶段" : "摸牌阶段") +
							"。"
						);
					},
				},
			},
			nsmanzhi: {
				audio: "dcmanzhi",
				trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
				direct: true,
				filter(event, player) {
					var nums = [];
					game.countPlayer((current) => {
						nums.add(current.hp);
						nums.add(current.maxHp);
						nums.add(current.countCards("h"));
						nums.add(current.countCards("e"));
						nums.add(current.countCards("j"));
					});
					for (var a of nums) {
						for (var b of nums) {
							if (0.5 * a * a + 2.5 * b - game.roundNumber == game.countPlayer()) return true;
						}
					}
					return false;
				},
				content() {
					"step 0";
					var nums = [];
					game.countPlayer((current) => {
						nums.add(current.hp);
						nums.add(current.maxHp);
						nums.add(current.countCards("h"));
						nums.add(current.countCards("e"));
						nums.add(current.countCards("j"));
					});
					nums.sort((a, b) => a - b);
					var a = null,
						b = null,
						goon = false;
					for (a of nums) {
						for (b of nums) {
							if (0.5 * a * a + 2.5 * b - game.roundNumber == game.countPlayer()) {
								goon = true;
								break;
							}
						}
						if (goon) break;
					}
					player
						.chooseButton(2, [
							"蛮智：请选择让下列等式成立的A与B的值",
							'<div class="text center">目标等式</div>',
							`0.5 × A<sup>2</sup> + 2.5 × B - ${game.roundNumber} = ${game.countPlayer()}`,
							'<div class="text center">A的可选值</div>',
							[
								nums.map((i) => {
									return [`A|${i}`, i == a ? `<span class="yellowtext">${i}</span>` : i];
								}),
								"tdnodes",
							],
							'<div class="text center">B的可选值</div>',
							[
								nums.map((i) => {
									return [`B|${i}`, i == b ? `<span class="yellowtext">${i}</span>` : i];
								}),
								"tdnodes",
							],
						])
						.set("filterButton", function (button) {
							if (!ui.selected.buttons.length) return true;
							return button.link[0] != ui.selected.buttons[0].link[0];
						})
						.set("filterOk", function () {
							if (ui.selected.buttons.length != 2) return false;
							var a, b;
							for (var i of ui.selected.buttons) {
								if (i.link[0] == "A") a = parseInt(i.link.slice(2));
								else b = parseInt(i.link.slice(2));
							}
							return 0.5 * a * a + 2.5 * b - game.roundNumber == game.countPlayer();
						})
						.set("choice", [a, b])
						.set("ai", (button) => {
							var choice = _status.event.choice;
							if (button.link == `A|${choice[0]}` || button.link == `B|${choice[1]}`) return 1;
							return 0;
						});
					"step 1";
					if (result.bool) {
						var a, b;
						for (var i of result.links) {
							if (i[0] == "A") a = parseInt(i.slice(2));
							else b = parseInt(i.slice(2));
						}
						equals = `0.5×${a}<sup>2</sup>+2.5×${b}-${game.roundNumber}=${game.countPlayer()}`;
						player.logSkill("nsmanzhi");
						player.chat(equals);
						game.log(player, "的计算结果为", equals);
						player.draw(game.countPlayer());
					}
				},
			},
			
			//牢彭羕
			stdxiaofan: {
				audio: "olxiaofan",
				trigger: {
					player: "useCardAfter",
				},
				forced: true,
				filter(event, player) {
					const num = Math.min(3, lib.skill.olxiaofan.getNum(player)),
						pos = "jeh".slice(0, num);
					return num > 0 && player.countCards(pos);
				},
				async content(event, trigger, player) {
					const num = Math.min(3, lib.skill.olxiaofan.getNum(player)),
						pos = "jeh".slice(0, num);
					let index = 0;
					while (index < num) {
						const posi = pos[index];
						const hs = player.countCards(posi);
						if (hs > 0) await player.chooseToDiscard(hs, posi, true);
						index++;
					}
				},
				ai: {
					effect: {
						player_use(card, player) {
							if (get.type(card) == "equip") {
								return [0, -5];
							}
						},
					},
					neg: true,
				},
			},
			stdtuishi: {
				audio: "oltuishi",
				mod: {
					wuxieJudgeEnabled: () => false,
					wuxieEnabled: () => false,
					cardEnabled: card => {
						if (card.name == "wuxie") return false;
					},
					aiValue: (player, card, val) => {
						if (card.name == "wuxie") return 0;
						var num = get.number(card);
						if ([1, 11, 12, 13].includes(num)) return 0;
					},
					aiUseful: (player, card, val) => {
						if (card.name == "wuxie") return 0;
						var num = get.number(card);
						if ([1, 11, 12, 13].includes(num)) return 0;
					},
					aiOrder: (player, card, order) => {
						var num = get.number(card);
						if ([1, 11, 12, 13].includes(num)) return 0;
						return order;
					},
				},
				trigger: {
					player: "useCard",
				},
				filter(event, player) {
					return [1, 11, 12, 13].includes(get.number(event.card));
				},
				forced: true,
				async content(event, trigger, player) {
					trigger.targets.length = 0;
					trigger.all_excluded = true;
					game.log(trigger.card, "被无效了");
				},
			},
		},
		dynamicTranslate: {
			nsjiquan(player) {
				if (player.storage.nsfuwei)
					return "锁定技，与你距离1以内的其他角色造成或受到伤害后，你将其区域内的一张牌置于你的武将牌上（称为“威”）。你使用【杀】的次数上限+X（X为“威”数）。";
				return "与你距离1以内的其他角色造成或受到伤害后，你可以将其区域内的一张牌置于你的武将牌上（称为“威”）。你使用【杀】的次数上限+X（X为“威”数）。";
			},
			nsdiewu(player) {
				if (player.storage.nspojian)
					return "当你获得两张或更多的牌后/受到伤害后，你获得一个“蝶舞”标记；你可移去一枚“蝶舞”标记，然后视为使用一张【杀】。当你以此法使用【杀】造成伤害后，则你摸一张牌。";
				return "当你获得两张或更多的牌后/受到伤害后，你获得一个“蝶舞”标记；你可移去一枚“蝶舞”标记，然后视为使用一张【杀】或【闪】。当你以此法使用【杀】造成伤害后，则你摸一张牌。";
			},
			nsfuzhou(player) {
				var str = "出牌阶段限";
				str += player.storage.nstaiping ? "两" : "一";
				str +=
					"次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到";
				str += player.storage.nsfuzhou_damage ? "两" : "一";
				str += "点雷属性伤害并弃置一张牌；红色，你摸两张牌，";
				str += player.storage.nsfuzhou_draw
					? "该角色回复1点体力并摸一张牌，且本回合的手牌上限+1。"
					: "且该角色本回合手牌上限减1。";
				return str;
			},
			nsguidao(player) {
				if (player.storage.nstaiping) return "一名角色的判定牌生效前，你可以打出一张牌替换之。";
				return "一名角色的判定牌生效前，你可以打出一张黑色牌替换之。";
			},
			junkchigang(player) {
				if (player.storage.junkchigang)
					return '转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：阴，摸牌阶段；<span class="bluetext">阳，出牌阶段。</span>';
				return '转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：<span class="bluetext">阴，摸牌阶段</span>；阳，出牌阶段。';
			},
		},
		characterReplace: {
			
		},
		translate: {
			diy_liufu: "刘馥",
			diy_xizhenxihong: "习珍习宏",
			diy_liuzan: "留赞",
			diy_zaozhirenjun: "枣祗任峻",
			diy_yangyi: "杨仪",
			diy_tianyu: "田豫",

			// diy_caocao:'曹操',
			diy_menghuo: "孟获",
			diy_huangzhong: "黄汉升",
			diy_xuhuang: "徐公明",
			diy_dianwei: "新典韦",
			diy_dianwei_prefix: "新",
			diy_weiyan: "魏文长",
			xicai: "惜才",
			diyjianxiong: "奸雄",
			diy_feishi: "费诗",
			nsshuaiyan: "率言",
			moshou: "墨守",
			diy_hanlong: "韩龙",
			diy_luxun: "陆伯言",
			diy_yuji: "于吉",
			diy_zhouyu: "周公瑾",
			diy_lukang: "陆抗",
			diy_caiwenji: "蔡昭姬",
			diy_zhenji: "甄宓",

			ns_zuoci: "左慈",
			ns_wangyun: "王允",
			ns_lvzhi: "吕后",
			ns_nanhua: "南华",
			ns_nanhua_left: "幻身·左",
			ns_nanhua_right: "幻身·右",
			ns_huamulan: "SP花木兰",
			ns_huamulan_prefix: "SP",
			ns_huangzu: "黄祖",
			ns_yanliang: "颜良",
			ns_wenchou: "文丑",
			ns_jinke: "荆轲",

			ns_caocao: "曹操",
			ns_zhugeliang: "诸葛亮",
			ns_wangyue: "王越",
			ns_yuji: "于吉",
			ns_caocaosp: "SP曹操",
			ns_caocaosp_prefix: "SP",
			ns_xinxianying: "辛宪英",
			ns_sunjian: "孙坚",
			ns_simazhao: "司马昭",
			ns_guanlu: "管辂",

			ns_duangui: "段珪",
			ns_shenpei: "审配",
			ns_zhangbao: "张宝",
			ns_masu: "马谡",
			ns_zhangxiu: "张绣",
			ns_lvmeng: "吕蒙",

			ns_yujisp: "于吉",
			ns_lisu: "李肃",
			ns_yangyi: "杨仪",
			ns_liuzhang: "刘璋",
			ns_xinnanhua: "南华老仙",
			ns_luyusheng: "陆郁生",

			noname: "小无",
			noname_zhuyuan: "祝愿",
			noname_zhuyuan_info:
				"①每回合每名角色限一次。出牌阶段，你可以将四张花色各不相同的牌交给一名其他角色。你与其获得技能〖铁骑〗和〖激昂〗至各自的回合结束。②锁定技，若你于当前回合内：未发动过〖祝愿〗，则你使用牌无次数限制；发动过〖祝愿〗，则你使用牌无距离限制。",
			noname_duocai: "多彩",
			noname_duocai_info:
				"每回合限一次。其他角色区域内的牌因弃置而进入弃牌堆后，你可以获得之。若你以此法得到的牌数：大于2，你弃置一名角色区域内的一张牌；等于2，你摸一张牌；小于2，你回复1点体力。",
			ns_huangchengyan: "黄承彦",
			nslongyue: "龙岳",
			nslongyue_info: "当一名角色使用锦囊牌时，若此牌是其本回合内使用的第一张牌，则你可令其摸一张牌。",
			nszhenyin: "阵引",
			nszhenyin_info: "每回合限一次。一名角色的判定牌生效前，你可令当前回合角色打出一张手牌代替之。",
			ns_sunchensunjun: "孙綝孙峻",
			nsxianhai: "险害",
			nsxianhai_info:
				"每轮限一次，当一名其他角色于回合内造成伤害后，若其此回合内造成过的伤害总和大于你上一回合内造成的伤害总和，则你可以减1点体力上限，令其废除一种装备栏并弃置手牌中所有的【闪】。若〖兴黜〗已发动，此回合结束后视为该限定技未发动过。",
			nsxingchu: "兴黜",
			nsxingchu_info:
				"限定技，当你杀死一名角色/你死亡时，你可以令一名角色获得其/你的所有牌并增加1点体力上限。",
			ns_yuanxi: "袁熙",
			nsshengyan: "盛筵",
			nsshengyan3: "盛筵",
			nsshengyan_info:
				"锁定技，你的判定牌生效后，若结果花色与你本回合内其他判定结果的花色均不同，则你令当前回合角色本回合的手牌上限+2。",
			nsdaizhan: "怠战",
			nsdaizhany: "怠战",
			nsdaizhan_info:
				"准备阶段，你可以将一张非锦囊牌当做【兵粮寸断】或【乐不思蜀】对自己使用。若如此做，回合结束时，你将手牌摸至手牌上限。",
			ns_caoshuang: "曹爽",
			nsjiquan: "集权",
			nsjiquan_mark: "集权",
			nsjiquan_info:
				"与你距离1以内的其他角色造成或受到伤害后，你可以将其区域内的一张牌置于你的武将牌上（称为“威”）。你使用【杀】的次数上限+X（X为“威”数）。",
			nsfuwei: "附位",
			nsfuwei_info:
				"觉醒技，结束阶段开始时，若“威”数大于4，则你加2点体力上限，获得〖喋谋〗和〖制皇〗，并将〖集权〗改为锁定技。",
			nsdiemou: "喋谋",
			nsdiemou_info:
				"锁定技，出牌阶段开始时，若“威”大于全场角色数，你移去所有“威”，减1点体力上限并摸X张牌。若X大于4，你翻面。（X为移去的“威”数）",
			nszhihuang: "制皇",
			nszhihuang_damage: "制皇",
			nszhihuang_info:
				"每回合限一次，当主公使用牌时，你可以移去一张“威”，然后获得此牌。锁定技，若你的手牌数大于主公，则你使用牌造成的伤害+1。",
			ns_chentai: "陈泰",
			nsweiyuan: "围援",
			nsweiyuan_use: "围援",
			nsweiyuan_use_backup: "围援",
			nsweiyuan_info:
				"出牌阶段限一次，当你使用牌指定其他角色A为唯一目标后，你可以令一名除该角色外的其他角色B选择一项：①交给A一张牌：然后你对B造成1点伤害；②你摸一张牌，且可以将一张手牌当做本回合使用过的一张基本牌/普通锦囊牌使用（无次数距离限制）。",
			nsjuxian: "据险",
			nsjuxian2: "据险",
			nsjuxian_info:
				"当你受到伤害时，你可以摸两张并跳过下一个摸牌阶段，且在此之前不能再次发动〖据险〗。然后若你的手牌数不小于体力上限，则伤害来源弃置一张牌。",
			ns_huangwudie: "黄舞蝶",
			nsdiewu: "蝶舞",
			nsdiewu_info:
				"当你获得两张或更多的牌后/受到伤害后，你获得一个“蝶舞”标记；你可移去一枚“蝶舞”标记，然后视为使用一张【杀】或【闪】。当你以此法使用【杀】造成伤害后，则你摸一张牌。",
			nslingying: "灵影",
			nslingying_info: "锁定技，你使用【杀】无距离限制，且你使用【杀】的次数上限+1。",
			nspojian: "破茧",
			nspojian_info:
				'觉醒技，准备阶段，若你的"蝶舞"标记的数量不小于你的体力值，则你减1点体力上限并摸两张牌，删除〖蝶舞〗中使用【闪】的部分并获得技能〖烈弓〗。',
			ns_sunyi: "孙翊",
			nsguolie: "果烈",
			nsguolie2: "果烈",
			nsguolie_info:
				"摸牌阶段开始前，你可跳过此阶段。若如此做，你的红色牌均视为【杀】，黑色牌均视为【过河拆桥】且均无视距离与次数直到回合结束，且结束阶段，你获得本回合从你以外的区域内进入弃牌堆的所有牌。",
			ns_zhangning: "张宁",
			nsfuzhou: "符咒",
			nsfuzhou_card: "符咒",
			nsfuzhou_card_info:
				"此牌不可被【无懈可击】响应。若判定结果为：黑色，你受到使用者造成的1点雷属性伤害且弃置一张牌；红色，使用者摸两张牌，且你本回合的手牌上限-1。",
			nsfuzhou_num: "符咒",
			nsfuzhou_info:
				"出牌阶段限一次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，且该角色本回合手牌上限减1。",
			nsguidao: "鬼道",
			nsguidao_info: "一名角色的判定牌生效前，你可以打出一张黑色牌替换之。",
			nstaiping: "太平",
			nstaiping_info:
				"觉醒技。准备阶段，若你：已因〖符咒〗造成了两次或更多的伤害，则你将〖鬼道〗中的“黑色牌”修改为“牌”，将〖符咒〗修改为〖符咒·邪〗；若你已因〖符咒〗摸了两次或更多的牌，则你将〖鬼道〗中的“黑色牌”修改为“牌”，将〖符咒〗修改为〖符咒·正〗。",
			nsfuzhou_damage: "符咒·邪",
			nsfuzhou_damage_info:
				"出牌阶段限两次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，且该角色本回合手牌上限-1。",
			nsfuzhou_draw: "符咒·正",
			nsfuzhou_draw_info:
				"出牌阶段限两次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，该角色回复1点体力并摸一张牌，且本回合的手牌上限+1。",
			ns_yanghu: "羊祜",
			nsbizhao: "避召",
			nsbizhao2: "避召",
			nsbizhao_info:
				"隐匿技，锁定技，当你于回合外明置此武将牌后，其他角色计算与你的距离+1直至你的回合开始。",
			nsqingde: "清德",
			nsqingde_info:
				"每回合限一次，当你使用【杀】或普通锦囊牌对其他角色造成伤害后，你可使用该牌与受到伤害的角色拼点。你可令输的角色摸两张牌；当你受到其他角色使用【杀】或普通锦囊牌造成的伤害后，可使用该牌与伤害来源拼点。你可令赢的角色回复1点体力。",
			nsyidi: "遗敌",
			nsyidi_info:
				"出牌阶段限一次，你可展示一张手牌，然后将其交给一名其他角色。若为基本牌，该角色可使用此牌；若不为基本牌，你摸一张牌。",

			diy_wenyang: "文鸯",
			ns_zhangwei: "张葳",
			nshuaishuang: "怀霜",
			nshuaishuang_info: "锁定技，结束阶段，你从牌堆/弃牌堆获得一张【桃】，然后失去1点体力。",
			nsfengli: "奉礼",
			nsfengli2: "奉礼",
			nsfengli_draw: "奉礼",
			nsfengli_clear: "奉礼",
			nsfengli_use: "奉礼",
			visible_nsfengli: "奉礼",
			nsfengli_info:
				"回合结束时，你可以选择一名其他角色并展示所有手牌直到你的下回合开始。当该角色于回合外需要使用或打出牌时，其可暗置你的一张明置手牌，然后视为使用或打出之。当你的明置手牌减少时，你可令一名手牌数小于你的角色摸一张牌。",
			nsqiyue: "骑钺",
			nsqiyue_info: "锁定技，当有角色的武将牌状态改变后，你摸一张牌。",
			nsxuezhu: "血逐",
			nsxuezhu_info: "当你受到伤害或造成伤害后，你可以令受到伤害的角色摸两张牌并翻面。",
			ns_chuanshu: "传术",
			ns_chuanshu_info:
				"<span class=yellowtext>限定技</span> 当一名其他角色进入濒死状态时，你可以令其选择获得技能〖雷击〗或〖鬼道〗，其回复体力至1并摸两张牌。当该被【传术】的角色造成或受到一次伤害后，你摸一张牌。其阵亡后，你重置技能〖传术〗。",
			ns_xiandao1: "仙道",
			ns_xiandao1_info:
				"<font color=#f00>锁定技</font> 游戏开始和回合结束阶段，你随机获得技能〖雷击〗或〖鬼道〗，直到下个出牌阶段开始。",
			ns_xiandao2: "仙道",
			ns_xiandao2_info: "<font color=#f00>锁定技</font> 你防止受到任何属性伤害。",
			ns_xiandao: "仙道",
			ns_xiandao_info:
				"<font color=#f00>锁定技</font> 游戏开始、你进入游戏时和回合结束阶段，你随机获得技能〖雷击〗或〖鬼道〗，直到下个出牌阶段阶段开始。你防止受到任何属性伤害。",
			ns_chuanshu2: "术",
			ns_chuanshu2_info: "<font color=#f00>锁定技</font> 当你造成或受到一次伤害后，南华老仙摸一张牌。",
			ns_chuanshu3: "术",
			ns_chuanshu3_info:
				"<font color=#f00>锁定技</font> 当你【传术】的角色阵亡后，你重置技能〖传术〗。",
			ns_xiuzheng: "修真",
			ns_xiuzheng_info:
				"出牌阶段限一次，你可选择一名其他角色，然后亮出牌堆顶的两张牌，若同为红色，则其受到1点火焰伤害；若同为黑色，其受到1点雷电伤害；若颜色不相同，你弃置其一张牌。然后你获得这两张展示的牌后再弃置两张牌。",
			nsanruo: "暗弱",
			nsanruo_info:
				"锁定技，你手牌中的【杀】和普通锦囊牌(借刀杀人等带有指向目标的锦囊除外)均对你不可见。但你可以正常使用之。",
			nsxunshan: "循善",
			nsxunshan_info: "锁定技，你使用【暗弱】牌可以为其指定任意名合法目标（托管无效）。",
			nskaicheng: "开城",
			nskaicheng_info:
				"主公技，你的回合内，你可以将一张【暗弱】牌交给一名群势力其他角色观看，其可以选择是否告诉你此牌的名字。然后你选择一项：使用这张牌并摸一张牌；或结束此回合。",
			nsjuanli: "狷戾",
			nsjuanli_info:
				"出牌阶段限一次，你可以和一名有手牌的其他角色进行赌牌，若你赢，目标角色失去1点体力且该角色与你距离-1直到与你下次赌牌，若你没赢，目标角色回复1点体力，且该角色与你距离+1直到与你的下次赌牌。（赌牌:赌牌的两名角色分别亮开一张手牌，若花色相同则赌牌平局，若花色不同，则依次亮出牌堆顶的牌直到翻开的牌与其中一人亮出牌的花色相同，则该角色获得赌牌的胜利）",
			nsyuanchou: "远筹",
			nsyuanchou_info: "锁定技，当你成为锦囊牌的目标时，若来源角色与你的距离大于1，则取消之。",
			nsguhuo: "蛊惑",
			nsguhuo_info:
				"锁定技，你在一个回合中使用前两张牌时，你对一名随机角色从牌堆(牌堆无则从弃牌堆)随机使用一张同类别卡牌。",
			nsqinxue: "勤学",
			nsqinxue_info:
				"每个效果每回合只能使用一次。①当你使用一张基本牌时，你从牌堆随机获得一张锦囊牌；②当你使用一张锦囊牌时，你从牌堆随机获得一张装备牌；③当你使用一张装备牌时，你从牌堆随机获得一张基本牌。",
			nsbaiyi: "白衣",
			nsbaiyi_info: "锁定技，若你本回合发动过〖勤学〗，你跳过弃牌阶段，改为弃置X张牌（X为本回合发动〖勤学〗的次数）；若你弃置了3张类别不同的牌，你获得一个额外回合（不可连续获得回合），否则你观看牌堆顶的X张牌并获得其中一张。",
			nsbaiming: "百鸣",
			nsbaiming_info:
				"当你使用【杀】时，你可以获得一项未获得过且与杀或伤害相关的技能，此【杀】结算完毕后，你失去以此法获得的技能。",
			nsfuge: "覆戈",
			nsfuge_info:
				"你的回合结束后，你可以执行一个额外的回合，此回合的摸牌阶段，你于摸牌阶段额外摸X张牌（X为你已损失的体力值）；若如此做，直到洗牌前，你不能再发动此技能。",
			nstanbing: "谈兵",
			nstanbing_info:
				"摸牌阶段开始时，你可弃置一张手牌，然后摸X张牌(X为你弃置牌的名称字数)，若如此做，本回合你不可使用或打出【杀】。",
			nsxinzhan: "心战",
			nsxinzhan_info:
				"出牌阶段限一次，你可将任意张手牌交给一名其他角色，若如此做，该角色失去X点体力(X为你交给其的牌张数的一半，向下取整)，若你给的牌达到六张，则改为该角色失去1点体力上限。",
			nsfuhuo: "符火",
			nsfuhuo2: "符火",
			nsfuhuo_info:
				"出牌阶段限一次，你可将一张手牌置于一名武将牌上没有“符”的角色的武将牌上，称为“符”，若如此做，其回合外使用或打出【闪】时，你可令其判定，若结果为：红桃，你对其造成2点火焰伤害；方块，你弃置其一张手牌，然后对其造成1点火焰伤害。你的下个回合开始时，你获得其武将牌上的“符”。",
			nswangfeng: "望风",
			nswangfeng_info: "在判定牌生效前，你可以打出一张红色牌替换之。",
			nshunji: "混击",
			nshunji_info:
				"出牌阶段限一次，你可以摸一张牌，视为使用一张【万箭齐发】。此【万箭齐发】造成伤害时，受伤害角色选择一项：①弃置你一张牌；②摸一张牌。",
			nscuanquan: "篡权",
			nscuanquan_info: "锁定技，如果你的身份为忠臣，则在受伤三次后与主公，互换身份和体力上限。",
			nsjianning: "奸佞",
			nsjianning_info:
				"出牌阶段限一次，如果你的身份为内奸，你可以与一名手牌数比你少的角色交换手牌，并对其造成1点伤害。",
			nschangshi: "常仕",
			nschangshi_info:
				"出牌阶段限一次，如果你的身份为反贼，你可以指定两名其他角色互换体力；如果两名角色体力之差等于1，你失去1点体力。",
			nsbaquan: "霸权",
			nsbaquan_info:
				"回合结束时，你可以弃置所有手牌，并获得相应点数的护甲，你的新一回合开始时清除所有护甲。",
			nsbugua: "卜卦",
			nsbugua_use_info:
				"弃置一张牌，并将牌堆顶的六张牌反面朝上逐张按先后顺序排放，然后抛骰子，展示牌序号与骰子显示的点数一致的牌，然后你根据这张牌的花色、点数随机获得牌堆中相应的一张牌。",
			nsbugua_info:
				"出牌阶段限一次，你可以弃置一张牌，并将牌堆顶的六张牌反面朝上逐张按先后顺序排放，然后抛骰子，展示牌序号与骰子显示的点数一致的牌，然后你根据这张牌的花色、点数按以下规则随机获得牌堆中相应的一张牌：乾（红桃偶数）：无中生有；坤（黑桃奇数）：决斗；震（黑桃偶数）：南蛮入侵；巽（红桃奇数）：万箭齐发；坎（梅花偶数）：过河拆桥、兑（梅花奇数）：借刀杀人、艮（方片偶数）：顺手牵羊、离（方片奇数）：火攻。若牌堆中无此牌则摸一张牌，然后你观看未展示的另外五张牌并按任意顺序将其置于牌堆顶。",
			nstuiyan: "推演",
			nstuiyan_info:
				"出牌阶段，若你使用的牌点数比上一张使用的牌点数大，你可以摸一张牌，反之你本回合不能再以此法摸牌；当你使用的牌点数首次达到8的倍数时，你可以在结算后立即发动一次【卜卦】。",
			nstianji: "天机",
			nstianji_info:
				"限定技，当一名其他角色进入濒死状态，你可自减1点体力上限，令其回复体力至1并增加1点体力上限。",
			nszhaoxin: "昭心",
			nszhaoxin_info: "锁定技，你始终展示手牌。",
			nsxiuxin: "修穆",
			nsxiuxin_info: "锁定技，若你没有某种花色的手牌，你不能成为这种花色的牌的目标。",
			nsshijun: "弑君",
			nsshijun_info: "锁定技，你造成伤害时，你令此伤害+1，并在结算后失去1点体力。",
			nshunyou: "魂佑",
			nshunyou_info:
				"出阶段限一次，你可以弃置一张基本牌，获得弃牌堆底的一张装备牌和一张锦囊牌，然后你可以将那张装备牌装备给一名角色（允许替换）。如果弃牌堆没有装备以及锦囊牌，则改为摸X张牌，X为损失的体力加一（最多3张）。",
			nswulie: "武烈",
			nswulie_info:
				"限定技，准备阶段，你可以失去1点体力上限，从弃牌堆选择最多三张牌以任意顺序放置于牌堆顶。若如此做，此回合的结束阶段，你可以重复此操作。",
			nscangxi: "藏玺",
			nscangxi2: "藏玺",
			nscangxi_info:
				"主公技，其他吴势力角色的弃牌阶段结束时，若其弃置了至少两张牌，则可以选择判定，若是黑色，则其选择一项，1，令主公摸一张并且展示；2，主公手牌上限永久加一；3，额外弃置一张牌，令主公获得本回合进入弃牌堆的一张牌。",
			nsdongcha: "洞察",
			nsdongcha_info:
				"锁定技，单体锦囊牌无法对你造成伤害。其它角色于其回合内第二次使用锦囊牌指定你为目标时，取消之。",
			nscaijian: "才鉴",
			nscaijian_info:
				"出牌阶段限一次，若你的手牌数不大于你的体力上限，则你可以展示你的手牌，观看牌堆顶相同数量的牌并以任意方式交换之。",
			nsgongjian: "恭俭",
			nsgongjian_info: "锁定技，弃牌阶段，你须将弃牌交给一名体力值大于你的其它角色。",
			nsjianxiong: "奸雄",
			nsjianxiong_info:
				"当你成为一名角色牌的目标后你可以对该角色使用一张牌，若此牌对其造成伤害，则该角色的牌失效。若失效的为黑色牌，则你摸一张牌。",
			nsxionglue: "雄略",
			nsxionglue_info: "出牌阶段限一次，你可以弃置一张黑色手牌，然后发现一张锦囊牌。",
			nsyaowang: "妖妄",
			nsyaowang_info:
				"回合开始阶段你可以选择一名角色然后获得其其中一项技能直到回合结束，然后该角色随机获得一项未上场武将的其中一项技能直到其回合结束。",
			nshuanhuo: "幻惑",
			nshuanhuo_info:
				"每当你失去1点体力或受到一次大于2的伤害时，你可以交换除你之外的两名角色的武将牌（体力及体力上限不变）。",
			nsjianshu: "剑术",
			nsjianshu_info:
				"锁定技：每当你的装备区有武器时，你使用【杀】指定一个目标后，该角色需要依次使用两张【闪】才能抵消此【杀】。",
			nscangjian: "藏剑",
			nscangjian_info: "每当你对一名角色造成伤害，你可以获得其装备区一张牌。",
			nsyunxing: "陨星",
			nsyunxing_info:
				"锁定技，当场上一名角色死亡，若为蜀，你失去1点体力；若为吴，你回复1点体力；若为魏，你摸一张牌并弃置一名角色的手牌；若为群，你强制结束当前回合；若为你，你可以使一名角色翻面。",
			nsguanxing: "观星",
			nsguanxing_info:
				"锁定技，准备阶段，你观看牌堆的X张牌(X为场上存活人数)并且任意移动Y张牌(Y为你当前体力值)。",
			nscaiyi: "猜疑",
			nscaiyi_info:
				"其他角色摸牌后，你可以观看其摸到的牌，若其中有【杀】，则视为你对其使用一张【杀】，若其中没有【杀】，则视为其对你使用一张【杀】（计入出杀次数）。",
			nsgefa: "割发",
			nsgefa_info: "当你的体力值等于0或更低时，你可以将任意一张♣牌当【桃】使用。",
			nshaoling: "号令",
			nshaoling_info:
				"限定技，出牌阶段，你可以指定一名其他角色，令另外所有其他角色角色选择一项：1、对该角色使用一张【杀】；2、交给你一张牌，然后视为你对其使用一张【杀】。",
			nspinmin: "拼命",
			nspinmin_info:
				"锁定技，当你于回合内死亡时，你不死亡并增加1点体力上限（每回合最多增加1点且不能超过4）；当你于回合外死亡时，你不死亡并减少1点体力上限（体力上限为0会导致你死亡）。",
			nsshishou: "失手",
			nsshishou_info:
				"锁定技，当你于回合内失去手牌时，你失去1点体力并摸一张牌；你回合内使用的牌数不能超过4。",
			nsduijue: "对决",
			nsduijue_info:
				"出牌阶段开始时，你可以弃置一张手牌，若如此做，此阶段你可以将一张与此牌颜色不同的手牌当作【决斗】使用（限2次）。",
			nsshuangxiong: "双雄",
			nsshuangxiong_info: "当你使用【决斗】或被使用【决斗】时，你可以将武将牌翻面。",
			nsshuangxiong_append: "背面武将：文丑，2体力，你可以将一张牌当【杀】打出。",
			nsguanyong: "冠勇",
			nsguanyong_info: "你可以将一张手牌当【杀】打出。",
			nsjihui: "急恚",
			nsjihui_info:
				"锁定技，每当一名角色一次弃置了三张或更多的牌，你获得一个额外回合；你的额外回合内，你使用牌只能指定你与上一回合角色为目标。",
			nsmouyun: "谋运",
			nsmouyun_info:
				"每两轮限一次，你可以弃置场上体力值最少的一名其他角色区域内的X张牌。（X为其损失的体力值）",
			nscongjun: "从军",
			nscongjun_info:
				"锁定技，游戏开始时，你变身为一名随机男性角色；当一名敌方角色使用无懈可击时，你有小概率亮出此武将并变回花木兰，然后对该角色造成2点伤害。",
			nshuanxian: "幻仙",
			nshuanxian_info:
				"锁定技，游戏开始时，你获得随从“幻身·右”，当你首次受到伤害时，你获得随从“幻身·左”（体力上限2，初始手牌2）；你与幻身在摸牌阶段均少摸一张牌；在你的回合中（如果有对应幻身），你以【幻身·左-本体-幻身·右】的顺序进行3个连续回合。",
			nstaiping_nh: "太平",
			nstaiping_nh_info:
				"当你受到1点伤害后（首次伤害除外），你可以选择一项: ①令一个“幻身”增加1点体力上限。②令一个“幻身”回复1点体力。",
			nsshoudao: "授道",
			nsshoudao_info:
				"当左右“幻身”全部死亡时，你获得技能“雷击”和“鬼道”。当你死亡时，若此时有两个“幻身”，你可以令一名其他角色获得技能“雷击”和“鬼道”。若有一个“幻身”，你可以令一名其他角色获得技能“雷击”或“鬼道”。(杀死你的角色除外)",
			nsnongquan: "弄权",
			nsnongquan_info: "出牌阶段，你可以将最后一张手牌当作【无中生有】使用。",
			nsdufu: "毒妇",
			nsdufu_info: "每当你即将造成一次伤害时，你可以为此伤害重新指定伤害来源。",
			yiesheng: "回雪",
			yiesheng_info: "出牌阶段，你可以弃置任意数量的黑色手牌，然后摸等量的牌。",
			liangji: "环计",
			liangji_info:
				"出牌阶段限一次，你可以选择一名未以此法放置牌的其他角色并将一张手牌置于其武将牌上。目标角色于摸牌阶段开始时，获得此牌。若其为男性角色，则获得技能〖无双〗，若其为女性角色，则获得技能〖离间〗，直到回合结束。",
			chengmou: "逞谋",
			chengmou_info:
				"摸牌阶段开始时，若你有“功”牌，你获得之并跳过摸牌阶段，若你所获得的“功”牌多于两张，你须失去1点体力。",
			jugong: "居功",
			jugong_info:
				"回合外每名角色的回合限一次，每当场上有角色因受到【杀】或【决斗】造成的伤害，你可以摸一张牌并且将一张手牌置于你的武将牌上，称之为“功”。在你即将受到伤害时，你可以弃置两张“功”，防止此伤害。",
			nsxinsheng: "新生",
			nsxinsheng_info:
				"每当你对其他角色造成伤害后，若你未受伤，则你可以增加X点体力上限并摸X张牌，X为伤害点数。",
			nsdunxing: "遁形",
			nsdunxing_info:
				"每当你即将受到其他角色造成的伤害时，若你已受伤，则你可以防止此伤害，改为失去X点体力上限并摸X张牌，X为伤害点数。",
			liangce: "粮策",
			liangce_info:
				"①出牌阶段限一次，你可以将一张基本牌当【五谷丰登】使用。②当因执行【五谷丰登】的效果而亮出的牌因效果执行完毕而置入弃牌堆后，你可以选择一名角色，令该角色获取之。",
			jianbi: "坚壁",
			jianbi_info: "当你成为锦囊牌的目标时，若此牌的目标包括其他角色，你可以令此牌对1个目标无效。",
			diyjuntun: "军屯",
			diyjuntun_info: "出牌阶段，你可以重铸装备牌。",
			choudu: "筹度",
			choudu_info: "出牌阶段限一次，你可以弃置一张牌，并指定一名角色视为其使用一张调兵遣将。",
			liduan: "立断",
			liduan_info:
				"当一名其他角色于其回合外得到牌后，若其此次得到的牌数为1且为装备牌（无论是否可见），你可以令该角色选择一项：1.使用此牌；2.将一张手牌交给你。",
			fuchou: "负仇",
			fuchou2: "负仇",
			fuchou_info:
				"当你成为【杀】的目标时，你可以将一张牌交给此【杀】的使用者，令此【杀】对你无效且你到其的距离于当前回合内视为1，若如此做，此回合的结束阶段开始时，其令你摸一张牌，然后你需对其使用【杀】，否则失去1点体力。",
			jinyan: "噤言",
			jinyan_info: "锁定技。若你的体力值不大于2，你的黑色锦囊牌视为【杀】。",
			chezhen: "车阵",
			chezhen_info: "锁定技。若你的装备区里：没有牌，你的防御距离+1；有牌，你的进攻距离+1。",
			youzhan: "诱战",
			youzhan_info:
				"当以你距离不大于1的角色为目标的【杀】的使用结算开始时，你可以弃置一张装备牌，令该角色视为使用【诱敌深入】。",
			kangyin: "亢音",
			kangyin2: "亢音",
			kangyin_info:
				"出牌阶段限一次，你可以失去1点体力并选择一名其他角色，弃置该角色的一张牌。若此牌：为基本牌，你可以令一至X名角色各摸一张牌；不为基本牌，于此回合内：你的进攻距离+X，且你使用【杀】的额外目标数上限+X。（X为你已损失的体力值）",
			zhucheng: "筑城",
			zhucheng2: "筑城",
			zhucheng_info: "①结束阶段开始时，若没有“筑”，你可以将牌堆顶的X张牌置于你的武将牌上〔称为“筑”〕（X为你已损失的体力值与1中的较大值），否则你可以获取所有“筑”。②当你成为【杀】的目标时，若有“筑”，你可以令此【杀】的使用者弃置X张牌（X为“筑”的数量），否则此【杀】对你无效。",
			duoqi: "夺气",
			duoqi_info:
				"当一名角色于除你之外的角色的出牌阶段内因弃置而失去牌后，你可以移去一张“筑”，并结束此出牌阶段。",

			siji: "伺机",
			ciqiu: "刺酋",
			ciqiu_dying: "刺酋",
			diy_liuyan: "刘焉",
			juedao: "绝道",
			geju: "割据",
			shaoying: "烧营",
			zonghuo: "纵火",
			diychanyuan: "缠怨",
			diyguhuo: "蛊惑",
			jieyan: "劫焰",
			honglian: "红莲",
			xiongzi: "雄姿",
			luweiyan: "围堰",
			guihan: "归汉",
			diyduanliang: "断粮",
			diyduanliang1: "断粮",
			diyduanliang2: "断粮",
			diyqiangxi: "强袭",
			diykuanggu: "狂骨",
			diyzaiqi: "再起",
			batu: "霸图",
			zaiqix: "再起",
			diy_jiaoxia: "皎霞",
			yaliang: "雅量",
			yaliang_info:
				"每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。",
			diy_jiaoxia_info: "每当你成为红色牌的目标，你可以摸一张牌。",
			zaiqix_info:
				"摸牌阶段，若你已受伤，你可以改为亮出牌堆顶的X+1张牌，X为你已损失的体力值，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。",
			batu_info: "结束阶段，你可以将手牌数补至X，X为现存的势力数。",
			diyzaiqi_info: "锁定技，你摸牌阶段额外摸X张牌，X为你已损失的体力值。",
			diykuanggu_info: "锁定技，每当你造成1点伤害，你在其攻击范围内，你回复1点体力，否则你摸一张牌。",
			diyqiangxi_info:
				"出牌阶段，你可以自减1点体力或弃一张武器牌，然后你对你攻击范围内的一名角色造成1点伤害并弃置其一张牌，每回合限一次。",
			diyduanliang_info:
				"出牌阶段限一次，你可以将一张黑色的基本牌当【兵粮寸断】对一名角色使用，然后摸一张牌。你的【兵粮寸断】可以指定距离2以内的角色作为目标。",
			guihan_info: "限定技，当你进入濒死状态时，可以指定一名男性角色与其各回复1点体力并摸两张牌。",
			luweiyan_info:
				"出牌阶段限一次，你可以将一张非基本牌当作【水攻】使用；结算后你可以视为对其中一个目标使用一张不计入出杀次数的【杀】。",
			xiongzi_info: "锁定技，你于摸牌阶段额外摸X+1张牌，X为你装备区牌数的一半，向下取整。",
			honglian_info: "每当你受到来自其他角色的伤害，可以弃置伤害来源的所有红色牌。",
			jieyan_info: "出牌阶段限一次，你可以弃置一张红色手牌令场上所有角色受到1点火焰伤害。",
			diyguhuo_info: "锁定技，准备阶段，你摸两张牌，然后弃置区域内的两张牌。",
			diychanyuan_info: "锁定技，杀死你的角色失去1点体力上限。",
			zonghuo_info: "你可弃置一张牌将你即将造成的伤害变为火焰伤害。",
			shaoying_info:
				"每当你造成一次火焰伤害，可指定距离受伤害角色1以内的另一名角色，并亮出牌堆顶的一张牌，若此牌为红色，该角色受到1点火焰伤害。",
			juedao_info:
				"出牌阶段，你可以弃置一张手牌，横置你的武将牌；锁定技，若你的武将牌横置，则你计算至其他角色的距离和其他角色计算至你的距离均+1。",
			geju_info: "准备阶段开始时，你可以摸X张牌（X为攻击范围内不含有你的势力数）。",
			siji_info: "弃牌阶段结束后，你可以摸2X张牌（X为你于此阶段内弃置的【杀】的数量）。",
			ciqiu_info:
				"锁定技，每当你使用【杀】对目标角色造成伤害时，若该角色未受伤，你令此伤害+1；若其因此进入濒死状态，你令其死亡，然后你失去“刺酋”。",
			nsshuaiyan_info:
				"每当其他角色于你的回合外回复体力后，你可以令该角色选择一项：1.令你摸一张牌；2.令你弃置其一张牌。",
			moshou_info: "锁定技，你不能成为乐不思蜀和兵粮寸断的目标。",
			xicai_info: "你可以立即获得对你造成伤害的牌。",
			diyjianxiong_info:
				"锁定技，在身份局中，在你回合内死亡的角色均视为反贼，国战中，在你回合内死亡的角色若与你势力相同则随机改为另一个势力。",

			ns_zanghong: "臧洪",
			nsshimeng: "誓盟",
			nsshimeng_info:
				"出牌阶段限一次，你可以选择任意名角色。这些角色依次选择一项：⒈摸一张牌。⒉使用一张【杀】。然后若选择前者角色数大于选择后者的角色数，则你获得1点护甲并失去1点体力。",
			ns_ruanji: "阮籍",
			nsshizui: "酾醉",
			nsshizui_info:
				"每回合限一次。当你成为基本牌或普通锦囊牌的目标后，你可以弃置一张牌，然后视为使用一张【酒】。若你弃置的牌与其使用的牌花色相同，则此牌对你无效；若你弃置的牌为♣，则你获得其使用的牌。",
			nsxiaoye: "啸野",
			nsxiaoye_info:
				"一名角色的结束阶段开始时，若你于当前回合内使用过【酒】，则你可以视为使用一张其于本回合内使用过的【杀】或普通锦囊牌。",
			ns_limi: "李密",
			nstuilun: "退论",
			nstuilun_info:
				"结束阶段，你可以失去任意点体力（至多失去至1点）并弃置任意张手牌（至多弃置至一张）。若如此做，你获得如下效果直到你下回合开始：其他角色的回合开始时，若你的体力值小于该角色，则你可以令一名角色回复或失去1点体力；若你的手牌数小于该角色，则你可以令一名角色摸一张牌或弃置一张牌。",
			ns_zhonglimu: "钟离牧",
			nskuanhuai: "宽怀",
			nskuanhuai_info:
				"出牌阶段开始时，你可以从弃牌堆中获得一张非基本牌。若如此做：你本阶段内不能使用基本牌，且本回合的弃牌阶段结束时，你可以依次使用本阶段内弃置的基本牌。",
			nsdingbian: "定边",
			nsdingbian_info:
				"锁定技。当你于回合内使用锦囊牌或装备牌后，你令自己本回合的手牌上限-1且选择一项：⒈从牌堆获得一张基本牌。⒉令一种基本牌于本回合内不计入手牌上限。",
			prp_zhugeliang_ab: "诸葛亮",
			prp_zhugeliang: "派对浪客",
			nsxingyun: "星陨",
			nsxingyun_info:
				"每回合限一次。你可以将一张手牌当做任意一张符合“四象天阵”的牌使用。然后若这两张牌的类型不同，则你删除此“四象天阵”并摸两张牌。当你删除“四象天阵”中的最后一个项目后，你获得技能〖八阵〗。",
			nsxingyun_faq: "四象天阵",
			nsxingyun_faq_info:
				"青龙：无标签普通锦囊牌<br>朱雀：延时锦囊牌<br>白虎：伤害类卡牌<br>玄武：【闪】/回复类卡牌",
			nshanlang: "酣浪",
			nshanlang_info:
				"准备阶段，你可以和至多三名角色拼点。然后若这些角色中有拼点牌唯一最大的角色，则你可以令该角色从牌堆中获得一张不符合“四象天阵”的牌。",

			junktaoluan: "滔乱",
			junktaoluan_backup: "滔乱",
			junktaoluan_info:
				"你可将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本局游戏你以此法使用过的牌，且每回合每种花色限一次），然后你令一名其他角色选择一项：1.交给你一张与“滔乱”声明的牌类别不同的牌；2.本回合“滔乱”失效且回合结束时你失去1点体力。",
			ns_caimao: "蔡瑁",
			nsdingzhou: "定州",
			nsdingzhou_info:
				"出牌阶段限一次，你可以选择一名区域内有牌的其他角色。你随机获得其区域内的一张牌，然后摸一张牌。若你以此法获得了两张颜色不同的牌，则你失去1点体力。",
			junkyuheng: "驭衡",
			junkyuheng_info:
				'锁定技。①回合开始时，你须弃置任意张花色不同的牌，从<span style="font-family: yuanli">东吴命运线·改</span>中随机获得等量的技能。②回合结束时，你失去所有因〖驭衡①〗获得的技能，然后摸等量的牌。',
			junkdili: "帝力",
			junkdili_info:
				"觉醒技。当你获得技能后，若你拥有的技能数大于你的体力上限，则你减1点体力上限，选择失去任意个其他技能，然后获得以下技能中的前等量个：〖圣质〗/〖权道〗/〖持纲〗。",
			junkshengzhi: "圣质",
			junkshengzhi_info: "锁定技。当你发动非锁定技后，你令你本回合使用的下一张牌无距离和次数限制。",
			junkquandao: "权道",
			junkquandao_info:
				"锁定技。当你使用【杀】或普通锦囊牌时，{若你手牌中的【杀】或普通锦囊牌的数量之差X不为0，则你弃置X张数量较多的一种牌}，然后你摸一张牌。",
			junkchigang: "持纲",
			junkchigang_info:
				"转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：阴，摸牌阶段；阳，出牌阶段。",
			junkrende: "仁德",
			junkrende_info:
				"出牌阶段限一次，你可以将任意张手牌交给其他角色。若你给出的牌多于一张，则你回复1点体力。",
			junkjizhi: "集智",
			junkjizhi_info:
				"当你使用非转化的普通锦囊牌时，你可以亮出牌堆顶的一张牌A。若A不为基本牌，则你获得A。否则你选择一项：⒈将A置入弃牌堆。⒉将一张手牌置于牌堆顶，然后获得A。",
			junkqicai: "奇才",
			junkqicai_info: "锁定技。①你使用锦囊牌无距离限制。②你装备区内的非坐骑牌不能被其他角色弃置。",
			junkwangxi: "忘隙",
			junkwangxi_info:
				"当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可以摸两张牌，然后交给其其中一张牌。",
			junkwangxi_tag: "invisible",
			junklangmie: "狼灭",
			junklangmie_info:
				"其他角色的结束阶段开始时，你可以选择一项：⒈若其本回合内使用过某种类型的牌超过一张，则你弃置一张牌并摸两张牌。⒉若其本回合累计造成过的伤害大于1，则你弃置一张牌，然后对其造成1点伤害。",
			junkshicai: "恃才",
			junkshicai_info:
				"当你使用牌结束完毕后，若此牌与你本回合使用的牌类型均不同，则你可以将此牌置于牌堆顶，然后摸一张牌。",
			junk_zhangrang: "新杀张让",
			junk_zhangrang_prefix: "新杀",
			old_bulianshi: "RE步练师",
			old_bulianshi_prefix: "RE",
			ol_maliang: "OL马良",
			ol_maliang_prefix: "OL",
			junk_lidian: "OL李典",
			junk_lidian_prefix: "OL",
			junk_duanwei: "新杀段煨",
			junk_duanwei_prefix: "新杀",
			junk_xuyou: "手杀许攸",
			junk_xuyou_prefix: "手杀",
			junk_liubei: "旧界刘备",
			junk_liubei_prefix: "旧界",
			junk_huangyueying: "旧界黄月英",
			junk_huangyueying_prefix: "旧界",
			old_majun: "骰子马钧",
			old_majun_prefix: "骰子",
			ns_mengyou: "数学孟优",
			ns_mengyou_prefix: "数学",
			ns_mengyou_ab: "孟优",
			nsmanzhi: "蛮智",
			nsmanzhi_info:
				"准备阶段或结束阶段开始时，你可以将场上出现的数字代入等式中的A和B。若此等式成立，你摸Y张牌。（等式为Y=0.5A<sup>2</sup>+2.5B-X，其中X为游戏轮数，Y为存活人数）",
			ns_chengpu: "铁索程普",
			ns_chengpu_prefix: "铁索",
			ns_chengpu_ab: "程普",
			ns_sundeng: "画饼孙登",
			ns_sundeng_prefix: "画饼",
			ns_sundeng_ab: "孙登",
			ns_duji: "画饼杜畿",
			ns_duji_prefix: "画饼",
			ns_duji_ab: "杜畿",
			junksijun: "肆军",
			junksijun_info:
				"准备阶段，若“黄”数大于牌堆的牌数，你可以移去所有“黄”，然后从牌堆中随机获得任意张点数之和为36的牌（若牌堆没有点数和为36的组合则获得牌堆顶点数和刚好超过36的牌组）。",
			junk_guanyu: "旧谋关羽",
			junk_guanyu_prefix: "旧谋",
			junk_liuyan: "OL刘焉",
			junk_liuyan_prefix: "OL",
			
			std_pengyang: "牢彭羕",
			std_pengyang_prefix: "牢",
			stdxiaofan: "嚣翻",
			stdxiaofan_info: "锁定技，当你使用牌结算结束后，你弃置你前X个区域内的牌：1.判定区 2.装备区 3.手牌区（X为你本回合使用牌的类型数）。",
			stdtuishi: "侻失",
			stdtuishi_info: "锁定技，你不能使用【无懈可击】，你使用的字母牌无效。",

			diy_noname: "无名专属",
			diy_yijiang: "设计比赛2020",
			diy_yijiang2: "设计比赛2021",
			diy_yijiang3: "设计比赛2022",
			diy_tieba: "吧友设计",
			diy_xushi: "玩点论杀·虚实篇",
			diy_default: "常规",
			diy_fakenews: "杀海流言",
			diy_trashbin: "垃圾桶",
		},
		pinyins: {
			
		},
	};
});
