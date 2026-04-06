import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "key",
		connect: true,
		connectBanned: [
			"key_yuu",
			
		],
		character: {
			key_kagari: ["female", "shen", 16, ["kagari_zongsi", "kagari_yuanyi"], ["key"]],
			key_shiki: ["female", "shen", "3/5", ["shiki_omusubi"], ["key"]],
			db_key_hina: ["female", "key", 5, ["hina_shenshi", "hina_xingzhi"], ["doublegroup:key:shen"]],
			
			sp_key_yuri: ["female", "qun", 5, ["mubing", "ziqu", "diaoling"], ["border:key"]],
			key_lucia: ["female", "key", "4/5", ["lucia_duqu", "lucia_zhenren"]],
			key_kyousuke: ["male", "key", 5, ["nk_shekong", "key_huanjie"]],
			key_yuri: ["female", "key", 5, ["yuri_xingdong", "yuri_buqu", "yuri_wangxi"], ["zhu"]],
			key_haruko: ["female", "key", 5, ["haruko_haofang", "haruko_zhuishi"]],
			key_umi: ["female", "key", 5, ["umi_chaofan", "umi_lunhui", "umi_qihuan"]],
			key_umi2: ["female", "key", 5, [], ["unseen"]],
			key_rei: ["male", "key", 5, ["xiandeng", "shulv", "xisheng"]],
			key_komari: ["female", "key", 5, ["komari_tiankou", "komari_xueshang"]],
			key_yukine: ["female", "key", 5, ["yukine_wenzhou"]],
			key_yusa: ["female", "key", 5, ["yusa_yanyi","yusa_zhumeng", "yusa_misa", "dualside"], ["dualside:key_misa"]],
			key_misa: ["female", "key", 8, ["misa_", "misa_yehuo", "misa_yusa", "dualside"], ["unseen"]],
			key_masato: ["male", "key", "4/8", ["masato_baoquan"]],
			key_iwasawa: ["female", "key", 5, ["iwasawa_yinhang", "iwasawa_mysong"]],
			key_kengo: ["male", "key", 5, ["kengo_weishang", "kengo_guidui"]],
			key_yoshino: ["male", "key", 5, ["yoshino_jueyi"]],
			key_yui: ["female", "key", 5, ["yui_jiang", "yui_lieyin", "yui_takaramono"]],
			key_tsumugi: ["female", "key", 5, ["tsumugi_mugyu", "tsumugi_huilang"]],
			key_saya: ["female", "key", 5, ["saya_shouji", "saya_powei"]],
			key_harukakanata: ["female", "key", 5, ["haruka_shuangche"]],
			key_inari: ["female", "key", 5, ["inari_baiwei", "inari_huhun"]],
			key_shiina: ["female", "key", 5, ["shiina_qingshen", "shiina_feiyan"]],
			key_sunohara: [
				"double",
				"key",
				"6/6/5",
				["sunohara_chengshuang", "sunohara_tiaoyin", "sunohara_jianren"],
			],
			key_rin: ["female", "key", 5, ["rin_baoqiu"]],
			key_sasami: ["female", "key", 5, ["sasami_miaobian"]],
			key_akane: ["female", "key", 5, ["akane_jugu", "akane_quanqing", "akane_yifu"], ["zhu"]],
			key_doruji: ["female", "key", 16, ["doruji_feiqu"]],
			key_yuiko: ["female", "key", 5, ["yuiko_fenglun", "yuiko_dilve"]],
			key_riki: ["double", "key", 5, ["riki_spwenji", "riki_nvzhuang", "riki_mengzhong"]],
			key_hisako: ["female", "key", 5, ["hisako_yinbao", "hisako_zhuanyun"]],
			key_hinata: ["male", "key", 5, ["hinata_qiulve", "hinata_ehou"]],
			key_noda: ["male", "key", 9, ["noda_fengcheng", "noda_xunxin"]],
			key_tomoya: ["male", "key", 5, ["tomoya_shangxian", "tomoya_wangjin"]],
			key_nagisa: ["female", "key", 5, ["nagisa_tiandu", "nagisa_fuxin"]],
			key_ayato: ["male", "key", 5, ["ayato_jianshen", "ayato_zonghuan"]],
			key_ao: ["female", "key", 5, ["ao_xishi", "ao_kuihun", "ao_shixin"]],
			key_yuzuru: ["male", "key", 5, ["yuzuru_wuxin", "yuzuru_deyi"]],
			sp_key_kanade: ["female", "key", 5, ["kanade_mapo", "kanade_benzhan"]],
			key_mio: ["female", "key", 5, ["mio_tuifu", "mio_tishen"]],
			key_midori: ["female", "key", 5, ["midori_nonghuan", "midori_tishen"]],
			key_kyoko: ["female", "key", 5, ["kyoko_juwu", "kyoko_zhengyi"]],
			key_shizuru: ["female", "key", 5, ["shizuru_nianli", "shizuru_benzhan"]],
			key_shiorimiyuki: ["female", "key", 5, ["shiorimiyuki_banyin", "shiorimiyuki_tingxian"]],
			key_miki: ["female", "key", 5, ["miki_shenqiang", "miki_huanmeng", "miki_zhiluo"]],
			key_shiori: ["female", "key", "2/3", ["shiori_huijuan"]],
			key_kaori: ["female", "key", "3/4", ["kaori_siyuan", "kaori_zhishi", "kaori_dongfeng"]],
			key_akiko: ["female", "key", 5, ["akiko_dongcha"]],
			key_abyusa: ["female", "key", 5, ["abyusa_jueqing", "abyusa_dunying"]],
			key_godan: ["male", "key", 7, ["godan_yuanyi", "godan_feiqu", "godan_xiaoyuan"]],
			key_yuu: ["male", "key", 5, ["yuu_lveduo"]],
			key_ryoichi: ["male", "key", 5, ["ryoichi_baoyi", "ryoichi_tuipi"]],
			key_kotori: ["female", "key", 5, ["kotori_yumo", "kotori_huazhan"]],
			key_jojiro: ["male", "key", 5, ["jojiro_shensu", "jojiro_s"]],
			key_shiroha: ["female", "key", 5, ["shiroha_yuzhao", "shiroha_guying", "shiroha_jiezhao"]],
			key_shizuku: ["female", "key", 5, ["shizuku_sizhi", "shizuku_biyi", "shizuku_sanhua"]],
			key_hiroto: ["male", "key", 5, ["hiroto_huyu", "hiroto_tuolao"]],
			key_sakuya: ["male", "key", 5, ["youlong", "luanfeng", "sakuya_junbu"]],
			key_youta: ["male", "key", 5, []],
			key_rumi: ["female", "key", "3/4", ["rumi_shuwu"]],
			key_chihaya: ["female", "key", 5, ["chihaya_liewu", "chihaya_huairou"]],
			key_yukito: ["male", "key", 5, ["yukito_kongwu", "yukito_yaxiang"]],
			key_crow: ["male", "key", 5, [], ["unseen"]],
			key_asara: ["female", "key", 5, ["asara_shelu", "asara_yingwei"]],
			key_kotomi: ["female", "key", 5, ["kotomi_qinji", "kotomi_chuanxiang", "kotomi_manyi"]],
			key_mia: ["female", "key", 5, ["mia_shihui", "mia_rujing", "mia_qianmeng"]],
			key_kano: ["female", "key", 5, ["kano_liezhen", "kano_poyu"]],
			db_key_liyingxia: [
				"female",
				"shu",
				3,
				["liyingxia_sanli", "liyingxia_zhenjun", "liyingxia_wumai"],
				["doublegroup:shu:key"],
			],
			key_erika: ["female", "key", "5/5/6", ["erika_shisong", "erika_yousheng"]],
			key_satomi: ["female", "key", 5, ["satomi_luodao", "satomi_daohai"]],
			key_iriya: ["female", "key", 5, ["iriya_yinji", "iriya_haozhi"]],
			key_fuuko: ["female", "key", 5, ["fuuko_xingdiao", "fuuko_chuanyuan"]],

			key_kud: ["female", "key", 5, ["kud_qiaoshou", "kud_buhui"]],
			key_misuzu: ["female", "key", 5, ["misuzu_hengzhou", "misuzu_nongyin", "misuzu_zhongxing"]],
			key_kamome: ["female", "key", 5, ["kamome_yangfan", "kamome_huanmeng", "kamome_jieban"]],
			key_nao: ["female", "key", 5, ["nao_duyin", "nao_wanxin", "nao_shouqing", "nao_diandeng"]],
			key_yuuki: ["female", "key", 5, ["yuuki_yicha", "yuuki_wuxin"]],
			key_kotarou: ["male", "key", 5, ["kotarou_rewrite", "kotarou_aurora"]],
			key_tenzen: ["male", "key", 5, ["tenzen_fenghuan", "tenzen_retianquan"]],
			key_kyouko: ["female", "key", 5, ["kyouko_rongzhu", "kyouko_gongmian"]],
			key_kyou: ["female", "key", 5, ["kyou_zhidian", "kyou_duanfa"]],
			key_seira: ["female", "key", 5, ["seira_xinghui", "seira_yuanying"]],
			key_kiyu: ["female", "key", 5, ["kiyu_yuling", "kiyu_rexianyu"]],
			key_tomoyo: ["female", "key", 5, ["jingyu", "tomoyo_wuwei", "tomoyo_changshi"]],
			key_minagi: ["female", "key", 5, ["minagi_peiquan", "minagi_huanliu", "minagi_xiji"]],
			key_michiru: ["female", "key", 5, ["michiru_sheyuan", "michiru_huzhu"]],
			
		},
		characterFilter: {
			key_jojiro(mode) {
				return mode == "chess" || mode == "tafang";
			},
			key_yuu(mode) {
				return (
					mode == "identity" ||
					mode == "doudizhu" ||
					mode == "single" ||
					(mode == "versus" && _status.mode != "standard" && _status.mode != "three")
				);
			},
			key_tomoya(mode) {
				return mode != "chess" && mode != "tafang" && mode != "stone";
			},
			key_sunohara(mode) {
				return mode != "guozhan";
			},
		},
		characterSort: {
			key: {
				key_one: ["key_rumi"],
				key_kanon: ["key_shiori", "key_kaori", "key_akiko"],
				key_air: ["key_haruko", "key_yukito", "key_crow", "key_kano", "key_misuzu", "key_minagi", "key_michiru"],
				key_clannad: ["key_yukine", "key_sunohara", "key_tomoya", "key_nagisa", "key_kotomi", "key_fuuko", "key_kyou", "key_tomoyo"],
				key_littlebusters: ["key_kyousuke", "key_komari", "key_masato", "key_kengo", "key_saya", "key_harukakanata", "key_rin", "key_sasami", "key_doruji", "key_yuiko", "key_riki", "key_mio", "key_midori", "key_kud", "key_yuuki"],
				key_rewrite: ["key_lucia", "key_akane", "key_shizuru", "key_kotori", "key_sakuya", "key_chihaya", "key_asara", "key_kagari", "key_kotarou"],
				key_angelbeats: ["sp_key_yuri", "key_yuri", "key_iwasawa", "key_yoshino", "key_yui", "key_shiina", "key_hisako", "key_hinata", "key_noda", "key_ayato", "key_yuzuru", "sp_key_kanade", "key_shiorimiyuki", "key_abyusa", "key_godan"],
				key_charlotte: ["key_yusa", "key_misa", "key_yuu", "key_jojiro", "key_nao"],
				key_harmonia: ["key_rei"],
				key_summerpockets: ["key_umi", "key_umi2", "key_tsumugi", "key_inari", "key_ao", "key_kyoko", "key_miki", "key_ryoichi", "key_shiroha", "key_shizuku", "key_shiki", "key_kamome", "key_tenzen"],
				key_kamisamaninattahi: ["key_hiroto", "key_youta", "db_key_hina", "key_kyouko"],
				key_loopers: ["key_mia"],
				key_lunaria: ["key_iriya", "key_kiyu"],
				key_heavenburnsred: ["db_key_liyingxia", "key_erika", "key_satomi", "key_seira"],
			},
		},
		characterIntro: {
			
		},
		characterTitle: {
			key_satomi: "#rHeaven Burns Red",
			key_erika: "#rHeaven Burns Red",
			db_key_liyingxia: "#rHeaven Burns Red",
			key_kano: "#bAIR",
			key_mia: "#bLoopers",
			key_kotomi: "#gClannad",
			key_asara: "#bRewrite",
			key_yukito: "#bAIR",
			key_chihaya: "#bRewrite",
			key_rumi: "#rONE ~輝く季節へ~",
			key_youta: "#b神様になった日",
			key_sakuya: "#bRewrite",
			key_hiroto: "#b神様になった日",
			key_shizuku: "#bSummer Pockets",
			key_shiroha: "#bSummer Pockets",
			key_jojiro: "#bCharlotte<br>战棋专属角色",
			key_kotori: "#bRewrite",
			key_ryoichi: "#bSummer Pockets",
			key_yuu: "#bCharlotte",
			key_godan: "#rAngel Beats!",
			key_abyusa: "#rAngel Beats!",
			key_akiko: "#bKanon",
			key_kaori: "#bKanon",
			key_shiori: "#bKanon",
			key_miki: "#bSummer Pockets",
			key_shiorimiyuki: "#rAngel Beats!",
			key_shizuru: "#bRewrite",
			key_kyoko: "#bSummer Pockets",
			sp_key_kanade: "#rAngel Beats!",
			key_yuzuru: "#rAngel Beats!",
			key_tsumugi: "#bSummer Pockets",
			key_ayato: "#rAngel Beats!",
			key_nagisa: "#gClannad",
			key_tomoya: "#gClannad",
			key_noda: "#rAngel Beats!",
			key_hinata: "#rAngel Beats!",
			key_hisako: "#rAngel Beats!",
			key_doruji: "#bLittle Busters!",
			key_riki: "#bLittle Busters!",
			key_yuiko: "#bLittle Busters!",
			key_akane: "#bRewrite",
			key_sasami: "#bLittle Busters!",
			key_rin: "#bLittle Busters!",
			key_shiina: "#rAngel Beats!",
			key_inari: "#bSummer Pockets",
			key_saya: "#bLittle Busters!",
			key_harukakanata: "#bLittle Busters!",
			key_yui: "#rAngel Beats!",
			key_yoshino: "#bRewrite",
			key_kengo: "#bLittle Busters!",
			key_iwasawa: "#rAngel Beats!",
			key_masato: "#bLittle Busters!",
			key_yusa: "#bCharlotte",
			key_misa: "#rCharlotte",
			key_yukine: "#gClannad",
			key_komari: "#bLittle Busters!",
			key_umi: "#bSummer Pockets",
			key_rei: "#gHarmonia",
			key_lucia: "#bRewrite",
			key_kyousuke: "#bLittle Busters!",
			key_yuri: "#rAngel Beats!",
			key_haruko: "#bAIR",
			sp_key_yuri: "#bAngel Beats!",
			key_fuuko: "#gClannad",

			key_kud: "#b千夜",
			key_misuzu: "#b长发及腰黑长直",
			key_kamome: "#b仿生纱",
			key_nao: "#b潮鸣",
			key_kyou: "#b长发及腰黑长直",
			key_yuuki: "#b4399司命",
			key_kyouko: "#b阿阿阿687",
			key_tenzen: "#b皋耳击",
			key_kotarou: "#bb1154486224",
			key_seira: "#b阿开木木W🍀",
			key_kiyu: "#b无面◎隐者",
			key_tomoyo: "#b长发及腰黑长直",
			key_minagi: "#b无面◎隐者",

		},
		card: {
			kano_paibingbuzhen: {
				fullskin: true,
				type: "trick",
				enable: true,
				filterTarget: true,
				selectTarget: [1, 3],
				derivation: "key_kano",
				content() {
					"step 0";
					target.draw();
					"step 1";
					var hs = target.getCards("he");
					if (!hs.length) event.finish();
					else if (hs.length == 1) event._result = { bool: true, cards: hs };
					else target.chooseCard("he", true, "选择一张牌置入仁库");
					"step 2";
					if (result.bool) {
						var card = result.cards[0];
						target.$throw(card, 1000);
						target.lose(card, "toRenku");
					}
				},
				contentAfter() {
					if (
						player.isIn() &&
						_status.renku.length &&
						(function () {
							var cards = _status.renku;
							if (cards.length == 1) return true;
							var color = get.color(cards[0], false),
								type = get.type(cards[0], false);
							for (var i = 1; i < cards.length; i++) {
								if (color && get.color(cards[i], false) != color) color = false;
								if (type && get.type(cards[i], false) != type) type = false;
								if (!color && !type) return false;
							}
							return true;
						})()
					)
						player.draw();
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							if (player.hasSkill("kano_poyu")) return 2;
							return 0;
						},
						target: 0.1,
					},
				},
			},
			kamome_suitcase: {
				fullskin: true,
				type: "equip",
				subtype: "equip5",
				derivation: "key_kamome",
				skills: ["kamome_suitcase"],
				ai: {
					equipValue(card) {
						return 7;
					},
					basic: {
						equipValue: 7,
					},
				},
			},
			miki_hydrogladiator: {
				fullskin: true,
				type: "equip",
				subtype: "equip1",
				derivation: "key_miki",
				skills: ["miki_hydrogladiator_skill"],
				distance: {
					attackFrom: -5,
				},
				ai: {
					equipValue(card) {
						return 7;
					},
					basic: {
						equipValue: 7,
					},
				},
			},
			miki_binoculars: {
				fullskin: true,
				type: "equip",
				subtype: "equip5",
				derivation: "key_miki",
				skills: ["miki_binoculars"],
				ai: {
					equipValue(card) {
						return 7;
					},
					basic: {
						equipValue: 7,
					},
				},
			},
		},
		perfectPair: {
			key_riki: ["key_rin", "key_saya", "key_kyousuke", "key_kud"],
			key_kud: ["key_harukakanata"],
			key_komari: ["key_rin", "key_sasami"],
			key_masato: ["key_kengo"],
			key_yuiko: ["key_harukakanata"],
			key_doruji: ["key_rin"],
			key_tomoya: ["key_nagisa", "key_sunohara", "key_kotomi"],
			key_ao: ["key_inari"],
			key_shiroha: ["key_umi"],
			key_shizuku: ["key_tsumugi"],
			key_yuzuru: ["key_hinata", "key_kanade", "key_ayato"],
			key_yuri: ["key_kanade", "key_abyusa"],
			key_hinata: ["key_yui"],
			key_iwasawa: ["key_hisako"],
			key_yuu: ["key_nao"],
			key_jojiro: ["key_yusa"],
			key_kaori: ["key_shiori"],
			key_chihaya: ["key_sakuya"],
			key_lucia: ["key_shizuru"],
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			kagari_zongsi: {
				enable: "phaseUse",
				usable: 1,
				content() {
					"step 0";
					player.getUseValue({ name: "mtg_cangbaohaiwan" });
					var controls = [];
					if (ui.cardPile.hasChildNodes()) controls.push("选择牌堆中的一张牌");
					if (ui.discardPile.hasChildNodes()) controls.push("选择弃牌堆中的一张牌");
					if (
						game.hasPlayer(function (current) {
							return current.countCards("hej") > 0;
						})
					)
						controls.push("选择一名角色区域内的一张牌");
					if (!controls.length) {
						event.finish();
						return;
					}
					event.controls = controls;
					var next = player.chooseControl();
					next.set("choiceList", controls);
					next.set("prompt", "请选择要移动的卡牌的来源");
					next.ai = function () {
						return 0;
					};
					"step 1";
					result.control = event.controls[result.index];
					var list = ["弃牌堆", "牌堆", "角色"];
					for (var i = 0; i < list.length; i++) {
						if (result.control.indexOf(list[i]) != -1) {
							event.index = i;
							break;
						}
					}
					if (event.index == 2) {
						player.chooseTarget(
							"请选择要移动的卡牌的来源",
							true,
							function (card, kagari, target) {
								return target.countCards("hej") > 0;
							}
						);
					} else {
						var source = ui[event.index == 0 ? "discardPile" : "cardPile"].childNodes;
						var list = [];
						for (var i = 0; i < source.length; i++) list.push(source[i]);
						if (event.index == 0) list.reverse();
						player.chooseButton(["请选择要移动的卡牌", list], true).ai = get.buttonValue;
					}
					"step 2";
					if (event.index == 2) {
						player.line(result.targets[0]);
						event.target1 = result.targets[0];
						player.choosePlayerCard(result.targets[0], true, "hej").set("visible", true);
					} else {
						event.card = result.links[0];
					}
					"step 3";
					if (event.index == 2) event.card = result.cards[0];
					var controls = [
						"将这张牌移动到牌堆的顶部或者底部",
						"将这张牌移动到弃牌堆的顶部或者底部",
						"将这张牌移动到一名角色对应的区域里",
					];
					event.controls = controls;
					var next = player.chooseControl();
					next.set("prompt", "要对" + get.translation(event.card) + "做什么呢？");
					next.set("choiceList", controls);
					next.ai = function () {
						return 2;
					};
					"step 4";
					result.control = event.controls[result.index];
					var list = ["弃牌堆", "牌堆", "角色"];
					for (var i = 0; i < list.length; i++) {
						if (result.control.indexOf(list[i]) != -1) {
							event.index2 = i;
							break;
						}
					}
					if (event.index2 == 2) {
						player.chooseTarget(
							"要将" + get.translation(card) + "移动到哪一名角色的对应区域呢",
							true
						).ai = function (target) {
							return target == _status.event.player ? 1 : 0;
						};
					} else {
						player
							.chooseControl("顶部", "底部")
							.set(
								"prompt",
								"把" +
								get.translation(card) +
								"移动到" +
								(event.index2 == 0 ? "弃" : "") +
								"牌堆的..."
							);
					}
					"step 5";
					if (event.index2 != 2) {
						//if(event.target1) event.target1.lose(card,ui.special);
						//else card.goto(ui.special);
						event.way = result.control;
					} else {
						event.target2 = result.targets[0];
						var list = ["手牌区"];
						if (lib.card[card.name].type == "equip" && event.target2.canEquip(card))
							list.push("装备区");
						if (
							lib.card[card.name].type == "delay" &&
							!event.target2.isDisabledJudge() &&
							!event.target2.hasJudge(card.name)
						)
							list.push("判定区");
						if (list.length == 1) event._result = { control: list[0] };
						else {
							player
								.chooseControl(list)
								.set(
									"prompt",
									"把" +
									get.translation(card) +
									"移动到" +
									get.translation(event.target2) +
									"的..."
								).ai = function () {
									return 0;
								};
						}
					}
					"step 6";
					if (event.index2 != 2) {
						var node = ui[event.index2 == 0 ? "discardPile" : "cardPile"];
						if (event.target1) {
							var next = event.target1.lose(card, event.position);
							if (event.way == "顶部") next.insert_card = true;
						} else {
							if (event.way == "底部") node.appendChild(card);
							else node.insertBefore(card, node.firstChild);
						}
						game.updateRoundNumber();
						event.finish();
					} else {
						if (result.control == "手牌区") {
							var next = event.target2.gain(card);
							if (event.target1) {
								next.source = event.target1;
								next.animate = "giveAuto";
							} else next.animate = "draw";
						} else if (result.control == "装备区") {
							if (event.target1) event.target1.$give(card, event.target2);
							event.target2.equip(card);
						} else {
							if (event.target1) event.target1.$give(card, event.target2);
							event.target2.addJudge(card);
						}
					}
					"step 7";
					game.updateRoundNumber();
				},
				ai: {
					order: 10,
					result: { player: 1 },
				},
			},
			kagari_yuanyi: {
				trigger: { player: ["phaseBegin", "phaseEnd"] },
				forced: true,
				content() {
					"step 0";
					var num = game.roundNumber;
					if (num && typeof num == "number") player.draw(Math.min(9, num));
					if (num && typeof num == "number") player.recover(Math.min(9, num));
					"step 1";
                    player.addSkill("kotarou_rewrite_damage");
				},
			},
			shiki_omusubi: {
				audio: 2,
				trigger: { global: "roundStart" },
				direct: true,
				content() {
					"step 0";
					player
						.chooseTarget(get.prompt2("shiki_omusubi"), lib.filter.notMe)
						.set("ai", function (target) {
							var player = _status.event.player;
							if (player.isHealthy()) return 0;
							if (player.hp < 3 && player.getDamagedHp() < 2) return 0;
							var list = [];
							if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
							if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
							if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
							list = list.filter(function (i) {
								return !player.hasSkill(i);
							});
							if (!list.length) return 0;
							return 1 + Math.random();
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("shiki_omusubi", target);
						player.loseMaxHp();
						var list = [];
						if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
						if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
						if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
						player.addSkills(list);
						game.broadcastAll(function (list) {
							lib.character.key_shiki[3].addArray(list);
							game.expandSkills(list);
							for (var i of list) {
								var info = lib.skill[i];
								if (!info) continue;
								if (!info.audioname2) info.audioname2 = {};
								info.audioname2.key_shiki = "shiki_omusubi";
							}
						}, list);
					}
				},
			},
			hina_shenshi: {
				groupSkill: true,
				trigger: { player: ["phaseUseBegin", "phaseUseEnd"] },
				frequent: true,
				filter(event, player) {
					return player.group == "key";
				},
				content() {
					"step 0";
					player.draw(4).gaintag = ["hina_shenshi"];
					player.addSkill("hina_shenshi_yingbian");
					"step 1";
					var cards = player.getCards("h", function (card) {
						return card.hasGaintag("hina_shenshi");
					});
					if (!cards.length) event.finish();
					else if (cards.length == 1) event._result = { bool: true, cards: cards };
					else
						player.chooseCard("h", true, "将一张“神视”牌置于牌堆顶", function (card) {
							return card.hasGaintag("hina_shenshi");
						});
					"step 2";
					if (result.bool) {
						game.log(player, "将一张牌置于了牌堆顶");
						player.lose(result.cards, ui.cardPile, "insert");
						player.$throw(1, 1000);
					} else event.finish();
					"step 3";
					game.delayx();
				},
				onremove(player) {
					player.removeGaintag("hina_shenshi");
				},
				group: "hina_shenshi_yingbian",
			},
			hina_shenshi_yingbian: {
				trigger: { player: "yingbian" },
				forced: true,
				filter: (event, player) =>
					event.card.isCard &&
					player.hasHistory(
						"lose",
						(evt) =>
							evt.getParent() == event &&
							Object.values(evt.gaintag_map).some((value) => value.includes("hina_shenshi"))
					),
				content: () => {
					if (!Array.isArray(trigger.temporaryYingbian)) trigger.temporaryYingbian = [];
					trigger.temporaryYingbian.add("force");
					trigger.temporaryYingbian.addArray(get.yingbianEffects());
				},
			},
			hina_xingzhi: {
				groupSkill: true,
				trigger: { player: "yingbian" },
				usable: 1,
				filter: (event, player) =>
					player.group == "key" &&
					!event.card.yingbian &&
					lib.yingbian.condition.complex.has("zhuzhan"),
				content: () => {
					"step 0";
					trigger.yingbianZhuzhanAI = (player, card, source, targets) => (cardx) => {
						if (get.attitude(player, source) <= 0) return 0;
						var info = get.info(card),
							num = 0;
						if (info && info.ai && info.ai.yingbian) {
							var ai = info.ai.yingbian(card, source, targets, player);
							if (ai) num = ai;
						}
						return Math.max(num, 6) - get.value(cardx);
					};
					trigger.afterYingbianZhuzhan = (event) => event.zhuzhanresult.draw(2);
					lib.yingbian.condition.complex.get("zhuzhan")(trigger);
					"step 1";
					if (!result.bool) return;
					trigger.card.yingbian = true;
					lib.yingbian.effect.forEach((value) => game.yingbianEffect(trigger, value));
					player.addTempSkill("yingbian_changeTarget");
				},
			},
			//伊吹风子
			fuuko_xingdiao: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				filter: (event) => {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content() {
					"step 0";
					player.draw(8);
					"step 1";
					var hs = player.getCards("h");
					if (hs.length > 0) player.addShownCards(hs, "visible_fuuko_xingdiao");
				},
				mod: {
					ignoredHandcard(card) {
						if (card.hasGaintag("visible_fuuko_xingdiao")) {
							return true;
						}
					},
					cardDiscardable(card, player, name) {
						if (name == "phaseDiscard" && card.hasGaintag("visible_fuuko_xingdiao")) {
							return false;
						}
					},
				},
				onremove: true,
				global: "fuuko_xingdiao_gain",
				subSkill: {
					gain: {
						enable: "phaseUse",
						filter: (event, player) => {
							return game.hasPlayer((current) =>
								lib.skill.fuuko_xingdiao_gain.filterTarget(null, player, current)
							);
						},
						filterTarget: (card, player, target) => {
							return (
								target != player &&
								target.hasCard((card) => card.hasGaintag("visible_fuuko_xingdiao"), "h") &&
								!target.getStorage("fuuko_xingdiao").includes(player) &&
								target.hasSkill("fuuko_xingdiao")
							);
						},
						selectTarget: () => {
							const num = game.countPlayer((current) =>
								lib.skill.fuuko_xingdiao_gain.filterTarget(
									null,
									_status.event.player,
									current
								)
							);
							return num > 1 ? 1 : -1;
						},
						content() {
							"step 0";
							target.markAuto("fuuko_xingdiao", [player]);
							var cards = target.getCards("h", (card) =>
								card.hasGaintag("visible_fuuko_xingdiao")
							);
							if (!cards.length) event.finish();
							else if (cards.length == 1) event._result = { bool: true, links: cards };
							else
								player.chooseButton(true, [
									"选择获得" + get.translation(target) + "的一张“星”",
									cards,
								]);
							"step 1";
							if (result.bool) {
								player.gain(result.links, target, "give");
								target.draw(8);
							}
						},
						ai: {
							order: 6,
							result: {
								target: 1,
							},
						},
					},
				},
			},
			fuuko_chuanyuan: {
				trigger: {
					player: "loseAfter",
					global: [
						"gainAfter",
						"equipAfter",
						"addJudgeAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				forced: true,
				filter(event, player) {
					const evt = event.getl(player);
					if (!evt.hs.length) return false;
					for (let i in evt.gaintag_map) {
						if (evt.gaintag_map[i].includes("visible_fuuko_xingdiao")) return true;
					}
					return false;
				},
				content() {
					var evt = trigger.getl(player),
						gains = [],
						draws = 4;
					var map = evt.gaintag_map;
					var cards = evt.hs.filter((card) => {
						return map[card.cardid] && map[card.cardid].includes("visible_fuuko_xingdiao");
					});
					cards.forEach((card) => {
						var suit = get.suit(card, player),
							num = get.number(card, player);
						var card2 = get.cardPile2(function (card) {
							if (gains.includes(card)) return false;
							return get.suit(card, player) == suit && get.number(card, player) == num;
						});
						if (card2) gains.push(card2);
						else draws++;
					});
					if (gains.length) player.gain(gains, "gain2").gaintag.add("fuuko_chuanyuan");
					if (draws) player.draw(draws).gaintag = ["fuuko_chuanyuan"];
					player.addSkill("fuuko_chuanyuan_effect");
					player.recover(2);
				},
				subSkill: {
					effect: {
						mod: {
							targetInRange(card) {
								if (!card.cards || !card.cards.length) return;
								for (var i of card.cards) {
									if (!i.hasGaintag("fuuko_chuanyuan")) return;
								}
								return true;
							},
							cardUsable(card) {
								if (!card.cards || !card.cards.length) return;
								for (var i of card.cards) {
									if (!i.hasGaintag("fuuko_chuanyuan")) return;
								}
								return Infinity;
							},
						},
						charlotte: true,
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						firstDo: true,
						filter(event, player) {
							if (event.addCount === false) return false;
							return player.hasHistory("lose", (evt) => {
								if (evt.getParent() != event) return false;
								for (let i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("fuuko_chuanyuan")) return true;
								}
							});
							//return false;
						},
						content() {
							trigger.addCount = false;
							player.getStat("card")[trigger.card.name]--;
						},
					},
				},
			},
			//伊莉雅
			iriya_yinji: {
				trigger: { player: "phaseUseBegin" },
				forced: true,
				filter(event, player) {
					return player.countCards("h") < 17;
				},
				content() {
					player.draw(17).gaintag = ["iriya_yinji_tag"];
					player.addSkill("iriya_yinji_tag");
				},
				subSkill: {
					tag: {
						charlotte: true,
						mod: {
							cardEnabled(card) {
								if (get.itemtype(card) == "card") {
									if (card.hasGaintag("iriya_yinji_tag")) return false;
								} else if (card.isCard && card.cards) {
									if (card.cards.some((card) => card.hasGaintag("iriya_yinji_tag")))
										return false;
								}
							},
							aiValue(player, card, num) {
								if (get.itemtype(card) == "card" && card.hasGaintag("iriya_yinji_tag"))
									return num / 10000;
							},
							aiUseful(player, card, num) {
								if (get.itemtype(card) == "card" && card.hasGaintag("iriya_yinji_tag"))
									return num / 10000;
							},
						},
					},
				},
			},
			iriya_haozhi: {
				enable: "phaseUse",
				filterCard: true,
				selectCard: [2, Infinity],
				promptfunc: () =>
					"出牌阶段，你可以按照斗地主牌型弃置至少两张牌，且其他角色可以依次对其进行一轮响应。最后一名进行响应的角色可以根据对应牌型执行对应效果。",
				position: "he",
				getType(cards, player) {
					var nums = cards
							.map((card) => {
								var num = get.number(card, player);
								if (num <= 2) return num + 13;
								return num;
							})
							.sort((a, b) => a - b),
						len = nums.length;
					if (len == 1) return ["单张", nums[0], 1];
					if (len == 2) return nums[1] == nums[0] ? ["对子", nums[0], 1] : null;
					var map = {};
					for (var i = 0; i < len; i++) {
						var count = get.numOf(nums, nums[i]);
						if (!map[count]) map[count] = [];
						map[count].push(nums[i]);
						i += count - 1;
					}
					if (len == 3) {
						if (map[3]) return ["三张", nums[0], 1];
						return null;
					}
					if (map[len]) {
						return ["炸弹", nums[0], length];
					}
					if (map[1]) {
						if (map[1].length == len && len > 4) {
							for (var i = 0; i < map[1].length - 1; i++) {
								if (map[1][i + 1] - map[1][i] != 1) return null;
								if (map[1][i + 1] == 15) return null;
							}
							return ["单顺", nums[0], len];
						} else if (map[1].length == 2 && map[4] && len == 6) {
							return ["四带二", map[4][0], 1];
						} else if (map[3] && map[1].length == map[3].length && len == map[1].length * 4) {
							if (map[3].length == 1) return ["三带一", map[3][0], 1];
							for (var i = 0; i < map[3].length - 1; i++) {
								if (map[3][i + 1] - map[3][i] != 1) return null;
							}
							return ["单带飞机", map[3][0], map[3].length];
						}
						return null;
					}
					if (map[2]) {
						if (map[2].length * 2 == len && len > 5) {
							for (var i = 0; i < map[2].length - 1; i++) {
								if (map[2][i + 1] - map[2][i] != 1) return null;
								if (map[2][i + 1] == 15) return null;
							}
							return ["双顺", nums[0], len];
						} else if (map[4] && len == 6) {
							return ["四带二", map[4][0], 1];
						} else if (map[3] && map[2].length == map[3].length && len == map[2].length * 5) {
							if (map[3].length == 1) return ["三带二", map[3][0], 1];
							for (var i = 0; i < map[3].length - 1; i++) {
								if (map[3][i + 1] - map[3][i] != 1) return null;
								if (map[3][i + 1] == 15) return null;
							}
							return ["双带飞机", map[3][0], map[3].length];
						}
						return null;
					}
					if (map[3]) {
						if (map[3].length * 3 == len && len > 5) {
							for (var i = 0; i < map[3].length - 1; i++) {
								if (map[3][i + 1] - map[3][i] != 1) return null;
								if (map[3][i + 1] == 15) return null;
							}
							return ["三顺", nums[0], len];
						}
						return null;
					}
					return null;
				},
				filterOk() {
					return Array.isArray(
						lib.skill.iriya_haozhi.getType(ui.selected.cards, _status.event.player)
					);
				},
				check(card) {
					var player = _status.event.player;
					//收益都一样 多一牌不如少一牌
					var types = ["炸弹", "三顺", "单顺", "双顺", "三张", "对子"];
					var getNum = function (card, player) {
							var num = get.number(card, player);
							if (num <= 2) return num + 13;
							return num;
						},
						hasEnemy = game.hasPlayer((current) => get.attitude(player, current) < 0);
					//所有手牌
					var nums = player
						.getCards("he", function (card) {
							return lib.filter.cardDiscardable(card, player);
						})
						.map((card) => getNum(card, player));
					var numu = ui.selected.cards.map((card) => getNum(card, player));
					var num = getNum(card, player);
					if (!_status.event._iriya_haozhi_type) {
						for (var type of types) {
							switch (type) {
								case "炸弹":
									if (!hasEnemy) break;
									for (var i of nums) {
										if (get.numOf(nums, i) >= 4) {
											_status.event._iriya_haozhi_type = "炸弹";
											break;
										}
									}
									break;
								case "三顺":
									if (!hasEnemy) break;
									for (var i of nums) {
										if (
											i < 14 &&
											get.numOf(nums, i) >= 3 &&
											get.numOf(nums, i + 1) >= 3
										) {
											_status.event._iriya_haozhi_type = "三顺";
											break;
										}
									}
									break;
								case "双顺":
									if (!hasEnemy) break;
									for (var i of nums) {
										if (i < 13 && get.numOf(nums, i) >= 2) {
											for (var j = 1; j < 3; j++) {
												if (get.numOf(nums, i + j) < 2) break;
												if (j == 2) _status.event._iriya_haozhi_type = "双顺";
											}
										}
									}
									break;
								case "单顺":
									if (!hasEnemy) break;
									for (var i of nums) {
										if (i < 11) {
											for (var j = 1; j < 5; j++) {
												if (!nums.includes(i + j)) break;
												if (j == 4) _status.event._iriya_haozhi_type = "单顺";
											}
										}
									}
									break;
								case "三张":
									if (!hasEnemy) break;
									for (var i of nums) {
										if (get.numOf(nums, i) >= 3) {
											_status.event._iriya_haozhi_type = "三张";
											break;
										}
									}
									break;
								case "对子":
									for (var i of nums) {
										if (get.numOf(nums, i) >= 2) {
											_status.event._iriya_haozhi_type = "对子";
											break;
										}
									}
									break;
							}
							if (_status.event._iriya_haozhi_type) break;
						}
						if (!_status.event._iriya_haozhi_type) _status.event._iriya_haozhi_type = "要不起";
					}
					if (_status.event._iriya_haozhi_type == "要不起") return 0;
					//复用响应AI
					if (!ui.selected.cards.length) {
						var count = get.numOf(nums, num);
						switch (_status.event._iriya_haozhi_type) {
							case "炸弹":
								if (count >= 4) return 15;
								break;
							case "对子":
								if (
									count > 1 &&
									player.hasCard(function (cardx) {
										return (
											cardx != card &&
											getNum(cardx, player) == num &&
											cardx.hasGaintag("iriya_yinji_tag")
										);
									}, "he")
								)
									return 4 - get.value(card);
								break;
							case "三张":
								if (count > 2) return 8 - get.value(card);
								break;
							case "单顺":
								if (num > 10) return 0;
								for (var i = 1; i < 5; i++) {
									if (get.numOf(nums, num + i) < 1) return 0;
								}
								return 9 - get.value(card);
							case "双顺":
								if (count < 2 || num > 12) return 0;
								for (var i = 1; i < 3; i++) {
									if (get.numOf(nums, num + i) < 2) return 0;
								}
								return 9 - get.value(card);
							case "三顺":
								if (count < 3 || num > 13) return 0;
								for (var i = 1; i < 2; i++) {
									if (get.numOf(nums, num + i) < 2) return 0;
								}
								return 12 - get.value(card);
						}
						return 0;
					} else {
						switch (_status.event._iriya_haozhi_type) {
							case "炸弹":
								if (numu.length >= 4) return 0;
								if (num == numu[0]) return 15;
								return 0;
							case "对子":
								if (numu.length >= 2) return 0;
								if (num == numu[0]) return 3 - get.value(card);
								return 0;
							case "三张":
								if (numu.length >= 3) return 0;
								if (num == numu[0]) return 9 - get.value(card);
								return 0;
							case "单顺":
							case "双顺":
							case "三顺":
								var map = {
										单顺: [5, 0],
										双顺: [3, 1],
										三顺: [2, 2],
									},
									len = map[_status.event._iriya_haozhi_type][0],
									addNum = map[_status.event._iriya_haozhi_type][1];
								if (numu.length >= len) return 0;
								var numt = numu[numu.length - 1] + (numu.length % (1 + addNum) == 0 ? 1 : 0);
								if (num == numt) return 10 + addNum - get.value(card);
								return 0;
						}
					}
				},
				//响应AI
				respondAI(card) {
					if (!_status.event.goon) return 0;
					var type = _status.event.type,
						player = _status.event.player;
					var getNum = function (card, player) {
							var num = get.number(card, player);
							if (num <= 2) return num + 13;
							return num;
						},
						nums = player
							.getCards("he", function (card) {
								return lib.filter.cardDiscardable(card, player, "iriya_haozhi");
							})
							.map((card) => getNum(card, player));
					var num = getNum(card, player);
					if (!ui.selected.cards.length) {
						var count = get.numOf(nums, num);
						if (count >= 4 && (type[0] != "炸弹" || num > type[1] || count > type[2])) return 15;
						switch (type[0]) {
							case "对子":
								if (count > 1 && num > type[1]) return 8 - get.value(card);
								break;
							case "三张":
							case "三带一":
							case "三带二":
								if (count > 2 && num > type[1]) return 9 - get.value(card);
								break;
							case "单顺":
								if (num <= type[1] || num > 15 - type[2]) return 0;
								for (var i = 1; i < type[2]; i++) {
									if (get.numOf(nums, num + i) < 1) return 0;
								}
								return 10 - get.value(card);
							case "双顺":
								if (num <= type[1] || count < 2 || num > 15 - type[2] / 2) return 0;
								for (var i = 1; i < type[2] / 2; i++) {
									if (get.numOf(nums, num + i) < 2) return 0;
								}
								return 11 - get.value(card);
							case "三顺":
							case "单带飞机":
							case "双带飞机":
								var size = 3 + ["三顺", "单带飞机", "双带飞机"].indexOf(type[0]);
								if (num <= type[1] || count < 3 || num > 15 - type[2] / size) return 0;
								for (var i = 1; i < type[2] / size; i++) {
									if (get.numOf(nums, num + i) < 2) return 0;
								}
								return 12 - get.value(card);
						}
						return 0;
					} else {
						var numu = ui.selected.cards.map((card) => getNum(card, player));
						var numx = numu[0];
						if (num == numx) {
							var count = get.numOf(nums, numx);
							if (
								count >= 4 &&
								(type[0] != "炸弹" || num > type[1] || count > type[2]) &&
								numu.length < (type[0] == "炸弹" ? type2 : 4)
							)
								return 15;
						}
						switch (type[0]) {
							case "对子":
								if (numu.length >= 2) return 0;
								if (num == numu[0]) return 8 - get.value(card);
								return 0;
							case "三张":
								if (numu.length >= 3) return 0;
								if (num == numu[0]) return 9 - get.value(card);
								return 0;
							case "三带一":
								if (numu.length == 3 || num == numu[0]) return 9 - get.value(card);
								return 0;
							case "三带二":
								if (numu.length >= 5) return false;
								if (numu.length == 3) {
									if (num == numu[0] || get.numOf(nums, num) < 2) return 0;
								} else if (numu.length == 4) {
									return num == numu[3] ? 9 - get.value(card) : 0;
								}
								if (num == numu[0]) return 9 - get.value(card);
								return 0;
							case "单顺":
							case "双顺":
							case "三顺":
								if (numu.length >= type[2]) return 0;
								var addNum = ["单顺", "双顺", "三顺"].indexOf(type[0]);
								var numt = numu[numu.length - 1] + (numu.length % (1 + addNum) == 0 ? 1 : 0);
								if (num == numt) return 10 + addNum - get.value(card);
								return 0;
							case "单带飞机":
								if (numu.length >= type[2]) return 0;
								var len = (type[2] / 4) * 3;
								if (numu.length < len) {
									var numt = numu[numu.length - 1] + (numu.length % 3 == 0 ? 1 : 0);
									if (num == numt) return 12 - get.value(card);
								} else {
									if (num >= numu[0] || num <= numu[len - 1]) return 0;
									return 12 - get.value(card);
								}
								return 0;
							case "双带飞机":
								if (numu.length >= type[2]) return 0;
								var len = (type[2] / 5) * 3;
								if (numu.length < len) {
									var numt = numu[numu.length - 1] + (numu.length % 3 == 0 ? 1 : 0);
									if (num == numt) return 12 - get.value(card);
								} else {
									if ((numu.length - len) % 2 == 0) {
										if (numu.includes(num) || get.numOf(nums, num) < 2) return 0;
										return 12 - get.value(card);
									} else {
										return num == numu[numu.length - 1] ? 12 - get.value(card) : 0;
									}
								}
								return 0;
						}
					}
				},
				content() {
					"step 0";
					var players = game.filterPlayer().sortBySeat(player.getNext());
					event.players = players;
					event.current = player;
					event.current_type = lib.skill.iriya_haozhi.getType(cards, player);
					event.current_cards = cards.slice(0);
					if (!event.current_type) event.finish();
					"step 1";
					var target = event.players.shift();
					if (
						(target != player || event.current != player) &&
						target.isIn() &&
						target.countCards("h") >= Math.min(cards.length, 4)
					) {
						event.target = target;
						target.addTempSkill("iriya_haozhi_temp", {
							global: ["discardBefore", "chooseToDiscardEnd", "phaseAfter"],
						});
						var trans = get.translation(event.current);
						var cardsn = (function (cards, player) {
							var getn = (card, player) => {
								var num = get.number(card, player);
								if (num <= 2) return num + 13;
								return num;
							};
							cards.sort(function (a, b) {
								var numa = getn(a, player),
									numb = getn(b, player);
								if (numa != numb) return numa - numb;
								return lib.suit.indexOf(get.suit(a, player) - get.suit(b, player));
							});
							var str = "";
							for (var i of cards) {
								str += ",";
								str += get.strNumber(get.number(i, player));
								str += get.translation(get.suit(i, player));
							}
							return str.slice(1);
						})(event.current_cards, event.current);
						var next = target.chooseToDiscard(
							"是否响应" + trans + "的" + get.translation(event.current_type[0]) + "？",
							trans + "的牌组为" + cardsn + "。您此时可以点击“整理手牌”，将手牌按点数排序。",
							[2, Infinity],
							"he"
						);
						next.set("type", event.current_type);
						next.set("filterOk", function () {
							var type = lib.skill.iriya_haozhi.getType(
								ui.selected.cards,
								_status.event.player
							);
							if (!type) return false;
							var ptype = _status.event.type;
							if (type[0] == "炸弹") {
								if (ptype[0] == "炸弹") {
									if (type[2] > ptype[2]) return true;
									return type[1] > ptype[1] && type[2] == ptype[2];
								}
								return true;
							}
							return type[0] == ptype[0] && type[2] == ptype[2] && type[1] > ptype[1];
						});
						next.set("goon", get.attitude(target, event.current) < 0);
						next.set("ai", lib.skill.iriya_haozhi.respondAI);
					} else if (event.players.length > 0) event.redo();
					else event.goto(3);
					"step 2";
					if (result.bool) {
						event.current = target;
						event.current_type = lib.skill.iriya_haozhi.getType(result.cards.slice(0), target);
						event.current_cards = result.cards.slice(0);
						if (!event.current_type) event.finish();
						event.current.addExpose(0.5);
					}
					if (event.players.length > 0) event.goto(1);
					"step 3";
					var current = event.current,
						type = 0;
					if (!current.isIn()) return;
					switch (event.current_type[0]) {
						case "对子":
							type = 1;
							break;
						case "三张":
						case "三带一":
						case "三带二":
							type = 2;
							break;
						case "单顺":
							type = 3;
							break;
						case "双顺":
							type = 4;
							break;
						case "三顺":
						case "单带飞机":
						case "双带飞机":
							type = 5;
							break;
						case "炸弹":
						case "四带二":
							type = 6;
							break;
					}
					/*if(type==2){
						current.addSkill('iriya_haozhi_extra');
						current.addMark('iriya_haozhi_extra',1,false);
					}
					else */
					if (type > 0) {
						var next = game.createEvent("iriya_haozhi_effect", false);
						next.player = current;
						next.setContent(lib.skill.iriya_haozhi["content" + type]);
					}
				},
				content1() {
					"step 0";
					player
						.chooseTarget([1, 2], "是否令至多两名角色各摸两张牌？")
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.hasSkillTag("nogain")) att /= 10;
							return att;
						});
					"step 1";
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						player.line(targets);
						game.asyncDraw(targets, 2);
						game.delayex();
					}
				},
				content2() {
					"step 0";
					player
						.chooseTarget(
							[1, 3],
							"是否弃置至多三名角色的各一张牌？",
							function (card, player, target) {
								return (
									target != player &&
									target.hasCard(function (card) {
										return lib.filter.canBeDiscarded(card, player, target);
									}, "he")
								);
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, { name: "guohe_copy2" }, player, player);
						});
					"step 1";
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						player.line(targets, "green");
						for (var target of targets) {
							player.discardPlayerCard(target, true, "he");
						}
					}
					"step 2";
					//player.recover();
					player.draw();
				},
				content3() {
					"step 0";
					event.count = 0;
					"step 1";
					var next = player
						.chooseTarget("是否弃置一名其他角色的一张牌？", function (card, player, target) {
							return (
								target != player &&
								target.hasCard(function (card) {
									return lib.filter.canBeDiscarded(card, player, target);
								}, "he")
							);
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, { name: "guohe_copy2" }, player, player);
						});
					if (event.color)
						next.set(
							"prompt2",
							"若你弃置的牌为" + get.translation(event.color) + "，则你可以重复此流程"
						);
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "fire");
						player.discardPlayerCard(target, true, "he");
					} else event.goto(4);
					"step 3";
					if (result.bool) {
						event.count++;
						var card = result.cards[0],
							color = get.color(card, false);
						if (!event.color) {
							event.color = color;
							event.goto(1);
						} else if (color == event.color) event.goto(1);
					}
					"step 4";
					if (event.count > 0) player.draw(event.count);
				},
				content4() {
					"step 0";
					event.count = 0;
					"step 1";
					var next = player
						.chooseTarget("是否获得一名其他角色的一张牌？", function (card, player, target) {
							return (
								target != player &&
								target.hasCard(function (card) {
									return lib.filter.canBeGained(card, player, target);
								}, "he")
							);
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, { name: "shunshou_copy2" }, player, player);
						});
					if (event.color)
						next.set(
							"prompt2",
							"若你得到的牌为" + get.translation(event.color) + "，则你可以重复此流程"
						);
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "fire");
						player.gainPlayerCard(target, true, "he");
					} else event.goto(4);
					"step 3";
					if (result.bool) {
						event.count++;
						var card = result.cards[0],
							color = get.color(card, false);
						if (!event.color) {
							event.color = color;
							event.goto(1);
						} else if (color == event.color) event.goto(1);
						//player.draw();
					}
					"step 4";
					if (event.count > 0) player.recover(event.count);
				},
				content5() {
					"step 0";
					player
						.chooseTarget([1, 3], "是否令至多三名其他角色翻面？", lib.filter.notMe)
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.isTurnedOver()) return 10 * att;
							return -6 * att;
						});
					"step 1";
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						player.line(targets, "thunder");
						event.targets = targets;
						for (var target of targets) target.turnOver();
					}
					"step 2";
					player
						.chooseTarget(
							"是否对一名目标角色造成2点火属性伤害？",
							function (card, player, target) {
								return _status.event.getParent().targets.includes(target);
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player, "fire", 2);
						});
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "fire");
						target.damage("fire");
					}
				},
				content6() {
					"step 0";
					player
						.chooseTarget(
							"是否对一名其他角色进行核打击？",
							"你对该角色造成2点雷属性伤害，然后该角色翻面，弃置装备区内的所有牌和四张手牌。",
							lib.filter.notMe
						)
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.isTurnedOver())
								return -6 * att * Math.sqrt(2 + target.countCards("he"));
							return -att * Math.sqrt(2 + target.countCards("he"));
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, "thunder");
						target.damage("thunder", 4);
						target.turnOver();
					} else event.finish();
					"step 2";
					var num = target.countCards("e");
					if (num > 0) target.chooseToDiscard("e", true, num);
					"step 3";
					var num = target.countCards("h");
					if (num > 0) target.chooseToDiscard("h", true, Math.min(4, num));
				},
				ai: {
					sortCardByNum: true,
					order: 13,
					result: {
						player: 1,
					},
				},
				subSkill: {
					extra: {
						charlotte: true,
						mod: {
							targetInRange: () => true,
							cardUsable: () => Infinity,
						},
						trigger: { player: "useCard2" },
						forced: true,
						onremove: true,
						content() {
							"step 0";
							var num = player.countMark("iriya_haozhi_extra");
							player.removeSkill("iriya_haozhi_extra");
							var card = trigger.card;
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								var stat = player.getStat().card;
								if (stat[card.name] && stat[card.name] > 0) stat[card.name]--;
							}
							var info = get.info(card);
							if (info.allowMultiple == false) event.finish();
							if (trigger.targets && !info.multitarget) {
								if (
									game.hasPlayer(function (current) {
										return (
											!trigger.targets.includes(current) &&
											lib.filter.targetEnabled2(card, player, current)
										);
									})
								) {
									var prompt2 =
										"为" +
										get.translation(card) +
										"增加" +
										(num > 1 ? "至多" : "") +
										get.cnNumber(num) +
										"个目标";
									player
										.chooseTarget(
											get.prompt("iriya_haozhi_extra"),
											[1, num],
											function (card, player, target) {
												var player = _status.event.player;
												return (
													!_status.event.targets.includes(target) &&
													lib.filter.targetEnabled2(
														_status.event.card,
														player,
														target
													)
												);
											}
										)
										.set("prompt2", prompt2)
										.set("ai", function (target) {
											var trigger = _status.event.getTrigger();
											var player = _status.event.player;
											return get.effect(target, trigger.card, player, player);
										})
										.set("card", trigger.card)
										.set("targets", trigger.targets);
								}
							}
							"step 1";
							if (result.bool) {
								if (!event.isMine() && !event.isOnline()) game.delayx();
								event.targets = result.targets;
							} else {
								event.finish();
							}
							"step 2";
							if (event.targets) {
								player.logSkill("iriya_haozhi_extra", event.targets);
								trigger.targets.addArray(event.targets);
							}
						},
						intro: {
							content: "使用下一张牌无距离和次数限制，且可以增加#个目标",
						},
					},
					temp: {
						ai: { sortCardByNum: true },
						charlotte: true,
					},
				},
			},
			//远野美凪&远野小满
			minagi_peiquan: {
				enable: "phaseUse",
				filter(event, player) {
					return player.hasCard((card) => card.hasGaintag("minagi_tag"), "h");
				},
				filterCard(card) {
					return card.hasGaintag("minagi_tag");
				},
				position: "h",
				filterTarget: lib.filter.notMe,
				discard: false,
				lose: false,
				delay: false,
				locked: true,
				promptfunc: () =>
					"出牌阶段，你可以赠予一张“米券”，然后执行一项本回合内未被选择过的效果：⒈对其造成2点伤害；⒉摸四张牌；⒊弃置其的两张牌；⒋亮出牌堆顶的一张牌，然后你可以使用之。",
				check: (card) => {
					const player = _status.event.player;
					return get.type(card) == "equip" && game.hasPlayer(current => player.canGift(card, current, true) && !current.refuseGifts(card, player) && get.effect(current, card, player, player) > 0) ? 2 : 1 + Math.random();
				},
				content() {
					"step 0";
					player.gift(cards, target);
					"step 1";
					var list = player.getStorage("minagi_peiquan_yukito");
					if (list.length >= 4) event.finish();
					else {
						var yukito = get.translation(target);
						player
							.chooseButton(
								[
									"配券：请选择一项执行",
									[
										[
											["damage", "选项一：对" + yukito + "造成2点伤害"],
											["draw", "选项二：摸四张牌"],
											["discard", "选项三：弃置" + yukito + "的两张牌"],
											["use", "选项四：亮出牌堆顶的一张牌，然后可以使用之"],
										],
										"textbutton",
									],
								],
								true
							)
							.set("list", list)
							.set("filterButton", function (button) {
								return !_status.event.list.includes(button.link);
							})
							.set("ai", function (button) {
								var player = _status.event.player,
									target = _status.event.getParent().target;
								switch (button.link) {
									case "damage":
										return get.damageEffect(target, player, player);
									case "draw":
										return 2 * get.effect(player, { name: "draw" }, player, player);
									case "discard":
										return (
											get.effect(target, { name: "guohe_copy2" }, player, player) *
											Math.min(1.6, target.countCards("he"))
										);
									case "use":
										return _status.event.getRand("minagi_peiquan") * 4;
								}
							});
					}
					"step 2";
					player.markAuto("minagi_peiquan_yukito", result.links);
					player.addTempSkill("minagi_peiquan_yukito");
					switch (result.links[0]) {
						case "damage":
							target.damage(2, "nocard");
							break;
						case "draw":
							player.draw(4);
							break;
						case "discard":
							player.discardPlayerCard(target, 2, "he", true);
							break;
					}
					if (result.links[0] != "use") event.finish();
					"step 3";
					var card = get.cards()[0];
					game.cardsGotoOrdering(card);
					player.showCards(card);
					player.chooseUseTarget(card, "是否使用" + get.translation(card) + "？");
				},
				ai: {
					order: 4,
					result: {
						player: (player, target) => {
							const giftEffects = ui.selected.cards.map((value) =>
								player.getGiftEffect(value, target)
							);
							const baseEffect = Math.min(
								3,
								giftEffects.reduce(
									(previousValue, currentValue) => previousValue + currentValue,
									0
								) / giftEffects.length
							);
							const choices = ["damage", "draw", "discard", "use"];
							choices.removeArray(player.getStorage("minagi_peiquan_yukito"));
							if (choices.length <= 0) return baseEffect;
							return (
								baseEffect +
								Math.max(
									...choices.map((choice) => {
										switch (choice) {
											case "damage":
												return get.damageEffect(target, player, player);
											case "draw":
												return (
													2 * get.effect(player, { name: "draw" }, player, player)
												);
											case "discard":
												return (
													get.effect(
														target,
														{ name: "guohe_copy2" },
														player,
														player
													) * Math.min(1.6, target.countCards("he"))
												);
											case "use":
												return _status.event.getRand("minagi_peiquan") * 4;
										}
									})
								)
							);
						},
					},
				},
				group: "minagi_peiquan_umareta",
				subSkill: {
					yukito: { charlotte: true, onremove: true },
					umareta: {
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						forced: true,
						filter(event, player) {
							return (
								(event.name != "phase" || game.phaseNumber == 0) && player.countCards("h") > 0
							);
						},
						content() {
							var hs = player.getCards("h");
							player.addGaintag(hs, "minagi_tag");
						},
					},
				},
			},
			minagi_huanliu: {
				trigger: { player: "phaseZhunbeiBegin" },
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							lib.filter.notMe,
							get.prompt("minagi_huanliu"),
							"和一名其他角色进行“协力”，并获得“远野小满”的所有对应技能"
						)
						.set("ai", function (target) {
							return (
								get.threaten(target) *
								Math.sqrt(1 + target.countCards("h")) *
								(target.isTurnedOver() || target.hasJudge("lebu") ? 0.1 : 1)
							);
						})
						.forResult();
				},
				content() {
					"step 0";
					var target = targets[0];
					player.chooseCooperationFor(target, "minagi_huanliu").set("ai", function (button) {
						var base = 0;
						switch (button.link) {
							case "cooperation_damage":
								base = 0.1;
								break;
							case "cooperation_draw":
								base = 0.6;
								break;
							case "cooperation_discard":
								base = 0.1;
								break;
							case "cooperation_use":
								base = 0.3;
								break;
						}
						return base + Math.random();
					});
					player.addAdditionalSkill("cooperation", ["minagi_huanliu_effect", "michiru_sheyuan"]);
					"step 1";
					game.delayx();
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { global: "phaseJieshuBegin" },
						forced: true,
						logTarget: "player",
						filter(event, player) {
							return (
								player.checkCooperationStatus(event.player, "minagi_huanliu") &&
								player.countCards("h") > 0
							);
						},
						content() {
							game.log(player, "和", trigger.player, "的协力成功");
							var hs = player.getCards("h");
							player.addGaintag(hs, "minagi_tag");
							game.delayx();
						},
					},
				},
				derivation: "michiru_sheyuan",
			},
			minagi_xiji: {
				locked: true,
				mod: {
					cardUsable() {
						return Infinity;
					},
					targetInRange() {
						return true;
					},
				},
				trigger: { player: "useCard" },
				forced: true,
				filter(event, player) {
					return event.targets && event.targets.length > 0;
				},
				content() {
					trigger.directHit.addArray(game.players);
				},
				ai: {
					directHit_ai: true,
				},
			},
			michiru_sheyuan: {
				charlotte: true,
				enable: "chooseToUse",
				filter(event, player) {
				    if (player.countMark('minagi_tag') > 0) return false;
					if (player.hasSkill("michiru_sheyuan_turn")) return false;
					var hs = player.getCards("h");
					if (!hs.length) return false;
					for (var i of hs) {
						if (i.hasGaintag("minagi_tag")) return false;
						if (!game.checkMod(i, player, "unchanged", "cardEnabled2", player)) return false;
					}
					for (var name of lib.inpile) {
						var type = get.type(name);
						if (type != "basic" && type != "trick") return false;
						var card = get.autoViewAs({ name: name }, hs);
						if (event.filterCard(card, player, event)) return true;
						if (name == "sha") {
							for (var nature of lib.inpile_nature) {
								card.nature = nature;
								if (event.filterCard(card, player, event)) return true;
							}
						}
					}
					return false;
				},
				hiddenCard(player, name) {
					var type = get.type(name);
					if (type != "basic" && type != "trick") return false;
					if (player.countMark('minagi_tag') > 0) return false;
					if (player.hasSkill("michiru_sheyuan_turn")) return false;
					var hs = player.getCards("h");
					if (!hs.length) return false;
					if (_status.connectMode) return true;
					for (var i of hs) {
						if (i.hasGaintag("minagi_tag")) return false;
						if (!game.checkMod(i, player, "unchanged", "cardEnabled2", player)) return false;
					}
					return true;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [],
							hs = player.getCards("h");
						for (var name of lib.inpile) {
							var type = get.type(name);
							if (type != "basic" && type != "trick") continue;
							var card = get.autoViewAs({ name: name }, hs);
							if (event.filterCard(card, player, event)) list.push([type, "", name]);
							if (name == "sha") {
								for (var nature of lib.inpile_nature) {
									card.nature = nature;
									if (event.filterCard(card, player, event))
										list.push([type, "", name, nature]);
								}
							}
						}
						return ui.create.dialog("舍愿", [list, "vcard"], "hidden");
					},
					check(button) {
						var player = _status.event.player;
						var card = {
							name: button.link[2],
							nature: button.link[3],
						};
						if (_status.event.getParent().type == "phase") return 1;
							//return player.getUseValue(card, null, true);
						return player.getUseValue(card, null, true);
					},
					backup(links, player) {
						return {
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							filterCard: true,
							position: "h",
							selectCard: -1,
							ai: {
                                basic: {
                                    useful: [6,4],
                                    value: [6,4],
                                },
                                result: {
                                    player: 1,
                                },
                                order: 7,
                            },
							onuse(result, player) {
								player.addTempSkill("michiru_sheyuan_turn", "roundStart");
							},
						};
					},
					prompt(links, player) {
						return (
							"将所有手牌当做" +
							(get.translation(links[0][3]) || "") +
							get.translation(links[0][2]) +
							"使用，然后摸等量的牌"
						);
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag, arg) {
					    if (player.countMark('minagi_tag') > 0) return false;
						return lib.skill.michiru_sheyuan.hiddenCard(player, "s" + tag.slice(8));
					},
					order: 1,
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
				subSkill: {
					turn: {
						charlotte: true,
						trigger: { player: "useCardAfter" },
						forced: true,
						popup: false,
						filter(event, player) {
							return event.skill == "michiru_sheyuan_backup";
						},
						content() {
							player.draw(trigger.cards.length);
						},
					},
					backup: {},
				},
			},
			
            michiru_huzhu: {
                charlotte: true,
                forced: true,
                group: ['michiru_huzhu_start', 'michiru_huzhu_count', 'michiru_huzhu_use'],
                subSkill: {
                    start: {
                        trigger: {
                            global: 'gameStart'
                        },
                        forced: true,
                        content() {
                            player.addMark('minagi_tag', 1);
                        }
                    },
                    count: {
                        trigger: {
                            player: 'cardTypeChange'
                        },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            player.addMark('minagi_tag', 1);
                            player.recover();
                        }
                    },
                    use: {
                        trigger: {
                            player: 'useCard'
                        },
                        forced: true,
                        filter(event, player) {
                            return get.type(event.card) == 'basic' && player.countMark('minagi_tag') > 0;
                        },
                        content() {
                            player.removeMark('minagi_tag', 1);
                            var num = player.countMark('minagi_tag');
                            if (num > 0) player.draw(num);
                        }
                    }
                }
            },
			
			//坂上智代
			tomoyo_wuwei: {
				enable: ["chooseToUse", "chooseToRespond"],
				viewAs: { name: "sha" },
				viewAsFilter(player) {
					var storage = player.getStorage("tomoyo_wuwei_mark");
					return player.hasCard(function (card) {
						return !storage.includes(get.suit(card));
					}, "hs");
				},
				position: "hs",
				filterCard(card, player) {
					var storage = player.getStorage("tomoyo_wuwei_mark");
					return !storage.includes(get.suit(card));
				},
				check(card) {
					return 5 - get.value(card);
				},
				onuse(result, player) {
					player.markAuto("tomoyo_wuwei_mark", [get.suit(result.card, false)]);
					player.addTempSkill("tomoyo_wuwei_mark");
				},
				onrespond(event, player) {
					player.markAuto("tomoyo_wuwei_mark", [get.suit(event.card, false)]);
					player.addTempSkill("tomoyo_wuwei_mark");
				},
				group: "tomoyo_wuwei_combo",
				subSkill: {
					mark: {
						charlotte: true,
						onremove: true,
					},
					combo: {
						trigger: { global: "useCardAfter" },
						direct: true,
						//chooseToUse类技能暂时没办法改
						filter(event, player) {
							return (
								event.card.name == "shan" &&
								player.inRangeOf(event.player) &&
								player.canUse("sha", event.player, false)
							);
						},
						content() {
							player
								.chooseToUse(
									"武威：是否对" + get.translation(trigger.player) + "使用一张【杀】？",
									function (card, player, event) {
										if (get.name(card) != "sha") return false;
										return lib.filter.filterCard.apply(this, arguments);
									},
									trigger.player,
									-1
								)
								.set("addCount", false).logSkill = "tomoyo_wuwei_combo";
						},
					},
				},
			},
			tomoyo_zhengfeng: {
				dutySkill: true,
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return game.hasPlayer((current) => player.inRange(current));
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							get.prompt("tomoyo_zhengfeng"),
							"令一名攻击范围内的角色进行判定。其于你的下回合开始前使用与判定结果颜色相同的牌时，你摸一张牌。",
							function (card, player, target) {
								return player.inRange(target);
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							if (player.hp <= 1 && !player.countCards("h")) return 0;
							var hs = target.countCards("h"),
								thr = get.threaten(target);
							if (target.hasJudge("lebu")) return 0;
							return Math.sqrt(1 + hs) * Math.sqrt(Math.max(1, 1 + thr));
						})
						.forResult();
				},
				content() {
					"step 0";
					var target = targets[0];
					event.target = target;
					target.judge();
					"step 1";
					player.addTempSkill("tomoyo_zhengfeng_tomoyo", {
						player: "phaseBeginStart",
					});
					player.markAuto("tomoyo_zhengfeng_tomoyo", [
						{
							target: target,
							color: result.color,
						},
					]);
				},
				group: "tomoyo_zhengfeng_after",
				subSkill: {
					tomoyo: {
						charlotte: true,
						onremove: true,
						mod: {
							inRangeOf(source, player) {
								var list = player.getStorage("tomoyo_zhengfeng_tomoyo");
								for (var obj of list) {
									if (obj.target == source) return true;
								}
							},
						},
						trigger: { global: "useCard" },
						forced: true,
						filter(event, player) {
							var color = get.color(event.card);
							if (color == "none") return false;
							var list = player.getStorage("tomoyo_zhengfeng_tomoyo");
							for (var obj of list) {
								if (obj.target == event.player && color == obj.color) return true;
							}
							return false;
						},
						content() {
							player.draw();
						},
						intro: {
							mark(dialog, students, player) {
								if (!students || !students.length) return "全校风纪良好！";
								var str = "";
								for (var i of students) {
									if (str.length > 0) str += "<br>";
									str += get.translation(i.target);
									str += "：";
									str += get.translation(i.color);
								}
								dialog.addText(str);
							},
						},
					},
					after: {
						trigger: { player: "phaseJieshuBegin" },
						filter(event, player) {
							return !player.hasHistory("useSkill", function (evt) {
								return evt.skill == "tomoyo_zhengfeng";
							});
						},
						prompt: "整风：是否放弃使命？",
						prompt2:
							"你可以减1点体力上限并失去〖武威〗，摸两张牌并回复1点体力，然后获得技能〖长誓〗。",
						skillAnimation: true,
						animationColor: "gray",
						check(event, player) {
							return player.hp * 1.1 + player.countCards("h") < 3;
						},
						content() {
							"step 0";
							game.log(player, "放弃了身为学生会长的使命");
							player.awakenSkill("tomoyo_zhengfeng");
							player.loseMaxHp();
							"step 1";
							player.removeSkills("tomoyo_wuwei");
							"step 2";
							player.draw(2);
							player.recover();
							"step 3";
							player.addSkills("tomoyo_changshi");
						},
					},
				},
			},
			tomoyo_changshi: {
				trigger: {
					global: ["gainAfter", "loseAsyncAfter"],
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return (
							current != player && event.getg(current).length > 1 && player.inRangeOf(current)
						);
					});
				},
				content() {
					player.draw();
				},
				group: "tomoyo_changshi_recover",
				subSkill: {
					recover: {
						trigger: { global: "recoverAfter" },
						forced: true,
						filter(event, player) {
							return event.player.isAlive() && player.inRangeOf(event.player);
						},
						content() {
							player.changeHujia(1);
						},
					},
				},
			},
			//天宫希优
			kiyu_yuling: {
				mod: {
					targetEnabled(card) {
						var info = get.info(card);
						if (!info || (info.type != "trick" && info.type != "delay")) return;
						if (info.range) return false;
					},
				},
				trigger: { target: "useCardToTargeted" },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.card.name == "sha" && event.player.countCards("he") > 0;
				},
				logTarget: "player",
				content() {
					trigger.player.chooseToDiscard("he", true, get.distance(trigger.player, player));
				},
				ai: {
					threaten: 0.7,
					effect: {
						target(card, player, target, current) {
							if (card.name == "sha") return 0.7;
						},
					},
				},
			},
			kiyu_rexianyu: {
				trigger: { player: "phaseUseEnd" },
				charlotte: true,
				unique: true,
				filter(event, player) {
					return (
						!player.hasSkill("kiyu_rexianyu_round", null, null, false) &&
						player.hasHistory("useCard", function (evt) {
							var type = get.type(evt.card);
							if (type != "basic" && type != "trick") return false;
							return evt.getParent("phaseUse") == event;
						})
					);
				},
				async cost(event, trigger, player) {
					const history = player.getHistory("useCard", function (evt) {
						var type = get.type(evt.card);
						if (type != "basic" && type != "trick") return false;
						return evt.getParent("phaseUse") == trigger;
					});
					const list = [];
					for (var i = 0; i < Math.min(history.length, 3); i++) {
						var card = history[i].card;
						list.push({ name: card.name, isCard: true });
						if (card.nature) list[i].nature = card.nature;
					}
					const { result } = await player
						.chooseTarget(
							get.prompt("kiyu_rexianyu"),
							"将以下使用结果告知于一名其他角色：" + get.translation(list),
							function (card, player, target) {
								return (
									target != player &&
									!target.hasSkill("kiyu_rexianyu_lastrun", null, null, false)
								);
							}
						)
						.set("ai", function (target) {
							return (
								get.attitude(_status.event.player, target) *
								get.threaten(target) *
								Math.sqrt(1 + target.countCards("h")) *
								(target.isTurnedOver() || target.hasJudge("lebu") ? 0.1 : 1)
							);
						});
					if (result.bool) {
						event.result = {
							bool: result.bool,
							targets: result.targets,
							cost_data: { list },
						};
					}
				},
				async content(event, trigger, player) {
					player.addTempSkill("kiyu_rexianyu_round", "roundStart");
					const tabito = event.targets[0];
					tabito.storage.kiyu_rexianyu_lastrun = event.cost_data.list;
					tabito.storage.amamiya_kiyu = player;
					tabito.addTempSkill("kiyu_rexianyu_lastrun", {
						player: ["phaseUseAfter"],
						global: ["roundStart"],
					});
					await game.asyncDelayx();
				},
				subSkill: {
					round: { charlotte: true },
					lastrun: {
						enable: "chooseToUse",
						onChooseToUse(event) {
							if (!game.online && event.type == "phase") {
								var evtx = event.getParent();
								var num = event.player.getHistory("useCard", function (evt) {
									return evt.getParent("phaseUse") == evtx;
								}).length;
								event.set("rexianyu_num", num);
							}
						},
						filter(event, player) {
							if (!player.countCards("hs")) return false;
							var num = event.rexianyu_num,
								list = player.storage.kiyu_rexianyu_lastrun;
							if (!Array.isArray(list) || typeof num != "number" || list.length <= num)
								return false;
							var card = get.copy(list[num]);
							delete card.isCard;
							card = get.autoViewAs(card, "unsure");
							if (event.filterCard(card, player, event)) return true;
							return false;
						},
						onremove: true,
						viewAs(cards, player) {
							var num = _status.event.rexianyu_num,
								list = player.storage.kiyu_rexianyu_lastrun;
							if (!Array.isArray(list) || typeof num != "number" || list.length <= num)
								return { name: "sha" };
							var card = get.copy(list[num]);
							delete card.isCard;
							return card;
						},
						prompt() {
							var player = _status.event.player;
							var num = _status.event.rexianyu_num,
								list = player.storage.kiyu_rexianyu_lastrun;
							if (!Array.isArray(list) || typeof num != "number" || list.length <= num)
								return "无可用牌";
							var card = list[num];
							var str = "将一张牌当做" + get.translation(card);
							var kiyu = player.storage.amamiya_kiyu;
							if (kiyu && kiyu.isAlive())
								str += "；然后" + get.translation(kiyu) + "摸四张牌并回复两点体力，且你本回合的手牌上限+1";
							return str;
						},
						filterCard: true,
						position: "h",
						popname: true,
						check(card) {
							var player = _status.event.player;
							var num = _status.event.rexianyu_num,
								list = player.storage.kiyu_rexianyu_lastrun;
							return (
								player.getUseValue(list[num], null, true) -
								player.getUseValue(card, null, true)
							);
						},
						group: "kiyu_rexianyu_earthbound",
						mark: true,
						intro: { content: "已记录：$" },
						ai: {
							order: 12,
							result: {
								player(player) {
									var lunarq = player.storage.amamiya_kiyu;
									if (lunarq && get.attitude(player, lunarq) <= 0) return -1;
									return 1;
								},
							},
						},
					},
					earthbound: {
						trigger: { player: "useCardAfter" },
						forced: true,
						charlotte: true,
						filter(event, player) {
							if (event.skill != "kiyu_rexianyu_lastrun") return false;
							var lunarq = player.storage.amamiya_kiyu;
							return get.itemtype(lunarq) == "player" && lunarq.isAlive();
						},
						content() {
							var lunarq = player.storage.amamiya_kiyu;
							lunarq.draw(4);
							lunarq.recover(2);
							player.addTempSkill("kiyu_rexianyu_wolf");
							player.addMark("kiyu_rexianyu_wolf", 1, false);
						},
					},
					wolf: {
						charlotte: true,
						onremove: true,
						mod: {
							maxHandcard(player, num) {
								return num + player.countMark("kiyu_rexianyu_wolf");
							},
						},
						markimage: "image/card/handcard.png",
						intro: { content: "手牌上限+#" },
					},
				},
			},
			kiyu_xianyu: {
				trigger: { global: "phaseUseBegin" },
				charlotte: true,
				round: 1,
				filter(event, player) {
					return event.player.countCards("h") > 0;
				},
				logTarget: "player",
				check(event, player) {
					var target = event.player;
					var next = target.next;
					if (target.getSeatNum() > next.getSeatNum()) return true;
					if (
						target.countCards("h") < 4 &&
						target.countCards("h", function (card) {
							return target.hasUseTarget(card, null, true);
						}) < 2
					)
						return false;
					return true;
				},
				content() {
					"step 0";
					var target = trigger.player,
						cards = target.getCards("h");
					var next = player.chooseToMove(
						"先预：预测" + get.translation(target) + "使用牌的顺序",
						true
					);
					next.set("list", [[get.translation(target) + "的手牌", cards]]);
					next.set("processAI", function (list) {
						var cards = list[0][1].slice(0);
						var target = _status.event.getTrigger().player;
						cards.sort(function (a, b) {
							return get.order(b, target) - get.order(a, target);
						});
						return [cards];
					});
					"step 1";
					if (result.bool) {
						var list = result.moved[0];
						player.storage.kiyu_xianyu_lastrun = list;
						player.addTempSkill("kiyu_xianyu_lastrun", list);
					}
				},
				subSkill: {
					lastrun: {
						trigger: { global: "phaseUseAfter" },
						forced: true,
						charlotte: true,
						onremove: true,
						content() {
							var num = 0,
								index = -1,
								target = trigger.player;
							var cards = player.getStorage("kiyu_xianyu_lastrun");
							var history = target.getHistory("useCard", function (event) {
								return event.getParent("phaseUse") == trigger;
							});
							for (var evt of history) {
								var goon = false;
								for (var card of evt.cards) {
									var index2 = cards.indexOf(card);
									if (index2 > index) {
										goon = true;
										index = index2;
									}
								}
								if (goon) num++;
							}
							if (num > 0) {
								num = Math.min(3, num);
								player.draw(num);
								if (target.isIn()) {
									target.addTempSkill("kiyu_xianyu_effect");
									target.addMark("kiyu_xianyu_effect", num, false);
								}
							}
						},
					},
					effect: {
						charlotte: true,
						onremove: true,
						mod: {
							maxHandcard(player, num) {
								return num + player.countMark("kiyu_xianyu_effect");
							},
						},
					},
				},
			},
			//樱庭星罗
			seira_xinghui: {
				trigger: { player: "phaseZhunbeiBegin" },
				check(event, player) {
					return !player.getExpansions("seira_xinghui").length;
				},
				content() {
					"step 0";
					game.delayx();
					"step 1";
					if (get.isLuckyStar(player)) {
						event.num = 6;
						player.throwDice(6);
					} else player.throwDice();
					"step 2";
					var cards = get.cards(num);
					event.cards = cards;
					player.draw(cards);
					player.recover(cards);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove();
					next.set("prompt", "星辉：选择要作为“星屑”的牌（先选择的在上）");
					next.set("list", [["置于武将牌上", cards], ["置入弃牌堆"]]);
					next.processAI = function (list) {
						var cards = list[0][1],
							player = _status.event.player;
						var top = [];
						var judges = player.getCards("j");
						var stopped = false;
						if (!player.hasWuxie()) {
							for (var i = 0; i < judges.length; i++) {
								var judge = get.judge(judges[i]);
								cards.sort(function (a, b) {
									return judge(b) - judge(a);
								});
								if (judge(cards[0]) < 0) {
									stopped = true;
									break;
								} else {
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if (!stopped) {
							cards.sort(function (a, b) {
								return get.value(b, player) - get.value(a, player);
							});
							while (cards.length) {
								if (get.value(cards[0], player) <= 5) break;
								top.unshift(cards.shift());
							}
						}
						bottom = cards;
						return [top, bottom];
					};
					"step 3";
					if (result.bool && result.moved && result.moved[0].length) {
						event.cards = result.moved[0];
						player
							.chooseTarget(
								true,
								"将以下牌置于一名角色的武将牌上",
								get.translation(event.cards),
								function (card, player, target) {
									return !target.getExpansions("seira_xinghui").length;
								}
							)
							.set("ai", function (target) {
								return target == _status.event.player ? 1 : 0;
							});
						event.cards.reverse();
					} else event.finish();
					"step 4";
					var target = result.targets[0];
					player.draw(event.num);
					player.recover(event.num);
					player.line(target, { color: [253, 153, 182] });
					target.addToExpansion(cards).gaintag.add("seira_xinghui");
					game.log(player, "将" + get.cnNumber(cards.length) + "张牌置于", target, "的武将牌上");
					target.addSkill("seira_xinghui_hoshikuzu");
				},
				intro: {
					markcount: "expansion",
					content(storage, player) {
						return "共有" + get.cnNumber(player.getExpansions("seira_xinghui").length) + "张牌";
					},
					onunmark(storage, player) {
						player.removeSkill("seira_xinghui_hoshikuzu");
					},
				},
				subSkill: {
					hoshikuzu: {
						trigger: { source: "damageBegin1" },
						forced: true,
						charlotte: true,
						filter(event, player) {
							return player.getExpansions("seira_xinghui").length > 0;
						},
						content() {
							trigger.num++;
							trigger.num *= 2;
							game.log(player, "造成了", "#y暴击伤害");
						},
						group: ["seira_xinghui_draw", "seira_xinghui_judge"],
					},
					draw: {
						trigger: { player: "drawBefore" },
						forced: true,
						filter(event, player) {
							return player.getExpansions("seira_xinghui").length > 0;
						},
						content() {
							var cards = player.getExpansions("seira_xinghui");
							var num = Math.min(cards.length, trigger.num);
							trigger.num -= num;
							player.gain(cards.slice(0, num), "draw");
							if (trigger.num == 0) trigger.cancel();
						},
					},
					judge: {
						trigger: { player: "judgeBegin" },
						forced: true,
						filter(event, player) {
							return player.getExpansions("seira_xinghui").length > 0;
						},
						content() {
							trigger.directresult = player.getExpansions("seira_xinghui")[0];
						},
					},
				},
			},
			seira_yuanying: {
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				selectTarget: 2,
				multitarget: true,
				multiline: true,
				line: { color: [253, 153, 182] },
				content() {
					game.filterPlayer()
						.sortBySeat()
						.forEach(function (current) {
							if (!targets.includes(current)) {
								current.removeSkills("seira_yinyuan");
							} else {
								current.addSkills("seira_yinyuan");
							}
						});
					game.delayx();
				},
				ai: {
					order: 1,
					result: { target: 1 },
					expose: 0.1,
				},
				derivation: "seira_yinyuan",
			},
			seira_yinyuan: {
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return (
						target != player &&
						target.hasSkill("seira_yinyuan", null, null, false) &&
						target.countCards("hej") > 0
					);
				},
				content() {
					player.gainPlayerCard(target, true, "hej");
					target.recover();
				},
				mark: true,
				intro: {
					content:
						"你的手牌对其他“姻缘者”可见。出牌阶段限一次，你可以获得一名其他“姻缘者”区域内的一张牌，然后其回复1点体力。",
				},
				ai: {
					order: 9,
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (player == arg) return false;
						return player.hasSkill("seira_yinyuan") && arg.hasSkill("seira_yinyuan");
					},
					result: {
						player(player, target) {
							var effect = get.effect(target, { name: "shunshou_copy" }, player, player);
							if (target.isDamaged()) {
								if (effect < 0) effect /= 2;
								effect += get.recoverEffect(target, player, player);
							}
							return effect;
						},
					},
				},
			},
			tenzen_fenghuan: {
				trigger: { global: "useCardAfter" },
				filter(event, player) {
					if (
						player == event.player ||
						event.targets.length != 1 ||
						event.targets[0] != player ||
						!event.player.isIn() ||
						(event.card.name != "sha" &&
							(get.type(event.card, null, false) != "trick" || !get.tag(event.card, "damage")))
					)
						return false;
					if (
						!player.canUse(
							{
								name: event.card.name,
								nature: event.card.nature,
								isCard: true,
							},
							event.player,
							false
						)
					)
						return false;
					var num = get.number(event.card);
					if (typeof num != "number") return false;
					num *= 2;
					var hs = player.getCards("he");
					for (var i of hs) {
						num -= get.number(i);
						if (num <= 0) return true;
					}
					return false;
				},
				async cost(event, trigger, player) {
					const num = get.number(trigger.card) * 2,
						card = {
							name: trigger.card.name,
							nature: trigger.card.nature,
							isCard: true,
						};
					event.result = await player
						.chooseToDiscard(
							"he",
							get.prompt("tenzen_fenghuan", trigger.player),
							"弃置任意张点数之和不小于" +
								num +
								"的牌，然后视为对其使用一张" +
								get.translation(card),
							"chooseonly"
						)
						.set("selectCard", function () {
							var cards = ui.selected.cards,
								num = _status.event.cardNumber;
							for (var i of cards) {
								num -= get.number(i);
								if (num <= 0) return [cards.length, cards.length + 1];
							}
							return [cards.length + 1, cards.length + 1];
						})
						.set("cardNumber", num)
						.set("effect", get.effect(trigger.player, card, player, player))
						.set("ai", function (card) {
							var eff = _status.event.effect;
							if (eff <= 0) return 0;
							for (var i of ui.selected.cards)
								eff -= get.value(i) / Math.sqrt(get.number(i) / 3);
							return eff - get.value(card) / Math.sqrt(get.number(card) / 3);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					await player.discard(event.cards);
					var card = {
							name: trigger.card.name,
							nature: trigger.card.nature,
							isCard: true,
						},
						target = trigger.player;
					if (target.isIn() && player.canUse(card, target, false))
						await player.useCard(card, target, false);
				},
			},
			tenzen_retianquan: {
				trigger: { player: "useCardToPlayered" },
				filter(event, player) {
					return (
						event.card.name == "sha" &&
						(player.hp > 0 ||
							player.hasCard(function (card) {
								return lib.filter.cardDiscardable(card, player, "tenzen_retianquan");
							}, "he"))
					);
				},
				logTarget: "target",
				usable: 1,
				check(event, player) {
					if (get.attitude(player, event.target) >= 0) return false;
					if (player.hp > player.maxHp / 2) return true;
					if (
						player.hasCard(function (card) {
							return (
								lib.filter.cardDiscardable(card, player, "tenzen_retianquan") &&
								get.value(card) < 6
							);
						}, "he")
					)
						return true;
					return true;
				},
				prompt2:
					"你可失去1点体力或弃置一张牌，亮出牌堆顶的三张牌（若你的体力值小于体力上限的50%，则改为展示五张牌）。每有一张基本牌，其所需使用的【闪】的数量便+1。然后若此牌造成过伤害，则你获得展示牌中的所有非基本牌。",
				content() {
					"step 0";
					player
						.chooseToDiscard("弃置一张牌，或点「取消」失去1点体力", "he")
						.set("goon", player.hp > player.maxHp / 2)
						.set("ai", function (card) {
							var val = get.value(card);
							if (_status.event.goon) return 0.1 - val;
							return 6 - val;
						});
					"step 1";
					if (!result.bool) player.loseHp();
					"step 2";
					var cards = get.cards(player.hp <= player.maxHp / 2 ? 5 : 3);
					player.showCards(cards, get.translation(player) + "发动了【天全】");
					game.cardsGotoOrdering(cards).relatedEvent = trigger.getParent();
					var num = cards.filter(function (card) {
						return get.type(card, null, false) == "basic";
					}).length;
					if (num) {
						if (trigger.card.name == "sha") {
							var id = trigger.target.playerid;
							var map = trigger.getParent().customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].shanRequired == "number") {
								map[id].shanRequired += num;
							} else {
								map[id].shanRequired = 1 + num;
							}
						}
					}
					if (num < 5) {
						var next = game.createEvent("tenzen_retianqua_gain");
						next.cards = cards;
						next.player = player;
						event.next.remove(next);
						trigger.getParent().after.push(next);
						next.setContent(function () {
							if (
								player.getHistory("sourceDamage", function (evt) {
									return evt.card == event.parent.card;
								}).length > 0
							)
								player.gain(
									cards.filter(function (card) {
										return get.type(card, null, false) != "basic";
									}),
									"gain2"
								);
						});
					}
				},
			},
			//藏里见
			satomi_luodao: {
				trigger: { player: "useCardToPlayered" },
				logTarget: "target",
				filter(event, player) {
					return event.card.name == "sha" && event.target.countCards("h") > 0;
				},
				content() {
					"step 0";
					var target = trigger.target;
					event.target = target;
					target.showHandcards(
						get.translation(player) + "对" + get.translation(target) + "发动了【落刀】"
					);
					"step 1";
					if (
						target.hasCard(function (card) {
							return get.name(card, target) == "shan";
						}, "h")
					) {
						player
							.discardPlayerCard(target, true, "h", "visible")
							.set("filterButton", function (button) {
								return get.name(button.link) == "shan";
							});
					} else if (player.countCards("he") > 0) player.draw(4);
				},
			},
			satomi_daohai: {
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return (
						player.hasHistory("lose", function (evt) {
							return evt.type == "discard" && evt.cards2.length > 0;
						}) && player.hasUseTarget({ name: "wugu" })
					);
				},
				check(event, player) {
					return player.getUseValue({ name: "wugu" }) + player.getUseValue({ name: "lebu" }) > 0;
				},
				content() {
					"step 0";
					player.chooseUseTarget("wugu", true);
					"step 1";
					if (result.bool) {
						var cards = [];
						player.getHistory("gain", function (evt) {
							if (evt.getParent().name == "wugu" && evt.getParent(4) == event) {
								cards.addArray(evt.cards);
							}
						});
						cards = cards.filter(function (card) {
							return (
								player.getCards("h").includes(card) &&
								game.checkMod(card, player, "unchanged", "cardEnabled2", player)
							);
						});
						if (cards.length) {
							player.chooseCardTarget({
								prompt: "是否将得到的牌当做【乐不思蜀】使用？",
								filterCard(card) {
									return _status.event.cards.includes(card);
								},
								cards: cards,
								filterTarget(card, player, target) {
									var card = get.autoViewAs({ name: "lebu" }, ui.selected.cards);
									return player.canUse(card, target);
								},
								ai1: () => 1,
								ai2(target) {
									var player = _status.event.player,
										card = get.autoViewAs({ name: "lebu" }, ui.selected.cards);
									return get.effect(target, { name: "lebu" }, player, player);
								},
							});
						} else event.finish();
					} else event.finish();
					"step 2";
					if (result.bool) {
						player.useCard({ name: "lebu" }, result.cards, result.targets[0]);
					}
				},
			},
			//苍井绘梨花
			erika_shisong: {
				trigger: { player: "useCard" },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (player != _status.currentPhase) return false;
					var index = player.getHistory("useCard").indexOf(event),
						history = player.actionHistory;
					for (var i = history.length - 2; i >= 0; i--) {
						if (history[i].isMe) {
							var evt = history[i].useCard[index];
							return evt && get.type2(evt.card) == get.type(event.card);
						}
					}
					return false;
				},
				content() {
					player.draw(2);
				},
				mod: {
					maxHandcard(player, num) {
						return num + player.hujia;
					},
				},
			},
			erika_yousheng: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
			    forced: true,
				init: (player) => {
					player.addSkill("erika_yousheng_mamori");
				},
				dutySkill: true,
				group: ["erika_yousheng_achieve", "erika_yousheng_fail"],
				trigger: { global: "useCardToTarget" },
				filter(event, player) {
					return (
						player.getStorage("erika_yousheng").includes(event.target) &&
						(event.card.name == "sha" ||
							(get.type2(event.card, false) == "trick" && get.tag(event.card, "damage") > 0)) &&
						player.countMark("erika_yousheng_ruka") + 1 <= player.countCards("he")
					);
				},
				intro: {
					content: "已保护$",
				},
				async cost(event, trigger, player) {
					const num = player.countMark("erika_yousheng_ruka") + 1;
					event.result = await player
						.chooseToDiscard(
							"he",
							num,
							get.prompt("erika_yousheng", trigger.target),
							"弃置" + num + "张牌，并转移" + get.translation(trigger.card)
						)
						.forResult();
				},
				async content(event, trigger, player) {
					//player.discard(event.cards);
					player.draw(event.cards);
					player.draw(event.cards);
					var ruka = trigger.target,
						evt = trigger.getParent();
					evt.targets.remove(ruka);
					evt.triggeredTargets2.remove(ruka);
					evt.targets.push(player);
					evt.triggeredTargets2.push(player);
					player.addTempSkill("erika_yousheng_ruka");
					var str = "erika_yousheng_" + player.playerid;
					if (!evt[str]) evt[str] = [];
					evt[str].add(ruka);
				},
				subSkill: {
					achieve: {
						trigger: { player: "changeHujiaAfter" },
						forced: true,
						skillAnimation: "legend",
						animationColor: "water",
						filter(event, player) {
							return player.storage.erika_yousheng && event.num < 0 && !player.hujia;
						},
						content() {
							"step 0";
							player.awakenSkill("erika_yousheng");
							game.log(player, "成功完成使命");
							var list = [player];
							list.addArray(player.storage.erika_yousheng);
							list.sortBySeat();
							list = list.filter(function (current) {
								return current.isAlive();
							});
							player.line(list, "green");
							game.asyncDraw(list, 5);
							"step 1";
							game.delayx();
						},
					},
					fail: {
						trigger: { global: "dyingBegin" },
						forced: true,
						filter(event, player) {
							return (
								player.getStorage("erika_yousheng").includes(event.player) &&
								event.card &&
								(event.card.name == "sha" ||
									(get.type2(event.card, false) == "trick" &&
										get.tag(event.card, "damage") > 0))
							);
						},
						content() {
							player.awakenSkill("erika_yousheng");
							game.log(player, "使命失败");
							var num = player.hujia;
							if (num > 0) {
								player.changeHujia(-num);
								player.chooseToDiscard(num, true, "he");
							}
						},
					},
					mamori: {
						trigger: { global: "roundStart" },
						skillAnimation: true,
						animationColor: "wood",
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(
									get.prompt("erika_yousheng"),
									[1, 2],
									lib.filter.notMe,
									"选择至多两名其他角色。你增加点体力上限，回复4点体力，摸4张牌并获得5点护甲。"
								)
								.set("ai", function (ruka) {
									return -1;
								})
								.forResult();
						},
						async content(event, trigger, player) {
							player.awakenSkill("erika_yousheng_mamori");
							player.markAuto("erika_yousheng", event.targets);
							await player.gainMaxHp(4);
						    player.draw(4);
						    player.recover(4);
							await player.changeHujia(16);
						},
					},
					ruka: {
						trigger: { global: "useCardAfter" },
						charlotte: true,
						filter(event, player) {
							return (
								event["erika_yousheng_" + player.playerid] &&
								event.cards.filterInD().length > 0
							);
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(
									"是否令一名原目标角色获得" +
										get.translation(trigger.cards.filterInD()) +
										"？",
									function (card, player, target) {
										return _status.event.targets.includes(target);
									}
								)
								.set("targets", trigger["erika_yousheng_" + player.playerid])
								.forResult();
						},
						async content(event, trigger, player) {
							const ruka = event.targets[0];
							player.line(ruka, "green");
							ruka.gain(trigger.cards.filterInD(), "gain2");
						},
					},
				},
			},
			//李映夏
			liyingxia_sanli: {
				trigger: { target: "useCardToTargeted" },
				forced: true,
				filter(event, player) {
					if (event.player == player || event.player != _status.currentPhase) return false;
					var index = event.player
						.getHistory("useCard", function (evt) {
							return evt.targets.includes(player);
						})
						.indexOf(event.getParent());
					if (index == 2) return event.player.isIn() && player.countCards("he") > 0;
					return index < 2 && index > -1;
				},
				logTarget: "player",
				content() {
					"step 0";
					var index = trigger.player
						.getHistory("useCard", function (evt) {
							return evt.targets.includes(player);
						})
						.indexOf(trigger.getParent());
					if (index == 2) {
						player.chooseCard(
							"he",
							true,
							"三礼：交给" + get.translation(trigger.player) + "一张牌"
						);
					} else {
						player.draw();
						event.finish();
					}
					"step 1";
					if (result.bool) {
						player.give(result.cards, trigger.player);
					}
				},
			},
			liyingxia_zhenjun: {
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.group == "key";
				},
				async cost(event, trigger, player) {
					const num =
						player.getHistory("useCard", function (evt) {
							return (
								evt.card.name == "sha" ||
								(get.type(evt.card) == "trick" && get.tag(evt.card, "damage") > 0)
							);
						}).length + 1;
					event.result = await player
						.chooseTarget(
							get.prompt("liyingxia_zhenjun"),
							[1, num],
							"令至多" + get.cnNumber(num) + "名角色各摸一张牌"
						)
						.set("ai", (serafu) => get.attitude(_status.event.player, serafu))
						.forResult();
				},
				groupSkill: "key",
				content() {
					targets.sortBySeat();
					game.asyncDraw(targets);
					for (var i of targets)
						i.addTempSkill("liyingxia_zhenjun_enhance", {
							player: player == i ? "phaseJieshuBegin" : "phaseAfter",
						});
					game.delayx();
				},
				subSkill: {
					enhance: {
						trigger: { source: "damageBegin1" },
						forced: true,
						charlotte: true,
						mark: true,
						filter: (event, player) => player == _status.currentPhase,
						intro: { content: "下回合首次造成的伤害+1" },
						content() {
							trigger.num++;
							player.removeSkill(event.name);
						},
					},
				},
			},
			liyingxia_wumai: {
				trigger: { global: "roundStart" },
				filter(event, player) {
					return (
						player.group == "key" &&
						(player.getStorage("liyingxia_wumai").length < 4 ||
							game.hasPlayer((current) => current.isDamaged()))
					);
				},
				async cost(event, trigger, player) {
					var list = lib.skill.liyingxia_wumai.derivation.slice(0);
					list.removeArray(player.getStorage("liyingxia_wumai"));
					if (list.length) {
						const { result } = await player
							.chooseControl(list, "cancel2")
							.set("prompt", get.prompt("liyingxia_wumai"))
							.set("prompt2", "获得一个技能");
						if (result.control !== "cancel2") {
							event.result = {
								bool: true,
								cost_data: {
									type: "addSkill",
									skill: result.control,
								},
							};
						}
					} else {
						const num = Math.min(
							3,
							game.countPlayer((current) => current.isDamaged())
						);
						const { result } = await player.chooseBool(
							get.prompt("liyingxia_wumai") + "（可摸" + get.cnNumber(num+2) + "张牌）"
						);
						if (result.bool) {
							event.result = {
								bool: true,
								cost_data: {
									type: "drawCards",
									num,
								},
							};
						}
					}
				},
				groupSkill: "key",
				async content(event, trigger, player) {
					const result = event.cost_data;
					if (result.type === "addSkill") {
						player.markAuto("liyingxia_wumai", [result.skill]);
						player.addSkills(result.skill, "roundStart");
						player.gainMaxHp();
					} else if (result.type === "drawCards") {
						player.draw(result.num+2);
					}
				},
				derivation: ['shizuru_nianli','kotomi_chuanxiang','nao_duyin','sheyan','hisako_yinbao','fanghun','iwasawa_mysong','xuehen','jiufa'],
			},
			//雾岛佳乃
			kano_liezhen: {
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.getHistory("useCard").length > 0;
				},
				frequent: true,
				async cost(event, trigger, player) {
					var history = player.getHistory("useCard");
					if (history.length > 1) {
						var type = get.type2(history[0].card, false);
						for (var i = 1; i < history.length; i++) {
							if (get.type2(history[i].card, false) != type) {
								const result = await player
									.chooseButton([
										"列阵：是否视为使用其中一种牌？",
										[["kano_paibingbuzhen"].concat(get.zhinangs()), "vcard"],
									])
									.set("filterButton", function (button) {
										return _status.event.player.hasUseTarget({
											name: button.link[2],
											isCard: true,
										});
									})
									.set("ai", function (button) {
										return _status.event.player.getUseValue({
											name: button.link[2],
											isCard: true,
										});
									})
									.forResult();
								if (result.bool)
									event.result = {
										bool: true,
										cost_data: {
											links: result.links,
										},
									};
								return;
							}
						}
					}
					var str = _status.renku.length ? "获得仁库中的所有牌" : "摸两张牌";
					event.result = await player
						.chooseBool(get.prompt("kano_liezhen"), str)
						.set("frequentSkill", "kano_liezhen")
						.forResult();
				},
				async content(event, trigger, player) {
					const result = event.cost_data;
					if (!result || !result.links.length) {
						if (_status.renku.length) {
							const cards = _status.renku.slice(0);
							_status.renku.length = 0;
							game.updateRenku();
							await player.gain(cards, "gain2", "fromRenku");
						} else player.draw(4);
					} else {
						player.chooseUseTarget(result.links[0][2], true);
					}
				},
				init(player) {
					player.storage.renku = true;
				},
			},
			kano_poyu: {
				trigger: { target: "useCardToTargeted" },
				charlotte: true,
				filter(event, player) {
					return (
						_status.renku.length > 0 &&
						(event.card.name == "sha" ||
							(get.type(event.card) == "trick" && get.tag(event.card, "damage") > 0))
					);
				},
				check(trigger, player) {
					return get.effect(player, trigger.card, trigger.player, player) < 0;
				},
				content() {
					"step 0";
					player.judge();
					"step 1";
					var bool = false,
						type = get.type2(result.card.name);
					for (var i of _status.renku) {
						if (get.suit(i) == result.suit || get.type2(i) == type) {
							bool = true;
							break;
						}
					}
					if (bool) {
						player
							.chooseButton([
								"是否移去一张牌，令" + get.translation(trigger.card) + "对你无效？",
								_status.renku,
							])
							.set("types", [result.suit, type])
							.set("filterButton", function (button) {
								var types = _status.event.types;
								return (
									get.suit(button.link, false) == types[0] ||
									get.type2(button.link, false) == types[1]
								);
							})
							.set("ai", () => 1);
					} else event.finish();
					"step 2";
					if (result.bool) {
						var card = result.links[0];
						player.$throw(card, 1000);
						_status.renku.remove(card);
						game.cardsDiscard(card).fromRenku = true;
						game.log(player, "将", card, "置入了弃牌堆");
						trigger.excluded.add(player);
						game.updateRenku();
					}
				},
				init(player) {
					player.storage.renku = true;
				},
			},
			//藤川米亚
			mia_shihui: {
				trigger: { player: "phaseDrawBegin1" },
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					trigger.changeToZero();
					var num = 0;
					all = player.getAllHistory();
					if (all.length > 1) {
						for (var i = all.length - 2; i >= 0; i--) {
							if (all[i].isMe) {
								for (var evt of all[i].lose) {
									if (evt.type == "discard") num += evt.cards2.length;
								}
								break;
							}
						}
					}
					player.draw(1 + num);
				},
				group: "mia_shihui_recover",
				subSkill: {
					recover: {
						trigger: { player: "phaseJieshuBegin" },
						forced: true,
						filter(event, player) {
							return player.isDamaged() || player.countCards("he") > 0;
						},
						content() {
							player.chooseToDiscard("he", true);
							player.recover();
						},
					},
				},
			},
            mia_rujing: {
                forced: true,
                init: function(player) {
                    player.storage.mia_rujing = {
                        suits: [...new Set(player.getCards('h').map(card => get.suit(card)))],
                        state: 'yin'
                    };
                },
                trigger: {
                    player: ['gainAfter', 'loseAfter']
                },
                group: ['mia_rujing_yin', 'mia_rujing_yang'],
                filter: function(event, player) {
                    if(!player.storage.mia_rujing) return false;
                    var currentSuits = [...new Set(player.getCards('h').map(card => get.suit(card)))];
                    return currentSuits.length !== player.storage.mia_rujing.suits.length;
                },
                content: function() {
                    var currentSuits = [...new Set(player.getCards('h').map(card => get.suit(card)))];
                    player.storage.mia_rujing.suits = currentSuits;
                    player.storage.mia_rujing.state = (player.storage.mia_rujing.state === 'yin' ? 'yang' : 'yin');
                    game.log(player, '的【入境】状态变为', player.storage.mia_rujing.state === 'yin' ? '阴' : '阳');
                    player.markSkill('mia_rujing');
                },
                subSkill: {
                    yin: {
                        forced: true,
                        trigger: {
                            target: 'useCardToTarget'
                        },
                        priority: 15,
                        filter: function(event, player) {
                            if(!player.storage.mia_rujing || 
                                player.storage.mia_rujing.state !== 'yin') return false;
                            return event.card && lib.filter.targetEnabled2(event.card, event.player, player);
                        },
                        content: function() {
                            'step 0'
                            var num = trigger.targets ? trigger.targets.length : 1;
                            player.draw(num);
                            game.log(player, '触发【入境】：摸', num, '张牌');
                            'step 1'
                            trigger.getParent().cancel();
                            game.log(player, '令', trigger.card, '无效');
                        }
                    },
                    yang: {
                        forced: true,
                        trigger: {
                            player: 'useCardBefore'
                        },
                        priority: 15,
                        filter: function(event, player) {
                            if(!player.storage.mia_rujing || 
                               player.storage.mia_rujing.state !== 'yang') return false;
                            if(!event.targets || !event.targets.length) {
                                if(event.card.name == 'sha') return true;
                                return false;
                            }
                            return true;
                        },
                        content: function() {
                            'step 0'
                            var targetNum;
                            if(trigger.card.selectTarget) {
                                targetNum = trigger.card.selectTarget;
                            } else if(trigger.targets && trigger.targets.length) {
                                targetNum = trigger.targets.length;
                            } else if(trigger.card.name == 'sha') {
                                targetNum = 1;
                            } else {
                                targetNum = 0;
                            }

                            if(targetNum <= 0) {
                                event.finish();
                                return;
                            }

                            if(player.countCards('h') < targetNum) {
                                trigger.cancel();
                                player.loseHp();
                                game.log(player, '触发【入境】：手牌不足，令', trigger.card, '无效并失去1点体力');
                                event.finish();
                                return;
                            }

                            event.num = targetNum;
                            game.log(player, '触发【入境】：需弃置', targetNum, '张手牌');
                            player.chooseToDiscard('h', targetNum, true);
                        }
                    }
                },
                mark: true,
                marktext: '☯',
                intro: {
                    content: function(storage, player) {
                        if(!player.storage.mia_rujing) return '未初始化';
                        var state = player.storage.mia_rujing.state;
                        var suits = player.storage.mia_rujing.suits.map(suit => get.translation(suit)).join('、');
                        return '当前状态：' + (state === 'yin' ? '阴' : '阳') + 
                               '<br>当前花色：' + suits;
                    }
                }
            },
            mia_qianmeng: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				locked: false,
				dutySkill: true,
				derivation: "mia_fengfa",
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content() {
					"step 0";
					player.draw();
					"step 1";
					if (player.countCards("he") > 0) {
						player.chooseCard("he", true, "潜梦：选择一张牌置于牌堆中");
					} else event.finish();
					"step 2";
					if (result.bool) {
						var card = result.cards[0];
						player.storage.mia_qianmeng = card;
						player.$throw(card, 1000);
						player.lose(card, ui.cardPile).insert_index = function () {
							return ui.cardPile.childNodes[Math.ceil(ui.cardPile.childNodes.length / 2)];
						};
					} else event.finish();
					"step 3";
					game.delayx();
				},
				onremove: true,
				group: ["mia_qianmeng_achieve", "mia_qianmeng_fail"],
				subSkill: {
					achieve: {
						trigger: {
							global: ["gainAfter", "loseAsyncAfter"],
						},
						forced: true,
						filter(event, player) {
							var card = player.storage.mia_qianmeng;
							if (event.name == "gain") {
								var source = event.player,
									cards = event.getg(source);
								return cards.includes(card) && source.getCards("hejsx").includes(card);
							} else {
								if (event.type != "gain") return false;
								var owner = get.owner(card);
								return owner && event.getg(owner).includes(card);
							}
						},
						skillAnimation: true,
						animationColor: "key",
						content() {
							"step 0";
							game.log(player, "成功完成使命");
							player.awakenSkill("mia_qianmeng");
							var card = player.storage.mia_qianmeng,
								owner = get.owner(card);
							if (owner && owner != player) owner.give(card, player);
							"step 1";
							if (player.hp < player.maxHp) player.recover(player.maxHp - player.hp);
							player.changeSkills(["mia_fengfa"], ["mia_shihui"]);
						},
					},
					fail: {
						trigger: { player: "die" },
						forceDie: true,
						filter(event, player) {
							return get.itemtype(player.storage.mia_qianmeng) == "card";
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(
									get.prompt("mia_qianmeng"),
									"令一名角色获得牌堆中所有点数为" +
										player.storage.mia_qianmeng.number +
										"的牌",
									lib.filter.notMe
								)
								.forResult();
						},
						async content(event, trigger, player) {
							game.log(player, "使命失败");
							var target = event.targets[0];
							var num = player.storage.mia_qianmeng.number,
								suit = player.storage.mia_qianmeng.suit,
								cards = [];
							for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
								var card = ui.cardPile.childNodes[i];
								if (card.number == num && card.suit == suit) cards.push(card);
							}
							if (cards.length) await target.gain(cards, "gain2");
						},
					},
				},
			},
			mia_fengfa: {
				trigger: { player: "phaseDrawBegin2" },
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					var num = 0;
					all = player.getAllHistory();
					if (all.length > 1) {
						for (var i = all.length - 2; i >= 0; i--) {
							if (all[i].isMe) {
								num += all[i].useCard.length;
								break;
							}
						}
					}
					trigger.num += num;
				},
			},
			kyou_zhidian: {
				locked: false,
				mod: {
					targetInRange(card) {
						if (card.kyou_zhidian) return true;
					},
					aiOrder(player, card, numx) {
						var num = _status.event._kyou_zhidian_baseValue;
						if (num > 0 && get.type2(card) == "trick" && player.getUseValue(card) < num)
							return numx / 10;
					},
				},
				enable: "chooseToUse",
				filter(event, player) {
					return player.countCards("hs", (card) => get.type2(card) == "trick") > 0;
				},
				filterCard(card) {
					return get.type2(card) == "trick";
				},
				onChooseToUse(event) {
					event._kyou_zhidian_baseValue = event.player.getUseValue({
						name: "sha",
					});
				},
				check(card) {
					var num = _status.event._kyou_zhidian_baseValue,
						player = _status.event.player;
					return num - player.getUseValue(card);
				},
				prompt: "将一张锦囊牌当做【杀】使用",
				viewAs: {
					name: "sha",
					kyou_zhidian: true,
				},
				group: "kyou_zhidian_aim",
				ai: {
					respondSha: true,
					skillTagFilter: (player) =>
						player.countCards("hs", (card) => get.type2(card) == "trick") > 0,
				},
				subSkill: {
					aim: {
						trigger: {
							player: "useCardToPlayered",
						},
						forced: true,
						locked: false,
						filter(event, player) {
							return event.isFirstTarget && event.card.name == "sha";
						},
						logTarget: "target",
						content() {
							"step 0";
							var list = ["不可被响应", "无视防具", "伤害+1", "不计入次数"];
							list.remove(player.storage.kyou_zhidian);
							player
								.chooseControl(list)
								.set("prompt", "掷典：请为" + get.translation(trigger.card) + "选择一种效果")
								.set(
									"choice",
									(function () {
										if (list.includes("不计入次数") && player.hasSha())
											return "不计入次数";
										if (
											list.includes("不可被响应") &&
											trigger.target.mayHaveShan(
												player,
												"use",
												trigger.target.getCards("h", (i) => {
													return i.hasGaintag("sha_notshan");
												})
											)
										)
											return "不可被响应";
										if (list.includes("伤害+1")) return "伤害+1";
										return list.randomGet();
									})()
								)
								.set("ai", () => _status.event.choice);
							"step 1";
							var target = trigger.target;
							player.storage.kyou_zhidian = result.control;
							game.log(player, "对", target, "的", trigger.card, "#g" + result.control);
							switch (result.control) {
								case "不可被响应":
									trigger.directHit.add(target);
									break;
								case "无视防具":
									target.addTempSkill("qinggang2");
									target.storage.qinggang2.add(trigger.card);
									break;
								case "伤害+1":
									var map = trigger.customArgs;
									var id = target.playerid;
									if (!map[id]) map[id] = {};
									if (!map[id].extraDamage) map[id].extraDamage = 0;
									map[id].extraDamage++;
									break;
								case "不计入次数":
									var evt = trigger.getParent();
									if (evt.addCount !== false) {
										evt.addCount = false;
										player.getStat().card.sha--;
									}
									break;
							}
						},
					},
				},
			},
			kyou_duanfa: {
				trigger: { player: "damageBegin2" },
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter(event, player) {
					return player.hp <= event.num;
				},
				content() {
					player.awakenSkill("kyou_duanfa");
					player.recover(4);
					player.draw(5);
					trigger.cancel();
					player.addTempSkill("kyou_duanfa_draw", {
						player: "phaseBeginStart",
					});
				},
				subSkill: {
					draw: {
						trigger: { target: "useCardToTargeted" },
						forced: true,
						charlotte: true,
						filter(event, player) {
							if (event.card.name == "sha") return true;
							return get.type(event.card, null, false) == "trick" && get.tag(event.card, "damage") > 0;
						},
						content() {
							//player.chooseToDiscard("h", true, 1);
							player.draw(1);
						},
					},
				},
			},
			kotarou_aurora: {
				trigger: {
					player: ["damageEnd", "loseHpEnd", "gainMaxHpEnd"],
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					return player.hasEnabledSlot(1);
				},
				content() {
					if (player.hasEmptySlot(1)) {
						var card = get.cardPile2(function (card) {
							return (
								get.subtype(card) == "equip1" &&
								!get.cardtag(card, "gifts") &&
								player.canUse(card, player)
							);
						});
						if (card) player.chooseUseTarget(card, true);
					} else player.chooseUseTarget("sha", true, false);
				},
			},
			kotarou_rewrite: {
				enable: "phaseUse",
				charlotte: true,
				filter(event, player) {
					return !player.hasSkill("kotarou_rewrite_block");
				},
				content() {
					"step 0";
					player.getHistory("custom").push({ kotarou_rewrite: true });
					player
						.chooseControl()
						.set("choiceList", [
							"视为使用一张本局游戏没有以此法使用过的基本牌或普通锦囊牌",
							"移动场上的一张牌",
							"增加1点体力上限并失去1点体力",
							"本回合内下一次造成的伤害+1",
							"本回合内下一次回复体力时，额外回复1点体力",
							"本回合内手牌上限和【杀】的使用次数+1 　　　　　　　　　　　　　　　　　　　　　　　　",
						])
						.set("ai", function () {
							var player = _status.event.player;
							if (player.hp > 2 && player.getUseValue({ name: "sha" }) > 0) return 2;
							return 0;
						});
					"step 1";
					lib.skill.kotarou_rewrite.rewrites[result.index](player, event);
					if (result.index != 0) event.goto(3);
					"step 2";
					if (result.bool) {
						player.storage.kotarou_rewrite.push(result.links[0][2]);
						player.chooseUseTarget(true, {
							name: result.links[0][2],
							nature: result.links[0][3],
							isCard: true,
						});
					}
					"step 3";
					if (
						player.getHistory("custom", function (evt) {
							return evt && evt.kotarou_rewrite == true;
						}).length >= 3
					)
						player.addTempSkill("kotarou_rewrite_block");
				},
				onremove: true,
				rewrites: [
					function (player, event) {
						var list = [];
						if (!player.storage.kotarou_rewrite) player.storage.kotarou_rewrite = [];
						for (var i of lib.inpile) {
							if (player.storage.kotarou_rewrite.includes(i)) continue;
							var type = get.type(i);
							if (type == "basic" || type == "trick") list.push([type, "", i]);
							if (i == "sha") {
								for (var j of lib.inpile_nature) list.push([type, "", i, j]);
							}
						}
						if (list.length) {
							player
								.chooseButton(["改写：视为使用一张基本牌或普通锦囊牌", [list, "vcard"]], true)
								.set("filterButton", function (button) {
									return player.hasUseTarget(
										{
											name: button.link[2],
											nature: button.link[3],
											isCard: true,
										},
										null,
										true
									);
								})
								.set("ai", function (button) {
									return player.getUseValue({
										name: button.link[2],
										nature: button.link[3],
										isCard: true,
									});
								});
						} else event._result = { bool: false };
					},
					function (player, event) {
						player.moveCard(true);
					},
					function (player, event) {
						if (player.maxHp < 5) player.gainMaxHp();
						player.loseHp();
					},
					function (player, event) {
						player.addSkill("kotarou_rewrite_damage");
						player.addMark("kotarou_rewrite_damage", 1, false);
						game.log(player, "本回合下次造成的伤害", "#y+1");
					},
					function (player, event) {
						player.addSkill("kotarou_rewrite_recover");
						player.addMark("kotarou_rewrite_recover", 1, false);
						game.log(player, "本回合下次回复的体力", "#y+1");
					},
					function (player, event) {
						player.addSkill("kotarou_rewrite_sha");
						player.addMark("kotarou_rewrite_sha", 1, false);
						game.log(player, "本回合的手牌上限和使用【杀】的次数上限", "#y+1");
					},
				],
				ai: {
					order: 4,
					result: {
						player(player) {
							if (
								player.getHistory("custom", function (evt) {
									return evt && evt.kotarou_rewrite == true;
								}).length >= 2
							)
								return 0;
							return 1;
						},
					},
				},
			},
			kotarou_rewrite_damage: {
				onremove: true,
				trigger: { source: "damageBegin1" },
				forced: true,
				content() {
					trigger.num += player.countMark("kotarou_rewrite_damage");
					player.removeSkill("kotarou_rewrite_damage");
				},
				charlotte: true,
				intro: { content: "下一次造成的伤害+#" },
			},
			kotarou_rewrite_recover: {
				onremove: true,
				trigger: { player: "recoverBegin" },
				forced: true,
				content() {
					trigger.num += player.countMark("kotarou_rewrite_recover");
					player.removeSkill("kotarou_rewrite_recover");
				},
				charlotte: true,
				intro: { content: "下一次回复的体力+#" },
			},
			kotarou_rewrite_sha: {
				onremove: true,
				mod: {
					maxHandcard(player, num) {
						return num + player.countMark("kotarou_rewrite_sha");
					},
					cardUsable(card, player, num) {
						if (card.name == "sha") return num + player.countMark("kotarou_rewrite_sha");
					},
				},
				charlotte: true,
				intro: { content: "手牌上限和出杀次数+#" },
			},
			kotarou_rewrite_block: {
				trigger: { player: "phaseEnd" },
				forced: true,
				charlotte: true,
				content() {
					player.removeSkill("kotarou_rewrite");
					player.removeSkill("kotarou_aurora");
					if (player.maxHp > 3) player.loseMaxHp(player.maxHp - 3);
				},
			},
			tenzen_yixing: {
				trigger: {
					global: "damageEnd",
				},
				filter(event, player) {
					if (!event.card || (event.card.name != "sha" && event.card.name != "juedou"))
						return false;
					var hairi = event.source;
					if (
						hairi &&
						(hairi == player || player.inRangeOf(hairi)) &&
						hairi.isIn() &&
						hairi.name1 != "key_shizuku" &&
						hairi.name2 != "key_shizuku"
					)
						return true;
					hairi = event.player;
					return (
						hairi &&
						(hairi == player || player.inRange(hairi)) &&
						hairi.isIn() &&
						hairi.name1 != "key_shizuku" &&
						hairi.name2 != "key_shizuku"
					);
				},
				frequent: true,
				content() {
					"step 0";
					player.draw();
					"step 1";
					if (player.countCards("he") > 0) {
						player.chooseCard("he", true, "将一张牌作为“兴”置于武将牌上");
					} else event.finish();
					"step 2";
					if (result.bool) {
						var cards = result.cards;
						player.addToExpansion(cards, player, "give").gaintag.add("tenzen_yixing");
					}
				},
				intro: {
					content: "expansion",
					onunmark: "expansion",
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: "tenzen_yixing_counter",
				subSkill: {
					counter: {
						trigger: { target: "useCardToTargeted" },
						filter(event, player) {
							if (player == event.player || !player.getExpansions("tenzen_yixing").length)
								return false;
							return (
								event.targets.length == 1 &&
								(event.card.name == "sha" || get.type(event.card) == "trick")
							);
						},
						prompt2(event) {
							return (
								"获得一张“兴”，且" +
								get.translation(event.card) +
								"结算完成后可以弃置两张牌，视为对" +
								get.translation(event.player) +
								"使用一张同名牌"
							);
						},
						check(event, player) {
							if (
								!player.storage.tenzen_lingyu &&
								player.getExpansions("tenzen_yixing").length < 3
							)
								return false;
							var card = {
								name: event.card.name,
								nature: event.card.nature,
								isCard: true,
							};
							return (
								player.canUse(card, event.player, false) &&
								get.effect(event.player, card, player, player) > 0
							);
						},
						content() {
							"step 0";
							player.chooseButton(
								["选择获得一张“兴”", player.getExpansions("tenzen_yixing")],
								true
							);
							"step 1";
							if (result.bool) {
								player.gain(result.links, "gain2");
							}
							var next = game.createEvent("tenzen_yixing_insert");
							event.next.remove(next);
							trigger.getParent().after.push(next);
							next.player = player;
							next.target = trigger.player;
							next.setContent(lib.skill.tenzen_yixing.content_extra);
						},
					},
				},
				content_extra() {
					"step 0";
					var card = event.getParent().card;
					event.card = {
						name: card.name,
						nature: card.nature,
						isCard: true,
					};
					if (
						player.countCards("he") > 1 &&
						target &&
						target.isIn() &&
						player.canUse(event.card, target, false)
					) {
						player
							.chooseToDiscard(
								"he",
								2,
								"是否弃置两张牌，视为对" +
									get.translation(target) +
									"使用" +
									get.translation(event.card) +
									"？"
							)
							.set("ai", function (card) {
								return 5 - get.value(card);
							});
					} else event.finish();
					"step 1";
					if (result.bool) player.useCard(card, target, false, "tenzen_yixing");
				},
			},
			tenzen_lingyu: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "water",
				filter(event, player) {
					return player.getExpansions("tenzen_yixing").length >= player.hp;
				},
				content() {
					player.awakenSkill("tenzen_lingyu");
					player.storage.tenzen_lingyu = true;
					player.loseMaxHp();
					if (player.isHealthy()) player.draw(2);
					player.addSkills("tenzen_tianquan");
				},
				ai: {
					combo: "tenzen_yixing"
				},
			},
			tenzen_tianquan: {
				trigger: { player: "useCardToPlayered" },
				filter(event, player) {
					return (
						(event.card.name == "sha" || event.card.name == "juedou") &&
						event.targets.length == 1 &&
						player.getExpansions("tenzen_yixing").length > 1
					);
				},
				logTarget: "target",
				usable: 1,
				check(event, player) {
					return get.attitude(player, event.target) < 0;
				},
				content() {
					"step 0";
					//player.viewHandcards(trigger.target);
					player.chooseButton(["选择移去两张“兴”", player.getExpansions("tenzen_yixing")], true, 2);
					"step 1";
					if (result.bool) {
						player.loseToDiscardpile(result.links);
						var cards = get.cards(5);
						player.showCards(cards, get.translation(player) + "发动了【天全】");
						game.cardsGotoOrdering(cards).relatedEvent = trigger.getParent();
						var num = cards.filter(function (card) {
							return get.type(card, null, false) == "basic";
						}).length;
						if (num) {
							if (trigger.card.name == "sha") {
								var id = trigger.target.playerid;
								var map = trigger.getParent().customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].shanRequired == "number") {
									map[id].shanRequired += num;
								} else {
									map[id].shanRequired = 1 + num;
								}
							} else {
								var idt = trigger.target.playerid;
								var map = trigger.getParent().customArgs;
								if (!map[idt]) map[idt] = {};
								if (!map[idt].shaReq) map[idt].shaReq = {};
								if (!map[idt].shaReq[idt]) map[idt].shaReq[idt] = 1;
								map[idt].shaReq[idt]++;
							}
						}
						if (num < 5) {
							var next = game.createEvent("tenzen_lingyu_gain");
							next.cards = cards;
							next.player = player;
							event.next.remove(next);
							trigger.getParent().after.push(next);
							next.setContent(function () {
								if (
									player.getHistory("sourceDamage", function (evt) {
										return evt.card == event.parent.card;
									}).length > 0
								)
									player.gain(
										cards.filter(function (card) {
											return get.type(card, null, false) != "basic";
										}),
										"gain2"
									);
							});
						}
					}
				},
			},
			kyouko_rongzhu: {
				trigger: { global: "gainEnd" },
				filter(event, player) {
					if (player == event.player || event.getParent().name == "kyouko_rongzhu") return false;
					var evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length > 0;
				},
				logTarget: "player",
				check(event, player) {
					return get.attitude(player, event.player) > 0;
				},
				content() {
					"step 0";
					player.draw();
					"step 1";
					var target = trigger.player;
					if (player.countCards("he") > 0 && target.isIn()) {
						player.chooseCard("he", true, "将一张牌交给" + get.translation(target));
					} else event.finish();
					"step 2";
					if (result.bool) {
						player.give(result.cards, trigger.player);
						var target = _status.currentPhase;
						var name;
						if (target == player) {
							name = "kyouko_rongzhu_me";
							player.addTempSkill(name);
							player.addMark(name, 1, false);
						} else if (target == trigger.player) {
							name = "kyouko_rongzhu_notme";
							target.addTempSkill(name);
							target.addMark(name, 1, false);
						}
					}
				},
				subSkill: {
					me: {
						mod: {
							maxHandcard(player, num) {
								return num + player.countMark("kyouko_rongzhu_me");
							},
						},
						intro: { content: "手牌上限+#" },
						onremove: true,
					},
					notme: {
						mod: {
							cardUsable(card, player, num) {
								if (card.name == "sha") return num + player.countMark("kyouko_rongzhu_notme");
							},
						},
						intro: { content: "使用杀的次数上限+#" },
						onremove: true,
					},
				},
			},
			kyouko_gongmian: {
				enable: "phaseUse",
				prompt: "出牌阶段，你可以选择一名未以此法选择过的角色，若其手牌：大于你，你获得其一张牌，然后交给其一张牌；小于你，其交给你一张牌，然后你交给其一张牌；等于你，你与其各摸一张牌。",
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return (
							current != player && lib.skill.kyouko_gongmian.filterTarget(null, player, current)
						);
					});
				},
				filterTarget(card, kyouko, hina) {
					if (kyouko == hina || kyouko.getStorage("kyouko_gongmian").includes(hina)) return false;
					var hs = hina.countCards("he");
					if (hs == 0) return kyouko.countCards("h") == 0;
					return true;
				},
				content() {
					"step 0";
					player.markAuto("kyouko_gongmian", targets);
					var hs = player.countCards("h"),
						ts = target.countCards("h");
					player.getHistory("custom").push({ kyouko_gongmian: true });
					if (hs > ts) {
						event.utype = 1;
						target.chooseCard("he", true, "交给" + get.translation(player) + "一张牌");
					} else if (hs == ts) {
						game.asyncDraw([player, target]);
						event.utype = 2;
					} else {
						event.utype = 3;
						player.gainPlayerCard(target, true, "he");
					}
					"step 1";
					if (event.utype == 2) {
						game.delayx();
						event.finish();
					} else if (!result.bool) event.finish();
					else if (event.utype == 1) target.give(result.cards, player);
					"step 2";
					if (player.countCards("he") > 0) {
						player.chooseCard("he", true, "交给" + get.translation(target) + "一张牌");
					} else event.finish();
					"step 3";
					if (result.bool) player.give(result.cards, target);
				},
				intro: {
					content: "已与$共勉",
				},
				group: ["kyouko_gongmian_use", "kyouko_gongmian_discard"],
				ai: {
					order: 6,
					result: {
						target(player, target) {
							if (
								player.getHistory("custom", function (evt) {
									return evt.kyouko_gongmian == true;
								}).length
							)
								return 0;
							return 1;
						},
					},
				},
			},
			kyouko_gongmian_use: {
				trigger: { player: "phaseUseEnd" },
				filter(event, player) {
					return (
						player.getHistory("custom", function (evt) {
							return evt.kyouko_gongmian == true;
						}).length > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.countGainableCards(player, "hej") > 0;
						})
					);
				},
				async cost(event, trigger, player) {
					const num = player.getHistory("custom", function (evt) {
						return evt.kyouko_gongmian == true;
					}).length;
					event.result = await player
						.chooseTarget(
							get.prompt("kyouko_gongmian"),
							"获得一名其他角色的至多" + get.cnNumber(num) + "张牌，然后交给其等量的牌",
							function (card, player, target) {
								return target != player && target.countGainableCards(player, "hej") > 0;
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (att > 0) return att;
							var he = player.getCards("he");
							if (
								target.countCards("he", function (card) {
									return get.value(card, target) > 7;
								}) &&
								he.length > 0
							)
								return (
									-att +
									5 -
									Math.min.apply(
										Math,
										he.map(function (card) {
											return get.value(card, player);
										})
									)
								);
							return 0;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const num = player.getHistory("custom", function (evt) {
							return evt.kyouko_gongmian == true;
						}).length,
						target = event.targets[0];
					let result = await player.gainPlayerCard(target, "hej", true, [1, num]).forResult();
					if (
						target.isIn() &&
						result.bool &&
						result.cards &&
						result.cards.length &&
						player.countCards("he") > 0
					) {
						const num = result.cards.length,
							hs = player.getCards("he");
						if (hs.length <= num) result = { bool: true, cards: hs };
						else {
							result = await player
								.chooseCard(
									"he",
									true,
									num,
									"交给" + get.translation(target) + get.cnNumber(num) + "张牌"
								)
								.forResult();
						}
						if (result.bool && result.cards && result.cards.length) {
							player.give(result.cards, target);
						}
					}
				},
			},
			kyouko_gongmian_discard: {
				trigger: { player: "phaseDiscardBegin" },
				filter(event, player) {
					var hs = player.countCards("h");
					return (
						hs > 0 &&
						player.getHistory("custom", function (evt) {
							return evt.kyouko_gongmian == true;
						}).length >= player.hp &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h") < hs;
						})
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							get.prompt("kyouko_gongmian"),
							"获得一名其他角色的所有手牌，然后将一半的牌交给该角色（向上取整）",
							function (card, player, target) {
								return target != player && target.countCards("h") < player.countCards("h");
							}
						)
						.forResult();
				},
				content() {
					"step 0";
					var target = event.targets[0];
					event.target = target;
					var hs = target.getCards("h");
					if (hs.length > 0) player.gain(hs, target, "giveAuto", "bySelf");
					"step 1";
					if (target.isIn() && player.countCards("h") > 0) {
						var hs = player.getCards("h"),
							num = Math.ceil(hs.length / 2);
						if (hs.length <= num) event._result = { bool: true, cards: hs };
						else
							player.chooseCard(
								"he",
								true,
								num,
								"交给" + get.translation(target) + get.cnNumber(num) + "张牌"
							);
					} else event.finish();
					"step 2";
					if (result.bool && result.cards && result.cards.length) {
						player.give(result.cards, target);
					}
				},
			},
			yuuki_yicha: {
				trigger: { player: "phaseUseBegin" },
				frequent: true,
				createDialog(id) {
					var dialog = ui.create.dialog("hidden");
					(dialog.textPrompt = dialog.add("异插")).style.textAlign = "center";
					dialog.cards = [];
					dialog.rawButtons = [];
					dialog.videoId = id;
					var cards = [];
					for (var i = 0; i < 3; i++) {
						var card = ui.create.card(null, null, true);
						card.pos = i;
						card.pos_x = i;
						card.pos_y = 0;
						cards.push(card);
						dialog.rawButtons.push(card);
					}
					dialog.add(cards);
					cards = [];
					for (var i = 0; i < 3; i++) {
						var card = ui.create.card(null, null, true);
						card.pos = i + 3;
						card.pos_x = i;
						card.pos_y = 1;
						cards.push(card);
						dialog.rawButtons.push(card);
					}
					dialog.add(cards);
					for (var i of dialog.buttons) {
						i.pos_x = i.link.pos_x;
						i.pos_y = i.link.pos_y;
						i.link = i.link.pos;
					}
					dialog.open();
				},
				addCard(card, id, pos) {
					var dialog = get.idDialog(id);
					if (!dialog) return;
					for (var i = 0; i < dialog.buttons.length; i++) {
						var button = dialog.buttons[i];
						if (button.link == pos) {
							var card2 = ui.create.button(card, "card");
							card2.pos = button.link;
							card2.pos_x = button.pos_x;
							card2.pos_y = button.pos_y;
							card2.classList.add("noclick");
							button.parentNode.insertBefore(card2, button);
							dialog.cards.push(card2);
							button.remove();
							dialog.buttons.splice(i, 1);
							break;
						}
					}
				},
				changePrompt(str, id) {
					var dialog = get.idDialog(id);
					if (!dialog) return;
					dialog.textPrompt.innerHTML = str;
				},
				content() {
					"step 0";
					var next = game.createEvent("cardsGotoOrdering");
					next.cards = [];
					next.setContent("cardsGotoOrdering");
					event.videoId = lib.status.videoId++;
					event.forceDie = true;
					event.cards = [];
					event.positions = [0, 1, 2, 3, 4, 5];
					game.broadcastAll(function (id) {
						lib.skill.yuuki_yicha.createDialog(id);
					}, event.videoId);
					player.judge().set("callback", function () {
						event.getParent().orderingCards.remove(event.judgeResult.card);
						event.getParent(2).orderingCards.add(event.judgeResult.card);
					});
					"step 1";
					if (get.position(result.card, true) == "o") {
						var pos = event.positions.randomRemove();
						event._first_pos = pos;
						game.broadcastAll(
							function (card, id, player, pos) {
								lib.skill.yuuki_yicha.addCard(card, id, pos);
								lib.skill.yuuki_yicha.changePrompt(
									get.translation(player) + "放置了" + get.translation(card),
									id
								);
							},
							result.card,
							event.videoId,
							player,
							pos
						);
						cards.push(result.card);
						game.delay(2);
					}
					player.judge().set("callback", function () {
						event.getParent().orderingCards.remove(event.judgeResult.card);
						event.getParent(2).orderingCards.add(event.judgeResult.card);
					});
					"step 2";
					if (get.position(result.card, true) == "o") {
						var list = event.positions;
						if (get.isLuckyStar(player)) {
							var index = get.color(cards[0], false) == get.color(result.card, false) ? 0 : 1;
							list = list.filter(function (i) {
								return Math.abs((i % 2) - (event._first_pos % 2)) == index;
							});
						}
						var pos = list.randomRemove();
						game.broadcastAll(
							function (card, id, player, pos) {
								lib.skill.yuuki_yicha.addCard(card, id, pos);
								lib.skill.yuuki_yicha.changePrompt(
									get.translation(player) + "放置了" + get.translation(card),
									id
								);
							},
							result.card,
							event.videoId,
							player,
							pos
						);
						cards.push(result.card);
						game.delay(2);
					}
					if (cards.length) event.count = 4;
					else {
						game.broadcastAll("closeDialog", event.videoId);
						event.finish();
					}
					"step 3";
					event.count--;
					player.judge().set("callback", function () {
						event.getParent().orderingCards.remove(event.judgeResult.card);
						event.getParent(2).orderingCards.add(event.judgeResult.card);
					});
					"step 4";
					var card = result.card;
					event.card = card;
					var str = "请选择一个位置放置" + get.translation(card);
					if (player == game.me || player.isUnderControl()) {
						lib.skill.yuuki_yicha.changePrompt(str, event.videoId);
					} else if (player.isOnline()) {
						player.send(
							function (str, id) {
								lib.skill.yuuki_yicha.changePrompt(str, event.videoId);
							},
							str,
							id
						);
					}
					player
						.chooseButton()
						.set("dialog", event.videoId)
						.set("filterButton", function (button) {
							var posx = button.pos_x,
								posy = button.pos_y;
							var list = [],
								cards = ui.dialog.cards;
							for (var i of cards) {
								if (i.pos_x == posx && Math.abs(i.pos_y - posy) == 1) list.push(i.link);
								if (i.pos_y == posy && Math.abs(i.pos_x - posx) == 1) list.push(i.link);
							}
							if (list.length > 0) {
								var color = get.color(list[0], false);
								if (list.length > 1) {
									for (var i = 1; i < list.length; i++) {
										if (get.color(list[i]) != color) return false;
									}
								}
								return get.color(_status.event.card, false) != color;
							}
							return false;
						})
						.set("card", card);
					"step 5";
					if (result.bool) {
						cards.push(card);
						event.positions.remove(result.links[0]);
						game.broadcastAll(
							function (card, id, pos, player) {
								lib.skill.yuuki_yicha.addCard(card, id, pos);
								lib.skill.yuuki_yicha.changePrompt(
									get.translation(player) + "放置了" + get.translation(card),
									id
								);
							},
							card,
							event.videoId,
							result.links[0],
							player
						);
						game.delay(2);
					}
					if (event.count > 0) event.goto(3);
					"step 6";
					game.broadcastAll("closeDialog", event.videoId);
					player
						.chooseTarget("令一名角色获得" + get.translation(cards), true)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					"step 7";
					if (result.bool && result.targets && result.targets.length) {
						var target = result.targets[0];
						player.line(target, "green");
						target.gain(cards, "gain2");
					}
				},
			},
			
			yuuki_wuxin: {
                // 转换技标记
                mark: true,
                zhuanhuanji: true,
                // 锁定技标记
                forced: true,
                // 阴阳状态记录
                marktext: "☯",
                intro: {
                    content: function(storage) {
                        return storage ? '阳：别人对你造成伤害时，取消之' : '阴：你对别人造成伤害时，取消之';
                    }
                },
                // 初始化为阴
                init: function(player) {
                    player.storage.yuuki_wuxin = false;
                },
                // 准备阶段转换阴阳
                trigger: {
                    player: 'phaseZhunbeiBegin'
                },
                content: function() {
                    player.storage.yuuki_wuxin = !player.storage.yuuki_wuxin;
                    player.markSkill('yuuki_wuxin');
                },
                // 伤害取消效果
                group: ['yuuki_wuxin_damage', 'yuuki_wuxin_draw'],
                subSkill: {
                    damage: {
                        trigger: {
                            source: 'damageBegin4',
                            player: 'damageBegin4'
                        },
                        forced: true,
                        filter: function(event, player) {
                            // 阴状态下，自己造成伤害时触发
                            if (!player.storage.yuuki_wuxin && event.player != player) return true;
                            // 阳状态下，受到伤害时触发
                            if (player.storage.yuuki_wuxin && event.player == player) return true;
                            return false;
                        },
                        content: function() {
                            trigger.cancel();
                        },
                    },
                    draw: {
                        trigger: {
                            global: 'phaseJieshuBegin'
                        },
                        forced: true,
                        filter: function(event, player) {
                            // 检查当前回合角色是否造成过伤害
                            return event.player.getHistory('sourceDamage').length > 0;
                        },
                        content: function() {
                            // 计算当前回合角色造成的总伤害数
                            let totalDamage = 0;
                            trigger.player.getHistory('sourceDamage').forEach(evt => {
                                totalDamage += evt.num || 1;
                            });
                            if(totalDamage > 0) {
                                player.draw(totalDamage);
                            }
                        }
                    }
                },
            },
			kotomi_qinji: {
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return player.hasUseTarget("wanjian");
				},
				//chooseUseTarget也不好改 先放着
				direct: true,
				content() {
					player.addTempSkill("kotomi_qinji2");
					player.chooseUseTarget(
						{ name: "wanjian", isCard: true },
						get.prompt("kotomi_qinji"),
						"视为使用一张【万箭齐发】"
					).logSkill = "kotomi_qinji";
				},
			},
			kotomi_qinji2: {
				trigger: { source: "damageBefore" },
				forced: true,
				popup: false,
				filter(event, player) {
					return event.getParent().skill == "kotomi_qinji";
				},
				content() {
					trigger.cancel();
					trigger.player.loseHp(trigger.num);
				},
			},
			kotomi_chuanxiang: {
				global: "kotomi_chuanxiang2",
			},
			kotomi_chuanxiang2: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return (
						!player.hasSkill("kotomi_chuanxiang") &&
						player.countCards("e", lib.skill.kotomi_chuanxiang2.filterCard) > 0
					);
				},
				filterCard(card, player) {
					if (!player) player = _status.event.player;
					return game.hasPlayer(function (current) {
						return current != player && current.canEquip(card);
					});
				},
				position: "e",
				filterTarget(card, player, target) {
					return target != player && target.canEquip(ui.selected.cards[0]);
				},
				check(card) {
					if (get.value(card) <= 0) return 10;
					var player = _status.event.player;
					if (
						game.hasPlayer(function (current) {
							return current.hasSkill("kotomi_chuanxiang") && get.attitude(player, current) > 0;
						})
					) {
						var subtype = get.subtype(card, false);
						if (
							player.countCards("hs", function (cardx) {
								return (
									get.type(cardx) == "equip" &&
									get.subtype(cardx, false) == subtype &&
									player.canUse(cardx, player) &&
									get.effect(player, cardx, player, player) > 0
								);
							})
						)
							return 8;
						return 7 / Math.max(1, get.value(card));
					}
					return 0;
				},
				promptfunc() {
					var players = game.filterPlayer(function (current) {
						return current.hasSkill("kotomi_chuanxiang");
					});
					return (
						"将一张装备牌传给其他角色，然后令" +
						get.translation(players) +
						"摸一张牌。若传给该角色，则其改为摸两张牌。"
					);
				},
				prepare: "give",
				discard: false,
				lose: false,
				content() {
					"step 0";
					target.equip(cards[0]);
					var list = game.filterPlayer(function (current) {
						return current.hasSkill("kotomi_chuanxiang");
					});
					game.asyncDraw(list, function (targetx) {
						return targetx == target ? 2 : 1;
					});
					"step 1";
					game.delayx();
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							var card = ui.selected.cards[0];
							if (!card) return 0;
							var eff = get.effect(target, card, player, target);
							if (target.hasSkill("kotomi_chuanxiang")) eff++;
							return eff;
						},
					},
				},
			},
			kotomi_manyi: {
				locked: true,
				zhuanhuanji: true,
				mark: true,
				marktext: "☯",
				intro: {
					content(storage) {
						if (storage) return "转换技。阳：你对别人造成的伤害翻倍。";
						return "转换技。阴：别人对你造成的伤害-1。";
					},
				},
				trigger: { global: "roundStart" },
				forced: true,
				content() {
					player.logSkill("kotomi_manyi");
					player.changeZhuanhuanji("kotomi_manyi");
				},
				group: ["kotomi_manyi_defend", "kotomi_manyi_attack"],
			},
			kotomi_manyi_defend: {
				trigger: { player: "damageBefore" },
				forced: true,
				filter(event, player) {
					return !player.storage.kotomi_manyi && event.source && event.source != player;
				},
				content() {
					trigger.num = Math.max(0, trigger.num - 1);
					game.log(player, "发动的〖蛮夷〗令伤害-1");
				},
			},
			kotomi_manyi_attack: {
				trigger: { source: "damageBefore" },
				forced: true,
				filter(event, player) {
					return player.storage.kotomi_manyi && event.player && event.player != player;
				},
				content() {
					trigger.num = trigger.num * 2;
					game.log(player, "发动的〖蛮夷〗令伤害翻倍");
				},
			},
			//井上晶
			asara_shelu: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return (
						player.countCards("he") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h") > 0;
						})
					);
				},
				filterCard: true,
				position: "he",
				filterTarget(card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				check(card) {
					return 6 - get.value(card);
				},
				content() {
					"step 0";
					if (!target.countCards("h")) event.finish();
					else player.choosePlayerCard(target, "h", true);
					"step 1";
					player.showCards(result.cards);
					event.cards2 = result.cards;
					"step 2";
					target.$give(event.cards2, player, false);
					target.loseToSpecial(event.cards2, "asara_yingwei", player).visible = true;
					var card1 = cards[0],
						card2 = event.cards2[0];
					if (card1.suit == card2.suit) player.draw(4);
					if (card1.number == card2.number) player.recover(2);
				},
				ai: {
					order: 6,
					result: {
						target: -1,
					},
				},
			},
			asara_yingwei: {
				trigger: { player: "yingbian" },
				forced: true,
				filter: (event, player) =>
					event.card.isCard &&
					player.hasHistory(
						"lose",
						(evt) =>
							evt.getParent() == event &&
							Object.values(evt.gaintag_map).some((value) => value.includes("asara_yingwei"))
					),
				content: () => {
					trigger.forceYingbian = true;
				},
				ai: {
					combo: "asara_shelu"
				},
			},
			//国崎往人
			yukito_kongwu: {
				enable: "phaseUse",
				usable: 1,
				content() {
					"step 0";
					if (_status.connectMode) event.time = lib.configOL.choose_timeout;
					event.videoId = lib.status.videoId++;
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						game.pause();
						game.countChoose();
						setTimeout(function () {
							_status.imchoosing = false;
							event._result = {
								bool: true,
								score: get.rand(1, 5),
							};
							if (event.dialog) event.dialog.close();
							if (event.control) event.control.close();
							game.resume();
						}, 5000);
					};
					var createDialog = function (player, id) {
						if (_status.connectMode) lib.configOL.choose_timeout = "30";
						if (player == game.me) return;
						var str = get.translation(player) + "正在表演《小空飞天》...<br>";
						ui.create.dialog(str).videoId = id;
					};
					var chooseButton = function () {
						lib.skill.yufeng.$playFlappyBird(5, "小空飞天");
					};
					//event.switchToAuto=switchToAuto;
					game.broadcastAll(createDialog, player, event.videoId);
					if (event.isMine()) {
						chooseButton();
					} else if (event.isOnline()) {
						event.player.send(chooseButton);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					game.broadcastAll(
						function (id, time) {
							if (_status.connectMode) lib.configOL.choose_timeout = time;
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.close();
							}
						},
						event.videoId,
						event.time
					);
					var result = event.result || result;
					game.log(player, "获得了", "#g" + result.score + "分");
					if (!result.score) {
						player.chooseToDiscard(2, true, "he");
						event.finish();
						return;
					}
					var list = [];
					var list2 = [];
					for (var i = 0; i < 5; i++) {
						if (lib.skill.yukito_kongwu.moves[i].filter(player, true)) list.push(i);
						else list2.push(i);
					}
					if (list.length >= result.score) list = list.randomGets(result.score);
					else list.addArray(list2.randomGets(result.score - list.length));
					list.sort();
					var next = player.chooseButton([
						"控物：请选择一项",
						[
							list.map((i) => {
								return [i, lib.skill.yukito_kongwu.moves[i].prompt];
							}),
							"textbutton",
						],
					]);
					next.set("forced", true);
					next.set("filterButton", function (button) {
						return lib.skill.yukito_kongwu.moves[button.link].filter(_status.event.player);
					});
					next.set("ai", function (button) {
						if (lib.skill.yukito_kongwu.moves[button.link].filter(_status.event.player, true))
							return 1 + Math.random();
						return Math.random();
					});
					"step 2";
					var num = result.links[0];
					switch (num) {
						case 0:
							event.goto(3);
							break;
						case 1:
							event.goto(5);
							break;
						case 2:
							event.goto(7);
							break;
						case 3:
							event.goto(9);
							break;
						case 4:
							player.moveCard(true);
							event.finish();
							break;
					}
					"step 3";
					player.chooseTarget(true, "令一名角色摸四张牌").set("ai", function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards("h"));
						if (target.hasSkillTag("nogain")) att /= 10;
						return att;
					});
					"step 4";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.draw(4);
					}
					event.finish();
					"step 5";
					player.chooseTarget(true, "对一名角色造成2点伤害").set("ai", function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player);
					});
					"step 6";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.damage(2);
					}
					event.finish();
					"step 7";
					player
						.chooseTarget(true, "令一名已受伤的角色回复2点体力", function (card, player, target) {
							return target.isDamaged();
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.recoverEffect(target, player, player);
						});
					"step 8";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.recover(2);
					}
					event.finish();
					"step 9";
					player
						.chooseTarget(true, "弃置一名角色区域内的四张牌", function (card, player, target) {
							return target.countDiscardableCards(player, "hej") > 0;
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target);
						});
					"step 10";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						player.discardPlayerCard(target, "hej", true, 4);
					}
					event.finish();
				},
				moves: [
					{
						prompt: "令一名角色摸四张牌",
						filter: () => true,
					},
					{
						prompt: "对一名角色造成2点伤害",
						filter(player, ai) {
							if (!ai) return true;
							return game.hasPlayer(function (current) {
								return get.damageEffect(current, player, player) > 0;
							});
						},
					},
					{
						prompt: "令一名已受伤的角色回复2点体力",
						filter(player, ai) {
							return game.hasPlayer(function (current) {
								if (current.isDamaged())
									return !ai || get.recoverEffect(current, player, player) > 0;
							});
						},
					},
					{
						prompt: "弃置一名角色区域内的四张牌",
						filter(player, ai) {
							return game.hasPlayer(function (current) {
								return (
									current.countDiscardableCards(player, "hej", function (card) {
										if (!ai) return true;
										return (
											get.buttonValue({
												link: card,
											}) *
												get.attitude(player, current) >
											0
										);
									}) >= (ai ? 1 : Math.min(2, current.countDiscardableCards(player, "hej")))
								);
							});
						},
					},
					{
						prompt: "移动场上的一张牌",
						filter(player, ai) {
							return player.canMoveCard(ai);
						},
					},
				],
				ai: {
					order: 10,
					result: { player: 1 },
					threaten: 3.2,
				},
			},
			yukito_yaxiang: {
				unique: true,
				forceunique: true,
				enable: "chooseToUse",
				limited: true,
				filter(event, player) {
					return (
						event.type == "dying" &&
						(player.name1 == "key_yukito" || player.name2 == "key_yukito")
					);
				},
				filterTarget(card, player, target) {
					return target == _status.event.dying;
				},
				selectTarget: -1,
				skillAnimation: true,
				animationColor: "key",
				content() {
					"step 0";
					player.awakenSkill("yukito_yaxiang");
					player.reinitCharacter("key_yukito", "key_crow", false);
					"step 1";
					if (target.hp < 3) target.recover(3 - target.hp);
					"step 2";
					var cards = target.getCards("j");
					if (cards.length) target.discard(cards);
					"step 3";
					target.addSkills("misuzu_zhongyuan");
				},
				derivation: "misuzu_zhongyuan",
				ai: {
					save: true,
					order: 4,
					result: {
						target(player, target) {
							if (get.attitude(player, target) < 4) return false;
							if (
								player.countCards("h", function (card) {
									var mod2 = game.checkMod(
										card,
										player,
										"unchanged",
										"cardEnabled2",
										player
									);
									if (mod2 != "unchanged") return mod2;
									var mod = game.checkMod(
										card,
										player,
										target,
										"unchanged",
										"cardSavable",
										player
									);
									if (mod != "unchanged") return mod;
									var savable = get.info(card).savable;
									if (typeof savable == "function") savable = savable(card, player, target);
									return savable;
								}) >=
								1 - target.hp
							)
								return false;
							if (target == player || target == get.zhu(player)) return true;
							return !player.hasUnknown();
						},
					},
				},
			},
			misuzu_zhongyuan: {
				trigger: { player: "judge" },
				skillAnimation: true,
				animationColor: "key",
				logTarget: "player",
				cost() {
					"step 0";
					var str =
						"你的" +
						(trigger.judgestr || "") +
						"判定为" +
						get.translation(trigger.player.judging[0]) +
						"，是否发动【终愿】修改判定结果？";
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						_status.imchoosing = false;
						event._result = {
							bool: false,
						};
						if (event.dialog) event.dialog.close();
						if (event.control) event.control.close();
					};
					var chooseButton = function (player, str) {
						var event = _status.event;
						player = player || event.player;
						if (!event._result) event._result = {};
						var dialog = ui.create.dialog(str, "forcebutton", "hidden");
						event.dialog = dialog;
						dialog.addText("花色");
						var table = document.createElement("div");
						table.classList.add("add-setting");
						table.style.margin = "0";
						table.style.width = "100%";
						table.style.position = "relative";
						var listi = ["spade", "heart", "club", "diamond"];
						for (var i = 0; i < listi.length; i++) {
							var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
							td.link = listi[i];
							table.appendChild(td);
							td.innerHTML = "<span>" + get.translation(listi[i]) + "</span>";
							td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								var current = this.parentNode.querySelector(".bluebg");
								if (current) {
									current.classList.remove("bluebg");
								}
								this.classList.add("bluebg");
								event._result.suit = link;
							});
						}
						dialog.content.appendChild(table);
						dialog.addText("点数");
						var table2 = document.createElement("div");
						table2.classList.add("add-setting");
						table2.style.margin = "0";
						table2.style.width = "100%";
						table2.style.position = "relative";
						for (var i = 1; i < 14; i++) {
							var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
							td.link = i;
							table2.appendChild(td);
							var num = i;
							td.innerHTML = "<span>" + get.strNumber(num) + "</span>";
							td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								var current = this.parentNode.querySelector(".bluebg");
								if (current) {
									current.classList.remove("bluebg");
								}
								this.classList.add("bluebg");
								event._result.number = link;
							});
						}
						dialog.content.appendChild(table2);
						dialog.add("　　");
						event.dialog.open();
						event.switchToAuto = function () {
							event._result = {
								bool: false,
							};
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing = false;
						};
						event.control = ui.create.control("ok", "cancel2", function (link) {
							var result = event._result;
							if (link == "cancel2") result.bool = false;
							else {
								if (!result.number || !result.suit) return;
								result.bool = true;
							}
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing = false;
						});
						for (var i = 0; i < event.dialog.buttons.length; i++) {
							event.dialog.buttons[i].classList.add("selectable");
						}
						game.pause();
						game.countChoose();
					};
					if (event.isMine()) {
						chooseButton(player, str);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, event.player, str);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					var map = event.result || result;
					if (map.bool) {
						event.result = {
							bool: true,
							cost_data: map,
						};
					}
				},
				async content(event, trigger, player) {
					var map = event.cost_data;
					player.awakenSkill("misuzu_zhongyuan");
					game.log(
						player,
						"将判定结果修改为了",
						"#g" + get.translation(map.suit + 2) + get.strNumber(map.number)
					);
					trigger.fixedResult = {
						suit: map.suit,
						color: get.color({ suit: map.suit }),
						number: map.number,
					};
					player.popup(get.translation(map.suit + 2) + get.strNumber(map.number), "thunder");
					event.getParent("arrangeTrigger").finish();
				},
			},
			//凤千早
			chihaya_liewu: {
				mod: {
					cardUsable(card) {
						if (card.name == "sha") return Infinity;
					},
					targetInRange(card) {
						if (card.name == "sha") return true;
					},
				},
				trigger: { player: "useCard2" },
				filter(event, player) {
					var card = event.card;
					var info = get.info(card);
					if (info.type != "trick" || info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return (
									!event.targets.includes(current) &&
									lib.filter.targetEnabled2(card, player, current)
								);
							})
						) {
							return true;
						}
					}
					return false;
				},
				async cost(event, trigger, player) {
					var prompt2 = "为" + get.translation(trigger.card) + "增加一个目标";
					event.result = await player
						.chooseTarget(get.prompt("chihaya_liewu"), function (card, player, target) {
							var player = _status.event.player;
							return (
								!_status.event.targets.includes(target) &&
								lib.filter.targetEnabled2(_status.event.card, player, target)
							);
						})
						.set("prompt2", prompt2)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.set("card", trigger.card)
						.set("targets", trigger.targets)
						.forResult();
				},
				autodelay: true,
				async content(event, trigger, player) {
					trigger.targets.addArray(event.targets);
					game.log(event.targets, "也成为了", trigger.card, "的目标");
				},
			},
			chihaya_huairou: {
				trigger: { player: "damageBefore" },
				forced: true,
				filter(event, player) {
					return !event.nature;
				},
				content() {
					trigger.cancel();
				},
				ai: {
					nodamage: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, "damage") && !get.tag(card, "natureDamage")) return [0, 0];
						},
					},
				},
				group: "chihaya_huairou_counter",
			},
			chihaya_huairou_counter: {
				trigger: { player: ["useCard", "respond"] },
				forced: true,
				filter(event, player) {
					if (_status.currentPhase == player) return false;
					var card = event.card;
					if (card.name != "shan" && card.name != "wuxie" && card.name != "sha") return false;
					return true;
				},
				async content(event, trigger, player) {
					var source;
					if (trigger.card.name == "shan") {
						// 闪的响应来源是杀的使用者
						if (trigger.respondTo) {
							source = trigger.respondTo[0];
						} else if (trigger.source) {
							source = trigger.source;
						}
					} else if (trigger.card.name == "sha") {
						// 杀响应南蛮入侵/万箭齐发，来源是锦囊使用者
						if (trigger.respondTo) {
							source = trigger.respondTo[0];
						} else if (trigger.source) {
							source = trigger.source;
						} else {
							// 通过事件链向上查找 useCard 事件获取玩家
							var evt = trigger.getParent();
							while (evt) {
								if (evt.name == "useCard" && evt.card && (evt.card.name == "nanman" || evt.card.name == "wanjian")) {
									source = evt.player;
									break;
								}
								evt = evt.parent;
							}
						}
					} else if (trigger.card.name == "wuxie") {
						// 无懈可击的响应来源是被无懈的牌的使用者
						var evt = trigger.getParent();
						while (evt && evt.name != "_wuxie") {
							evt = evt.parent;
						}
						if (evt && evt._info_map && evt._info_map.player) {
							source = evt._info_map.player;
						}
					}
					if (source && source != player) {
						await source.damage(2, "thunder", player);
					}
				},
			},
			//七濑留美
			rumi_shuwu: {
				mod: {
					cardUsable(card) {
						if (card.name == "sha") return Infinity;
					},
					targetInRange(card) {
						if (card.name == "sha") return true;
					},
				},
				trigger: { player: "useCard2" },
				filter(event, player) {
					var card = event.card;
					var info = get.info(card);
					if (info.type != "trick" || info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return (
									!event.targets.includes(current) &&
									lib.filter.targetEnabled2(card, player, current)
								);
							})
						) {
							return true;
						}
					}
					return false;
				},
				autodelay: true,
				async cost(event, trigger, player) {
					var prompt2 = "为" + get.translation(trigger.card) + "增加一个目标";
					const { result } = await player
						.chooseTarget(get.prompt("rumi_shuwu"), function (card, player, target) {
							var player = _status.event.player;
							return (
								!_status.event.targets.includes(target) &&
								lib.filter.targetEnabled2(_status.event.card, player, target)
							);
						})
						.set("prompt2", prompt2)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.set("card", trigger.card)
						.set("targets", trigger.targets);
					event.result = result;
				},
				content() {
					trigger.targets.addArray(event.targets);
					game.log(event.targets, "也成为了", trigger.card, "的目标");
				},
				group: "rumi_shuwu2",
			},
			rumi_shuwu2: {
				trigger: { player: "phaseUseEnd" },
				forced: true,
				filter(event, player) {
					if (player.hp <= 3) return true;
					if (
						player.getHistory("useCard", function (evt) {
							return (
								evt.card.name == "sha" &&
								evt.addCount !== false &&
								evt.getParent("phaseUse") == event
							);
						}).length <= 1
					)
						return true;
					if (
						player.getHistory("sourceDamage", function (evt) {
							return get.type(evt.card, null, false) == "trick" && evt.getParent("phaseUse") == event;
						}).length == 0
					)
						return true;
					return false;
				},
				content() {
					var num = 0;
					if (player.hp <= 3) num++;
					if (
						player.getHistory("useCard", function (evt) {
							return (
								evt.card.name == "sha" &&
								evt.addCount !== false &&
								evt.getParent("phaseUse") == trigger
							);
						}).length <= 1
					)
						num++;
					if (
						player.getHistory("sourceDamage", function (evt) {
							return get.type(evt.card, null, false) == "trick" && evt.getParent("phaseUse") == trigger;
						}).length == 0
					)
						num++;
					player.draw(num);
					player.addTempSkill("rumi_shuwu3");
					player.addMark("rumi_shuwu3", num, false);
				},
			},
			rumi_shuwu3: {
				mod: {
					maxHandcard(player, num) {
						return num + player.countMark("rumi_shuwu3");
					},
				},
				onremove: true,
			},
			//凤咲夜
			sakuya_junbu: {
				mod: {
					targetInRange(card, player) {
						if (player.countDisabledSlot() >= 1) return true;
					},
					cardUsable(card, player) {
						if (player.countDisabledSlot() >= 2) return Infinity;
					},
				},
				trigger: { player: "useCard2" },
				filter(event, player) {
					if (player.countDisabledSlot() >= 4) return true;
					return lib.skill.sakuya_junbu.filter2.apply(this, arguments);
				},
				filter2(event, player) {
					if (player.countDisabledSlot() < 3) return false;
					var card = event.card;
					var info = get.info(card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return (
									!event.targets.includes(current) &&
									lib.filter.targetEnabled2(card, player, current)
								);
							})
						) {
							return true;
						}
					}
					return false;
				},
				async cost(event, trigger, player) {
					const result = { bool: false };
					event.result = result;
					if (player.countDisabledSlot() >= 4) {
						result.bool = true;
						if (!lib.skill.sakuya_junbu.filter2(trigger, player)) {
							return;
						}
					}
					var prompt2 = "为" + get.translation(trigger.card) + "增加一个目标";
					const { result: result2 } = await player
						.chooseTarget(get.prompt("sakuya_junbu"), function (card, player, target) {
							var player = _status.event.player;
							return (
								!_status.event.targets.includes(target) &&
								lib.filter.targetEnabled2(_status.event.card, player, target)
							);
						})
						.set("prompt2", prompt2)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.set("card", trigger.card)
						.set("targets", trigger.targets);
					if (result2.bool) {
						result.bool = true;
						result.targets = result2.targets;
					}
				},
				async content(event, trigger, player) {
					if (player.countDisabledSlot() >= 4) {
						trigger.directHit.addArray(game.players);
						game.log(trigger.card, "不可被响应");
					}
					if (event.targets && event.targets.length > 0) {
						trigger.targets.addArray(event.targets);
						game.log(event.targets, "也成为了", trigger.card, "的目标");
					}
				},
				group: "sakuya_junbu_damage",
				subSkill: {
					damage: {
						trigger: { source: "damageBegin1" },
						forced: true,
						sub: true,
						filter(event, player) {
							return !player.hasEnabledSlot() && event.getParent().type == "card";
						},
						logTarget: "player",
						content() {
							player.loseHp();
							trigger.num++;
						},
					},
				},
				ai: {
					combo: "youlong"
				},
			},
			//铃木央人
			hiroto_huyu: {
				trigger: { global: "phaseUseEnd" },
				noHidden: true,
				filter(event, player) {
					return (
						player != event.player &&
						player.hasSkill("hiroto_huyu") &&
						!player.hasSkill("hiroto_zonglve") &&
						event.player.countCards("h") > 0
					);
				},
				async cost(event, trigger, player) {
					event.result = await trigger.player
						.chooseCard(
							2,
							"h",
							"是否对" + get.translation(player) + "发动【虎驭】？",
							"将两张手牌交给该角色，然后令其获得〖纵略〗并于下回合获得该角色得到的所有牌"
						)
						.set(
							"goon",
							(function () {
								var source = trigger.player;
								if (get.attitude(source, player) > 0) return 7;
								if (source.hp > 2) return 4;
								return 0;
							})()
						)
						.set("ai", function (card) {
							return _status.event.goon - get.value(card);
						})
						.forResult();
				},
				content() {
					var target = trigger.player;
					target.give(cards, player);
					player.storage.hiroto_huyu2 = target;
					player.addSkills("hiroto_zonglve");
					player.addSkill("hiroto_huyu2");
				},
				derivation: "hiroto_zonglve",
			},
			hiroto_huyu2: {
				trigger: { player: "phaseEnd" },
				forced: true,
				popup: false,
				charlotte: true,
				async content(event, trigger, player) {
					player.removeSkill("hiroto_huyu2");
					await player.removeSkills("hiroto_zonglve");
					player.removeGaintag("hiroto_huyu2");
					var target = player.storage.hiroto_huyu2;
					if (target && target.isIn()) {
						var cards = [];
						player.getHistory("gain", function (evt) {
							cards.addArray(evt.cards);
						});
						var he = player.getCards("he");
						cards = cards.filter(function (card) {
							return he.includes(card);
						});
						if (cards.length) target.gain(cards, player, "giveAuto", "bySelf");
					}
				},
				mark: "character",
				intro: { content: "已成为$的工具人" },
				group: "hiroto_huyu_gain",
			},
			hiroto_huyu_gain: {
				trigger: { player: "gainBegin" },
				silent: true,
				filter(event, player) {
					if (player == _status.currentPhase) event.gaintag.add("hiroto_huyu2");
					return false;
				},
			},
			hiroto_zonglve: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return (
						player.countCards("h") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h") > 0;
						})
					);
				},
				filterTarget(card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				filterCard: true,
				delay: false,
				charlotte: true,
				position: "h",
				discard: false,
				lose: false,
				content() {
					"step 0";
					player.choosePlayerCard(true, target, "h");
					"step 1";
					event.card = result.cards[0];
					player.$compare(cards[0], target, event.card);
					game.log(player, "展示了", cards[0]);
					game.log(target, "展示了", event.card);
					game.delay(3.5);
					"step 2";
					game.broadcastAll(ui.clear);
					if (get.color(cards[0], player) == get.color(card, target)) {
						target.damage("nocard");
						target.discard(card).animate = false;
					} else player.gainPlayerCard(target, true, 2, "hej");
				},
				mod: {
					maxHandcard(player, num) {
						return num + 3;
					},
				},
				ai: {
					order: 7,
					result: {
						target: -1,
					},
				},
			},
			hiroto_tuolao: {
				trigger: { player: "phaseAfter" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "water",
				filter(event, player) {
					return (
						player.phaseNumber > 1 &&
						!player.getHistory("lose", function (evt) {
							return evt.getParent(2).name == "hiroto_huyu2";
						}).length
					);
				},
				content() {
					player.awakenSkill("hiroto_tuolao");
					player.draw(3);
					player.changeSkills(["hiroto_zonglve"], ["hiroto_huyu"]);
				},
			},
			//水织静久
			shizuku_sizhi: {
				audio: 2,
				enable: "phaseUse",
				getResult(cards) {
					var l = cards.length;
					var all = Math.pow(l, 2);
					var list = [];
					for (var i = 1; i < all; i++) {
						var array = [];
						for (var j = 0; j < l; j++) {
							if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0)
								array.push(cards[j]);
						}
						var num = 0;
						for (var k of array) {
							num += get.number(k);
						}
						if (num == 13) list.push(array);
					}
					if (list.length) {
						list.sort(function (a, b) {
							if (a.length != b.length) return b.length - a.length;
							return get.value(a) - get.value(b);
						});
						return list[0];
					}
					return list;
				},
				usable: 1,
				filterCard(card) {
					var num = 0;
					for (var i = 0; i < ui.selected.cards.length; i++) {
						num += get.number(ui.selected.cards[i]);
					}
					return get.number(card) + num <= 13;
				},
				complexCard: true,
				selectCard() {
					var num = 0;
					for (var i = 0; i < ui.selected.cards.length; i++) {
						num += get.number(ui.selected.cards[i]);
					}
					if (num == 13) return ui.selected.cards.length;
					return ui.selected.cards.length + 2;
				},
				check(card) {
					var evt = _status.event;
					if (!evt.shizuku_sizhi_choice)
						evt.shizuku_sizhi_choice = lib.skill.shizuku_sizhi.getResult(
							evt.player.getCards("he")
						);
					if (!evt.shizuku_sizhi_choice.includes(card)) return 0;
					return 1;
				},
				position: "he",
				content() {
					player.draw(cards.length * 2).gaintag = ["shizuku_sizhi2"];
					player.addTempSkill("shizuku_sizhi2");
				},
				ai: {
					order: 5,
					result: { player: 1 },
				},
			},
			shizuku_sizhi2: {
				onremove(player) {
					player.removeGaintag("shizuku_sizhi2");
				},
				mod: {
					targetInRange(card) {
						if (!card.cards || !card.cards.length) return;
						for (var i of card.cards) {
							if (!i.hasGaintag("shizuku_sizhi2") || get.color(i) != "black") return;
						}
						return true;
					},
					cardUsable(card) {
						if (!card.cards || !card.cards.length) return;
						for (var i of card.cards) {
							if (!i.hasGaintag("shizuku_sizhi2") || get.color(i) != "black") return;
						}
						return Infinity;
					},
					ignoredHandcard(card, player) {
						if (card.hasGaintag("shizuku_sizhi2") && get.color(card) == "red") {
							return true;
						}
					},
					cardDiscardable(card, player, name) {
						if (
							name == "phaseDiscard" &&
							card.hasGaintag("shizuku_sizhi2") &&
							get.color(card) == "red"
						) {
							return false;
						}
					},
					aiOrder(player, card, num) {
						if (
							get.itemtype(card) == "card" &&
							card.hasGaintag("shizuku_sizhi2") &&
							get.color(card) == "black"
						)
							return num - 0.1;
					},
				},
			},
			shizuku_biyi: {
				trigger: { player: "damageEnd" },
				frequent: true,
				content() {
					"step 0";
					player.judge();
					"step 1";
					var num = result.number;
					var next = player.chooseToDiscard(
						"是否弃置任意张点数之和为" + get.cnNumber(num) + "的牌并回复1点体力？",
						function (card) {
							var num = 0;
							for (var i = 0; i < ui.selected.cards.length; i++) {
								num += get.number(ui.selected.cards[i]);
							}
							return get.number(card) + num <= _status.event.num;
						},
						"he"
					);
					next.set("num", num);
					next.set("complexCard", true);
					next.set("selectCard", function () {
						var num = 0;
						for (var i = 0; i < ui.selected.cards.length; i++) {
							num += get.number(ui.selected.cards[i]);
						}
						if (num == _status.event.num) return ui.selected.cards.length;
						return ui.selected.cards.length + 2;
					});
					next.set(
						"cardResult",
						(function () {
							var cards = player.getCards("he");
							var l = cards.length;
							var all = Math.pow(l, 2);
							var list = [];
							for (var i = 1; i < all; i++) {
								var array = [];
								for (var j = 0; j < l; j++) {
									if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0)
										array.push(cards[j]);
								}
								var numx = 0;
								for (var k of array) {
									numx += get.number(k);
								}
								if (numx == num) list.push(array);
							}
							if (list.length) {
								list.sort(function (a, b) {
									return get.value(a) - get.value(b);
								});
								return list[0];
							}
							return list;
						})()
					);
					next.set("ai", function (card) {
						if (!_status.event.cardResult.includes(card)) return 0;
						return 6 - get.value(card);
					});
					"step 2";
					if (result.bool) player.recover(2); player.draw(4);
				},
			},
			shizuku_sanhua: {
				trigger: { player: "die" },
				forceDie: true,
				skillAnimation: true,
				animationColor: "thunder",
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("shizuku_sanhua"), lib.filter.notMe)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					var target = event.targets[0];
					var names = [];
					var cards = [];
					while (cards.length < 4) {
						var card = get.cardPile2(function (card) {
							return (
								!cards.includes(card) &&
								!names.includes(card.name) &&
								get.type(card) == "basic"
							);
						});
						if (card) {
							cards.push(card);
							names.push(card.name);
						} else break;
					}
					if (cards.length) await target.gain(cards, "gain2");
				},
			},
			//鸣濑白羽
			shiroha_yuzhao: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content() {
					player.addToExpansion(get.cards(game.countGroup()), "draw").gaintag.add("shiroha_yuzhao");
				},
				marktext: "兆",
				intro: {
					markcount: "expansion",
					mark(dialog, content, player) {
						var content = player.getExpansions("shiroha_yuzhao");
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								dialog.addAuto(content);
							} else {
								return "共有" + get.cnNumber(content.length) + "张牌";
							}
						}
					},
					content(content, player) {
						var content = player.getExpansions("shiroha_yuzhao");
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								return get.translation(content);
							}
							return "共有" + get.cnNumber(content.length) + "张牌";
						}
					},
				},
				group: "shiroha_yuzhao_umi",
			},
			shiroha_yuzhao_umi: {
				trigger: { global: "phaseBegin" },
				forced: true,
				filter(event, player) {
					return (
						player.getExpansions("shiroha_yuzhao").length > 0 &&
						get.distance(event.player, player) <= 1
					);
				},
				content() {
					"step 0";
					event.num = game.countGroup();
					player.addToExpansion(get.cards(event.num)).gaintag.add("shiroha_yuzhao");
					"step 1";
					var next = player.chooseToMove(),
						num = game.countGroup();
					next.set("prompt", "预兆：将" + get.cnNumber(num) + "张牌置于牌堆顶");
					next.set("num", num);
					next.set("forced", true);
					next.set("filterOk", function (moved) {
						return moved[1].length == _status.event.num;
					});
					next.set("filterMove", function (from, to, moved) {
						if (to != 1) return true;
						return moved[1].length < _status.event.num;
					});
					next.set("list", [
						[get.translation(player) + "（你）的“兆”", player.getExpansions("shiroha_yuzhao")],
						["牌堆顶"],
					]);
					next.set("processAI", function (list) {
						var cards = list[0][1],
							cards2 = cards.randomRemove(_status.event.num);
						return [cards, cards2];
					});
					"step 2";
					if (result && result.bool) {
						var cards = result.moved[1];
						player.lose(cards, ui.cardPile, "insert");
					}
					game.updateRoundNumber();
				},
			},
			shiroha_guying: {
				derivation: "shiroha_guying_rewrite",
				trigger: {
					player: "damageBegin3",
					source: "damageBegin1",
				},
				filter(event, player, name) {
					if (!player.storage.shiroha_jiezhao && player.hasSkill("shiroha_guying_temp"))
						return false;
					if (name == "damageBegin3") return true;
					return player != event.player;
				},
				locked(skill, player) {
					if (!player || !player.storage.shiroha_jiezhao) return true;
					return false;
				},
				cost() {
					"step 0";
					var num = event.triggername == "damageBegin3" ? -1 : 1;
					if (player.storage.shiroha_jiezhao || !player.hasSkill("shiroha_guying")) {
						if (num > 0)
							player.chooseBool(
								get.prompt("shiroha_guying", trigger.player),
								"进行判定。若判定结果为黑色，则即将对其造成的伤害+1"
							);
						else
							player.chooseBool(
								get.prompt("shiroha_guying"),
								"进行判定。若判定结果为红色，则即将受到的伤害-1"
							);
					} else event._result = { bool: true };
					"step 1";
					event.result = result;
				},
				content() {
					"step 0";
					var num = event.triggername == "damageBegin3" ? -1 : 1;
					event.num = num;
					player.addTempSkill("shiroha_guying_temp");
					player.judge(function (card) {
						return get.color(card) ==
							(_status.event.getParent("shiroha_guying").num > 0 ? "black" : "red")
							? 2
							: 0;
					}).judge2 = function (result) {
						return result.bool ? true : false;
					};
					"step 1";
					if (result.bool) trigger.num += num;
				},
			},
			shiroha_guying_temp: { charlotte: true },
			shiroha_jiezhao: {
				trigger: { global: "judge" },
				filter(event, player) {
					return player.getExpansions("shiroha_yuzhao").length && event.player.isIn();
				},
				async cost(event, trigger, player) {
					const list = player.getExpansions("shiroha_yuzhao");
					const { result } = await player
						.chooseButton(
							[
								get.translation(trigger.player) +
									"的" +
									(trigger.judgestr || "") +
									"判定为" +
									get.translation(trigger.player.judging[0]) +
									"，" +
									get.prompt("shiroha_jiezhao"),
								list,
								"hidden",
							],
							function (button) {
								var card = button.link;
								var trigger = _status.event.getTrigger();
								var player = _status.event.player;
								var judging = _status.event.judging;
								var result = trigger.judge(card) - trigger.judge(judging);
								var attitude = get.attitude(player, trigger.player);
								return result * attitude;
							}
						)
						.set("judging", trigger.player.judging[0])
						.set("filterButton", function (button) {
							var player = _status.event.player;
							var card = button.link;
							var mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
							if (mod2 != "unchanged") return mod2;
							var mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
							if (mod != "unchanged") return mod;
							return true;
						});
					if (result.bool) {
						event.result = { bool: true, cards: result.links };
					}
				},
				//logSkill留给respond
				popup: false,
				async content(event, trigger, player) {
					const cards = event.cards;
					await player.respond(cards, "shiroha_jiezhao", "highlight", "noOrdering");
					if (trigger.player.judging[0].clone) {
						trigger.player.judging[0].clone.classList.remove("thrownhighlight");
						game.broadcast(function (card) {
							if (card.clone) {
								card.clone.classList.remove("thrownhighlight");
							}
						}, trigger.player.judging[0]);
						game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
					}
					const oldJudgeCard = trigger.player.judging[0];
					trigger.player.judging[0] = cards[0];
					trigger.orderingCards.addArray(cards);
					game.log(trigger.player, "的判定牌改为", cards[0]);
					await game.cardsDiscard(oldJudgeCard);
					await game.asyncDelay(2);
					if (!player.getExpansions("shiroha_yuzhao").length) {
						player.storage.shiroha_jiezhao = true;
						player.gainMaxHp();
						player.recover();
						player.addSkill('umi_chaofan');
						player.addSkill('ao_xishi');
						player.addSkill('tsumugi_mugyu');
						player.addSkill('kamome_jieban');
						player.addSkill('mia_shihui');
					}
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 0.6,
					},
					combo: "shiroha_yuzhao"
				},
				derivation: ["umi_chaofan", "ao_xishi", "tsumugi_mugyu", "kamome_jieban"],
			},
			//高城丈士朗
			jojiro_shensu: {
				group: ["jojiro_shensu1", "jojiro_shensu2", "jojiro_shensu4"],
				charlotte: true,
			},
			jojiro_shensu1: {
				trigger: { player: "phaseJudgeBefore" },
				async cost(event, trigger, player) {
					const check = player.countCards("h") > 2;
					event.result = await player
						.chooseTarget(
							get.prompt("jojiro_shensu"),
							"跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】",
							function (card, player, target) {
								if (player == target) return false;
								return player.canUse({ name: "sha" }, target, false);
							}
						)
						.set("check", check)
						.set("ai", function (target) {
							if (!_status.event.check) return 0;
							return get.effect(target, { name: "sha" }, _status.event.player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					trigger.cancel();
					player.skip("phaseDraw");
					await player.useCard({ name: "sha", isCard: true }, event.targets[0], false);
				},
			},
			jojiro_shensu2: {
				trigger: { player: "phaseUseBefore" },
				filter(event, player) {
					return player.countCards("he", { type: "equip" }) > 0;
				},
				async cost(event, trigger, player) {
					const check = player.needsToDiscard();
					event.result = await player
						.chooseCardTarget({
							prompt: get.prompt("jojiro_shensu"),
							prompt2: "弃置一张装备牌并跳过出牌阶段，视为对一名其他角色使用一张【杀】",
							filterCard(card, player) {
								return get.type(card) == "equip" && lib.filter.cardDiscardable(card, player);
							},
							position: "he",
							filterTarget(card, player, target) {
								if (player == target) return false;
								return player.canUse({ name: "sha" }, target, false);
							},
							ai1(card) {
								if (_status.event.check) return 0;
								return 6 - get.value(card);
							},
							ai2(target) {
								if (_status.event.check) return 0;
								return get.effect(target, { name: "sha" }, _status.event.player);
							},
							check: check,
						})
						.forResult();
				},
				async content(event, trigger, player) {
					trigger.cancel();
					await player.discard(event.cards[0]);
					await player.useCard({ name: "sha", isCard: true }, event.targets[0]);
				},
			},
			jojiro_shensu4: {
				trigger: { player: "phaseDiscardBefore" },
				async cost(event, trigger, player) {
					var check =
						player.needsToDiscard() ||
						player.isTurnedOver() ||
						(player.hasSkill("shebian") && player.canMoveCard(true, true));
					event.result = await player
						.chooseTarget(
							get.prompt("jojiro_shensu"),
							"跳过弃牌阶段并将武将牌翻面，视为对一名其他角色使用一张【杀】",
							function (card, player, target) {
								if (player == target) return false;
								return player.canUse({ name: "sha" }, target, false);
							}
						)
						.set("check", check)
						.set("ai", function (target) {
							if (!_status.event.check) return 0;
							return get.effect(
								target,
								{ name: "sha" },
								_status.event.player,
								_status.event.player
							);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					trigger.cancel();
					await player.turnOver();
					await player.useCard({ name: "sha", isCard: true }, event.targets[0], false);
				},
			},
			jojiro_s: {
				trigger: { player: "phaseEnd" },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return player.getHistory("skipped").length > 0;
				},
				content() {
					"step 0";
					var num = player.getHistory("skipped").length;
					event.num = num;
					player.chooseToMoveChess(num, "瞬影：移动至多" + get.cnNumber(num) + "格或失去1点体力");
					"step 1";
					if (!result.bool) player.loseHp();
					else player.draw(num);
				},
			},
			//神户小鸟
			kotori_yumo: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				derivation: ["kotori_skill_wei", "kotori_skill_shu", "kotori_skill_wu", "kotori_skill_qun", "kotori_skill_jin", "kotori_skill_key"],
				content() {
					var list = ["wei", "shu", "wu", "qun", "jin"];
					for (var i of list) {
						if (!player.hasMark("kotori_yumo_" + i)) {
							player.addMark("kotori_yumo_" + i, 2, false);
							game.log(
								player,
								"获得了一个",
								lib.translate["kotori_yumo_" + i].replace(/魔物/g, "【魔物】")
							);
						}
					}
				},
				group: ["kotori_yumo_damage", "kotori_yumo_gain"],
			},
			kotori_yumo_damage: {
				trigger: { global: "damageEnd" },
				forced: true,
				filter(event, player) {
					var name = "kotori_yumo_" + event.player.group;
					return lib.skill[name] && !player.hasMark(name);
				},
				popup: false,
				content() {
					game.log(player, "对", trigger.player, "发动了", "#g【驭魔】");
					var group = trigger.player.group;
					player.popup("驭魔", get.groupnature(group));
					player.addMark("kotori_yumo_" + group, 1, false);
					game.log(
						player,
						"获得了一个",
						lib.translate["kotori_yumo_" + group].replace(/魔物/g, "【魔物】")
					);
				},
			},
			kotori_yumo_gain: {
				trigger: { player: "phaseBegin" },
				filter(event, player) {
					var list = ["wei", "shu", "wu", "qun", "key", "jin"];
					for (var i in list) {
						if (player.hasMark("kotori_yumo_" + list[i])) return true;
					}
					return false;
				},
				async cost(event, trigger, player) {
					const list = ["wei", "shu", "wu", "qun", "key", "jin"];
					const list2 = [];
					for (const i of list) {
						if (player.hasMark("kotori_yumo_" + i)) list2.push("kotori_skill_" + i);
					}
					list2.push("cancel2");
					const { control } = await player
						.chooseControl(list2)
						.set(
							"prompt",
							"###是否发动【驭魔】？###弃置对应的标记并获得下列技能中的一个，或点取消，不获得技能"
						)
						.set(
							"choice",
							(function () {
								if (
									list2.includes("kotori_skill_shu") &&
									player.countCards("h", function (card) {
										return (
											get.name(card, player) == "sha" && player.getUseValue(card) > 0
										);
									}) > 1
								)
									return "kotori_skill_shu";
								if (list2.includes("kotori_skill_key") && player.hp > 1)
									return "kotori_skill_key";
								if (
									list2.includes("kotori_skill_qun") &&
									player.isDamaged() &&
									player.needsToDiscard() > 1
								)
									return "kotori_skill_qun";
								return "cancel2";
							})()
						)
						.set("ai", function () {
							return _status.event.choice;
						})
						.forResult();
					event.result = {
						bool: control !== "cancel2",
						cost_data: { control },
					};
				},
				content() {
					const result = event.cost_data;
					if (result.control != "cancel2") {
						var name = "kotori_yumo_" + result.control.slice(13);
						player.removeMark(name, 1, false);
						game.log(player, "移去了一个", lib.translate[name].replace(/魔物/g, "【魔物】"));
						player.addSkills(result.control);
						game.log(
							player,
							"获得了技能",
							lib.translate[name].replace(
								/魔物/g,
								"【" + get.translation(result.control) + "】"
							)
						);
					}
				},
			},
			kotori_skill_wei: {
				trigger: { player: "phaseBegin" },
				filter(event, player) {
					return player.countCards("he") > 0;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCardTarget({
							prompt: get.prompt2(event.skill),
							filterCard: lib.filter.cardDiscardable,
							filterTarget(card, player, target) {
								return player != target;
							},
							position: "he",
							ai1(card) {
								return 6 - get.value(card);
							},
							ai2(target) {
								return (
									(1 / (1 + target.countCards("he"))) *
									-get.attitude(_status.event.player, target)
								);
							},
						})
						.forResult();
				},
				content() {
					"step 0";
					player.draw(2);
					targets[0].chooseToDiscard(
						"弃置四张牌，或令" + get.translation(player) + "摸四张牌",
						"he"
					).ai = lib.skill.zhiheng.check;
					"step 1";
					if (!result.bool) player.draw(4);
				},
			},
			kotori_skill_shu: {
				mod: {
					cardUsable(card, player, num) {
						if (card.name == "sha") return num + 4;
					},
				},
				trigger: { player: "phaseUseEnd" },
				forced: true,
				filter(event, player) {
					return (
						player.getHistory("useCard", function (evt) {
							return evt.card && evt.card.name == "sha" && evt.getParent("phaseUse") == event;
						}).length > 0
					);
				},
				content() {
					player.draw(2);
				},
			},
			kotori_skill_wu: {
				trigger: { player: "phaseEnd" },
				forced: true,
				filter(event, player) {
					return player.countCards("h") != player.hp;
				},
				content() {
					player.draw(2);
				},
			},
			kotori_skill_qun: {
				trigger: { player: "phaseDiscardBegin" },
				forced: true,
				filter(event, player) {
					return player.getDamagedHp() > 1 || player.countCards("h") - player.getHp() > 1;
				},
				content() {
					var num = 0;
					if (player.getDamagedHp() > 1) num++;
					if (player.countCards("h") - player.getHp() > 1) num++;
					player.addMark("kotori_qunxin_temp", num, false);
					player.addTempSkill("kotori_qunxin_temp", "phaseDiscardEnd");
				},
			},
			kotori_skill_key: {
				enable: "phaseUse",
				usable: 1,
				content() {
					"step 0";
					player.draw(2);
					"step 1";
					player.changeHujia(4);
					"step 2";
					var evt = event.getParent("phase");
					if (evt && evt.after) {
						var next = player.recover();
						event.next.remove(next);
						evt.after.push(next);
					}
				},
				ai: {
					order: 10,
					result: {
						player(player) {
							return player.hp + 1;
						},
					},
				},
			},
			kotori_skill_jin: {
				trigger: { player: "phaseDrawEnd" },
				filter(event, player) {
					var hs = player.getCards("h");
					return (
						hs.length > 0 &&
						player.getHistory("gain", function (evt) {
							if (evt.getParent().name != "draw" || evt.getParent("phaseDraw") != event)
								return false;
							for (var i of evt.cards) {
								if (hs.includes(i)) return true;
							}
							return false;
						}).length > 0
					);
				},
				check(event, player) {
					var hs = player.getCards("h"),
						cards = [],
						suits = [];
					player.getHistory("gain", function (evt) {
						if (evt.getParent().name != "draw" || evt.getParent("phaseDraw") != event)
							return false;
						for (var i of evt.cards) {
							if (hs.includes(i)) {
								cards.add(i);
								suits.add(get.suit(i, player));
							}
						}
					});
					return cards.length == suits.length;
				},
				content() {
					var hs = player.getCards("h"),
						cards = [],
						suits = [];
					player.getHistory("gain", function (evt) {
						if (evt.getParent().name != "draw" || evt.getParent("phaseDraw") != trigger)
							return false;
						for (var i of evt.cards) {
							if (hs.includes(i)) {
								cards.add(i);
								suits.add(get.suit(i, player));
							}
						}
					});
					player.showCards(cards, get.translation(player) + "发动了【晋势】");
					if (cards.length == suits.length) player.draw(2);
				},
			},
			kotori_qunxin_temp: {
				onremove: true,
				mod: {
					maxHandcard(player, num) {
						return num + player.countMark("kotori_qunxin_temp");
					},
				},
			},
			kotori_yumo_wei: {
				marktext: '<span class="thundertext">魔</span>',
				intro: {
					name: '<span class="thundertext">魔物</span>',
					content: "mark",
				},
			},
			kotori_yumo_shu: {
				marktext: '<span class="firetext">魔</span>',
				intro: {
					name: '<span class="firetext">魔物</span>',
					content: "mark",
				},
			},
			kotori_yumo_wu: {
				marktext: '<span class="greentext">魔</span>',
				intro: {
					name: '<span class="greentext">魔物</span>',
					content: "mark",
				},
			},
			kotori_yumo_qun: {
				marktext: '<span class="yellowtext">魔</span>',
				intro: {
					name: '<span class="yellowtext">魔物</span>',
					content: "mark",
				},
			},
			kotori_yumo_key: {
				marktext: '<span class="legendtext">魔</span>',
				intro: {
					name: '<span class="legendtext">魔物</span>',
					content: "mark",
				},
			},
			kotori_yumo_jin: {
				marktext: '<span class="icetext">魔</span>',
				intro: {
					name: '<span class="icetext">魔物</span>',
					content: "mark",
				},
			},
			kotori_huazhan: {
				charlotte: true,
				enable: "chooseToUse",
				filter(event, player) {
					var bool = false;
					var list = ["wei", "shu", "wu", "qun", "key", "jin"];
					for (var i of list) {
						if (
							player.hasMark("kotori_yumo_" + i) &&
							!player.getStorage("kotori_huazhan2").includes("kotori_yumo_" + i)
						) {
							bool = true;
							break;
						}
					}
					return bool && event.filterCard({ name: "wuzhong", isCard: true }, player, event);
				},
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog("###花绽###" + lib.translate.kotori_huazhan_info);
					},
					chooseControl(event, player) {
						var list = ["wei", "shu", "wu", "qun", "key", "jin"];
						var list2 = [];
						for (var i of list) {
							if (
								player.hasMark("kotori_yumo_" + i) &&
								!player.getStorage("kotori_huazhan2").includes("kotori_yumo_" + i)
							)
								list2.push("kotori_yumo_" + i);
						}
						list2.push("cancel2");
						return list2;
					},
					check() {
						var player = _status.event.player;
						var list = ["wei", "shu", "wu", "qun", "key", "jin"];
						var list2 = [];
						for (var i of list) {
							if (
								player.hasMark("kotori_yumo_" + i) &&
								!player.getStorage("kotori_huazhan2").includes("kotori_yumo_" + i)
							)
								list2.push("kotori_yumo_" + i);
						}
						if (list2.includes("kotori_yumo_wei")) return "kotori_yumo_wei";
						if (list2.includes("kotori_yumo_wu")) return "kotori_yumo_wu";
						if (list2.includes("kotori_yumo_qun")) return "kotori_yumo_qun";
						if (list2.includes("kotori_yumo_key")) return "kotori_yumo_key";
						if (
							list2.includes("kotori_yumo_shu") &&
							game.hasPlayer(function (current) {
								return current.group == "shu";
							})
						)
							return "kotori_yumo_shu";
						return "cancel2";
					},
					backup(result, player) {
						return {
							markname: result.control,
							viewAs: { name: "wuzhong", isCard: true },
							filterCard() {
								return false;
							},
							selectCard: -1,
							precontent() {
								delete event.result.skill;
								var name = lib.skill.kotori_huazhan_backup.markname;
								if (!player.storage.kotori_huazhan2) player.storage.kotori_huazhan2 = [];
								player.storage.kotori_huazhan2.push(name);
								player.addTempSkill("kotori_huazhan2");
								player.popup("花绽", get.groupnature(name.slice(12)));
								game.log(
									player,
									"发动了技能",
									lib.translate[name].replace(/魔物/g, "【花绽】")
								);
								player.removeMark(name, 1, false);
								game.log(
									player,
									"移去了一个",
									lib.translate[name].replace(/魔物/g, "【魔物】")
								);
							},
						};
					},
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							if (
								player.countCards("he", function (card) {
									if (get.type(card, null, player) == "equip") return get.value(card) < 6;
									return get.value(card) < 5;
								}) < 2
							)
								return 0;
							return player.getUseValue({ name: "wuzhong" });
						},
					},
					combo: "kotori_yumo",
				},
			},
			kotori_huazhan2: { onremove: true, charlotte: true },
			//三谷良一
			ryoichi_baoyi: {
				trigger: {
					player: "loseAfter",
					global: [
						"gainAfter",
						"equipAfter",
						"addJudgeAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				filterTarget(card, player, target) {
					return target != player && (target.hasSex("female") || target.countCards("hej") > 0);
				},
				filter(event, player) {
					var evt = event.getl(player);
					return (
						evt &&
						evt.es &&
						evt.es.length > 0 &&
						game.hasPlayer(function (target) {
							return lib.skill.ryoichi_baoyi.filterTarget;
						})
					);
				},
				forced: true,
				content() {
					"step 0";
					event.count = trigger.getl(player).es.length;
					player.draw(event.count);
					"step 1";
					event.count--;
					if (
						game.hasPlayer(function (target) {
							return lib.skill.ryoichi_baoyi.filterTarget(null, player, target);
						})
					) {
						player
							.chooseTarget(true, lib.skill.ryoichi_baoyi.filterTarget, "请选择【爆衣】的目标")
							.set("ai", function (target) {
								return -get.attitude(_status.event.player, target);
							});
					} else event.finish();
					"step 2";
					if (result.bool && result.targets && result.targets.length) {
						var target = result.targets[0];
						player.line(target, "green");
						if (target.hasSex("female")) target.loseHp();
						else player.discardPlayerCard(target, 2, "hej", true);
					} else event.finish();
					"step 3";
					if (
						event.count &&
						game.hasPlayer(function (target) {
							return lib.skill.ryoichi_baoyi.filterTarget(null, player, target);
						})
					)
						event.goto(1);
				},
			},
			ryoichi_tuipi: {
				mod: {
					targetEnabled(card) {
						if (card.name == "shunshou" || card.name == "guohe") return false;
					},
				},
				trigger: { player: "phaseDiscardBegin" },
				forced: true,
				content() {
					trigger.setContent(lib.skill.ryoichi_tuipi.phaseDiscardContent);
				},
				phaseDiscardContent() {
					"step 0";
					event.num = Math.max(
						0,
						player.countCards("he", (card) => !player.canIgnoreHandcard(card)) -
							player.getHandcardLimit()
					);
					if (event.num <= 0) event.finish();
					else {
						if (lib.config.show_phase_prompt) {
							player.popup("弃牌阶段");
						}
					}
					event.trigger("phaseDiscard");
					"step 1";
					player.chooseToDiscard(num, true, "he");
					"step 2";
					event.cards = result.cards;
				},
				ai: {
					halfneg: true
				},
			},
			//乙坂有宇
			yuu_lveduo: {
				mod: {
					cardEnabled(card, player) {
						if (player.isTurnedOver()) return false;
					},
					cardRespondable(card, player) {
						if (player.isTurnedOver()) return false;
					},
					cardSavable(card, player) {
						if (player.isTurnedOver()) return false;
					},
				},
				trigger: { global: "phaseBeginStart" },
				filter(event, player) {
					return (
						player != event.player &&
						!event.player._trueMe &&
						!player.getStorage("yuu_lveduo").includes(event.player) &&
						!player.isTurnedOver() &&
						!player.hasSkill("yuu_lveduo4")
					);
				},
				charlotte: true,
				check(event, player) {
					if (get.attitude(player, event.player) > 0) return false;
					if (event.player.hasJudge("lebu") || !event.player.needsToDiscard()) return false;
					return true;
				},
				logTarget: "player",
				content() {
					"step 0";
					player.turnOver();
					"step 1";
					if (player.isTurnedOver()) {
						player.addTempSkill("yuu_lveduo4", "roundStart");
						if (!player.storage.yuu_lveduo) player.storage.yuu_lveduo = [];
						player.storage.yuu_lveduo.push(trigger.player);
						trigger.player._trueMe = player;
						game.addGlobalSkill("autoswap");
						if (trigger.player == game.me) {
							game.notMe = true;
							if (!_status.auto) ui.click.auto();
						}
						player.addSkill("yuu_lveduo2");
						trigger.player.addSkill("yuu_lveduo3");
					}
				},
			},
			yuu_lveduo2: {
				trigger: {
					player: "turnOverEnd",
				},
				lastDo: true,
				charlotte: true,
				forceDie: true,
				forced: true,
				silent: true,
				filter(event, player) {
					return !player.isTurnedOver();
				},
				content() {
					var target = game.findPlayer(function (current) {
						return current._trueMe == player;
					});
					if (target) {
						if (target == game.me) {
							if (!game.notMe) game.swapPlayerAuto(target._trueMe);
							else delete game.notMe;
							if (_status.auto) ui.click.auto();
						}
						delete target._trueMe;
						target.removeSkill("yuu_lveduo3");
						var skills = target.getStockSkills(true, true).filter(function (skill) {
							var info = get.info(skill);
							return info && info.charlotte == true;
						});
						if (skills.length) {
							target.removeSkills(skills);
							player.addSkills(skills);
							lib.translate.yuu_lveduo_info = lib.translate.yuu_lveduo_full_info;
						}
						if (target.name == "key_yusa") {
							delete target.storage.dualside;
							target.storage.dualside_over = true;
							target.unmarkSkill("dualside");
							target.removeSkill("dualside");
						} else if (target.name == "key_misa") {
							delete target.storage.dualside;
							target.storage.dualside_over = true;
							target.unmarkSkill("dualside");
							target.reinit("key_misa", "key_yusa");
							target.removeSkill("yusa_misa");
							target.removeSkill("dualside");
							target.turnOver(false);
						}
					}
					player.removeSkill("yuu_lveduo2");
				},
			},
			yuu_lveduo3: {
				trigger: {
					player: ["phaseAfter", "dieAfter"],
					global: "phaseBefore",
				},
				lastDo: true,
				charlotte: true,
				forceDie: true,
				forced: true,
				silent: true,
				content() {
					player.removeSkill("yuu_lveduo3");
				},
				onremove(player) {
					if (player._trueMe && player._trueMe.isTurnedOver()) player._trueMe.turnOver();
				},
			},
			yuu_lveduo4: { charlotte: true },
			//松下五段
			godan_yuanyi: {
				trigger: { player: "phaseBegin" },
				forced: true,
				content() {
					"step 0";
					var num = game.roundNumber;
					if (num && typeof num == "number") player.draw(Math.min(9, num));
					"step 1";
					trigger.phaseList.splice(trigger.num, 0, "phaseUse|godan_yuanyi");
				},
			},
			godan_feiqu: {
				inherit: "doruji_feiqu",
			},
			godan_xiaoyuan: {
				trigger: { player: "changeHp" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "soil",
				filter(event, player) {
					return event.num < 0 && player.hp < 4;
				},
				content() {
					player.awakenSkill("godan_xiaoyuan");
					player.loseMaxHp(3);
					player.draw(3);
					player.removeSkills("godan_feiqu");
				},
				ai: {
					combo: "godan_feiqu",
					halfneg: true
				},
			},
			//游佐
			abyusa_jueqing: {
				audio: 2,
				trigger: { source: "damageBegin2" },
				skillAnimation: true,
				animationColor: "water",
				filter(event, player) {
					return player != event.player && !player.storage.abyusa_jueqing_rewrite;
				},
				prompt2(event, player) {
					var num = get.cnNumber(2 * event.num, true);
					return (
						"令即将对其造成的伤害翻倍至" +
						num +
						"点，并令自己失去" +
						get.cnNumber(event.num) +
						"点体力"
					);
				},
				check(event, player) {
					// 已经修改过的绝情不再触发
					if (player.storage.abyusa_jueqing_rewrite) return false;
					// 目标是友方则不使用
					if (get.attitude(player, event.player) >= 0) return false;
					// 自身血量不足以支付代价则不使用
					if (player.hp <= event.num) return false;
					// 目标有过滤伤害技能则不使用
					if (event.player.hasSkillTag("filterDamage", null, {
						player: player,
						card: event.card,
					})) return false;

					var damage = event.num * 2; // 翻倍后的伤害
					var cost = event.num; // 需要失去的体力

					// 伤害能够击杀敌人 - 高优先级
					if (event.player.hp <= damage) {
						// 确保自己不会因失去体力而死
						if (player.hp > cost) return 10;
					}

					// 计算性价比：伤害收益 vs 自身损失
					// 敌人失去的体力价值
					var enemyLoss = damage;
					if (event.player.hp <= damage) {
						enemyLoss = event.player.hp + 1; // 击杀额外价值
					}

					// 自身损失的价值
					var selfLoss = cost;
					if (player.hp <= cost + 1) {
						selfLoss *= 2; // 濒危时损失更大
					}

					// 性价比评估
					var ratio = enemyLoss / selfLoss;

					// 只有当性价比足够高（伤害收益至少是自身损失的1.5倍）才使用
					if (ratio >= 1.5) {
						// 基础分数 + 性价比加成
						var baseScore = 1;
						var ratioBonus = Math.min(ratio - 1, 3); // 最多加3分
						return baseScore + ratioBonus;
					}

					return false;
				},
				locked(skill, player) {
					return player && player.storage.abyusa_jueqing_rewrite;
				},
				logTarget: "player",
				content() {
					player.loseHp(trigger.num);
					trigger.num *= 2;
					player.storage.abyusa_jueqing_rewrite = true;
				},
				derivation: "abyusa_jueqing_rewrite",
				group: "abyusa_jueqing_rewrite",
				subSkill: {
					rewrite: {
						audio: "abyusa_jueqing",
						trigger: { source: "damageBefore" },
						forced: true,
						charlotte: true,
						filter(event, player) {
							return player.storage.abyusa_jueqing_rewrite == true;
						},
						check() {
							return false;
						},
						content() {
							trigger.cancel();
							trigger.player.loseHp(trigger.num);
						},
						ai: {
							jueqing: true,
							skillTagFilter(player) {
								return player.storage.abyusa_jueqing_rewrite == true;
							},
						},
					},
				},
			},
			//水濑秋子
			akiko_dongcha: {
				trigger: { global: "phaseBefore" },
				forced: true,
				filter(event, player) {
					return get.mode() == "identity" && game.phaseNumber == 0;
				},
				content() {
					var func = function () {
						game.countPlayer(function (current) {
							current.setIdentity();
						});
					};
					if (player == game.me) func();
					else if (player.isOnline()) player.send(func);
					if (!player.storage.zhibi) player.storage.zhibi = [];
					player.storage.zhibi.addArray(game.players);
				},
				ai: {
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (player == arg) return false;
					},
				},
			},
			abyusa_dunying: {
				audio: 2,
				trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
				forced: true,
				filter(event, player) {
					return player.isDamaged();
				},
				content() {
					player.draw(player.getDamagedHp());
				},
				mod: {
					globalTo(from, to, num) {
						return num + to.getDamagedHp();
					},
				},
			},
			//美坂香里
			kaori_siyuan: {
				enable: "phaseUse",
				filter(event, player) {
					return player.countCards("he", lib.skill.kaori_siyuan.filterCard);
				},
				filterCard(card) {
					return ["equip", "delay"].includes(get.type(card));
				},
				filterTarget(card, player, target) {
					if (player == target) return false;
					var card = ui.selected.cards[0];
					if (get.type(card) == "delay") return target.canAddJudge({ name: get.name(card, player) });
					return target.canEquip(card);
				},
				discard: false,
				lose: false,
				prepare: "give",
				content() {
					"step 0";
					var card = cards[0];
					if (get.type(card) == "equip") target.equip(card);
					else target.addJudge(get.name(card, player), [card]);
					"step 1";
					var list = [];
					for (var i of lib.inpile) {
						var type = get.type(i);
						if (type == "basic" || type == "trick") list.push([type, "", i]);
						if (i == "sha") {
							for (var j of lib.inpile_nature) list.push([type, "", i, j]);
						}
					}
					player
						.chooseButton(["是否视为使用一张基本牌或普通锦囊牌？", [list, "vcard"]])
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
					"step 2";
					if (result.bool) {
						player.chooseUseTarget(true, {
							name: result.links[0][2],
							nature: result.links[0][3],
							isCard: true,
						});
					}
				},
				ai: {
					basic: {
						order: 10,
					},
					result: {
						target(player, target) {
							var card = ui.selected.cards[0];
							if (card) return get.effect(target, card, target, target);
							return 0;
						},
					},
				},
			},
			kaori_zhishi: {
				trigger: {
					global: "gameStart",
					player: ["useCard", "phaseDrawBegin2"],
				},
				forced: true,
				filter(event, player, name) {
					if (name == "gameStart") return true;
					if (name == "useCard") return event.card.name == "tao";
					if (name == "phaseDrawBegin2") return !event.numFixed;
					return false;
				},
				content() {
					if (event.triggername == "gameStart") {
						// 游戏开始时，往牌堆添加牌堆数量1/4的桃
						var pileCount = ui.cardPile.childNodes.length;
						var taoCount = Math.floor(pileCount / 4);
						for (var i = 0; i < taoCount; i++) {
							var card = game.createCard2("tao");
							ui.cardPile.appendChild(card);
						}
						game.log(player, "往牌堆中添加了" + get.cnNumber(taoCount) + "张【桃】");
					} else if (event.triggername == "useCard") {
						// 使用桃时额外回复一点体力
						player.recover();
					} else if (event.triggername == "phaseDrawBegin2") {
						// 摸牌阶段额外摸X张牌（X为弃牌堆桃数量，至多5）
						var taoCount = 0;
						for (var i = 0; i < ui.discardPile.childElementCount; i++) {
							if (ui.discardPile.childNodes[i].name == "tao") taoCount++;
						}
						var extra = Math.min(taoCount, 5);
						if (extra > 0) {
							trigger.num += extra;
							game.log(player, "额外摸了" + get.cnNumber(extra) + "张牌");
						}
					}
				},
			},
			kaori_dongfeng: {
				trigger: {
					player: ["die", "phaseZhunbeiBegin"],
				},
				forced: true,
				skillAnimation: true,
				animationColor: "fire",
				filter(event, player, name) {
					if (name == "die") return true;
					if (name == "phaseZhunbeiBegin") {
						// 准备阶段，若弃牌堆里没有桃
						for (var i = 0; i < ui.discardPile.childElementCount; i++) {
							if (ui.discardPile.childNodes[i].name == "tao") return false;
						}
						return true;
					}
					return false;
				},
				content() {
					if (event.triggername == "die") {
						// 死亡时复活
						trigger.cancel();
						player.revive(player.maxHp);
						player.drawTo(player.maxHp);
						// 将弃牌堆上所有的桃移出游戏并替换成等量的杀
						var taoCount = 0;
						for (var i = ui.discardPile.childElementCount - 1; i >= 0; i--) {
							var card = ui.discardPile.childNodes[i];
							if (card.name == "tao") {
								card.remove();
								var newCard = game.createCard2("sha");
								ui.discardPile.appendChild(newCard);
								taoCount++;
							}
						}
						game.log(player, "复活了");
						game.log("将弃牌堆中的" + get.cnNumber(taoCount) + "张【桃】替换成了【杀】");
					} else if (event.triggername == "phaseZhunbeiBegin") {
						// 准备阶段，若弃牌堆里没有桃，死亡
						player.die();
						// 将场上和牌堆里的所有桃替换成杀，桃园结义替换成万箭齐发
						// 场上的桃
						game.players.forEach(function(current) {
							var cards = current.getCards("hej", { name: "tao" });
							for (var i = cards.length - 1; i >= 0; i--) {
								var card = cards[i];
								card.remove();
								var newCard = game.createCard2("sha");
								current.gain(newCard, "gain2");
							}
						});
						// 牌堆里的桃
						for (var i = ui.cardPile.childElementCount - 1; i >= 0; i--) {
							var card = ui.cardPile.childNodes[i];
							if (card.name == "tao") {
								card.remove();
								var newCard = game.createCard2("sha");
								ui.cardPile.appendChild(newCard);
							}
						}
						// 桃园结义替换成万箭齐发
						for (var i = ui.cardPile.childElementCount - 1; i >= 0; i--) {
							var card = ui.cardPile.childNodes[i];
							if (card.name == "taoyuan") {
								card.remove();
								var newCard = game.createCard2("wanjian");
								ui.cardPile.appendChild(newCard);
							}
						}
						game.log("将所有【桃】替换成了【杀】，【桃园结义】替换成了【万箭齐发】");
					}
				},
			},
			//美坂栞
			shiori_huijuan: {
				trigger: { global: "phaseJieshuBegin" },
				locked: true,
				filter(event, player) {
					return (
						event.player != player &&
						event.player.getHistory("useCard", function (evt) {
							return (
								evt.isPhaseUsing() &&
								["basic", "trick"].includes(get.type(evt.card)) &&
								player.hasUseTarget({
									name: evt.card.name,
									nature: evt.card.nature,
									isCard: true,
								})
							);
						}).length > 0
					);
				},
				async cost(event, trigger, player) {
					const list = [];
					trigger.player.getHistory("useCard", function (evt) {
						if (!evt.isPhaseUsing() || !["basic", "trick"].includes(get.type(evt.card))) return;
						if (evt.card.name == "sha" && evt.card.nature) list.add("sha:" + evt.card.nature);
						else list.add(evt.card.name);
					});
					for (var i = 0; i < list.length; i++) {
						if (list[i].indexOf("sha:") == 0) list[i] = ["基本", "", "sha", list[i].slice(4)];
						else list[i] = [get.type(list[i]), "", list[i]];
					}
					const { result } = await player
						.chooseButton([get.prompt("shiori_huijuan"), [list, "vcard"]])
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
					player.getStat("skill").shiori_huijuan = 1;
				},
				group: "shiori_huijuan_discard",
			},
			shiori_huijuan_discard: {
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					var num = 0;
					var stat = player.stat;
					for (var i = stat.length - 2; i--; i >= 0) {
						if (stat[i].isMe) break;
						if (stat[i].skill && stat[i].skill.shiori_huijuan) num++;
					}
					return num >= Math.max(2, game.countPlayer() / 2);
				},
				forced: true,
				content() {
					"step 0";
					if (!player.countDiscardableCards(player, "ej")) event._result = { bool: false };
					else
						player.discardPlayerCard(player, "ej").set("ai", function (button) {
							var card = button.link;
							var player = _status.event.player;
							if (get.position(card) == "j") return 7 + Math.random();
							return 4 + player.needsToDiscard() - get.value(card);
						});
					"step 1";
					if (!result.bool) player.skip("phaseUse");
				},
			},
			//野村美希
			miki_shenqiang: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content() {
					player.equip(game.createCard2("miki_hydrogladiator", "club", 6));
					player.equip(game.createCard2("miki_binoculars", "diamond", 6));
				},
				mod: {
					canBeDiscarded(card) {
						if (get.position(card) == "e" && ["equip1", "equip5"].includes(get.subtype(card)))
							return false;
					},
				},
			},
			miki_huanmeng: {
				inherit: "kamome_huanmeng",
			},
			miki_zhiluo: {
				trigger: { global: "phaseEnd" },
				filter(event, player) {
					return !event.player.countCards("e") && player.inRange(event.player);
				},
				locked: true,
				async cost(event, trigger, player) {
					event.result = { bool: true, cost_data: { index: 0 } };
					if (player.canUse("sha", trigger.player, false)) {
						const { index } = await player
							.chooseControl()
							.set("prompt", "制裸：请选择一项")
							.set("choiceList", [
								"摸两张牌",
								"视为对" + get.translation(trigger.player) + "使用一张【杀】",
							])
							.set("ai", function () {
								if (
									get.effect(
										_status.event.getTrigger().player,
										{ name: "sha" },
										_status.event.player
									) > 0
								)
									return 1;
								return 0;
							})
							.forResult();
						event.result.cost_data.index = index;
					}
				},
				async content(event, trigger, player) {
					const result = event.cost_data;
					if (result.index == 0) {
						player.logSkill("miki_zhiluo");
						player.draw(2);
					} else player.useCard({ name: "sha", isCard: true }, trigger.player, "miki_zhiluo"); player.useCard({ name: "sha", isCard: true }, trigger.player, "miki_zhiluo");
				},
			},
			miki_hydrogladiator_skill: {
				trigger: {
					source: "damageSource",
				},
				locked: true,
				popup: "海德洛",
				filter(event, player) {
					return (
						event.getParent().name == "sha" &&
						game.hasPlayer(function (current) {
							return (
								(current == event.player ||
									(current != player && get.distance(current, event.player) <= 1)) &&
								current.countDiscardableCards(player, "he") > 0
							);
						})
					);
				},
				cost() {
					"step 0";
					var list = [];
					var choiceList = [];
					if (trigger.player.countDiscardableCards(player, "he") > 0) {
						list.push(true);
						choiceList.push("弃置" + get.translation(trigger.player) + "的两张牌");
					}
					if (
						game.hasPlayer(function (current) {
							return current != player && get.distance(current, trigger.player) <= 1;
						})
					) {
						list.push(false);
						choiceList.push(
							"弃置所有至" + get.translation(trigger.player) + "距离为1的角色的各一张牌"
						);
					}
					event.list = list;
					if (list.length == 1) event._result = { index: 0 };
					else {
						player
							.chooseControl()
							.set("choiceList", choiceList)
							.set("prompt", "海德洛格拉迪尔特·改")
							.set("ai", function () {
								var player = _status.event.player;
								var source = _status.event.getTrigger().player;
								var num = game.countPlayer(function (current) {
									if (
										current != player &&
										get.distance(current, source) <= 1 &&
										current.countDiscardableCards(player, "he") > 0
									)
										return -get.sgn(get.attitude(player, current));
								});
								if (num > Math.min(2, source.countDiscardableCards(player, "he"))) return 1;
								return 0;
							});
					}
					"step 1";
					if (event.list[result.index]) {
						event.result = {
							bool: true,
							cost_data: { type: "single" },
							targets: [trigger.player],
						};
					} else {
						event.result = {
							bool: true,
							cost_data: { type: "multiple" },
							targets: game
								.filterPlayer(function (current) {
									return current != player && get.distance(current, trigger.player) <= 1;
								})
								.sortBySeat(),
						};
					}
				},
				content() {
					"step 0";
					if (event.cost_data.type == "single") {
						player.discardPlayerCard(targets[0], "he", 2, true);
						event.finish();
					}
					"step 1";
					player.recover(4);
					player.draw(2);
					var target = targets.shift();
					if (target.countDiscardableCards(player, "he") > 0)
						player.discardPlayerCard(target, "he", true);
					if (targets.length) event.redo();
				},
			},
			miki_binoculars: {
				locked: true,
				ai: {
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (player == arg) return false;
					},
				},
			},
			kud_qiaoshou: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return !player.getExpansions("kud_qiaoshou_equip").length && player.countCards("h") > 0;
				},
				chooseButton: {
					dialog() {
						var list = [];
						var list2 = [
							"pyzhuren_heart",
							"pyzhuren_diamond",
							"pyzhuren_club",
							"pyzhuren_spade",
							"pyzhuren_shandian",
							"rewrite_zhuge",
						];
						list2.addArray(lib.inpile);
						for (var i of list2) {
							var sub = get.subtype(i);
							// 出牌阶段只能选择武器(equip1)和进攻坐骑(equip3)
							if (["equip1", "equip3"].includes(sub)) list.push([sub, "", i]);
						}
						return ui.create.dialog("巧手：选择一种武器牌或进攻坐骑", [list, "vcard"], "hidden");
					},
					check(button) {
						var player = _status.event.player;
						var name = button.link[2];
						var sub = get.subtype(name);
						if (player.getEquip(name)) return 0;
						// 进攻坐骑评分
						if (sub == "equip3") return 0.3 + Math.random();
						// 武器评分
						var sha = player.countCards("h", "sha");
						switch (name) {
							case "rewrite_zhuge":
								return sha - player.getCardUsable("sha");
							case "guding":
								if (
									sha > 0 &&
									game.hasPlayer(function (current) {
										return (
											get.attitude(player, current) < 0 &&
											!current.countCards("h") &&
											player.canUse("sha", current) &&
											get.effect(current, { name: "sha" }, player) > 0
										);
									})
								)
									return 1.4 + Math.random();
								return 0;
							case "guanshi":
								if (sha > 0) return 0.7 + Math.random();
								return 0;
							case "qinggang":
								if (sha > 0) return 0.4 + Math.random();
								return 0;
							case "zhuque":
								if (
									game.hasPlayer(function (current) {
										return (
											get.attitude(player, current) < 0 &&
											current.getEquip("tengjia") &&
											get.effect(current, { name: "sha", nature: "fire" }, player) > 0
										);
									})
								)
									return 1.2 + Math.random();
								return 0;
							default:
								return 0;
						}
					},
					backup(links) {
						var next = get.copy(lib.skill.kud_qiaoshou_backupx);
						next.cardname = links[0][2];
						return next;
					},
					prompt(links) {
						return "将一张手牌置于武将牌上，然后视为装备" + get.translation(links[0][2]);
					},
				},
				group: ["kud_qiaoshou_end", "kud_qiaoshou_jieshu"],
				ai: {
					notemp: true,
					order: 5,
					result: {
						player: 1,
					},
				},
			},
			kud_qiaoshou_backupx: {
				filterCard: true,
				discard: false,
				lose: false,
				delay: false,
				check(event, player) {
					return 6 - get.value(card);
				},
				content() {
					"step 0";
					player.addToExpansion(cards, player, "give").gaintag.add("kud_qiaoshou_equip");
					"step 1";
					if (!player.getExpansions("kud_qiaoshou_equip").length) return;
					player.addTempSkill("kud_qiaoshou_equip", {
						player: ["phaseUseEnd", "phaseZhunbeiBegin"],
					});
					var name = lib.skill.kud_qiaoshou_backup.cardname;
					player.storage.kud_qiaoshou_equip2 = name;
					var info = lib.card[name].skills;
					if (info && info.length) player.addAdditionalSkill("kud_qiaoshou_equip", info);
					player.draw(4);
					player.recover(2);
					game.log(player, "声明了", "#y" + get.translation(name));
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			kud_qiaoshou_equip: {
				charlotte: true,
				mod: {
					globalFrom(from, to, distance) {
						var info = lib.card[from.storage.kud_qiaoshou_equip2];
						if (info && info.distance && info.distance.globalFrom)
							return distance + info.distance.globalFrom;
					},
					globalTo(from, to, distance) {
						var info = lib.card[to.storage.kud_qiaoshou_equip2];
						if (info && info.distance && info.distance.globalTo)
							return distance + info.distance.globalTo;
					},
					attackRange(from, distance) {
						var info = lib.card[from.storage.kud_qiaoshou_equip2];
						if (info && info.distance && info.distance.attackFrom)
							return distance - info.distance.attackFrom;
					},
					attackTo(from, to, distance) {
						var info = lib.card[to.storage.kud_qiaoshou_equip2];
						if (info && info.distance && info.distance.attackTo)
							return distance + info.distance.attackTo;
					},
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				intro: {
					markcount: "expansion",
					mark(dialog, storage, player) {
						dialog.add(player.getExpansions("kud_qiaoshou_equip"));
						dialog.addText("当前装备：" + get.translation(player.storage.kud_qiaoshou_equip2));
						var str2 = lib.translate[player.storage.kud_qiaoshou_equip2 + "_info"];
						if (str2) {
							if (str2.length >= 12) dialog.addText(str2, false);
							else dialog.addText(str2);
						}
					},
					onunmark(storage, player) {
						player.removeAdditionalSkill("kud_qiaoshou_equip");
						delete player.storage.kud_qiaoshou_equip2;
						player.addEquipTrigger();
					},
				},
			},
			kud_qiaoshou_end: {
				trigger: { player: ["phaseUseEnd", "phaseZhunbeiBegin"] },
				filter(event, player) {
					return player.getExpansions("kud_qiaoshou_equip").length > 0;
				},
				forced: true,
				async content(event, trigger, player) {
					var cards = player.getExpansions("kud_qiaoshou_equip");
					if (cards.length) {
						await player.loseToDiscardpile(cards);
						game.log(player, "将", cards, "置入了弃牌堆");
						await player.draw(4);
						await player.recover(2);
					}
				},
			},
			kud_qiaoshou_jieshu: {
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return !player.getExpansions("kud_qiaoshou_equip").length && player.countCards("h") > 0;
				},
				direct: true,
				async content(event, trigger, player) {
					var list = [];
					var list2 = [
						"pyzhuren_heart",
						"pyzhuren_diamond",
						"pyzhuren_club",
						"pyzhuren_spade",
						"pyzhuren_shandian",
						"rewrite_zhuge",
					];
					list2.addArray(lib.inpile);
					for (var i of list2) {
						var sub = get.subtype(i);
						// 结束阶段只能选择防具(equip2)和防御坐骑(equip4)
						if (["equip2", "equip4"].includes(sub)) list.push([sub, "", i]);
					}
					if (!list.length) return;
					var result = await player.chooseButton(["巧手：选择一种防具牌或防御坐骑", [list, "vcard"], "hidden"]).set("ai", function (button) {
						var player = _status.event.player;
						var name = button.link[2];
						var sub = get.subtype(name);
						if (player.getEquip(name)) return 0;
						// 防御坐骑评分
						if (sub == "equip4") return 0.3 + Math.random();
						// 防具评分
						switch (name) {
							case "rewrite_bagua":
							case "rewrite_renwang":
								if (player.getEquip("bagua") || player.getEquip("tengjia") || player.getEquip("renwang"))
									return Math.random();
								return 1.2 + Math.random();
							case "rewrite_tengjia":
								if (player.getEquip("baiyin")) return 1.3 + Math.random();
								return Math.random();
							case "rewrite_baiyin":
								return 0.4 + Math.random();
							case "yexingyi":
								if (player.hp > 2 || player.getEquip("bagua") || player.getEquip("tengjia"))
									return 1.5 + Math.random();
								return 0.5 + Math.random();
							default:
								return 0.5 + Math.random();
						}
					}).forResult();
					if (!result.bool) return;
					var name = result.links[0][2];
					var result2 = await player.chooseCard(`将一张手牌作为"巧"置于武将牌上`, true).set("ai", function (card) {
						return 6 - get.value(card);
					}).forResult();
					if (!result2.bool) return;
					await player.addToExpansion(result2.cards, player, "give").set("gaintag", ["kud_qiaoshou_equip"]);
					player.addTempSkill("kud_qiaoshou_equip", {
						player: ["phaseUseEnd", "phaseZhunbeiBegin"],
					});
					player.storage.kud_qiaoshou_equip2 = name;
					var info = lib.card[name].skills;
					if (info && info.length) player.addAdditionalSkill("kud_qiaoshou_equip", info);
					await player.draw(4);
					await player.recover(2);
					game.log(player, "声明了", "#y" + get.translation(name));
				},
			},
			kud_buhui: {
				enable: "chooseToUse",
				filter(event, player) {
					return (
						event.type == "dying" &&
						player == event.dying &&
						player.getExpansions("kud_qiaoshou_equip").length + player.countCards("e") > 0
					);
				},
				skillAnimation: true,
				limited: true,
				animationColor: "gray",
				content() {
					"step 0";
					player.awakenSkill("kud_buhui");
					var cards = player.getCards("e").concat(player.getExpansions("kud_qiaoshou_equip"));
					if (cards.length) player.discard(cards);
					player.draw(cards);
					player.removeSkill("kud_qiaoshou_equip");
					player.draw(cards.length);
					player.addSkills("kud_chongzhen");
					"step 1";
					var num = 7 - player.hp;
					if (num) player.recover(num);
					player.draw(num);
					player.gainMaxHp();
				},
				derivation: "riki_chongzhen",
				ai: {
					order: 0.5,
					result: {
						player: 1,
					},
					save: true,
					skillTagFilter(player, tag, target) {
						return player == target;
					},
				},
			},
			kud_chongzhen: {
				inherit: "riki_chongzhen",
			},
			misuzu_hengzhou: {
				trigger: {
					player: [
						"phaseJieshuBegin",
						"recoverEnd",
						"damageEnd",
						"phaseDrawBegin2",
						"phaseZhunbeiBegin",
					],
				},
				forced: true,
				character: true,
				filter(event, player) {
					if (event.name == "phaseZhunbei") return true;
					if (["damage", "recover"].includes(event.name)) return event.num > 0;
					var num = player.countMark("misuzu_hengzhou");
					if (event.name == "phaseDraw") return num > 0 && !event.numFixed;
					return num > 5;
				},
				content() {
					var num = player.countMark("misuzu_hengzhou");
					if (trigger.name == "phaseDraw") trigger.num += num;
					else if (trigger.name == "phaseJieshu") {
						player.removeMark("misuzu_hengzhou", num);
						player.loseHp();
					} else player.addMark("misuzu_hengzhou", trigger.num || 1);
				},
				intro: {
					name: "诅咒",
					name2: "诅咒",
					content: "mark",
				},
				marktext: "诅",
				mod: {
					maxHandcard(player, num) {
						return num + player.countMark("misuzu_hengzhou");
					},
				},
				ai: {
					notemp: true,
				},
			},
			misuzu_nongyin: {
				enable: "chooseToUse",
				viewAs: {
					name: "tao",
					isCard: true,
				},
				viewAsFilter(player) {
					return (
						!player.hasJudge("lebu") &&
						player.countCards("hes", function (card) {
							return get.color(card) == "red" && get.type(card, "trick") != "trick";
						})
					);
				},
				filterCard(card) {
					return get.color(card) == "red" && get.type(card, "trick") != "trick";
				},
				check(card) {
					return 7 + (_status.event.dying || _status.event.player).getDamagedHp() - get.value(card);
				},
				ignoreMod: true,
				position: "hes",
				precontent() {
					player.logSkill("misuzu_nongyin");
					player.$throw(event.result.cards);
					player.addJudge({ name: "lebu" }, event.result.cards);
					player.draw(4);
					player.recover(2);
					event.result.card.cards = [];
					event.result.cards = [];
					delete event.result.skill;
					delete event.result.card.suit;
					delete event.result.card.number;
				},
				ai: {
					result: 0.5,
				},
			},
			misuzu_zhongxing: {
				trigger: {
					player: "loseAfter",
					global: [
						"equipAfter",
						"addJudgeAfter",
						"gainAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				filter(event, player) {
					var evt = event.getl(player);
					return evt && evt.js && evt.js.length > 0 && !player.hasSkill("misuzu_zhongxing_haruko");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt("misuzu_zhongxing"), "令一名角色选择摸四张牌或回复2点体力")
						.set("ai", function (card) {
							return get.attitude(_status.event.player, card);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					var target = event.targets[0];
					player.logSkill("misuzu_zhongxing", target);
					player.addTempSkill("misuzu_zhongxing_haruko");
					target.chooseDrawRecover(4, true);
				},
			},
			misuzu_zhongxing_haruko: { charlotte: true },
			kamome_suitcase: {
				trigger: {
					player: ["phaseJudgeBefore", "phaseDiscardBefore", "turnOverBefore"],
				},
				forced: true,
				popup: false,
				equipSkill: true,
				content() {
					trigger.cancel();
				},
			},
			kamome_yangfan: {
				trigger: {
					player: ["loseAfter", "enterGame"],
					global: [
						"equipAfter",
						"addJudgeAfter",
						"phaseBefore",
						"gainAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				forced: true,
				filter(event, player) {
					if (typeof event.getl != "function")
						return event.name != "phase" || game.phaseNumber == 0;
					var evt = event.getl(player);
					return evt && evt.player == player && evt.es && evt.es.length;
				},
				content() {
					if (trigger.getl) player.draw(4 * trigger.getl(player).es.length);
					else player.equip(game.createCard2("kamome_suitcase", "spade", 2));
				},
				ai: {
					noe: true,
					reverseEquip: true,
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == "equip" && !get.cardtag(card, "gifts")) return [1, 3];
						},
					},
				},
			},
			kamome_huanmeng: {
				trigger: { player: "phaseZhunbeiBegin" },
				frequent: true,
				content() {
					"step 0";
					var num = 1 + player.countCards("e");
					var cards = get.cards(num);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove();
					next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
					next.set("prompt", "幻梦：点击将牌移动到牌堆顶或牌堆底");
					next.processAI = function (list) {
						var cards = list[0][1],
							player = _status.event.player;
						var top = [];
						var judges = player.getCards("j");
						var stopped = false;
						if (!player.hasWuxie()) {
							for (var i = 0; i < judges.length; i++) {
								var judge = get.judge(judges[i]);
								cards.sort(function (a, b) {
									return judge(b) - judge(a);
								});
								if (judge(cards[0]) < 0) {
									stopped = true;
									break;
								} else {
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if (!stopped) {
							cards.sort(function (a, b) {
								return get.value(b, player) - get.value(a, player);
							});
							while (cards.length) {
								if (get.value(cards[0], player) <= 5) break;
								top.unshift(cards.shift());
							}
						}
						bottom = cards;
						return [top, bottom];
					};
					"step 1";
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
					game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶");
					game.updateRoundNumber();
					game.delayx();
				},
				ai: {
					threaten: 1.2,
				},
			},
			kamome_jieban: {
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				zhuanhuanji: true,
				marktext: "☯",
				mark: true,
				intro: {
					content(storage, player) {
						return (
							"转换技。每回合限一次，当你受到或造成伤害后，" +
							(!storage
								? "你可将两张牌交给一名其他角色，然后其交给你一张牌。"
								: "你可将一张牌交给一名其他角色，然后其交给你两张牌。")
						);
					},
				},
				filter(event, player) {
					var num = player.storage.kamome_jieban ? 1 : 2;
					return player.countCards("he") >= num && !player.hasSkill("kamome_jieban_phase");
				},
				async cost(event, trigger, player) {
					event.num = player.storage.kamome_jieban ? 1 : 2;
					event.result = await player
						.chooseCardTarget({
							position: "he",
							filterCard: true,
							filterTarget: lib.filter.notMe,
							selectCard: event.num,
							prompt: get.prompt("kamome_jieban"),
							prompt2:
								event.num == 2
									? "将两张牌交给一名其他角色，然后其交给你一张牌。"
									: "将一张牌交给一名其他角色，然后其交给你两张牌。",
							ai1(card) {
								if (card.name == "du") return 20;
								var val = get.value(card);
								var player = _status.event.player;
								if (get.position(card) == "e") {
									if (val <= 0) return 10;
									return 10 / val;
								}
								return 6 - val;
							},
							ai2(target) {
								var player = _status.event.player;
								var att = get.attitude(player, target);
								if (ui.selected.cards[0].name == "du") return -2 * att;
								if (att > 0) return 1.5 * att;
								var num = get.select(_status.event.selectCard)[1];
								if (att < 0 && num == 1) return -0.7 * att;
								return att;
							},
						})
						.forResult();
				},
				content() {
					"step 0";
					event.num = player.storage.kamome_jieban ? 1 : 2;
					var target = targets[0];
					event.target = target;
					player.addTempSkill("kamome_jieban_phase");
					player.give(cards, target);
					player.changeZhuanhuanji("kamome_jieban");
					"step 1";
					var num = 3 - event.num;
					var hs = target.getCards("he");
					if (hs.length) {
						if (hs.length <= num) event._result = { bool: true, cards: hs };
						else {
							target
								.chooseCard(
									"he",
									true,
									"交给" + get.translation(player) + get.cnNumber(num) + "张牌",
									num
								)
								.set("ai", function (card) {
									var player = _status.event.player;
									var target = _status.event.getParent().player;
									if (get.attitude(player, target) > 0) {
										if (!target.hasShan() && card.name == "shan") return 10;
										if (
											get.type(card) == "equip" &&
											!get.cardtag(card, "gifts") &&
											target.hasUseTarget(card)
										)
											return 10 - get.value(card);
										return 6 - get.value(card);
									}
									return -get.value(card);
								});
						}
					} else event.finish();
					"step 2";
					target.give(result.cards, player);
				},
			},
			kamome_jieban_phase: { charlotte: true },
			nao_duyin: {
				trigger: { global: "phaseBegin" },
				filter(event, player) {
					return (
						event.player != player &&
						(!player.storage.nao_duyin || !player.storage.nao_duyin.includes(event.player))
					);
				},
				logTarget: "player",
				charlotte: true,
				check() {
					return false;
				},
				content() {
					"step 0";
					player.chooseToDiscard("he", "弃置一张牌，或将武将牌翻面").set("ai", function (card) {
						if (_status.event.player.isTurnedOver()) return 0;
						return 6 - get.value(card);
					});
					player.draw(4);
					player.recover(2);
					"step 1";
					if (!result.bool) player.turnOver();
					player.addTempSkill("nao_duyin2", { player: "phaseAfter" });
					if (!player.storage.nao_duyin) player.storage.nao_duyin = [];
					player.storage.nao_duyin.push(trigger.player);
					if (!player.storage.nao_duyin2) player.storage.nao_duyin2 = [];
					player.storage.nao_duyin2.push(trigger.player);
					player.markSkill("nao_duyin2");
				},
			},
			nao_duyin2: {
				intro: {
					content: "$不能使用牌指定你为目标，对$使用牌没有距离和次数限制",
				},
				mod: {
					targetEnabled(card, player, target) {
						if (target.storage.nao_duyin2 && target.storage.nao_duyin2.includes(player))
							return false;
					},
					targetInRange(card, player, target) {
						if (player.storage.nao_duyin2 && player.storage.nao_duyin2.includes(target))
							return true;
					},
				},
				trigger: { player: "useCardEnd" },
				firstDo: true,
				silent: true,
				onremove: true,
				filter(event, player) {
					if (player.storage.nao_duyin2) {
						for (var i of player.storage.nao_duyin2) {
							if (event.targets.includes(i)) return true;
						}
					}
					return false;
				},
				content() {
					if (trigger.addCount !== false) {
						trigger.addCount = false;
						var stat = player.getStat();
						if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
					}
				},
			},
			nao_wanxin: {
				trigger: { global: "phaseEnd" },
				hasHistory(player) {
					return player.getHistory("damage").length > 0;
				},
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return lib.skill.nao_wanxin.hasHistory(current);
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("nao_wanxin"), function (card, player, target) {
							return _status.event.yuus.includes(target);
						})
						.set(
							"yuus",
							game.filterPlayer(function (current) {
								return lib.skill.nao_wanxin.hasHistory(current);
							})
						)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					await target.draw(2);
					await player.turnOver(false);
					await player.link(false);
					if (target == player) return;
					await target.turnOver(false);
					await target.link(false);
				},
			},
			nao_shouqing: {
				global: "nao_shouqing2",
			},
			nao_shouqing2: {
				enable: "phaseUse",
				viewAs() {
					return { name: "tao" };
				},
				filterCard(card){
					return get.name(card, false) === "tao";
				},
				ignoreMod: true,
				filterTarget(card, player, target) {
					return target != player && target.isDamaged() && target.hasSkill("nao_shouqing");
				},
				selectTarget() {
					return game.countPlayer(function (current) {
						return lib.skill.nao_shouqing2.filterTarget(null, _status.event.player, current);
					}) > 1 ? 1 : -1;
				},
				filter(event, player) {
					return (
						player.hasCard(card => get.name(card, false) === "tao", "hs") &&
						game.hasPlayer(function (current) {
							return lib.skill.nao_shouqing2.filterTarget(null, player, current);
						})
					);
				},
				filterOk(){
					return ui.selected.cards.length === 1 && ui.selected.targets.length === 1;
				},
				position: "hs",
				onuse(links, player) {
					player.addSkill("nao_shouqing3");
					player.addMark("nao_shouqing3", 1, false);
				},
				prompt() {
					var list = game.filterPlayer(function (current) {
						return lib.skill.nao_shouqing2.filterTarget(null, _status.event.player, current);
					});
					var str = "对" + get.translation(list);
					if (list.length > 1) str += "中的一名角色";
					str += "使用一张【桃】";
					return str;
				},
			},
			nao_shouqing3: {
				intro: {
					content: "手牌上限+#",
				},
				mod: {
					maxHandcard(player, num) {
						return num + player.countMark("nao_shouqing3");
					},
				},
				trigger: { player: "useCardAfter" },
				forced: true,
				popup: false,
				filter(event, player) {
					return event.skill == "nao_shouqing2";
				},
				content() {
					player.draw(4);
				},
			},
			nao_diandeng: {
				audio: 2,
				intro: {
					content: "已使用过的花色：$",
					onunmark: true,
				},
				trigger: { player: "useCardAfter" },
				forced: true,
				filter(event, player) {
					if (!lib.suit.includes(get.suit(event.card))) return false;
					const suit = get.suit(event.card);
					// 改为每回合第一次使用该花色
					if (player.getHistory("useCard", evt => get.suit(evt.card) == suit).indexOf(event) != 0) return false;
					return true; // 只要是每回合第一次使用该花色就触发
				},
				content() {
					"step 0";
					var hasLink = false;
					var hasRecast = false;
					
					// 检查是否满足横置条件
					if (trigger.targets && trigger.targets.length == 1 && !trigger.targets[0].isLinked()) {
						trigger.targets[0].link(true);
						hasLink = true;
					} else {
						// 不满足横置条件时，重置所有花色记录
						player.storage.nao_diandeng = [];
						player.unmarkSkill("nao_diandeng");
					}
					
					// 重铸手牌
					var cards = player.getCards("h", card => get.suit(card) == get.suit(trigger.card) && player.canRecast(card));
					if (cards.length > 0) {
						player.recast(cards);
						hasRecast = true;
					}
					
					"step 1";
					// 只要执行了横置或重铸中的任意一个，就摸两张牌
					if (hasLink || hasRecast) {
						player.draw(2);
					}
				},
				group: "nao_diandeng_count",
				subSkill: {
					count: {
						charlotte: true,
						trigger: { player: "useCardAfter" },
						filter(event, player) {
							let suit = get.suit(event.card);
							return lib.suits.includes(suit) && !player.getStorage("nao_diandeng").includes(suit);
						},
						forced: true,
						silent: true,
						content() {
							// 改为每回合记录
							let suits = player
								.getHistory("useCard", evt => {
									return lib.suits.includes(get.suit(evt.card));
								})
								.reduce((list, evt) => {
									return list.add(get.suit(evt.card));
								}, [])
								.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
							if (!player.storage.nao_diandeng) {
								// 改为每回合开始重置
								player.when({ global: "phaseBegin" }).then(() => {
									delete player.storage.nao_diandeng;
									player.unmarkSkill("nao_diandeng");
								});
							}
							player.storage.nao_diandeng = suits;
							player.markSkill("nao_diandeng");
						},
					},
				},
				init(player) {
					let suits = player
						.getHistory("useCard", evt => {
							return lib.suits.includes(get.suit(evt.card));
						})
						.reduce((list, evt) => {
							return list.add(get.suit(evt.card));
						}, [])
						.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
					if (suits.length) {
						if (!player.storage.nao_diandeng) {
							// 改为每回合开始重置
							player.when({ global: "phaseBegin" }).then(() => {
								delete player.storage.nao_diandeng;
								player.unmarkSkill("nao_diandeng");
							});
						}
						player.storage.nao_diandeng = suits;
						player.markSkill("nao_diandeng");
					}
				},
			},
			shiorimiyuki_banyin: {
				audio: 2,
				trigger: { player: ["damageEnd", "recoverEnd"] },
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.isDamaged();
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							get.prompt("shiorimiyuki_banyin"),
							"令一名其他角色回复1点体力",
							lib.filter.notMe
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.recoverEffect(target, player, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					target.recover();
				},
			},
			shiorimiyuki_tingxian: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				async cost(event, trigger, player) {
					const { control, index } = await player
						.chooseControl("一张", "两张", "三张", "四张", "cancel2")
						.set("prompt", get.prompt2("shiorimiyuki_tingxian"))
						.set("ai", function () {
							var player = _status.event.player;
							var max = Math.min(player.hp + 4, player.maxHp);
							var min = Math.min(Math.max(max - 2, max - player.hp), 3);
							if (min) return min - 1;
							return 3;
						})
						.forResult();
					if (control != "cancel2") event.result = { bool: true, cost_data: index };
				},
				async content(event, trigger, player) {
					let num = 1 + event.cost_data;
					await player.draw(num).set("gaintag", ["shiorimiyuki_tingxian"]);
					await player.recover();
					player.addTempSkill("shiorimiyuki_tingxian2", "phaseUseAfter");
				},
				group: "shiorimiyuki_tingxian1",
			},
			shiorimiyuki_tingxian1: { audio: true },
			shiorimiyuki_tingxian2: {
				audio: true,
				trigger: { player: "phaseUseEnd" },
				forced: true,
				charlotte: true,
				mod: {
					aiOrder(player, card, num) {
						if (get.itemtype(card) == "card" && card.hasGaintag("shiorimiyuki_tingxian"))
							return num + 2;
					},
					aiValue(player, card, num) {
						if (get.itemtype(card) == "card" && card.hasGaintag("shiorimiyuki_tingxian"))
							return 0;
					},
				},
				filter(event, player) {
					return (
						player.countCards("h", function (card) {
							return card.hasGaintag("shiorimiyuki_tingxian");
						}) > 0
					);
				},
				content() {
					player.loseHp(
						player.countCards("h", function (card) {
							return card.hasGaintag("shiorimiyuki_tingxian");
						})
					);
					player.removeGaintag("shiorimiyuki_tingxian");
				},
			},
			//中津静流
			shizuru_nianli: {
				enable: "chooseToUse",
				//charlotte: true,
				prompt: "展示一张♦/♣/♥/♠手牌，然后视为使用一张雷杀/闪/桃/无懈可击",
				viewAs(cards, player) {
					var name = false;
					var nature = null;
					switch (get.suit(cards[0], player)) {
						case "club":
							name = "shan";
							break;
						case "diamond":
							name = "sha";
							nature = "thunder";
							break;
						case "spade":
							name = "wuxie";
							break;
						case "heart":
							name = "tao";
							break;
					}
					if (name) return { name: name, nature: nature, isCard: true };
					return null;
				},
				check(card) {
					var player = _status.event.player;
					if (_status.event.type == "phase") {
						var max = 0;
						var name2;
						var list = ["sha", "tao"];
						var map = { sha: "diamond", tao: "heart" };
						for (var i = 0; i < list.length; i++) {
							var name = list[i];
							if (
								player.countCards("h", function (card) {
									return get.suit(card, player) == map[name];
								}) > 0 &&
								player.getUseValue({
									name: name,
									nature: name == "sha" ? "fire" : null,
								}) > 0
							) {
								var temp = get.order({
									name: name,
									nature: name == "sha" ? "fire" : null,
								});
								if (temp > max) {
									max = temp;
									name2 = map[name];
								}
							}
						}
						if (name2 == get.suit(card, player)) return 1;
						return 0;
					}
					return 1;
				},
				ignoreMod: true,
				filterCard(card, player, event) {
					event = event || _status.event;
					var filter = event._backup.filterCard;
					var name = get.suit(card, player);
					if (name == "club" && filter({ name: "shan" }, player, event)) return true;
					if (name == "diamond" && filter({ name: "sha", nature: "thunder" }, player, event))
						return true;
					if (name == "spade" && filter({ name: "wuxie" }, player, event)) return true;
					if (name == "heart" && filter({ name: "tao" }, player, event)) return true;
					return false;
				},
				filter(event, player) {
					if (player.hasSkill("shizuru_nianli_round")) return false;
					var filter = event.filterCard;
					if (
						filter({ name: "sha", nature: "thunder" }, player, event) &&
						player.countCards("h", { suit: "diamond" })
					)
						return true;
					if (filter({ name: "shan" }, player, event) && player.countCards("h", { suit: "club" }))
						return true;
					if (filter({ name: "tao" }, player, event) && player.countCards("h", { suit: "heart" }))
						return true;
					if (filter({ name: "wuxie" }, player, event) && player.countCards("h", { suit: "spade" }))
						return true;
					return false;
				},
				precontent() {
					player.logSkill("shizuru_nianli");
					player.addTempSkill("shizuru_nianli_round", "roundStart");
					player.showCards(get.translation(player) + "发动了【念力】", event.result.cards.slice(0));
					event.result.card.cards = [];
					event.result.cards = [];
					delete event.result.skill;
					delete event.result.card.suit;
					delete event.result.card.number;
					event.getParent().addCount = false;
					event.getParent().shizuru_nianli = true;
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag) {
						if (player.hasSkill("shizuru_nianli_round")) return false;
						var name;
						switch (tag) {
							case "respondSha":
								name = "diamond";
								break;
							case "respondShan":
								name = "club";
								break;
							case "save":
								name = "heart";
								break;
						}
						if (!player.countCards("h", { suit: name })) return false;
					},
					order(item, player) {
						if (player && _status.event.type == "phase") {
							var max = 0;
							var list = ["sha", "tao"];
							var map = { sha: "diamond", tao: "heart" };
							for (var i = 0; i < list.length; i++) {
								var name = list[i];
								if (
									player.countCards("h", function (card) {
										return get.suit(card, player) == map[name];
									}) > 0 &&
									player.getUseValue({
										name: name,
										nature: name == "sha" ? "thunder" : null,
									}) > 0
								) {
									var temp = get.order({
										name: name,
										nature: name == "sha" ? "thunder" : null,
									});
									if (temp > max) max = temp;
								}
							}
							max /= 1.1;
							return max;
						}
						return 2;
					},
				},
				hiddenCard(player, name) {
					if (name == "wuxie")
						return (
							player.countCards("h", function (card) {
								return _status.connectMode || get.suit(card) == "spade";
							}) > 0 && !player.hasSkill("shizuru_nianli_round")
						);
					if (name == "tao")
						return (
							player.countCards("h", { suit: "heart" }) > 0 &&
							!player.hasSkill("shizuru_nianli_round")
						);
					return false;
				},
				group: "shizuru_nianli_clear",
				subSkill: {
					round: {
						mark: true,
						intro: { content: "本轮已发动" },
					},
					clear: {
						trigger: { player: "useCardAfter" },
						lastDo: true,
						silent: true,
						filter(event, player) {
							return event.getParent().shizuru_nianli == true;
						},
						content() {
							player.getHistory("useCard").remove(trigger);
						},
					},
				},
			},
			shizuru_benzhan: {
				trigger: { global: ["useCard", "respond"] },
				filter(event, player) {
					return (
						Array.isArray(event.respondTo) &&
						event.respondTo[0] != event.player &&
						[event.respondTo[0], event.player].includes(player)
					);
				},
				async cost(event, trigger, player) {
					event.type = get.type(trigger.card) == "basic";
					var prompt = event.type
						? "令一名角色摸四张牌或弃置四张牌"
						: "令一名角色回复2点体力或对其造成2点伤害";
					event.result = await player
						.chooseTarget(get.prompt("shizuru_benzhan"), prompt)
						.set("ai", function (target) {
							var player = _status.event.player;
							if (_status.event.getParent().type) {
								var att = get.attitude(player, target);
								if (target.hasSkillTag("nogain")) return -att;
								if (target.countCards("he") == 1 && att < 0) att /= 2;
								return Math.abs(att) * (1 + 0.1 * Math.min(0, 5 - target.countCards("h")));
							}
							return Math.max(
								get.recoverEffect(target, player, player),
								get.damageEffect(target, player, player)
							);
						})
						.forResult();
				},
				content() {
					"step 0";
					event.type = get.type(trigger.card) == "basic";
					var target = event.targets[0];
					event.target = target;
					var trans = get.translation(target);
					var list;
					if (event.type) {
						if (!target.countCards("he")) event._result = { index: 0 };
						else list = ["令" + trans + "摸四张牌", "令" + trans + "弃置四张牌"];
					} else {
						if (target.isHealthy()) event._result = { index: 1 };
						else list = ["令" + trans + "回复2点体力", "对" + trans + "造成2点伤害"];
					}
					player
						.chooseControl()
						.set("choiceList", list)
						.set(
							"choice",
							(function () {
								if (event.type) return get.attitude(player, target) > 0 ? 0 : 1;
								return get.recoverEffect(target, player, player) >
									get.damageEffect(target, player, player)
									? 0
									: 1;
							})()
						)
						.set("ai", function () {
							return _status.event.choice;
						});
					"step 1";
					player.addExpose(0.2);
					if (event.type) {
						if (result.index == 0) target.draw(4);
						else target.chooseToDiscard(4, "he", true);
					} else {
						if (result.index == 0) target.recover(2);
						else target.damage(2);
					}
				},
			},
			//岬镜子
			kyoko_juwu: {
				trigger: {
					global: ["loseAfter", "cardsDiscardAfter", "loseAsyncAfter", "equipAfter"],
				},
				filter(event, player) {
					if (player == _status.currentPhase) return false;
					var cards = event.getd();
					if (!cards.length) return false;
					cards.removeArray(event.getd(player));
					for (var card of cards) {
						if (get.position(card, true) == "d" && get.type(card, null, false) == "equip")
							return true;
					}
					return false;
				},
				autodelay(event, player) {
					return event.delay === false;
				},
				async cost(event, trigger, player) {
					var cards = trigger.getd();
					cards.removeArray(trigger.getd(player));
					cards = cards.filter(function (card) {
						if (get.position(card, true) == "d" && get.type(card, null, false) == "equip")
							return true;
					});
					const { result } = await player
						.chooseButton([get.prompt("kyoko_juwu"), cards], [1, cards.length])
						.set("ai", function () {
							return 1;
						});
					if (result.bool)
						event.result = {
							bool: true,
							cards: result.links,
						};
				},
				async content(event, trigger, player) {
					await player.gain(event.cards, "gain2", "log");
				},
			},
			kyoko_zhengyi: {
			    locked: true,
				group: ["kyoko_jingce", "kyoko_shelie", "kyoko_zhiheng"],
				count(player) {
					var list = [];
					player.countCards("e", function (card) {
						list.add(get.suit(card, player));
					});
					return list.length;
				},
			},
			kyoko_jingce: {
				trigger: { player: ["phaseUseEnd", "phaseJieshuBegin"] },
				filter(event, player) {
					var num = lib.skill.kyoko_zhengyi.count(player);
					if (!num || (event.name == "phaseUse") == num >= 3) return false;
					return (
						player.getHistory("useCard", function (evt) {
							return event.name != "phaseUse" || evt.getParent("phaseUse") == event;
						}).length >= player.hp
					);
				},
				frequent: true,
				content() {
					"step 0";
					if (trigger.name == "phaseUse") {
						player.draw(2);
						event.finish();
						return;
					}
					var list = [],
						history = player.getHistory("useCard");
					for (var i of history) {
						list.add(get.suit(i.card));
						if (list.length >= player.hp) break;
					}
					if (list.length >= player.hp) event.goon = true;
					else
						player
							.chooseControl("摸牌阶段", "出牌阶段")
							.set("prompt", "精策：选择要执行的额外阶段");
					"step 1";
					if (event.goon || result.index == 0) {
						var next = player.phaseDraw();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
					if (event.goon || result.index == 1) {
						var next = player.phaseUse();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
				},
			},
			kyoko_shelie: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				filter(event, player) {
					return !event.numFixed && lib.skill.kyoko_zhengyi.count(player) >= 1;
				},
				content() {
					"step 0";
					trigger.changeToZero();
					event.cards = get.cards(5);
					game.cardsGotoOrdering(event.cards);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(
						function (player, id, cards) {
							var str;
							if (player == game.me && !_status.auto) {
								str = "涉猎：获取花色各不相同的牌";
							} else {
								str = "涉猎";
							}
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						player,
						event.videoId,
						event.cards
					);
					event.time = get.utc();
					game.addVideo("showCards", player, ["涉猎", get.cardsInfo(event.cards)]);
					game.addVideo("delay", null, 2);
					"step 1";
					var next = player.chooseButton([0, 5], true);
					next.set("dialog", event.videoId);
					next.set("filterButton", function (button) {
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (get.suit(ui.selected.buttons[i].link) == get.suit(button.link)) return false;
						}
						return true;
					});
					next.set("ai", function (button) {
						return get.value(button.link, _status.event.player);
					});
					"step 2";
					if (result.bool && result.links) {
						event.cards2 = result.links;
					} else {
						event.finish();
					}
					var time = 1000 - (get.utc() - event.time);
					if (time > 0) {
						game.delay(0, time);
					}
					"step 3";
					game.broadcastAll("closeDialog", event.videoId);
					var cards2 = event.cards2;
					player.gain(cards2, "log", "gain2");
				},
			},
			kyoko_zhiheng: {
				enable: "phaseUse",
				usable: 1,
				position: "he",
				filter(event, player) {
					return lib.skill.kyoko_zhengyi.count(player) >= 2;
				},
				prompt() {
					var str = "弃置任意张牌并摸等量的牌";
					if (lib.skill.kyoko_zhengyi.count(_status.event.player) > 3)
						str += "，若弃置了所有手牌则多摸一张牌。";
					return str;
				},
				filterCard: lib.filter.cardDiscardable,
				discard: false,
				lose: false,
				delay: false,
				selectCard: [1, Infinity],
				check(card) {
					var player = _status.event.player;
					if (get.position(card) == "h") {
						return 8 - get.value(card);
					}
					if (get.position(card) == "e") {
						let subs = get.subtypes(card);
						if (subs.includes("equip2") || subs.includes("equip3")) return player.getHp() - get.value(card);
					}
					return 6 - get.value(card);
				},
				content() {
					"step 0";
					player.discard(cards);
					event.num = 1;
					var hs = player.getCards("h");
					if (!hs.length || lib.skill.kyoko_zhengyi.count(player) < 4) event.num = 0;
					else
						for (var i = 0; i < hs.length; i++) {
							if (!cards.includes(hs[i])) {
								event.num = 0;
								break;
							}
						}
					"step 1";
					player.draw(event.num + cards.length);
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			//音无结弦（3v3）
			yuzuru_bujin: {
				global: "yuzuru_bujin2",
				trigger: { global: "phaseDrawBegin" },
				forced: true,
				logTarget: "player",
				filter(event, player) {
					return event.player != player && event.player.isFriendOf(player);
				},
				content() {
					trigger.num++;
				},
			},
			yuzuru_bujin2: {
				mod: {
					globalFrom(from, to, num) {
						return (
							num -
							game.countPlayer(function (current) {
								return (
									current != from &&
									current.hasSkill("yuzuru_bujin") &&
									current.isFriendOf(from)
								);
							})
						);
					},
				},
			},
			//西园美鱼
			mio_tuifu: {
				trigger: { global: "damageBegin1" },
				forced: true,
				filter(event, player) {
					return event.source;
				},
				content() {
					player.draw(1);
				},
			},
			mio_tishen: {
				trigger: { player: "phaseZhunbeiBegin" },
				limited: true,
				unique: true,
				forceunique: true,
				charlotte: true,
				skillAnimation: true,
				animationColor: "water",
				filter(event, player) {
					return player.isDamaged();
				},
				check(event, player) {
					if (![player.name1, player.name2].includes("key_mio")) return false;
					return player.hp <= 1 || player.getDamagedHp() > 1;
				},
				content() {
					player.awakenSkill(event.name);
					var num = player.maxHp - player.hp;
					player.recover(num);
					player.draw(num);
					if (_status.characterlist && _status.characterlist.includes("key_midori")) {
						player.reinitCharacter("key_mio", "key_midori", false);
					}
				},
			},
			//西园美鸟
			midori_nonghuan: {
				enable: "phaseUse",
				charlotte: true,
				filter(event, player) {
					return (player.getStat("skill").midori_nonghuan || 0) < player.hp;
				},
				filterTarget(card, player, target) {
					var stat = player.getStat("midori_nonghuan");
					return (
						target != player &&
						(!stat || !stat.includes(target)) &&
						target.countGainableCards(player, "hej") > 0
					);
				},
				content() {
					"step 0";
					var stat = player.getStat();
					if (!stat.midori_nonghuan) stat.midori_nonghuan = [];
					stat.midori_nonghuan.push(target);
					player.gainPlayerCard(target, "hej", true);
					player.draw();
					"step 1";
					if (player.countCards("he") > 0)
						player.chooseCard("he", true, "交给" + get.translation(target) + "一张牌");
					else event.goto(3);
					"step 2";
					player.give(result.cards, target);
					"step 3";
					var history = game.getGlobalHistory("cardMove");
					for (var i = 0; i < history.length; i++) {
						if (history[i].getParent("midori_nonghuan") == event) history.splice(i--, 1);
					}
					game.countPlayer2(function (current) {
						var history = current.getHistory("lose");
						for (var i = 0; i < history.length; i++) {
							if (history[i].getParent("midori_nonghuan") == event) history.splice(i--, 1);
						}
						var history = current.getHistory("gain");
						for (var i = 0; i < history.length; i++) {
							if (history[i].getParent("midori_nonghuan") == event) history.splice(i--, 1);
						}
					});
				},
				ai: {
					order: 9,
					result: {
						player() {
							return lib.card.shunshou.ai.result.player.apply(this, arguments);
						},
						target() {
							return lib.card.shunshou.ai.result.target.apply(this, arguments);
						},
					},
				},
			},
			midori_tishen: {
				trigger: { player: "phaseZhunbeiBegin" },
				limited: true,
				charlotte: true,
				unique: true,
				forceunique: true,
				skillAnimation: true,
				animationColor: "water",
				filter(event, player) {
					return player.isDamaged();
				},
				check(event, player) {
					if (![player.name1, player.name2].includes("key_midori")) return false;
					return player.hp <= 1 || player.getDamagedHp() > 1;
				},
				content() {
					player.awakenSkill(event.name);
					var num = player.maxHp - player.hp;
					player.recover(num);
					player.draw(num);
					if (_status.characterlist && _status.characterlist.includes("key_mio")) {
						player.reinitCharacter("key_midori", "key_mio", false);
					}
				},
			},
			//立华奏
			kanade_mapo: {
				audio: 2,
				derivation: "mapodoufu",
				enable: "chooseToUse",
				viewAs: { name: "mapodoufu" },
				filterCard: { suit: "heart" },
				viewAsFilter(player) {
					return player.countCards("hes", { suit: "heart" }) > 0;
				},
				position: "hes",
				mod: {
					selectTarget(card, player, range) {
						if (card.name == "mapodoufu" && range[1] != -1) range[1]++;
					},
				},
				check(card) {
					var player = _status.event.player;
					if (
						game.countPlayer(function (current) {
							return (
								player.canUse("mapodoufu", current) &&
								get.effect(current, { name: "mapodoufu" }, player, player) > 0
							);
						}) > 1
					)
						return 6 - get.value(card);
					return 4 - get.value(card);
				},
			},
			kanade_benzhan: {
				audio: 3,
				trigger: { global: ["useCard", "respond"] },
				filter(event, player) {
					return (
						Array.isArray(event.respondTo) &&
						event.respondTo[0] != event.player &&
						[event.respondTo[0], event.player].includes(player)
					);
				},
				async cost(event, trigger, player) {
					event.type = get.type(trigger.card) == "basic";
					var prompt = event.type
						? "令一名角色摸四张牌或弃置四张牌"
						: "令一名角色回复2点体力或对其造成2点伤害";
					event.result = await player
						.chooseTarget(get.prompt("kanade_benzhan"), prompt)
						.set("ai", function (target) {
							var player = _status.event.player;
							if (_status.event.getParent().type) {
								var att = get.attitude(player, target);
								if (target.hasSkillTag("nogain")) return -att;
								if (target.countCards("he") == 1 && att < 0) att /= 2;
								return Math.abs(att) * (1 + 0.1 * Math.min(0, 5 - target.countCards("h")));
							}
							return Math.max(
								get.recoverEffect(target, player, player),
								get.damageEffect(target, player, player)
							);
						})
						.forResult();
				},
				content() {
					"step 0";
					event.type = get.type(trigger.card) == "basic";
					var target = event.targets[0];
					event.target = target;
					var trans = get.translation(target);
					var list;
					if (event.type) {
						if (!target.countCards("he")) event._result = { index: 0 };
						else list = ["令" + trans + "摸四张牌", "令" + trans + "弃置四张牌"];
					} else {
						if (target.isHealthy()) event._result = { index: 1 };
						else list = ["令" + trans + "回复2点体力", "对" + trans + "造成2点伤害"];
					}
					player
						.chooseControl()
						.set("choiceList", list)
						.set(
							"choice",
							(function () {
								if (event.type) return get.attitude(player, target) > 0 ? 0 : 1;
								return get.recoverEffect(target, player, player) >
									get.damageEffect(target, player, player)
									? 0
									: 1;
							})()
						)
						.set("ai", function () {
							return _status.event.choice;
						});
					"step 1";
					player.addExpose(0.2);
					if (event.type) {
						if (result.index == 0) target.draw(4);
						else target.chooseToDiscard(4, "he", true);
					} else {
						if (result.index == 0) target.recover(2);
						else target.damage(2);
					}
				},
			},
			//音无结弦
			yuzuru_wuxin: {
				trigger: { player: "phaseJieshuBegin" },
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCardTarget({
							filterTarget() {
								if (ui.selected.cards.length) return false;
								return true;
							},
							filterCard() {
								if (ui.selected.targets.length) return false;
								return lib.filter.cardDiscardable.apply(this, arguments);
							},
							selectTarget() {
								if (!ui.selected.cards.length) return [1, 1];
								return [0, 0];
							},
							selectCard() {
								if (ui.selected.targets.length) return [0, 0];
								if (!ui.selected.cards.length) return [0, 2];
								return [2, 2];
							},
							prompt: get.prompt2("yuzuru_wuxin"),
							complexCard: true,
							complexTarget: true,
							ai1(card) {
								var player = _status.event.player;
								if (player.hp > 3) return 0;
								return player.getDamagedHp() * 2 - get.value(card);
							},
							ai2(target) {
								if (player.hp < 4 || target.hasSkillTag("nogain")) return 0;
								return get.attitude(_status.event.player, target);
							},
						})
						.forResult();
				},
				async content(event, trigger, player) {
					if (event.cards && event.cards.length) {
						player.discard(event.cards);
						player.recover();
					} else {
						const target = event.targets[0];
						player.loseHp();
						target.draw(2);
					}
				},
			},
			yuzuru_deyi: {
				derivation: [
					"yuzuru_kunfen",
					"yuzuru_quji",
					"yuzuru_wangsheng",
					"yuzuru_kunfen_rewrite",
					"yuzuru_quji_rewrite",
				],
				trigger: { global: "dieAfter" },
				forced: true,
				unique: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "orange",
				content() {
					player.awakenSkill("yuzuru_deyi");
					player.changeSkills(
						["yuzuru_kunfen", "yuzuru_quji", "yuzuru_wangsheng"],
						["yuzuru_wuxin"]
					);
					player.gainMaxHp();
					player.recover();
					player.draw(2);
				},
			},
			yuzuru_kunfen: {
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				content() {
					"step 0";
					if (!player.storage._yuzuru_sss) player.loseHp();
					player.draw(2);
					"step 1";
					if (player.countCards("he") < 2) event.finish();
					else {
						player.chooseCardTarget({
							selectCard: 2,
							filterTarget: lib.filter.notMe,
							prompt: "是否交给一名其他角色两张牌？",
							position: "he",
							ai1(card) {
								var player = _status.event.player;
								if (player.maxHp - player.hp == 1 && card.name == "du") return 30;
								var check = player.countCards("h") - 2;
								if (check < 1) return 0;
								if (player.hp > 1 && check < 2) return 0;
								return get.unuseful(card) + 9;
							},
							ai2(target) {
								var att = get.attitude(_status.event.player, target);
								if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == "du")
									return 1 - att;
								return att - 2;
							},
						});
					}
					"step 2";
					if (result.bool) player.give(result.cards, result.targets[0]);
				},
			},
			yuzuru_quji: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				position: "he",
				filterCard: true,
				selectCard() {
					var player = _status.event.player;
					return player.getDamagedHp();
				},
				filterTarget(card, player, target) {
					return target != player && target.hp < target.maxHp;
				},
				filter(event, player) {
					return player.hp < player.maxHp;
				},
				selectTarget() {
					return [1, ui.selected.cards.length];
				},
				complexSelect: true,
				check(card) {
					if (!_status.event.player.storage._yuzuru_sss && get.color(card) == "black") return -1;
					return 9 - get.value(card);
				},
				line: { color: [194, 117, 92] },
				content() {
					"step 0";
					target.recover();
					"step 1";
					if (target == targets[targets.length - 1] && !player.storage._yuzuru_sss) {
						for (var i = 0; i < cards.length; i++) {
							if (get.color(cards[i], player) == "black") {
								player.loseHp();
								break;
							}
						}
					}
				},
				ai: {
					result: {
						target: 1,
					},
					order: 6,
				},
			},
			yuzuru_wangsheng: {
				trigger: { player: "dieBegin" },
				forced: true,
				juexingji: true,
				unique: true,
				skillAnimation: true,
				animationColor: "soil",
				content() {
					"step 0";
					trigger.cancel();
					player.awakenSkill("yuzuru_wangsheng");
					player.storage._yuzuru_sss = true;
					if (player.countCards("he") > 0) {
						player.chooseCardTarget({
							selectCard: [1, Infinity],
							filterTarget: lib.filter.notMe,
							prompt: "将任意张牌交给一名其他角色，或点【取消】。",
							position: "he",
							ai1(card) {
								var player = _status.event.player;
								if (
									get.suit(card, false) == "heart" &&
									game.hasPlayer(function (current) {
										return (
											current.hasSkill("kanade_mapo") &&
											get.attitude(player, current) > 0
										);
									})
								)
									return 1;
								return 0;
							},
							ai2(kanade) {
								if (
									kanade.hasSkill("kanade_mapo") &&
									get.attitude(_status.event.player, kanade) > 0
								)
									return 2;
								return 0;
							},
						});
					} else event.goto(2);
					"step 1";
					if (result.bool) player.give(result.cards, result.targets[0]);
					"step 2";
					player.loseMaxHp();
					"step 3";
					if (player.hp < 2) player.recover(2 - player.hp);
				},
			},
			//空门苍
			ao_xishi: {
				trigger: {
					player: ["useCard", "respond"],
					target: "useCardToTargeted",
				},
				forced: true,
				filter(event, player, name) {
					return (
						(name == "useCard" || name == "respond" || event.player != player) &&
						get.suit(event.card) == "diamond"
					);
				},
				content() {
					player.draw(2);
				},
			},
			ao_kuihun: {
				trigger: { global: "dying" },
				logTarget: "player",
				line: "thunder",
				filter(event, player) {
					return player != event.player;
				},
				content() {
					"step 0";
					player.draw(2);
					"step 1";
					if (!trigger.player.countCards("h")) event.finish();
					else
						player
							.chooseButton(["选择一张牌作为「蝶」", trigger.player.getCards("h")])
							.set("ai", function (button) {
								var val = get.buttonValue(button);
								if (get.attitude(_status.event.player, get.owner(button.link)) <= 0)
									return 10 + val;
								if (val <= 0) return 20;
								if (button.link.name == "tao" || button.link.name == "jiu") return 0;
								return 1 / val;
							});
					"step 2";
					if (result.bool) {
						player
							.addToExpansion(result.links, trigger.player, "give")
							.set("log", false)
							.gaintag.add("ao_diegui");
						game.log(result.links, "飞向了", player);
					}
				},
				locked: false,
				mod: {
					targetInRange(card, player) {
						const cardSuit = get.suit(card, false);
						const list = player.getExpansions("ao_diegui");
						for (let i = 0; i < list.length; i++) {
							if (cardSuit === "unsure" || get.suit(list[i], false) === cardSuit) return true;
						}
					},
					cardUsable(card, player) {
						const cardSuit = get.suit(card, false);
						const list = player.getExpansions("ao_diegui");
						for (let i = 0; i < list.length; i++) {
							if (cardSuit === "unsure" || get.suit(list[i], false) === cardSuit)
								return Infinity;
						}
					},
					maxHandcard(player, num) {
						return num + player.getExpansions("ao_diegui").length;
					},
				},
			},
			ao_shixin: {
				derivation: "ao_diegui",
				trigger: { player: "phaseZhunbeiBegin" },
				juexingji: true,
				forced: true,
				skillAnimation: true,
				animationColor: "key",
				unique: true,
				filter(event, player) {
					var list = player.getExpansions("ao_diegui");
					var list2 = [];
					for (var i = 0; i < list.length; i++) {
						list2.add(get.suit(list[i], false));
					}
					return list2.length > 3;
				},
				content() {
					player.awakenSkill("ao_shixin");
					player.changeSkills(["ao_diegui"], ["ao_kuihun"]);
					player.gainMaxHp();
					player.recover(2);
					player.draw(4);
				},
				ai: {
					combo: "ao_kuihun"
				},
			},
			ao_diegui: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.getExpansions("ao_diegui").length > 0;
				},
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog("蝶归", player.getExpansions("ao_diegui"), "hidden");
					},
					backup(links, player) {
						return {
							card: links,
							filterCard() {
								return false;
							},
							selectCard: -1,
							filterTarget: true,
							delay: false,
							content: lib.skill.ao_diegui.contentx,
							line: "thunder",
							ai: {
								result: {
									target(player, target) {
										if (target != player && target.hasSkillTag("nogain")) return 0;
										var num = 1;
										if (target.isTurnedOver()) num += 2;
										if (target.isLinked()) num += 0.5;
										return num;
									},
								},
							},
						};
					},
					prompt(links, player) {
						return (
							"选择一名角色，令其获得" +
							get.translation(links[0]) +
							"，摸两张牌并将武将牌复原。"
						);
					},
				},
				contentx() {
					"step 0";
					player.give(lib.skill.ao_diegui_backup.card, target, "visible");
					target.draw(2);
					"step 1";
					target.link(false);
					"step 2";
					target.turnOver(false);
					player.draw(4);
					player.recover(2);
				},
				intro: {
					name: "七影蝶",
					content: "expansion",
					markcount: "expansion",
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				ai: { order: 1, result: { player: 1 } },
			},
			//直井文人
			ayato_jianshen: {
				mod: {
					cardnature(card, player) {
						if (get.name(card) == "sha") return "kami";
					},
				},
				ai: { threaten: 3 },
			},
			ayato_zonghuan: {
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				content() {
					"step 0";
					player
						.chooseButton(
							["请选择" + get.translation(target) + "的一张手牌", target.getCards("h")],
							true
						)
						.set("ai", get.buttonValue);
					"step 1";
					if (result.bool) {
						var card = result.links[0];
						event.card = card;
						if (!lib.filter.cardEnabled(card, target)) event._result = { bool: false };
						else {
							var targets = game.players.slice(0);
							var info = get.info(card);
							var range;
							if (!info.notarget) {
								var select = get.copy(info.selectTarget);
								if (select == undefined) {
									range = [1, 1];
								} else if (typeof select == "number") range = [select, select];
								else if (get.itemtype(select) == "select") range = select;
								else if (typeof select == "function") range = select(card, player);
								game.checkMod(card, target, range, "selectTarget", target);
							}
							if (info.notarget || range[1] == -1) {
								if (range[1] == -1) {
									for (var i = 0; i < targets.length; i++) {
										if (!target.canUse(card, targets[i])) {
											targets.splice(i--, 1);
										}
									}
									if (targets.length) {
										event.targets2 = targets;
									} else {
										event.finish();
										return;
									}
								} else event.targets2 = [];
								var next = player.chooseBool();
								next.set(
									"prompt",
									event.prompt ||
										"是否令" +
											get.translation(target) +
											(event.targets2.length ? "对" : "") +
											get.translation(event.targets2) +
											"使用" +
											get.translation(card) +
											"?"
								);
								next.set("prompt2", "或点「取消」，令其将此牌置入弃牌堆");
								next.ai = function () {
									var eff = 0;
									for (var i = 0; i < event.targets2.length; i++) {
										eff += get.effect(event.targets2[i], card, target, player);
									}
									return eff > 0;
								};
							} else {
								var next = player.chooseTarget();
								next.set("_get_card", card);
								next.set("source", target);
								next.set("filterTarget", function (card, player, target) {
									return lib.filter.filterTarget(
										_status.event._get_card,
										_status.event.source,
										target
									);
								});
								next.set("ai", function (target) {
									var evt = _status.event;
									return get.effect(target, evt._get_card, evt.source, evt.player);
								});
								next.set("selectTarget", function () {
									var card = get.card(),
										player = _status.event.source;
									if (card == undefined) return;
									var range;
									var select = get.copy(get.info(card).selectTarget);
									if (select == undefined) {
										if (get.info(card).filterTarget == undefined) return [0, 0];
										range = [1, 1];
									} else if (typeof select == "number") range = [select, select];
									else if (get.itemtype(select) == "select") range = select;
									else if (typeof select == "function") range = select(card, player);
									game.checkMod(card, player, range, "selectTarget", player);
									return range;
								});
								next.set(
									"prompt",
									event.prompt ||
										"选择" +
											get.translation(target) +
											"使用" +
											get.translation(card) +
											"的目标"
								);
								next.set("prompt2", "或点「取消」令其将此牌置入弃牌堆");
							}
						}
					} else event.finish();
					"step 2";
					if (result.bool) {
						target.useCard(card, event.targets2 || result.targets, false, "noai");
						player.draw();
					} else {
						target.lose(card, ui.discardPile);
						target.$throw(card);
						game.log(target, "将", card, "置入了弃牌堆");
					}
				},
				ai: { order: 10, result: { target: -1 } },
			},
			//古河渚
			nagisa_tiandu: {
				trigger: { player: "judgeEnd" },
				charlotte: true,
				frequent(event) {
					if (event.result.card.name == "du") return false;
					return true;
				},
				check(event) {
					if (event.result.card.name == "du") return false;
					return true;
				},
				filter(event, player) {
					return get.position(event.result.card, true) == "o";
				},
				content() {
					player.gain(trigger.result.card, "gain2");
				},
			},
			nagisa_fuxin: {
				trigger: {
					global: ["gainAfter", "loseAfter", "loseAsyncAfter", "damageEnd"],
				},
				filterx(event, player) {
					var source = _status.currentPhase;
					if (event.name == "damage") {
						return event.player.isAlive() && event.player != source;
					} else if (event.name == "lose") {
						if (event.type != "discard" || event.player == source || event.player.isDead())
							return false;
						if ((event.discarder || event.getParent(2).player) == event.player) return false;
						if (!event.getl(event.player).hs.length) return false;
						return true;
					} else if (event.name == "gain") {
						if (event.giver || event.getParent().name == "gift") return false;
						var cards = event.getg(event.player);
						if (!cards.length) return false;
						return game.hasPlayer(function (current) {
							if (current == event.player || current == source) return false;
							var hs = event.getl(current).hs;
							for (var i of hs) {
								if (cards.includes(i)) return true;
							}
							return false;
						});
					} else if (event.type == "gain") {
						if (event.giver || !event.player || event.player == source || event.player.isDead())
							return false;
						var hs = event.getl(event.player);
						return game.hasPlayer(function (current) {
							if (current == event.player) return false;
							var cards = event.getg(current);
							for (var i of cards) {
								if (hs.includes(i)) return true;
							}
						});
					} else if (event.type == "discard") {
						if (!event.discarder) return false;
						return game.hasPlayer(function (current) {
							return (
								current != source &&
								current != event.discarder &&
								event.getl(current).hs.length > 0
							);
						});
					}
					return false;
				},
				filter(event, player, triggername, target) {
					return target.isIn();
				},
				getIndex(trigger, player, triggername) {
					if (!lib.skill.nagisa_fuxin.filterx(trigger, player)) return false;
					const targets = [],
						source = _status.currentPhase;
					if (trigger.name == "gain") {
						const cards = trigger.getg(trigger.player);
						targets.addArray(
							game.filterPlayer(function (current) {
								if (current === trigger.player || current === source) return false;
								const hs = trigger.getl(current).hs;
								for (const i of hs) {
									if (cards.includes(i)) return true;
								}
								return false;
							})
						);
					} else if (trigger.name == "loseAsync" && trigger.type == "discard") {
						targets.addArray(
							game.filterPlayer(function (current) {
								return (
									current != trigger.discarder &&
									current != source &&
									trigger.getl(current).hs.length > 0
								);
							})
						);
					} else targets.push(trigger.player);
					targets.sortBySeat();
					return targets;
				},
				logTarget: (event, player, triggername, target) => target,
				check(event, player, triggername, target) {
					const source = _status.currentPhase;
					if (source && source.isIn() && get.attitude(player, source) > 0) return false;
					return get.attitude(player, target) > 0;
				},
				async content(event, trigger, player) {
					const target = event.indexedData;
					const { result } = await target.judge();
					if (result.color === "red" && target.isIn()) {
						await target.draw();
					} else {
						const source = _status.currentPhase;
						if (source && source.isIn() && source.countCards("h") > 0) {
							source.chooseToDiscard("he", true);
						}
					}
				},
				ai: { expose: 0.2 },
			},
			//冈崎朋也
			tomoya_shangxian: {
				trigger: { player: "phaseUseBegin" },
				mark: true,
				locked: true,
				intro: {
					content(s) {
						return "计算与其他角色的距离时始终从" + (s ? "逆" : "顺") + "时针计算";
					},
				},
				content() {
					player.draw();
					player.storage.tomoya_shangxian = !player.storage.tomoya_shangxian;
				},
				ai: {
					left_hand: true,
					right_hand: true,
					skillTagFilter(player, tag) {
						return (player.storage.tomoya_shangxian == true) == (tag == "left_hand");
					},
				},
			},
			tomoya_wangjin: {
				trigger: { global: "phaseJieshuBegin" },
				filter(event, player) {
					return (
						player != event.player &&
						!player.hasSkill("tomoya_wangjin_" + player.inRange(event.player))
					);
				},
				logTarget: "player",
				check(event, player) {
					var target = event.player;
					var bool = player.inRange(target);
					if (!bool) {
						if (target.hp > player.hp)
							return get.effect(target, { name: "sha", isCard: true }, player, player) > 0;
						var temp = target;
						while (true) {
							temp = temp.getNext();
							if (temp == target || temp == _status.roundStart) return true;
							if (temp == player) continue;
							if (
								temp.hp > player.hp &&
								!player.inRange(temp) &&
								get.effect(temp, { name: "sha", isCard: true }, player, player) > 0
							)
								return false;
						}
					}
					if (get.attitude(player, target) < 2) return false;
					if (target.hp < player.hp && !target.hasSkillTag("nogain")) return true;
					var temp = target;
					while (true) {
						temp = temp.getNext();
						if (temp == target || temp == _status.roundStart) return true;
						if (temp == player) continue;
						if (
							temp.hp < player.hp &&
							player.inRange(temp) &&
							get.attitude(player, target) >= 2 &&
							!temp.hasSkillTag("nogain")
						)
							return false;
					}
				},
				content() {
					"step 0";
					event.bool = player.inRange(trigger.player);
					player.addTempSkill("tomoya_wangjin_" + event.bool, "roundStart");
					if (event.bool) {
						trigger.player.draw();
					} else player.draw(2);
					"step 1";
					if (event.bool) {
						if (trigger.player.hp < player.hp) player.draw();
						else event.finish();
					} else {
						if (player.countDiscardableCards(trigger.player, "h") > 0)
							trigger.player.discardPlayerCard(player, "h", true);
						else event.finish();
					}
					"step 2";
					if (event.bool) {
						player.chooseCard("h", "是否交给" + get.translation(trigger.player) + "一张牌？");
					} else {
						event.finish();
						if (player.hp >= trigger.player.hp) return;
						var card = { name: "sha", isCard: true };
						if (player.canUse(card, trigger.player, false))
							player.useCard(card, trigger.player, false);
					}
					"step 3";
					if (result.bool) player.give(result.cards, target);
				},
				subSkill: {
					true: { charlotte: true },
					false: { charlotte: true },
				},
				ai: { expose: 0.2 },
			},
			//野田
			noda_fengcheng: {
				audio: 2,
				trigger: {
					player: "gainAfter",
				},
				forced: true,
				filter(event, player) {
					return get.itemtype(event.source) == "player" && event.bySelf != true;
				},
				check(event, player) {
					return get.attitude(player, event.source) > 0;
				},
				logTarget: "source",
				content() {
					trigger.source.draw(4);
				},
				ai: {
					combo: "noda_xunxin",
					halfneg: true
				},
			},
			noda_xunxin: {
				audio: 2,
				enable: "phaseUse",
				viewAs: { name: "juedou" },
				filter(event, player) {
					return (player.getStat("skill").noda_xunxin || 0) < player.hp;
				},
				filterTarget(event, player, target) {
					if (target.hp < player.hp) return false;
					return lib.filter.filterTarget.apply(this, arguments);
				},
				selectCard: -1,
				filterCard() {
					return false;
				},
				group: "noda_xunxin2",
			},
			noda_xunxin2: {
				trigger: { player: "juedouAfter" },
				popup: false,
				forced: true,
				filter(event, player) {
					if (event.target.isDead()) return false;
					return event.turn && event.turn.countCards("he") > 0;
				},
				content() {
					"step 0";
					event.giver = trigger.turn;
					event.gainner = event.giver == player ? trigger.target : player;
					event.giver.chooseCard("he", true, "交给" + get.translation(event.gainner) + "一张牌");
					"step 1";
					event.giver.give(result.cards, event.gainner);
				},
			},
			//日向秀树
			hinata_qiulve: {
				audio: 2,
				enable: ["chooseToUse", "chooseToRespond"],
				viewAsFilter(player) {
					return (
						player.countCards("hes", function (card) {
							return get.type(card) != "basic";
						}) > 0
					);
				},
				viewAs: { name: "sha" },
				filterCard(card, player) {
					return get.type(card) != "basic";
				},
				locked: false,
				position: "hes",
				check(card) {
					var val = get.value(card);
					if (val >= 6) return 0;
					if (get.color(card) == "black") return 12 - val;
					return 6 - val;
				},
				mod: {
					targetInRange(card, player, target) {
						if (_status.event.skill == "hinata_qiulve") return true;
					},
				},
				group: "hinata_qiulve_clear",
				ai: {
					respondSha: true,
					skillTagFilter(player) {
						return (
							player.countCards("hes", function (card) {
								return get.type(card) != "basic";
							}) > 0
						);
					},
				},
			},
			hinata_qiulve_clear: {
				trigger: { player: "useCard1" },
				firstDo: true,
				silent: true,
				filter(event, player) {
					return event.skill == "hinata_qiulve";
				},
				content() {
					if (get.color(trigger.card) == "red") trigger.directHit.addArray(game.players);
					else if (trigger.addCount !== false) {
						trigger.addCount = false;
						var stat = player.getStat().card;
						if (stat.sha) stat.sha--;
					}
				},
			},
			hinata_ehou: {
				audio: 2,
				trigger: { global: "useCardAfter" },
				//这个也是chooseToUse 改不了
				direct: true,
				filter(event, player) {
					return (
						player != event.player &&
						event.targets &&
						event.targets.includes(player) &&
						(_status.connectMode || player.hasSha(4))
					);
				},
				content() {
					"step 0";
					player.chooseToUse({
						logSkill: "hinata_ehou",
						preTarget: trigger.player,
						prompt: "是否发动【扼喉】，对" + get.translation(trigger.player) + "使用一张【杀】？",
						filterCard(card, player) {
							return get.name(card) == "sha" && lib.filter.filterCard.apply(this, arguments);
						},
						filterTarget(card, player, target) {
							return (
								target == _status.event.preTarget &&
								lib.filter.filterTarget.apply(this, arguments)
							);
						},
						addCount: false,
					});
					"step 1";
					if (
						result.bool &&
						player.getHistory("sourceDamage", function (evt) {
							return evt.getParent(4) == event;
						}).length
					)
						player.draw(4);
				},
			},
			//高桥久子
			hisako_yinbao: {
				audio: 2,
				trigger: { player: ["damageEnd", "recoverAfter"] },
				content() {
					"step 0";
					player.judge(function (card) {
						return get.suit(card) == "spade" ? 2 : -2;
					}).judge2 = function (result) {
						return result.bool;
					};
					"step 1";
					if (result.bool && game.hasPlayer((current) => current != player)) {
						player
							.chooseTarget(lib.filter.notMe, true, "选择一名其他角色，对其造成4点雷属性伤害")
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.damageEffect(target, player, player, "thunder");
							});
					} else event.finish();
					"step 2";
					var target = result.targets[0];
					player.addExpose(0.2);
					player.line(target, "thunder");
					target.damage(4, "thunder");
				},
			},
			hisako_zhuanyun: {
				trigger: { player: "judgeBegin" },
				forced: true,
				charlotte: true,
				silent: true,
				filter(event, player) {
					return !event.directresult;
				},
				content() {
					var tempcard = false,
						temp = -Infinity;
					for (var i = 0; i < ui.cardPile.childElementCount; i++) {
						var card = ui.cardPile.childNodes[i];
						var temp2 = trigger.judge(card);
						if (temp2 > temp) {
							tempcard = card;
							temp = temp2;
						}
					}
					if (tempcard) trigger.directresult = tempcard;
				},
				ai: { luckyStar: true },
			},
			//直枝理树
			riki_spwenji: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("he");
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("riki_spwenji"), function (card, player, target) {
							return target != player && target.countCards("he");
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (att > 0) return Math.sqrt(att) / 10;
							return 5 - att;
						})
						.forResult();
				},
				content() {
					"step 0";
					target = targets[0];
					event.target = target;
					target.chooseCard("he", true, "问计：将一张牌交给" + get.translation(player));
					"step 1";
					if (result.bool) {
						player.addTempSkill("riki_spwenji_respond");
						player.storage.riki_spwenji_respond = get.type2(result.cards[0], target);
						event.target.give(result.cards, player, true);
					}
				},
				ai: { expose: 0.2 },
				subSkill: {
					respond: {
						onremove: true,
						trigger: { player: "useCard" },
						forced: true,
						charlotte: true,
						audio: "riki_spwenji",
						filter(event, player) {
							return get.type2(event.card) == player.storage.riki_spwenji_respond;
						},
						content() {
							trigger.directHit.addArray(game.players);
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								return get.type2(arg.card) == player.storage.riki_spwenji_respond;
							},
						},
					},
				},
			},
			riki_nvzhuang: {
				init(player) {
					if (get.character(player.name1, 3).includes("riki_nvzhuang")) {
						player.storage.riki_nvzhuang = player.sex;
						if (player.sex === "male") player.sex = "double";
						else player.sex = "female";
					}
				},
				onremove(player) {
					if (player.storage.riki_nvzhuang) player.sex = player.storage.riki_nvzhuang;
				},
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				content() {
					player.draw(player.countCards("h") == 0 ? 4 : 2);
				},
			},
			riki_mengzhong: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				derivation: "riki_chongzhen",
				juexingji: true,
				unique: true,
				skillAnimation: true,
				animationColor: "key",
				filter(event, player) {
					var num = 0;
					player.getAllHistory("gain", function (evt) {
						if (evt.getParent().name == "riki_spwenji") num += evt.cards.length;
					});
					return num >= 3;
				},
				content() {
					player.awakenSkill("riki_mengzhong");
					player.removeSkills("riki_spwenji");
					player.gainMaxHp();
					player.recover();
					player.addSkills("riki_chongzhen");
				},
				ai: {
					combo: "riki_spwenji"
				},
			},
			riki_chongzhen: {
				trigger: {
					player: "phaseUseBegin",
				},
				filter(event, player) {
					return game.hasPlayer((current) => player.canCompare(current));
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("riki_chongzhen"), function (card, player, target) {
							return player.canCompare(target);
						})
						.set("ai", function (target) {
							return (
								(-get.attitude(player, target) * (1 + target.countCards("e"))) /
								(1 + target.countCards("j"))
							);
						})
						.forResult();
				},
				content() {
					"step 0";
					var target = targets[0];
					event.target = target;
					player.chooseToCompare(target);
					"step 1";
					if (result.bool) {
						var num = 0;
						if (target.countCards("h")) num++;
						if (target.countCards("e")) num++;
						if (target.countCards("j")) num++;
						if (num) {
							player
								.gainPlayerCard(target, num, "hej", true)
								.set("filterButton", function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (
											get.position(button.link) ==
											get.position(ui.selected.buttons[i].link)
										)
											return false;
									}
									return true;
								});
						}
					} else {
						player.addTempSkill("zishou2", "phaseUseAfter");
					}
				},
				ai: { expose: 0.2 },
			},
			//来谷唯湖
			yuiko_fenglun: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return (
						player.countCards("h") > 0 &&
						game.hasPlayer(function (current) {
							return player.canCompare(current);
						})
					);
				},
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				content() {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (result.bool) player.addTempSkill("yuiko_fenglun2", "phaseUseEnd"); else player.draw(4); player.recover(2);
				},
				ai: {
					order: 10,
					result: { target: -1 },
				},
			},
			yuiko_fenglun2: {
				mod: {
					cardUsable() {
						return Infinity;
					},
					targetInRange() {
						return true;
					},
				},
			},
			yuiko_dilve: {
				enable: "chooseCard",
				check() {
					return 20;
				},
				filter(event) {
					return event.type == "compare" && !event.directresult;
				},
				onCompare(player) {
					return game.cardsGotoOrdering(get.bottomCards()).cards;
				},
				group: "yuiko_dilve_gain",
				subSkill: {
					gain: {
						trigger: {
							player: ["chooseToCompareAfter", "compareMultipleAfter"],
							target: ["chooseToCompareAfter", "compareMultipleAfter"],
						},
						filter(event, player) {
							if (event.preserve) return false;
							return [event.card1, event.card2].filterInD("od").length > 0;
						},
						prompt2(event, player) {
							return "获得" + get.translation([event.card1, event.card2].filterInD("od"));
						},
						content() {
							player.gain([trigger.card1, trigger.card2].filterInD("od"), "gain2", "log");
						},
					},
				},
			},
			//多鲁基
			doruji_feiqu: {
				trigger: {
					player: "useCard",
					target: "useCardToTargeted",
				},
				forced: true,
				filter(event, player) {
					return event.card.name == "sha";
				},
				content() {
					if (trigger.name == "useCard") trigger.directHit.addArray(game.players);
					else trigger.directHit.add(player);
				},
				ai: {
					halfneg: true,
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						return arg.card.name == "sha";
					},
				},
				global: "doruji_feiqu_ai",
			},
			doruji_feiqu_ai: {
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						return (
							arg.card.name == "sha" &&
							(arg.target.hasSkill("doruji_feiqu") || arg.target.hasSkill("godan_feiqu"))
						);
					},
				},
			},
			//千里朱音
			akane_jugu: {
				audio: 2,
				mod: {
					maxHandcard(player, num) {
						return num + player.maxHp;
					},
				},
				trigger: { global: "phaseBefore", player: "enterGame" },
				forced: true,
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content() {
					player.draw(player.maxHp);
					player.draw(player.maxHp);
				},
			},
			akane_quanqing: {
				enable: "phaseUse",
				filterCard: true,
				filterTarget(card, player, target) {
					return target != player && player.inRange(target);
				},
				position: "he",
				check(card) {
					var val = get.value(card);
					var num = card.number;
					if (num > 10) return 8 - val;
					var player = _status.event.player;
					if (player.getUseValue(card, null, true) > player.getUseValue({ name: "guohe" }))
						return 0;
					if (num > 6) return 6 - val;
					return 3 - val;
				},
				content() {
					"step 0";
					var num = cards[0].number;
					var trans = get.translation(target);
					var list = ["令" + trans + "摸两张牌"];
					event.addIndex = 0;
					if (num > 6) {
						if (target.countDiscardableCards(player, "hej") > 0)
							list.push("弃置" + trans + "区域内的一张牌");
						else event.addIndex++;
					}
					if (num > 10) list.push("对" + trans + "造成3点伤害");
					if (list.length == 1) event._result = { index: 0 };
					else
						player
							.chooseControl()
							.set("choiceList", list)
							.set("index", list.length - 1)
							.set("ai", function () {
								return _status.event.index;
							});
					"step 1";
					if (result.index > 0) result.index += event.addIndex;
					switch (result.index) {
						case 0:
							target.draw(2);
							break;
						case 1:
							player.discardPlayerCard(target, "hej", true);
							break;
						case 2:
							target.damage("nocard", 2);
							break;
					}
				},
				ai: {
					order: 4,
					result: {
						target(player, target) {
							var card = ui.selected.cards[0];
							if (card) {
								if (card.number > 10) return get.damageEffect(target, player, target);
								if (card.number > 6)
									return lib.card.guohe.ai.result.target.apply(this, arguments);
								return 1;
							}
						},
					},
				},
			},
			akane_yifu: {
				unique: true,
				global: "akane_yifu2",
				zhuSkill: true,
			},
			akane_yifu2: {
				audio: 2,
				enable: "phaseUse",
				discard: false,
				line: true,
				log: false,
				delay: false,
				lose: false,
				prepare(cards, player, targets) {
					targets[0].logSkill("akane_yifu");
				},
				prompt() {
					var player = _status.event.player;
					var list = game.filterPlayer(function (target) {
						return target != player && target.hasZhuSkill("akane_yifu", player);
					});
					var str = "将一张手牌交给" + get.translation(list);
					if (list.length > 1) str += "中的一人";
					return str;
				},
				filter(event, player) {
					if (player.group != "key") return false;
					if (player.countCards("h") == 0) return 0;
					return game.hasPlayer(function (target) {
						return (
							target != player &&
							target.hasZhuSkill("akane_yifu", player) &&
							!target.hasSkill("akane_yifu3")
						);
					});
				},
				filterCard: true,
				filterTarget(card, player, target) {
					return (
						target != player &&
						target.hasZhuSkill("akane_yifu", player) &&
						!target.hasSkill("akane_yifu3")
					);
				},
				content() {
					"step 0";
					player.give(cards, target);
					target.addTempSkill("akane_yifu3", "phaseUseEnd");
					target.draw();
					"step 1";
					if (target.countCards("h") > 0)
						target
							.chooseCard("h", true, "交给" + get.translation(player) + "一张牌")
							.set("ai", function (card) {
								return 14 - get.value(card);
							});
					else event.finish();
					"step 2";
					target.give(result.cards, player);
				},
				ai: {
					expose: 0.3,
					order: 10,
					result: {
						target: 5,
					},
				},
			},
			akane_yifu3: { charlotte: true },
			//笹濑川佐佐美
			sasami_miaobian: {
				derivation: ["sasami_gongqing", "sasami_funan", "sasami_baoqiu"],
				init2(player) {
					if (player.hp >= 3) player.addSkill("sasami_gongqing");
					else player.removeSkill("sasami_gongqing");
					if (player.hp >= 2) player.addSkill("sasami_funan");
					else player.removeSkill("sasami_funan");
					if (player.hp >= 1) player.addSkill("sasami_baoqiu");
					else player.removeSkill("sasami_baoqiu");
				},
				trigger: { player: "changeHp" },
				firstDo: true,
				silent: true,
				content() {
					lib.skill.sasami_miaobian.init2(player);
				},
				group: ["sasami_miaobian_damage", "sasami_miaobian_lose"],
			},
			sasami_miaobian_damage: {
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return player.hp < 3;
				},
				forced: true,
				content() {
					player.recover();
				},
			},
			sasami_miaobian_lose: {
				trigger: { player: ["useCard", "respond", "discardAfter"] },
				filter(event, player) {
					return player.hp < 3 && _status.currentPhase != player;
				},
				forced: true,
				content() {
					player.draw();
				},
			},
			sasami_baoqiu: {
				line: { color: [173, 149, 206] },
				inherit: "rin_baoqiu",
			},
			sasami_gongqing: {
				audio: true,
				trigger: {
					player: ["damageBegin3", "damageBegin4"],
				},
				forced: true,
				filter(event, player, name) {
					if (!event.source) return false;
					var range = event.source.getAttackRange();
					if (name == "damageBegin3") return range > 3;
					return event.num > 1 && range < 3;
				},
				content() {
					trigger.num = event.triggername == "damageBegin4" ? 1 : trigger.num + 1;
				},
				ai: {
					filterDamage: true,
					skillTagFilter(player, tag, arg) {
						if (arg && arg.player) {
							if (arg.player.hasSkillTag("jueqing", false, player)) return false;
							if (arg.player.getAttackRange() < 3) return true;
						}
						return false;
					},
				},
			},
			sasami_funan: {
				audio: 2,
				trigger: { global: ["respond", "useCard"] },
				line: { color: [173, 149, 206] },
				filter(event, player) {
					if (!event.respondTo) return false;
					if (event.player == player) return false;
					if (player != event.respondTo[0]) return false;
					if (!player.hasSkill("sasami_funan_jiexun")) {
						var cards = [];
						if (get.itemtype(event.respondTo[1]) == "card") cards.push(event.respondTo[1]);
						else if (event.respondTo[1].cards) cards.addArray(event.respondTo[1].cards);
						return cards.filterInD("od").length > 0;
					} else return event.cards.filterInD("od").length > 0;
				},
				logTarget: "player",
				content() {
					"step 0";
					if (!player.hasSkill("sasami_funan_jiexun")) {
						var cards = [];
						if (get.itemtype(trigger.respondTo[1]) == "card") cards.push(trigger.respondTo[1]);
						else if (trigger.respondTo[1].cards) cards.addArray(trigger.respondTo[1].cards);
						cards = cards.filterInD("od");
						trigger.player.gain(cards, "gain2", "log").gaintag.add("sasami_funan");
						trigger.player.addTempSkill("sasami_funan_use");
					}
					"step 1";
					var cards = trigger.cards.filterInD("od");
					player.gain(cards, "log", "gain2");
				},
				subSkill: {
					use: {
						onremove(player) {
							player.removeGaintag("sasami_funan");
						},
						charlotte: true,
						mod: {
							cardEnabled2(card, player) {
								if (get.itemtype(card) == "card" && card.hasGaintag("sasami_funan")) {
									return false;
								}
							},
						},
					},
				},
			},
			//枣铃
			rin_baoqiu: {
				mod: {
					attackRange(rin, ball) {
						return ball + 2;
					},
				},
				trigger: { player: "useCardToPlayered" },
				forced: true,
				logTarget: "target",
				filter(event, player) {
					return event.card.name == "sha";
				},
				line: { color: [194, 117, 92] },
				content() {
					"step 0";
					player.judge(function () {
						return 0;
					});
					"step 1";
					var target = trigger.target;
					var map = trigger.customArgs;
					var id = target.playerid;
					if (!map[id]) map[id] = {};
					if (result.color == "red") {
						if (!map[id].extraDamage) map[id].extraDamage = 0;
						map[id].extraDamage++;
					}
					if (result.color == "black") {
						trigger.directHit.add(target);
					}
					if (result.suit == "spade" || result.suit == "heart") {
						var evt = trigger.getParent();
						if (evt.addCount !== false) {
							evt.addCount = false;
							player.getStat().card.sha--;
						}
						player.draw();
					}
					if (result.suit == "diamond" || result.suit == "club") {
						target.addTempSkill("fengyin");
						if (target.countDiscardableCards(player, "he") > 0)
							player.discardPlayerCard(target, "he", true);
					}
				},
			},
			//春原阳平&春原芽衣
			sunohara_chengshuang: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				group: "sunohara_chengshuang_phase",
				forced: true,
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content() {
					"step 0";
					var evt = event.getParent("phase");
					if (evt && evt.player == player) evt.sunohara_chengshuang = true;
					player.chooseControl("male", "female").set("prompt", "成双：请选择自己的性别");
					"step 1";
					var sex = result.control;
					game.broadcastAll(
						function (player, sex) {
							player.sex = sex;
							if (player.marks && player.marks.sunohara_chengshuang)
								player.marks.sunohara_chengshuang.firstChild.innerHTML =
									sex == "male" ? "♂" : "♀";
						},
						player,
						sex
					);
					game.log(player, "将性别变更为", "#g" + get.translation(sex) + "性");
				},
				mark: true,
				intro: {
					content(storage, player) {
						if (player.sex == "unknown" || player.sex == "double") return "当前性别未确定";
						return "当前性别：" + get.translation(player.sex);
					},
				},
				ai: {
					combo: "sunohara_jianren"
				},
			},
			sunohara_chengshuang_phase: {
				trigger: {
					player: "phaseBegin",
				},
				filter(event, player) {
					if (event.sunohara_chengshuang) return false;
					return game.phaseNumber > 1;
				},
				prompt2(event, player) {
					if (player.sex == "unknown" || player.sex == "double") return "选择自己的性别";
					return "将自己的性别变更为" + (player.sex == "male" ? "女性" : "男性");
				},
				content() {
					"step 0";
					if (player.sex == "unknown" || player.sex == "double")
						player.chooseControl("male", "female").set("prompt", "成双：请选择自己的性别");
					else
						event._result = {
							control: player.sex == "male" ? "female" : "male",
						};
					"step 1";
					var sex = result.control;
					game.broadcastAll(
						function (player, sex) {
							player.sex = sex;
							if (player.marks && player.marks.sunohara_chengshuang)
								player.marks.sunohara_chengshuang.firstChild.innerHTML =
									sex == "male" ? "♂" : "♀";
						},
						player,
						sex
					);
					game.log(player, "将性别变更为", "#g" + get.translation(sex) + "性");
				},
			},
			sunohara_tiaoyin: {
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && target.countGainableCards(player, "hej") > 0;
				},
				selectCard: [1, 4],
				filterCard(card) {
					for (var i = 0; i < ui.selected.cards.length; i++) {
						if (get.suit(ui.selected.cards[i]) == get.suit(card)) return false;
					}
					return true;
				},
				complexSelect: true,
				complexCard: true,
				complexTarget: true,
				selectTarget() {
					return [ui.selected.cards.length, ui.selected.cards.length];
				},
				line: { color: [239, 204, 96] },
				content() {
					if (target.countGainableCards(player, "hej") > 0)
						player.gainPlayerCard(target, "hej", "visible");
				},
				contentAfter() {
					var bool = false;
					for (var i = 0; i < targets.length; i++) {
						if (targets[i].differentSexFrom(player)) {
							bool = true;
							break;
						}
					}
					if (bool) player.loseHp();
				},
				ai: {
					order: 6,
					result: {
						target(player, target) {
							return lib.card.shunshou.ai.result.target.apply(this, arguments);
						},
						player(player, target) {
							if (target.sameSexAs(player)) return 0;
							for (var i = 0; i < ui.selected.targets.length; i++) {
								if (ui.selected.targets[i].differentSexFrom(player)) return 0;
							}
							return get.attitude(player, target) < 0 && target.countCards("h", "tao") > 0
								? 1
								: -2;
						},
					},
				},
			},
			sunohara_jianren: {
				trigger: { player: "damageEnd" },
				line: { color: [145, 149, 179] },
				async cost(event, trigger, player) {
					const num =
						!trigger.source || trigger.source.isDead() || trigger.source.differentSexFrom(player)
							? 4
							: 2;
					event.result = await player
						.chooseTarget(
							get.prompt("sunohara_jianren"),
							"令一名角色摸" + get.cnNumber(num) + "张牌。"
						)
						.set("ai", function (target) {
							var att = get.attitude(player, target);
							if (att <= 0) return 0;
							if (target.hasSkillTag("nogain") && target != _status.currentPhase) return 0.1;
							return att / (1 + 0.1 * target.countCards("h"));
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const num =
						!trigger.source || trigger.source.isDead() || trigger.source.differentSexFrom(player)
							? 4
							: 2;
					target.draw(num);
				},
			},
			//椎名
			shiina_qingshen: {
				audio: 1,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter(event, player) {
					return event.cards && event.cards.filterInD().length > 0;
				},
				frequent: true,
				content() {
					"step 0";
					var cards = trigger.cards.filterInD("od");
					player.gain(cards, "gain2", "log");
					event.count = cards.length;
					"step 1";
					var cards = player.getCards("he");
					if (cards.length == 0) {
						event.finish();
						return;
					} else if (cards.length <= event.count) {
						event._result = { bool: true, cards: cards };
					} else player.chooseCard(true, "he", event.count, "请选择要置于武将牌上的牌");
					"step 2";
					if (result.bool && result.cards.length) {
						var cards = result.cards;
						player.addToExpansion(cards, player, "give").gaintag.add("shiina_qingshen");
					}
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				mod: {
					attackRange(from, num) {
						return num + from.getExpansions("shiina_qingshen").length;
					},
					maxHandcard(from, num) {
						return num + from.getExpansions("shiina_qingshen").length;
					},
				},
				ai: {
					notemp: true,
				},
			},
			shiina_feiyan: {
				audio: 1,
				animalList: ["key_inari", "key_doruji"],
				trigger: { global: "phaseBegin" },
				filter(event, player) {
					if (lib.skill.shiina_feiyan.animalList.includes(event.player.name)) return false;
					return player.getExpansions("shiina_qingshen").length > 0 && player.inRange(event.player);
				},
				async cost(event, trigger, player) {
					const { result } = await player
						.chooseButton([
							get.prompt("shiina_feiyan", trigger.player),
							player.getExpansions("shiina_qingshen"),
						])
						.set("goon", get.attitude(player, trigger.player) < 0 ? 1 : -1)
						.set("ai", function () {
							return _status.event.goon;
						});
					if (result.bool)
						event.result = {
							bool: true,
							cards: result.links,
						};
				},
				logTarget: "player",
				async content(event, trigger, player) {
					await player.loseToDiscardpile(event.cards);
					const cardToUse = { name: "sha", isCard: true };
					if (lib.filter.targetEnabled(cardToUse, player, trigger.player)) {
						const { card } = await player.useCard(cardToUse, trigger.player);
						if (
							!player.hasHistory("sourceDamage", function (evt) {
								return evt.card === card;
							})
						)
							await player.draw();
					}
				},
				group: "shiina_retieji",
				ai: {
					combo: "shiina_qingshen",
				},
			},
			shiina_retieji: {
				audio: 1,
				trigger: { player: "useCardToPlayered" },
				check(event, player) {
					return get.attitude(player, event.target) < 0;
				},
				filter(event, player) {
					return event.card.name == "sha" && event.getParent(2).name == "shiina_feiyan";
				},
				logTarget: "target",
				content() {
					"step 0";
					player.judge(function () {
						return 0;
					});
					if (!trigger.target.hasSkill("fengyin")) {
						trigger.target.addTempSkill("fengyin");
					}
					"step 1";
					var suit = get.suit(result.card);
					var target = trigger.target;
					var num = target.countCards("h", "shan");
					target
						.chooseToDiscard(
							"请弃置一张" + get.translation(suit) + "牌，否则不能使用闪抵消此杀",
							"he",
							function (card) {
								return get.suit(card) == _status.event.suit;
							}
						)
						.set("ai", function (card) {
							var num = _status.event.num;
							if (num == 0) return 0;
							if (card.name == "shan") return num > 1 ? 2 : 0;
							return 8 - get.value(card);
						})
						.set("num", num)
						.set("suit", suit);
					"step 2";
					if (!result.bool) {
						trigger.getParent().directHit.add(trigger.target);
					}
				},
			},
			//稻荷
			inari_baiwei: {
				enable: ["chooseToUse", "chooseToRespond"],
				hiddenCard(player, name) {
					return (
						name != "du" &&
						get.type(name) == "basic" &&
						player.countCards("hes", { suit: "diamond" }) > 0
					);
				},
				filter(event, player) {
					if (event.type == "wuxie" || !player.countCards("hse", { suit: "diamond" })) return false;
					for (var i = 0; i < lib.inpile.length; i++) {
						var name = lib.inpile[i];
						if (
							name != "du" &&
							get.type(name) == "basic" &&
							event.filterCard(get.autoViewAs({ name: name }, "unsure"), player, event)
						)
							return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == "du") continue;
							if (name == "sha") {
								list.push(["基本", "", "sha"]);
								for (var j of lib.inpile_nature) list.push(["基本", "", name, j]);
							} else if (get.type(name) == "basic") {
								list.push(["基本", "", name]);
							}
						}
						return ui.create.dialog("摆尾", [list, "vcard"], "hidden");
					},
					filter(button, player) {
						return _status.event
							.getParent()
							.filterCard(
								get.autoViewAs({ name: button.link[2] }, "unsure"),
								player,
								_status.event.getParent()
							);
					},
					check(button) {
						if (_status.event.getParent().type == "phase") {
							var player = _status.event.player;
							var fakecard = {
								name: button.link[2],
								nature: button.link[3],
							};
							if (player.getUseValue(fakecard) > 0) return get.order(fakecard);
							return 0;
						}
						return 1;
					},
					backup(links, player) {
						return {
							selectCard: 1,
							filterCard: { suit: "diamond" },
							popname: true,
							check(card) {
								if (get.type(card) == "basic") return 6;
								return 1 / Math.max(0.1, get.value(card));
							},
							position: "hse",
							viewAs: { name: links[0][2], nature: links[0][3] },
						};
					},
					prompt(links, player) {
						return (
							"将一张♦牌当做" +
							(get.translation(links[0][3]) || "") +
							get.translation(links[0][2]) +
							"使用或打出"
						);
					},
				},
				ai: {
					order(item, player) {
						if (player && _status.event.type == "phase") {
							var max = 0;
							for (var i = 0; i < lib.inpile.length; i++) {
								var name = lib.inpile[i];
								if (get.type(name) == "basic" && player.getUseValue({ name: name }) > 0) {
									var temp = get.order({ name: name });
									if (temp > max) max = temp;
								}
							}
							if (max > 0) max += 0.5;
							return max;
						}
						return 4;
					},
					result: {
						player: 1,
					},
					respondSha: true,
					fireAttack: true,
					skillTagFilter(player, tag) {
						return tag == "fireAttack" || player.countCards("he", { suit: "diamond" }) > 0;
					},
				},
				group: ["inari_baiwei_draw"],
			},
			inari_baiwei_draw: {
				trigger: { player: ["useCardAfter", "respondAfter"] },
				forced: true,
				popup: false,
				filter(event, player) {
					return event.skill && event.skill.indexOf("inari_baiwei") == 0;
				},
				content() {
					player.draw();
				},
			},
			inari_huhun: {
				mod: {
					suit(card, suit) {
						if (suit == "club") return "diamond";
					},
					maxHandcard(player, num) {
						return num + 1;
					},
				},
			},
			//朱鹭户沙耶
			saya_powei: {
				audio: 2,
				trigger: { player: "phaseAfter" },
				limited: true,
				locked: false,
				unique: true,
				skillAnimation: true,
				animationColor: "metal",
				filter(event, player) {
					return (
						event.type != "saya_powei" &&
						game.hasPlayer(function (current) {
							return current.hp > player.hp;
						})
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("saya_powei"), function (card, saya, kyousuke) {
							return kyousuke.hp > saya.hp;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							if (att >= -2) return 0;
							if (target != get.zhu(target) && player.hasUnknown()) return 0;
							if (target.getEquip(3) && !player.getEquip(4)) att /= 2;
							if (player.hp <= 1) att *= 1.5;
							return -att;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.awakenSkill("saya_powei");
					game.asyncDelay(3);
					player.gainMaxHp();
					player.draw(9);
					var next = game.createEvent("saya_powei_loop", false, trigger);
					next.playertrue = player;
					next.playerfalse = target;
					next.setContent(lib.skill.saya_powei.content2);
				},
				content2() {
					"step 0";
					event.count = 0;
					event.stat = true;
					event.current = event["player" + event.stat];
					game.countPlayer2(function (current) {
						if (current != event.playertrue && current != event.playerfalse)
							current.addSkill("saya_nodis");
					});
					event.playertrue.addSkill("saya_judge");
					"step 1";
					event.count++;
					event.current.phase().set("type", "saya_powei");
					"step 2";
					if (event.count == 9 || event.playertrue.isDead() || event.playerfalse.isDead()) {
						game.countPlayer2(function (current) {
							current.removeSkill("saya_nodis");
							current.removeSkill("saya_judge");
						});
					} else {
						event.stat = !event.stat;
						event.current = event["player" + event.stat];
						event.goto(1);
					}
				},
			},
			saya_nodis: {
				group: "undist",
				mark: true,
				intro: { content: "不计入距离和座次的计算" },
			},
			saya_judge: {
				trigger: { player: "phaseBegin" },
				forced: true,
				popup: false,
				filter(event, player) {
					return event.type == "saya_powei" && player == event.getParent().playertrue;
				},
				content() {
					"step 0";
					player.judge(function (card) {
						return get.color(card) == "red" ? 5 : 0;
					}).judge2 = function (result) {
						return result.bool ? true : false;
					};
					"step 1";
					if (result.bool) {
						player.line(trigger.getParent().playerfalse);
						trigger.getParent().playerfalse.damage();
					}
				},
			},
			saya_shouji: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				filter(event, player) {
					return event.cards.filterInD().length > 0;
				},
				usable: 1,
				async cost(event, trigger, player) {
					const goon = (function () {
						var num = 0;
						var cards = trigger.cards.filterInD();
						for (var i = 0; i < cards.length; i++) {
							num += player.getUseValue(cards[i]);
						}
						return (
							player.countCards("h", function (card) {
								return player.getUseValue(card, null, true) > num;
							}) == 0
						);
					})();
					event.result = await player
						.chooseTarget(get.prompt2("saya_shouji"), lib.filter.notMe)
						.set("ai", function (target) {
							if (!_status.event.goon) return 0;
							var player = _status.event.player;
							var cards = _status.event.getTrigger().cards.filterInD();
							var att = get.attitude(player, target);
							var num = 0;
							for (var i = 0; i < cards.length; i++) {
								num += target.getUseValue(cards[i]);
							}
							return Math.max(num, 0.1) * att;
						})
						.set("goon", goon)
						.forResult();
				},
				content() {
					"step 0";
					event.cards = trigger.cards.filterInD();
					var target = targets[0];
					event.target = target;
					target.gain(event.cards, "gain2", "log");
					"step 2";
					target.chooseToUse({
						cards: cards,
						filterCard(card) {
							if (
								get.itemtype(card) != "card" ||
								!_status.event.cards ||
								!_status.event.cards.includes(card)
							)
								return false;
							return lib.filter.filterCard.apply(this, arguments);
						},
						prompt: "是否使用得到的牌中的一张？",
					});
					"step 3";
					if (result.bool) player.draw();
				},
			},
			//三枝叶留佳&二木佳奈多
			haruka_shuangche: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return !player.hasSkill("haruka_kanata");
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == "boss_mengpohuihun") continue;
							if (name == "sha") {
								list.push(["基本", "", "sha"]);
								for (var j of lib.inpile_nature) list.push(["基本", "", name, j]);
							} else if (get.type(name) == "trick") list.push(["锦囊", "", name]);
							else if (get.type(name) == "basic") list.push(["基本", "", name]);
						}
						return ui.create.dialog("双掣", [list, "vcard"]);
					},
					filter(button, player) {
						return _status.event
							.getParent()
							.filterCard({ name: button.link[2] }, player, _status.event.getParent());
					},
					check(button) {
						var player = _status.event.player;
						if (player.countCards("h", button.link[2]) > 0) return 0;
						if (["wugu", "zhulu_card"].includes(button.link[2])) return 0;
						var effect = player.getUseValue(button.link[2]);
						if (effect > 0) return effect;
						return 0;
					},
					backup(links, player) {
						return {
							audio: "haruka_shuangche",
							filterCard() {
								return false;
							},
							selectCard: -1,
							popname: true,
							check(card) {
								return 6 - get.value(card);
							},
							position: "he",
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								isCard: true,
							},
						};
					},
					prompt(links, player) {
						return (
							"请选择" +
							(get.translation(links[0][3]) || "") +
							get.translation(links[0][2]) +
							"的目标"
						);
					},
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							var cards = player.getCards("he").sort(function (a, b) {
								return get.value(a) - get.value(b);
							});
							var num = (player.getStat("skill").haruka_shuangche || 0) + 1;
							if (player.needsToDiscard() >= num) return 1;
							if (player.hp > 2) return 1;
							if (cards.length >= num) {
								var val = 0;
								for (var i = 0; i < cards.length; i++) {
									val += get.value(cards[i]);
								}
								return 12 - val;
							}
							return 0;
						},
					},
					fireAttack: true,
				},
				group: "kanata_shuangche",
			},
			kanata_shuangche: {
				trigger: { player: "useCardAfter" },
				forced: true,
				filter(event, player) {
					return event.skill == "haruka_shuangche_backup";
				},
				content() {
					"step 0";
					var num = player.getStat("skill").haruka_shuangche || 1;
					player
						.chooseToDiscard(
							"###双掣：请选择一项###选择弃置" +
								get.cnNumber(num) +
								"张牌，或回复4体力且令〖双掣〗失效至回合结束",
							num,
							"he"
						)
						.set("ai", function (card) {
							var total = 12;
							for (var i = 0; i < ui.selected.cards.length; i++) {
								total -= get.value(ui.selected.cards[i]);
							}
							return total - get.value(card);
						});
					"step 1";
					if (!result.bool) {
						player.addTempSkill("haruka_kanata");
						player.gainHp(4);
					}
					else {
					    player.draw(4);
					}
				},
			},
			haruka_kanata: { charlotte: true },
			//紬文德斯
			tsumugi_mugyu: {
				audio: 5,
				trigger: { target: "useCardToTargeted" },
				frequent: true,
				filter(event, player) {
					return player.countCards("h") < player.maxHp;
				},
				content() {
					player.draw(2);
					player.recover(1);
				},
			},
			tsumugi_huilang: {
				trigger: { player: "phaseEnd" },
				charlotte: true,
				line: { color: [253, 198, 116] },
				filter(event, player) {
					return player.countCards("he") > 0;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCard("he", [1, player.countCards("he")], get.prompt2("tsumugi_huilang"))
						.set("ai", function (card) {
							if (get.position(card) != "h") return -1;
							if (!["shan", "wuxie", "caochuan"].includes(get.name(card))) return 9;
							return 5 - get.value(card);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const cards = event.cards;
					player.addSkill("tsumugi_huilang2");
					player.addToExpansion("giveAuto", cards, player).gaintag.add("tsumugi_huilang2");
				},
			},
			tsumugi_huilang2: {
				charlotte: true,
				marktext: "隐",
				intro: { content: "隐藏于回廊之牌", markcount: "expansion" },
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				trigger: { player: "phaseBegin" },
				forced: true,
				filter(event, player) {
					return player.getExpansions("tsumugi_huilang2").length > 0;
				},
				content() {
					"step 0";
					var cards = player.getExpansions("tsumugi_huilang2");
					event.num = cards.length;
					player.gain(cards, "draw");
					"step 1";
					player
						.chooseTarget([1, num], "是否令至多" + get.cnNumber(num) + "名角色各摸一张牌？")
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					"step 2";
					if (result.bool) {
						var targets = result.targets;
						player.line(targets, lib.skill.tsumugi_huilang.line);
						targets.sortBySeat();
						game.asyncDraw(targets);
					} else event.finish();
					"step 3";
					game.delay();
				},
			},
			//由依
			yui_jiang: {
				audio: 2,
				audioname: ["sp_lvmeng", "re_sunben", "re_sunce"],
				trigger: {
					player: "useCardToPlayered",
					target: "useCardToTargeted",
				},
				filter(event, player) {
					if (
						!(
							event.card.name == "juedou" ||
							(event.card.name == "sha" && get.color(event.card) == "red")
						)
					)
						return false;
					return player == event.target || event.getParent().triggeredTargets3.length == 1;
				},
				frequent: true,
				content() {
					player.draw();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == "sha" && get.color(card) == "red") return [1, 0.6];
						},
						player(card, player, target) {
							if (card.name == "sha" && get.color(card) == "red") return [1, 1];
						},
					},
				},
			},
	                yui_lieyin:{
                            trigger:{player:'phaseUseBegin'},
	                    forced:true,          // 改为锁定技
	                    locked:true,
	                    zhuanhuanji:true,    // 添加转换技标记
	                    marktext:'☯',        // 添加阴阳标记
	                    mark:true,           // 显示标记
	                    intro:{
	                        content:function(storage){
	                            return '转换技。出牌阶段开始时，'+(storage?'阳：本阶段内的【杀】均视为【决斗】。':'阴：本阶段内的红色牌均视为【杀】。');
	                        },
	                    },
	                    content:function(){
	                        'step 0'
	                        player.logSkill('yui_lieyin');
	                        // 根据当前状态添加对应的临时技能
	                        player.addTempSkill('yui_lieyin'+(player.storage.yui_lieyin?1:0),'phaseUseEnd');
		                // 切换状态
	                        player.changeZhuanhuanji('yui_lieyin');
	                    },
	                },
	                // 烈音（阴）：红色牌视为杀，无距离限制，伤害+1
	                yui_lieyin0:{
	                    mod:{
	                    // 将红色牌视为杀
	                        cardname:function(card){
	                            if(get.color(card)=='red') return 'sha';
	                        },
	                    // 使用杀时无距离限制
	                        targetInRange:function(card){
        	                    if(card.name=='sha') return true;
	                        },
	                    },
	                    // 使用杀时触发伤害+1效果
	                    trigger:{player:'useCard1'},
	                    forced:true,
	                    filter:function(event,player){
	                        return event.card.name=='sha';
	                    },
	                    content:function(){
	                        trigger.baseDamage++; // 伤害+1
	                    },
	                },
	                // 烈音（阳）：杀视为决斗
	                yui_lieyin1:{
	                    mod:{
	                        // 将杀视为决斗
	                        cardname:function(card){
	                            if(card.name=='sha') return 'juedou';
	                        },
	                    },
	                    trigger:{player:'useCard1'},
	                    forced:true,
	                    filter:function(event,player){
	                        return event.card.name=='juedou';
	                    },
	                    content:function(){
	                        player.draw();
	                    },
	                },

			yui_takaramono: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				unique: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "key",
				filter(event, player) {
					var num = 0;
					if (player.hp <= 1) num++;
					if (game.dead.length > 0) num++;
					if (num != 1) return num > 1;
					var draw = 0;
					player.getAllHistory("gain", function (evt) {
						if (evt.getParent(2).name == "yui_jiang") draw += evt.cards.length;
					});
					return draw >= 3;
				},
				content() {
					player.awakenSkill("yui_takaramono");
					player.addSkills("yui_yinhang");
					player.storage._ichiban_no_takaramono = true;
					player.gainMaxHp();
					player.recover();
				},
				derivation: "yui_yinhang",
			},
			yui_yinhang: {
				trigger: { player: "changeHp" },
				locked: true,
				getIndex: (event) => Math.abs(event.num),
				line: { color: [253, 153, 182] },
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget([1, 2], get.prompt("yui_yinhang"), "令至多两名角色各摸两张牌")
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const targets = event.targets;
					targets.sortBySeat();
					game.asyncDraw(targets, 2);
				},
			},
			//吉野晴彦
			yoshino_jueyi: {
				trigger: { player: "phaseUseBegin" },
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(lib.filter.notMe, get.prompt2("yoshino_jueyi"))
						.set("ai", function (target) {
							var player = _status.event.player;
							if (get.damageEffect(target, player, player) < 0) return 0;
							var att = get.attitude(player, target);
							if (att > 0) return 0;
							if (att == 0) return 0.1;
							var eff = 0;
							var hs = player.getCards("h");
							for (var i = 0; i < hs.length; i++) {
								if (player.canUse(hs[i], target)) {
									var eff2 = get.effect(target, hs[i], player, player);
									if (eff2 > 0) eff += eff2;
								}
							}
							return -att / (1 + eff);
						})
						.forResult();
				},
				content() {
					"step 0";
					var target = targets[0];
					event.target = target;
					player.draw();
					"step 1";
					player.chooseToPSS(target);
					"step 2";
					if (result.tie) event.goto(1);
					else if (result.bool) target.damage();
					else target.addTempSkill("yoshino_fail", "phaseUseEnd");
				},
			},
			yoshino_fail: {
				mod: {
					targetEnabled(card, player, target) {
						if (player == _status.currentPhase) return false;
					},
				},
			},
			//宫泽谦吾
			kengo_weishang: {
				locked: false,
				mod: {
					cardUsable(card, player, num) {
						if (card.name == "sha" && player.hasDisabledSlot(1)) return num + 1;
					},
					globalFrom(from, to, distance) {
						if (from.hasDisabledSlot(4)) return distance - 1;
					},
					globalTo(from, to, distance) {
						if (to.hasDisabledSlot(3)) return distance + 1;
					},
				},
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					var list = ["equip1", "equip2", "equip3", "equip4", "equip5"];
					for (var i = 0; i < list.length; i++) {
						if (
							player.hasEnabledSlot(list[i]) &&
							(!player.storage.kengo_guidui2 || !player.storage.kengo_guidui2.includes(list[i]))
						)
							return true;
					}
					return false;
				},
				content() {
					"step 0";
					var list = ["equip1", "equip2", "equip3", "equip4", "equip5"];
					for (var i = 0; i < list.length; i++) {
						if (
							!player.hasEnabledSlot(list[i]) ||
							(player.storage.kengo_guidui2 && player.storage.kengo_guidui2.includes(list[i]))
						)
							list.splice(i--, 1);
					}
					player.chooseControl(list).set("prompt", "请选择废除一个装备栏").ai = function () {
						if (
							list.includes("equip1") &&
							player.hasEmptySlot("equip1") &&
							player.countCards("h", function (card) {
								return card.name == "sha" && player.getUseValue(card) > 0;
							})
						)
							return "equip1";
						if (list.includes("equip3") && player.hasEmptySlot("equip3")) return "equip3";
						if (list.includes("equip4") && player.hasEmptySlot("equip4")) return "equip4";
						if (list.includes("equip5") && player.hasEmptySlot("equip5")) return "equip5";
						if (list.includes("equip2") && player.hasEmptySlot("equip2")) return "equip2";
						return list.randomGet();
					};
					"step 1";
					player.disableEquip(result.control);
					player.draw(2);
				},
				group: ["kengo_weishang_sha", "kengo_weishang_shan"],
				ai: {
					order: 10,
					result: { player: 1 },
				},
			},
			kengo_weishang_sha: {
				trigger: { player: "useCardToPlayered" },
				forced: true,
				filter(event, player) {
					return (
						event.card.name == "sha" &&
						player.hasDisabledSlot(1) &&
						event.target.countCards("he") > 0
					);
				},
				logTarget: "target",
				content() {
					trigger.target.chooseToDiscard("he", true);
				},
			},
			kengo_weishang_shan: {
				enable: ["chooseToUse", "chooseToRespond"],
				viewAs: { name: "shan" },
				filterCard: true,
				position: "hes",
				prompt: "将一张牌当做闪使用或打出",
				viewAsFilter(player) {
					return player.hasDisabledSlot(2) && player.countCards("hes") > 0;
				},
				check(card) {
					return 1 / Math.max(0.1, get.value(card));
				},
				ai: {
					respondShan: true,
					skillTagFilter(player) {
						return player.hasDisabledSlot(2) && player.countCards("he") > 0;
					},
				},
			},
			kengo_guidui: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter(event, player) {
					return player.countDisabledSlot() > 0;
				},
				content() {
					var list = [];
					for (var i = 1; i <= 5; i++) {
						for (var j = 0; j < player.countDisabledSlot(i); j++) {
							list.push("equip" + i);
						}
					}
					player.enableEquip(list);
					if (!player.storage.kengo_guidui2) player.storage.kengo_guidui2 = [];
					player.storage.kengo_guidui2.addArray(list);
				},
				ai: {
					combo: "kengo_weishang"
				},
			},
			kengo_guidui2: { onremove: true },
			//岩泽雅美
			iwasawa_yinhang: {
				trigger: { player: "changeHp" },
				locked: true,
				line: { color: [235, 96, 138] },
				getIndex: (event) => Math.abs(event.num),
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget([1, 2], get.prompt("iwasawa_yinhang"), "令至多两名角色各摸两张牌")
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const targets = event.targets;
					targets.sortBySeat();
					game.asyncDraw(targets, 2);
				},
			},
			iwasawa_mysong: {
				trigger: {
					player: ["phaseBeginStart", "phaseAfter", "dyingBefore"],
				},
				forced: true,
				filter(event, player) {
					return event.name == "dying" || player.hp < 1;
				},
				content() {
					if (trigger.name == "dying") trigger.cancel();
					else if (event.triggername == "phaseBeginStart") player.addTempSkill("iwasawa_fenyin");
					else player.die();
				},
				nobracket: true,
				derivation: "iwasawa_fenyin",
			},
			iwasawa_refenyin: {
				audio: 2,
				audioname2: {
					wufan: "refenyin_wufan",
				},
				trigger: {
					global: ["loseAfter", "cardsDiscardAfter", "equipAfter"],
				},
				forced: true,
				filter(event, player) {
					if (player != _status.currentPhase) return false;
					var cards = event.getd();
					var list = [];
					for (var i = 0; i < cards.length; i++) {
						var card = cards[i];
						list.add(card.suit);
					}
					game.getGlobalHistory("cardMove", function (evt) {
						if (
							evt == event ||
							evt.getParent() == event ||
							(evt.name != "lose" && evt.name != "cardsDiscard")
						)
							return false;
						if (evt.name == "lose" && evt.position != ui.discardPile) return false;
						for (var i = 0; i < evt.cards.length; i++) {
							var card = evt.cards[i];
							list.remove(card.suit);
						}
					});
					return list.length > 0;
				},
				content() {
					var list = [];
					var list2 = [];
					var cards = trigger.getd();
					for (var i = 0; i < cards.length; i++) {
						var card = cards[i];
						var suit = card.suit;
						list.add(suit);
						list2.add(suit);
					}
					game.getGlobalHistory("cardMove", function (evt) {
						if (
							evt == trigger ||
							evt.getParent() == trigger ||
							(evt.name != "lose" && evt.name != "cardsDiscard")
						)
							return false;
						if (evt.name == "lose" && evt.position != ui.discardPile) return false;
						for (var i = 0; i < evt.cards.length; i++) {
							var card = evt.cards[i];
							var suit = card.suit;
							list.remove(suit);
							list2.add(suit);
						}
					});
					list2.sort();
					player.draw(list.length);
					player.storage.iwasawa_refenyin_mark = list2;
					player.addTempSkill("iwasawa_refenyin_mark");
					player.markSkill("iwasawa_refenyin_mark");
				},
				subSkill: {
					mark: {
						onremove: true,
						intro: {
							content(s) {
								var str = "本回合已经进入过弃牌堆的卡牌的花色：";
								for (var i = 0; i < s.length; i++) {
									str += get.translation(s[i]);
								}
								return str;
							},
						},
					},
				},
			},
			iwasawa_fenyin: {
				mod: {
					aiOrder(player, card, num) {
						if (typeof card == "object" && player == _status.currentPhase) {
							var evt = player.getLastUsed();
							if (
								evt &&
								evt.card &&
								get.color(evt.card) != "none" &&
								get.color(card) != "none" &&
								get.color(evt.card) != get.color(card)
							) {
								return num + 10;
							}
						}
					},
				},
				audio: 2,
				trigger: { player: "useCard" },
				frequent: true,
				//usable:3,
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					var evt = player.getLastUsed(1);
					if (!evt) return false;
					var color1 = get.color(evt.card);
					var color2 = get.color(event.card);
					return color1 && color2 && color1 != "none" && color2 != "none" && color1 != color2;
				},
				content() {
					player.draw();
				},
				ai: {
					threaten(player, target) {
						if (target.hp < 1) return 3;
						return 1;
					},
				},
			},
			//井之原真人
			masato_baoquan: {
				trigger: { source: "damageBefore" },
				forced: true,
				content() {
					"step 0";
					player
						.chooseControl("防止伤害", "增加伤害")
						.set(
							"prompt",
							"暴拳：防止即将对" +
								get.translation(trigger.player) +
								"造成的伤害并摸4张牌，或增加一点体力上限并令此伤害+2"
						)
						.set("choice", get.attitude(player, trigger.player) >= 0 ? 0 : 1)
						.set("ai", function () {
							return _status.event.choice;
						});
					"step 1";
					if (result.control == "增加伤害") {
						player.gainMaxHp();
						trigger.num += 2;
					} else trigger.cancel(); player.draw(4);
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (target && get.attitude(player, target) > 0 && get.tag(card, "damage"))
								return "zeroplayertarget";
						},
					},
				},
			},
			//西森柚咲&黑羽美砂
			yusa_yanyi: {
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return get.distance(player, target) <= player.hp;
				},
				selectTarget() {
					return [1, Math.max(_status.event.player.getAttackRange())];
				},
				line: "thunder",
				content() {
					"step 0";
					if (target.isHealthy()) {
						player.draw();
						event.finish();
					} else {
						var name = get.translation(player);
						target
							.chooseControl()
							.set("choiceList", [
								"令" + name + "摸四张牌",
								"令" + name + "回复2点体力，然后交给" + name + "一张牌",
							])
							.set("ai", function () {
								return 1;
							});
					}
					"step 1";
					if (result.index == 0) {
						player.draw(4);
						event.finish();
					} else {
						player.recover(2);
					}
					"step 2";
					if (target != player && target.countCards("he") > 0) {
						target.chooseCard("交给" + get.translation(player) + "一张牌", "he", true);
					} else event.finish();
					"step 3";
					target.give(result.cards, player, "giveAuto");
				},
				ai: {
					order: 10,
					result: {
						player(player, target) {
							return target.isHealthy() ? 1 : 0;
						},
						target(player, target) {
							if (target.isHealthy()) return 0;
							return get.recoverEffect(target, player, target);
						},
					},
				},
			},
            yusa_zhumeng: {
                trigger: {player: 'phaseZhunbeiBegin'},
                forced: true,
                locked: true,
                zhuanhuanji: true,
                marktext: '☯',
                mark: true,
                intro: {
                    content: function(storage) {
                        return '转换技。准备阶段，'+(storage?'阳：你的弃牌阶段改为摸牌阶段。':'阴：你的判定阶段改为摸牌阶段。')+'出牌阶段开始时，若你的手牌数大于等于你的体力值，你使用牌无次数限制；若你的手牌数小于等于你的体力值，你使用牌无距离限制；若你的手牌数等于你的体力值，你于回合结束后获得一个额外回合。';
                    }
                },
                content: function() {
                    'step 0'
                    player.logSkill('yusa_zhumeng');
                    // 根据当前状态添加对应的临时技能
                    player.addTempSkill('yusa_zhumeng'+(player.storage.yusa_zhumeng?1:0), 'phaseAfter');
                    // 切换状态
                    player.changeZhuanhuanji('yusa_zhumeng');
                },
                group: ['yusa_zhumeng_use'],
            },
            // 逐梦（阴）：判定阶段改为摸牌阶段
            yusa_zhumeng0: {
                trigger: {player: 'phaseJudgeBefore'},
                forced: true,
                content: function() {
                    trigger.cancel();
                    player.phaseDraw();
                }
            },
            // 逐梦（阳）：弃牌阶段改为摸牌阶段
            yusa_zhumeng1: {
                trigger: {player: 'phaseDiscardBefore'},
                forced: true,
                content: function() {
                    trigger.cancel();
                    player.phaseDraw();
                }
            },
            // 出牌阶段效果
            yusa_zhumeng_use: {
                trigger: {player: 'phaseUseBefore'},
                forced: true,
                filter: function(event, player) {
                    return true;
                },
                content: function() {
                    var handNum = player.countCards('h');
                    var hp = player.hp;
                    
                    if(handNum >= hp) {
                        player.addTempSkill('yusa_zhumeng_unlimited', 'phaseUseAfter');
                    }
                    if(handNum <= hp) {
                        player.addTempSkill('yusa_zhumeng_range', 'phaseUseAfter');
                    }
                    if(handNum == hp) {
                        player.addTempSkill('yusa_zhumeng_extra', 'phaseAfter');
                    }
                }
            },
            // 无次数限制效果
            yusa_zhumeng_unlimited: {
                mod: {
                    cardUsable: function(card, player) {
                        return Infinity;
                    }
                },
                mark: true,
                intro: {
                    content: '使用牌无次数限制'
                }
            },
            // 无距离限制效果
            yusa_zhumeng_range: {
                mod: {
                    targetInRange: function() {
                        return true;
                    }
                },
                mark: true,
                intro: {
                    content: '使用牌无距离限制'
                }
            },
            // 额外回合效果
            yusa_zhumeng_extra: {
                trigger: {player: 'phaseEnd'},
                forced: true,
                content: function() {
                    player.insertPhase();
                },
                mark: true,
                intro: {
                    content: '回合结束后获得一个额外回合'
                }
            },
			yusa_misa: {
				charlotte: true,
				trigger: { player: "useSkillAfter" },
				filter(event, player) {
					return (
						event.skill == "yusa_yanyi" &&
						!player.storage.dualside_over &&
						Array.isArray(player.storage.dualside)
					);
				},
				content() {
					player.turnOver();
					player.draw(4);
				},
				ai: {
					combo: "yusa_yanyi",
				},
			},
			misa_yusa: {
				charlotte: true,
				trigger: { player: "misa_yehuoAfter" },
				filter(event, player) {
					return (
						event.bool === true &&
						!player.storage.dualside_over &&
						Array.isArray(player.storage.dualside)
					);
				},
				content() {
					player.turnOver();
					player.recover(2);
				},
			},
            misa_: {
                trigger: {player: 'damageEnd'},
                forced: true,
                locked: true,
                zhuanhuanji: true,
                marktext: '☯',
                mark: true,
                intro: {
                    content: function(storage) {
                        return '转换技。当你受到伤害后，'+(storage?'阳：你摸四张牌，且下个回合开始前防止此类伤害。':'阴：你回复两点体力，且伤害来源所有技能失效直到回合结束。');
                    }
                },
                content: function() {
                    'step 0'
                    player.logSkill('misa_');
                    
                    if(player.storage.misa_) {
                        // 阳状态效果
                        player.draw(4);
                        // 记录伤害类型
                        player.storage.misa__damage = trigger.nature || 'normal';
                        player.addTempSkill('misa__protect', {player: 'phaseBeginStart'});
                    } else {
                        // 阴状态效果
                        player.recover(2);
                        if(trigger.source) {
                            trigger.source.addTempSkill('baiban', {player: 'phaseAfter'});
                            game.log(trigger.source, '的所有技能失效直到回合结束');
                        }
                    }
                    
                    // 切换状态
                    player.changeZhuanhuanji('misa_');
                },
            },
            // 阳状态的防伤效果
            misa__protect: {
                trigger: {player: 'damageBegin4'},
                forced: true,
                mark: true,
                intro: {
                    content: function(storage, player) {
                        var type = player.storage.misa__damage || 'normal';
                        return '防止' + (type == 'normal' ? '无属性' : type == 'fire' ? '火属性' : '雷属性') + '伤害';
                    }
                },
                filter: function(event, player) {
                    return (event.nature || 'normal') == player.storage.misa__damage;
                },
                content: function() {
                    trigger.cancel();
                    game.log(player, '防止了', player.storage.misa__damage == 'normal' ? '无属性' : player.storage.misa__damage == 'fire' ? '火属性' : '雷属性', '伤害');
                },
                onremove: function(player) {
                    delete player.storage.misa__damage;
                },
                ai: {
                    effect: {
                        target: function(card, player, target) {
                            if(get.tag(card, 'damage') && (get.nature(card) || 'normal') == target.storage.misa__damage) return 'zeroplayertarget';
                        }
                    }
                }
            },
			misa_yehuo: {
				charlotte: true,
				trigger: { global: "phaseDrawBegin1" },
				locked: true,
				line: { color: [236, 137, 52] },
				filter(event, player) {
					var target = event.player;
					return player.inRange(target) && player.countCards("he") >= get.distance(player, target);
				},
				async cost(event, trigger, player) {
					var next = player.chooseToDiscard(
						"he",
						get.distance(player, trigger.player) || 1,
						get.prompt2("misa_yehuo", trigger.player),
						"chooseonly"
					);
					next.set("ai", function (card) {
						var val = _status.event.val;
						for (var i = 0; i < ui.selected.cards.length; i++) {
							val -= get.value(ui.selected.cards[i]);
						}
						return val - get.value(card);
					});
					next.set("val", -2 * get.attitude(player, trigger.player));
					event.result = await next.forResult();
				},
				logTarget: "player",
				content() {
					"step 0";
					player.discard(cards);
					"step 1";
					event.bool = true;
					if (trigger.numFixed) event._result = { index: 0 };
					else if (trigger.player.isIn()) {
						var name = get.translation(trigger.player);
						player
							.chooseControl()
							.set("choiceList", [
								"对" + name + "造成3点火属性伤害",
								"令" + name + "此出牌阶段的额定摸牌数改为0",
							]);
					} else event.finish();
					"step 2";
					if (result.index == 0) trigger.player.damage("fire", 3);
					else trigger.changeToZero();
				},
				ai: {
					fireAttack: true,
				},
			},
			nsqiyue: {
				trigger: {
					global: [
						"turnOverEnd",
						"linkEnd",
						"showCharacterEnd",
						"hideCharacterEnd",
						"removeCharacterEnd",
					],
				},
				forced: true,
				content() {
					player.draw(4);
				},
			},
			nsxuezhu: {
				trigger: { player: "damageEnd", source: "damageSource" },
				filter(event, player) {
					return event.player.isIn();
				},
				logTarget: "player",
				content() {
					trigger.player.draw(2);
					trigger.player.turnOver();
				},
				check(event, player) {
					return !event.player.isTurnedOver() || get.attitude(player, event.player) > 0;
				},
			},
			//宫泽有纪宁
			yukine_wenzhou: {
				trigger: { global: "phaseUseBegin" },
				filter(event, player) {
					return event.player.countCards("he") > 0;
				},
				async cost(event, trigger, player) {
					event.forceDie = true;
					var ask = trigger.player.chooseCard("he", get.prompt("yukine_wenzhou"));
					if (player === trigger.player) {
						ask.set(
							"prompt2",
							"选择一张牌，然后从牌堆中获得一张与此牌类型相同的牌。本回合内使用与此牌类型相同的牌时不可被其他角色响应。"
						);
					} else
						ask.set(
							"prompt2",
							"将一张牌交给" +
								get.translation(player) +
								"然后其可以选择：交给你一张牌；或令你从牌堆中获得一张与此牌类型相同的牌，且你本回合内使用与此牌类型相同的牌时不可被响应。"
						);
					ask.set("ai", function (card) {
						if (get.attitude(_status.event.player, _status.event.getParent().player) > 0)
							return 10 - get.value(card);
						return -1;
					});
					event.result = await ask.forResult();
				},
				content() {
					"step 0";
					event.forceDie = true;
					event.type = get.type(cards[0], "trick");
					if (trigger.player != player) trigger.player.give(cards, player, "giveAuto");
					"step 1";
					if (player == trigger.player || player.countCards("he") == 0) {
						event._result = { index: 1 };
					} else {
						player
							.chooseControl()
							.set("choiceList", [
								"将一张牌交给" + get.translation(trigger.player),
								"令" +
									get.translation(trigger.player) +
									"从牌堆中获得一张" +
									get.translation(event.type) +
									"牌，且其本回合内使用与此牌名称相同的牌时不可被响应",
							])
							.set("forceDie", true)
							.set("ai", function () {
								if (get.attitude(_status.event.player, _status.event.getTrigger().player) > 0)
									return 1;
								return 0;
							});
					}
					"step 2";
					event.index = result.index;
					if (result.index == 1) {
						var magic = get.cardPile2(function (card) {
							return get.type(card, "trick") == event.type;
						});
						if (magic) {
							trigger.player.addTempSkill("yukine_magic", "phaseUseEnd");
							trigger.player.storage.yukine_magic.add(magic.name);
							trigger.player.gain(magic, "draw");
						} else event.finish();
					} else
						player
							.chooseCard("he", true, "选择要交给" + get.translation(trigger.player) + "的牌")
							.set("ai", function (card) {
								return -get.value(card, _status.event.getTrigger().player);
							});
					"step 3";
					if (event.index == 1) game.updateRoundNumber();
					else if (result.bool) player.give(result.cards, trigger.player, "giveAuto");
				},
			},
			yukine_magic: {
				trigger: { player: "useCard" },
				forced: true,
				popup: false,
				charlotte: true,
				filter(event, player) {
					return (
						player.storage.yukine_magic && player.storage.yukine_magic.includes(event.card.name)
					);
				},
				content() {
					trigger.directHit.addArray(
						game.filterPlayer(function (current) {
							if (player != current) return true;
							return !player.hasSkill("yukine_wenzhou");
						})
					);
				},
				onremove: true,
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						return (
							player.storage.yukine_magic && player.storage.yukine_magic.includes(arg.card.name)
						);
					},
				},
			},
			//神北小毬
			komari_tiankou: {
				trigger: {
					player: "useCard2",
					target: "useCardToTarget",
				},
				forced: true,
				filter(event, player, name) {
					if (name == "useCardToTarget" && player == event.player) return false;
					if (get.color(event.card) != "red") return false;
					if (get.tag(event.card, "damage")) return false;
					return ["basic", "trick"].includes(get.type(event.card));
				},
				content() {
					"step 0";
					var info = get.info(trigger.card);
					var bool = true;
					if (info.multitarget || info.allowMultiple === false) bool = false;
					else {
						var list = game.filterPlayer(function (current) {
							return (
								!trigger.targets.includes(current) &&
								lib.filter.targetEnabled2(trigger.card, trigger.player, current)
							);
						});
						if (!list.length) bool = false;
					}
					if (bool)
						player
							.chooseTarget(
								"甜口：为" +
									get.translation(trigger.card) +
									"增加一个额外目标，或点【取消】摸一张牌。",
								function (candy, komari, rin) {
									return _status.event.rin_chan.includes(rin);
								}
							)
							.set("rin_chan", list)
							.set("ai", function (target) {
								var evt = _status.event;
								return get.effect(target, evt.candy, evt.source, evt.player);
							})
							.set("candy", trigger.card)
							.set("", trigger.player);
					else event._result = { bool: false };
					"step 1";
					if (result.bool) {
						var rin = result.targets[0];
						trigger.targets.push(rin);
						player.line(rin, { color: [255, 224, 172] });
					} else player.draw(4);
				},
			},
			komari_xueshang: {
				trigger: { global: "die" },
				forced: true,
				skillAnimation: true,
				chargingSkill: true,
				filter(event, player) {
					return player.hp > 0;
				},
				animationColor: "metal",
				content() {
					"step 0";
					player.addSkill("riki_xueshang");
					var map = {};
					var list = [];
					for (var i = 1; i <= player.hp; i++) {
						var cn = get.cnNumber(i, true);
						map[cn] = i;
						list.push(cn);
					}
					event.map = map;
					player
						.chooseControl(list, function () {
							return "一";
						})
						.set("prompt", "血殇：请选择自己受到的伤害点数");
					"step 1";
					var num = event.map[result.control] || 1;
					event.num = num;
					event.list = game
						.filterPlayer(function (current) {
							return current != player;
						})
						.sortBySeat();
					player.damage(event.num);
					player.line(event.list, { color: [255, 224, 172] });
					"step 2";
					if (!player.hasSkill(event.name)) return;
					else {
						event.list.shift().damage(event.num);
						if (event.list.length) event.redo();
					}
				},
			},
			riki_xueshang: {
				trigger: { global: "die" },
				forced: true,
				popup: false,
				charlotte: true,
				filter(event, player) {
					// 检查死亡是否由 komari_xueshang 造成的伤害导致
					var damageEvent = event.getParent("damage");
					if (!damageEvent || typeof damageEvent.getParent !== "function") return false;
					// 查找是否有 komari_xueshang 事件在伤害事件链中
					var evt = damageEvent.getParent();
					while (evt) {
						if (evt.name == "komari_xueshang" && evt.player == player) {
							return true;
						}
						evt = evt.parent;
					}
					return false;
				},
				content() {
					player.removeSkills("komari_xueshang");
					player.gainMaxHp(true);
					player.recover(4);
				},
			},
			//鹰原羽未
			umi_chaofan: {
				enable: "phaseUse",
				usable: 1,
				selectCard: 2,
				complexCard: true,
				filter(summer, umi) {
					return umi.countCards("h") > 1;
				},
				check(ingredient) {
					return 7 - get.value(ingredient);
				},
				filterCard(ingredient) {
					if (ui.selected.cards.length)
						return get.suit(ingredient) != get.suit(ui.selected.cards[0]);
					return true;
				},
				line: { color: [251, 193, 217] },
				filterTarget: lib.filter.notMe,
				content() {
					"step 0";
					player.draw();
					"step 1";
					if (player.hp > 2) target.recover();
					else if (player.hp == 2) target.draw(2);
					else target.damage("fire", "nosource");
				},
				ai: {
					order: 2,
					result: {
						target(umi, takahara) {
							if (umi.hp > 2 && takahara.isDamaged()) return 2.2;
							if (umi.hp == 2 && !takahara.hasSkillTag("nogain")) return 2;
							if (umi.hp < 2) return get.damageEffect(takahara, umi, umi, "fire");
						},
					},
				},
			},
			umi_lunhui: {
				trigger: { global: "phaseAfter" },
				filter(summer, umi) {
					return summer.player != umi && umi.countCards("h") < umi.hp;
				},
				line: { color: [251, 193, 217] },
				logTarget: "player",
				charlotte: true,
				content() {
					"step 0";
					player.loseHp();
					"step 1";
					player.draw(2);
					player.insertPhase();
					player.storage.umi_shiroha = trigger.player;
					player.addTempSkill("umi_shiroha");
				},
			},
			umi_shiroha: {
				mark: "character",
				intro: {
					content: "到$的距离视为1",
				},
				onremove: true,
				charlotte: true,
				mod: {
					globalFrom(umi, shiroha) {
						if (umi.storage.umi_shiroha == shiroha) return -Infinity;
					},
				},
			},
			umi_qihuan: {
				unique: true,
				forceunique: true,
				enable: "chooseToUse",
				filter(summer, umi) {
					return (
						summer.type == "dying" &&
						umi.isDying() &&
						[umi.name1, umi.name2].includes("key_umi")
					);
				},
				limited: true,
				skillAnimation: true,
				charlotte: true,
				animationColor: "key",
                content() {
                    "step 0";
                    // 回复体力并摸牌
                    var num = 7 - player.hp;
                    if (num > 0) player.recover(num);
                    player.draw(7);

                    // 检查是否有已死亡角色（且有技能）
                    var hasValidDead = false;
                    for (var i = 0; i < game.dead.length; i++) {
                        var dead = game.dead[i];
                        var skills = [];
                        if (dead.name && lib.character[dead.name]) skills.addArray(lib.character[dead.name][3]);
                        if (dead.name2 && lib.character[dead.name2]) skills.addArray(lib.character[dead.name2][3]);
                        if (skills.length > 0) {
                            hasValidDead = true;
                            break;
                        }
                    }

                    if (hasValidDead) {
                        event.hasDead = true;
                        player.awakenSkill("umi_qihuan");
                        event.goto(1);
                        return;
                    } else {
                        event.hasDead = false;
                        event.goto(5);
                        return;
                    }

                    "step 1";
                    // 收集死亡角色及其技能
                    var chara = [];
                    var skills = [];
                    for (var i = 0; i < game.dead.length; i++) {
                        var dead = game.dead[i];
                        var skill = [];
                        if (dead.name && lib.character[dead.name]) skill.addArray(lib.character[dead.name][3]);
                        if (dead.name2 && lib.character[dead.name2]) skill.addArray(lib.character[dead.name2][3]);
                        if (skill.length) {
                            chara.push(dead);
                            skills.push(skill);
                        }
                    }
                    event.chara = chara;
                    event.skills = skills;
                    event.chosen = [];

					"step 2";
					var next = player.chooseTarget("是否获得一名已死亡角色的一个技能？");
					next.set("chara", event.chara);
					next.set("skills", event.skills);
					next.set("chosen", event.chosen);
					next.set("filterTarget", function (card, player, target) {
						if (target.isAlive()) return false;
						var evt = _status.event;
						if (!evt.chosen.length) return true;
						var skills = evt.skills[evt.chara.indexOf(target)];
						if (skills.length == 1 && skills[0] == evt.chosen[0]) return false;
						return true;
					});
					next.set("deadTarget", true);
					next.set("ai", function () {
						return Math.random();
					});
					"step 3";
					if (!result.bool) event.finish();
					else {
						event.temp = result.targets[0];
						var list = event.skills[event.chara.indexOf(result.targets[0])];
						result.targets[0].line(player, {
							color: [251, 193, 217],
						});
						list.removeArray(event.chosen);
						player.chooseControl(list).set("prompt", "选择获得一个技能");
					}
					"step 4";
					//player.addSkills(result.control,get.groupnature(event.temp.group)||'key');
					player.addSkills(result.control);
					var info = get.info(result.control);
					if (info.zhuSkill) {
						if (!player.storage.zhuSkill_umi_qihuan) player.storage.zhuSkill_umi_qihuan = [];
						player.storage.zhuSkill_umi_qihuan.push(result.control);
					}
					event.chosen.push(result.control);
					if (event.chosen.length < 7) event.goto(2);
                    "step 5";
                    // 2. 调整其他角色手牌至7，并记录弃牌
                    var targets = game.filterPlayer(function (current) {
                        return current != player && current.isAlive();
                    });
                    event.targets = targets;
                    event.gainCards = [];
                    event.index = 0;

                    "step 6";
                    if (event.index >= event.targets.length) {
                        // 所有角色处理完毕，获得弃置的牌
                        if (event.gainCards.length) {
                            player.gain(event.gainCards, "gain2");
                        }
                        event.finish();
                        return;
                    }

                    var current = event.targets[event.index];
                    var handCount = current.countCards("h");
                    if (handCount < 7) {
                        // 摸牌至7
                        current.draw(7 - handCount);
                    } else if (handCount > 7) {
                        // 弃牌至7
                        var toDiscard = handCount - 7;
                        var cards = current.getCards("h").randomGets(toDiscard);
                        if (cards.length) {
                            current.discard(cards);
                            event.gainCards.addArray(cards);
                        }
                    }
                    event.index++;
                    event.redo();
                },
				ai: {
					order: 10,
					save: true,
					skillTagFilter(player, tag, target) {
						return player == target;
					},
					result: {
						player: 1,
					},
				},
			},
			//神尾晴子
			haruko_haofang: {
				mod: {
					cardname(card, player, name) {
						if (lib.card[card.name].type == "delay") return "wuzhong";
					},
				},
				trigger: { player: "drawBefore" },
				forced: true,
				filter(event, player) {
					return event.getParent().name == "wuzhong";
				},
				content() {
					trigger.num += 2;
				},
			},
			haruko_zhuishi: {
				trigger: { global: "phaseJudgeBegin" },
				filter(misuzu) {
					return misuzu.player.countCards("j") > 0;
				},
				check(event, player) {
					return get.attitude(player, event.player) > 1;
				},
				logTarget: "player",
				content() {
					"step 0";
					player.gain(trigger.player.getCards("j"), trigger.player, "give", "bySelf");
					"step 1";
					if (player.hp > 1) player.loseHp();
				},
			},
			yuri_xingdong: {
				audio: 3,
				group: "yuri_xingdong_gain",
				subSkill: {
					mark: {
						mark: true,
						marktext: "令",
						intro: {
							content: "跳过下个回合的判定阶段和摸牌阶段",
						},
					},
					gain: {
						audio: 2,
						trigger: { player: "phaseUseBegin" },
						forced: true,
						content() {
							"step 0";
							var card = get.cardPile(function (card) {
								return card.name == "sha" || get.type(card) == "trick";
							});
							if (card) player.gain(card, "gain2", "log");
							"step 1";
							game.updateRoundNumber();
						},
					},
				},
				enable: "phaseUse",
				usable: 1,
				locked: true,
				filter(event, player) {
					return player.countCards("h", lib.skill.yuri_xingdong.filterCard);
				},
				filterCard(card) {
					return card.name == "sha" || get.type(card) == "trick";
				},
				check(card) {
					return 1;
				},
				filterTarget: lib.filter.notMe,
				discard: false,
				lose: false,
				delay: 0,
				content() {
					"step 0";
					player.give(cards, target);
					"step 1";
					if (!target.getCards("h").includes(cards[0])) event._result = { bool: false };
					else
						target.chooseUseTarget(
							cards[0],
							game.filterPlayer(function (current) {
								return current != player;
							}),
							"请使用得到的牌，或者跳过下回合的判定阶段和摸牌阶段"
						);
					"step 2";
					if (result.bool) game.asyncDraw([player, target]);
					else {
						target.addTempSkill("yuri_xingdong_mark", "phaseJudgeSkipped");
						target.skip("phaseJudge");
						target.skip("phaseDraw");
						target.addTempSkill("zhengjing3", {
							player: "phaseAfter",
						});
						event.finish();
					}
					"step 3";
					game.delay();
				},
				ai: {
					order: 12,
					result: {
						target(player, target) {
							var card = ui.selected.cards[0];
							if (target.hasSkill("pingkou")) return 1;
							if (!card) return 0;
							var info = get.info(card);
							if (info.selectTarget == -1) {
								var eff = 0;
								game.countPlayer(function (current) {
									if (current != player && target.canUse(card, current))
										eff += get.effect(current, card, target, target);
								});
								if (eff > 0 || get.value(card) < 3) return eff;
								return 0;
							} else if (
								game.hasPlayer(function (current) {
									return (
										current != player &&
										target.canUse(card, current) &&
										get.effect(current, card, target, target) > 0
									);
								})
							)
								return 1.5;
							else if (get.value(card) < 3) return -1;
							return 0;
						},
					},
				},
			},
			yuri_wangxi: {
				audio: 2,
				trigger: { global: "dieAfter" },
				limited: true,
				mark: false,
				init(player) {
					if (player.hasZhuSkill("yuri_wangxi")) {
						player.markSkill("yuri_wangxi");
						player.storage.yuri_wangxi = false;
					}
				},
				zhuSkill: true,
				unique: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter(event, player) {
					if (get.mode() != "identity") return false;
					if (!player.hasZhuSkill("yuri_wangxi")) return false;
					if (event.player.isIn()) return false;
					if (event.player.identity == "mingzhong") return false;
					var evt = event.getParent("yuri_xingdong");
					return evt && evt.name == "yuri_xingdong" && evt.player == player;
				},
				async cost(event, trigger, player) {
					event.result = await trigger.player
						.chooseBool("是否发动" + get.translation(player) + "的【忘隙】？")
						.set("forceDie", true)
						.forResult();
				},
				logTarget: "player",
				async content(event, trigger, player) {
					player.awakenSkill("yuri_wangxi");
					var identity = "zhong";
					if (_status.mode == "purple") {
						if (["rNei", "bNei"].includes(player.identity)) identity = player.identity;
						else if (["rZhu", "rZhong", "bNei"].includes(player.identity)) identity = "rZhong";
						else identity = "bZhong";
					}
					game.broadcastAll(
						function (source, identity) {
							if (source.node.dieidentity) {
								source.node.dieidentity.innerHTML = get.translation(identity + 2);
							}
							source.revive(2, false);
							source.identity = identity;
							source.setIdentity();
						},
						trigger.player,
						identity
					);
					var evt = trigger.getParent("damage");
					if (evt.untrigger) evt.untrigger(false, trigger.player);
					game.addVideo("setIdentity", trigger.player, "zhong");

					await trigger.player.changeGroup(player.group);
					await trigger.player.draw();
				},
				ai: {
					combo: "yuri_xingdong",
				},
			},
			yuri_buqu: {
				audio: 2,
				marktext: "创",
				zhuSkill: true,
				intro: {
					markcount: "expansion",
					content: "expansion",
				},
				trigger: { player: "chooseToUseBefore" },
				forced: true,
				filter(event, player) {
					if (!player.hasZhuSkill("yuri_buqu")) return false;
					return (
						event.type == "dying" &&
						player.isDying() &&
						event.dying == player &&
						!event.getParent()._yuri_buqu
					);
				},
				content() {
					"step 0";
					trigger.getParent()._yuri_buqu = true;
					var card = get.cards()[0];
					event.card = card;
					player.addToExpansion(card, "gain2").gaintag.add("yuri_buqu");
					"step 1";
					var cards = player.getExpansions("yuri_buqu");
					player.showCards(cards, "不屈");
					// 检查点数和花色是否与已有的创均不相同
					var num = get.number(card);
					var suit = get.suit(card);
					var duplicate = false;
					for (var i = 0; i < cards.length; i++) {
						if (cards[i] != card) {
							if (get.number(cards[i]) == num || get.suit(cards[i]) == suit) {
								duplicate = true;
								break;
							}
						}
					}
					event.duplicate = duplicate;
					"step 2";
					if (!event.duplicate) {
						// 点数和花色均不相同，回复至2点
						if (player.hp < 2) {
							player.recover(2 - player.hp);
						}
						trigger.cancel();
						trigger.result = { bool: true };
					} else {
						// 有重复，获得所有创并回复至1点
						var cards = player.getExpansions("yuri_buqu");
						if (cards.length) {
							player.gain(cards, "draw");
							player.removeGaintag("yuri_buqu", cards);
						}
						if (player.hp < 1) {
							player.recover(1 - player.hp);
						}
						trigger.cancel();
						trigger.result = { bool: true };
					}
				},
				group: ["yuri_buqu_draw", "yuri_buqu_use", "yuri_buqu_dying"],
				subSkill: {
					dying: {
						trigger: { global: "dying" },
						forced: true,
						filter(event, player) {
							if (!player.hasZhuSkill("yuri_buqu")) return false;
							if (event.player == player) return false;
							var evt = event.getParent("damage");
							if (!evt || !evt.card || !evt.cards) return false;
							if (evt.source != player) return false;
							// 检查是否是用创使用的杀
							var useEvent = evt.getParent("useCard");
							if (!useEvent || !useEvent.result) return false;
							return useEvent.result._yuri_buqu_use == true;
						},
						content() {
							// 玩家进入濒死状态，且标记不触发不屈
							trigger.getParent()._yuri_buqu = true;
							player.dying();
						},
					},
					draw: {
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						filter(event, player) {
							if (!player.hasZhuSkill("yuri_buqu")) return false;
							return !event.numFixed && player.getExpansions("yuri_buqu").length > 0;
						},
						content() {
							var count = player.getExpansions("yuri_buqu").length;
							var extra = Math.ceil(count / 4);
							trigger.num += extra;
						},
					},
					use: {
						enable: "chooseToUse",
						filter(event, player) {
							if (!player.hasZhuSkill("yuri_buqu")) return false;
							return player.getExpansions("yuri_buqu").length > 0;
						},
						chooseButton: {
							dialog(event, player) {
								return ui.create.dialog("不屈：使用创", player.getExpansions("yuri_buqu"), "hidden");
							},
							filter(button, player) {
								return true;
							},
							check(button) {
								return 1;
							},
							backup(links, player) {
								return {
									filterCard: () => false,
									selectCard: -1,
									viewAs: { name: "sha" },
									filterTarget: lib.filter.filterTarget,
									selectTarget: 1,
									card: links[0],
									precontent() {
										delete event.result.skill;
										event.result.card = event.result.card || lib.skill.yuri_buqu_use_backup.card;
										event.result.cards = [lib.skill.yuri_buqu_use_backup.card];
										event.result._yuri_buqu_use = true;
									},
									onuse(result, player) {
										var card = result.cards[0];
										player.loseToDiscardpile(card);
									},
								};
							},
							prompt(links, player) {
								return "将一张「创」当杀使用";
							},
						},
						mod: {
							targetInRange(card, player, target) {
								if (card && card.isCard && card.cards && player.getExpansions("yuri_buqu").some(c => card.cards.includes(c))) {
									return true;
								}
							},
						},
						ai: {
							order: 5,
							result: {
								player(player) {
									return 1;
								},
								target: -1.5,
							},
							respondSha: true,
							skillTagFilter(player) {
								if (!player.hasZhuSkill("yuri_buqu")) return false;
								return player.getExpansions("yuri_buqu").length > 0;
							},
						},
					},
				},
				ai: {
					save: true,
					mingzhi: true,
					skillTagFilter(player, tag, target) {
						if (!player.hasZhuSkill("yuri_buqu")) return false;
						if (player != target) return false;
					},
					effect: {
						target(card, player, target) {
							if (!target.hasZhuSkill("yuri_buqu")) return;
							if (get.tag(card, "damage") || get.tag(card, "losehp")) {
								let num = target.getExpansions("yuri_buqu").length || target.getHp();
								if (!num) return;
								return Math.pow(2, Math.min(6, num));
							}
						},
					},
				},
			},
			//枣恭介
			nk_shekong: {
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				filterCard: true,
				selectCard() {
					if (ui.selected.targets.length) return [1, ui.selected.targets[0].countCards("he")];
					return [1, Infinity];
				},
				filterTarget(event, player, target) {
					return (
						target != player && target.countCards("he") >= Math.max(1, ui.selected.cards.length)
					);
				},
				check(card) {
					if (
						!game.hasPlayer(function (current) {
							return (
								current != _status.event.player &&
								get.attitude(_status.event.player, current) < 0 &&
								current.countCards("he") > ui.selected.cards.length
							);
						})
					)
						return 0;
					return 6 - get.value(card);
				},
				content() {
					"step 0";
					event.cardsx = cards.slice(0);
					var num = get.cnNumber(cards.length);
					var trans = get.translation(player);
					var prompt = "弃置" + num + "张牌，然后" + trans + "摸一张牌";
					if (cards.length > 1) prompt += "；或弃置一张牌，然后" + trans + "摸" + num + "张牌";
					var next = target.chooseToDiscard(prompt, "he", true);
					next.numx = cards.length;
					next.selectCard = function () {
						if (ui.selected.cards.length > 1) return _status.event.numx;
						return [1, _status.event.numx];
					};
					next.complexCard = true;
					next.ai = function (card) {
						if (
							ui.selected.cards.length == 0 ||
							_status.event.player.countCards("he", function (cardxq) {
								return get.value(cardxq) < 7;
							}) >= _status.event.numx
						)
							return 7 - get.value(card);
						return -1;
					};
					"step 1";
					if (result.bool) {
						if (result.cards.length == cards.length) player.draw();
						else player.draw(cards.length);
						event.cardsx.addArray(result.cards);
						for (var i = 0; i < event.cardsx.length; i++) {
							if (get.position(event.cardsx[i]) != "d") event.cardsx.splice(i--, 1);
						}
					} else event.finish();
					"step 2";
					if (event.cardsx.length) {
						player.chooseButton(
							["请按顺序将卡牌置于牌堆顶（先选择的在上）", event.cardsx],
							true,
							event.cardsx.length
						);
					} else event.finish();
					"step 3";
					if (result.bool) {
						var cardsx = result.links;
						while (cardsx.length) {
							var card = cardsx.pop();
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
						}
					}
				},
				ai: {
					order: 10,
					result: {
						target: -1,
					},
				},
			},
			key_huanjie: {
				trigger: { player: ["drawBegin", "judgeBegin"] },
				forced: true,
				silent: true,
				popup: false,
				lastDo: true,
				filter(event) {
					return event.name == "draw" || !event.directresult;
				},
				content() {
					if (trigger.name == "draw") {
						if (trigger.bottom) trigger.bottom = false;
						else trigger.bottom = true;
					} else trigger.directresult = get.bottomCards()[0];
				},
				ai: {
					abnormalDraw: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag === "abnormalDraw") return !arg || arg === "bottom";
					}
				}
			},
			//此花露西娅
			lucia_duqu: {
				trigger: {
					player: ["damage", "loseHpBefore", "useCardBefore"],
					source: "damage",
				},
				forced: true,
				charlotte: true,
				filter(event, player, onrewrite) {
					if (onrewrite == "loseHpBefore") {
						return event.type == "du";
					}
					return event.source != undefined && event.source != event.player;
				},
				content() {
					var onrewrite = event.triggername;
					if (onrewrite == "loseHpBefore") {
						trigger.cancel();
						player.recover(trigger.num);
						player.recover(trigger.num);
					} else {
						var another = trigger[trigger.source == player ? "player" : "source"];
						player.line(another, { color: [220, 90, 139] });
						another.gain(game.createCard2("du"), "gain2");
					}
				},
				ai: {
					usedu: true,
				},
			},
			lucia_zhenren: {
				trigger: { global: "phaseJieshuBegin" },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return player.countCards("e") > 0;
				},
				content() {
					"step 0";
					var es = player.getCards("e");
					event.count = es.length;
					player.discard(es);
					"step 1";
					event.count--;
					if (
						game.hasPlayer(function (current) {
							return current.countDiscardableCards(player, "ej") > 0;
						})
					) {
						player.chooseTarget(
							"请选择一名角色，弃置其装备区或判定区内的一张牌。",
							true,
							function (card, player, target) {
								return target.countDiscardableCards(player, "ej") > 0;
							}
						).ai = function (target) {
							var att = get.attitude(_status.event.player, target);
							if (target.countCards("j") && att > 0) return att * 1.5;
							return -att;
						};
					} else event.finish();
					"step 2";
					if (result.bool && result.targets && result.targets.length) {
						var target = result.targets[0];
						player.line(target, { color: [220, 90, 139] });
						player.discardPlayerCard(target, "ej", true);
						if (event.count) event.goto(1);
					}
				},
			},
			
		},
		dynamicTranslate: {
			abyusa_jueqing(player) {
				if (player.storage.abyusa_jueqing_rewrite) return "锁定技，你即将造成的伤害均视为失去体力。";
				return "当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力，并于此伤害结算完成后修改〖绝情〗（X为伤害值）。";
			},
			tomoya_shangxian(player) {
				if (player.storage.tomoya_shangxian)
					return "锁定技，你计算与其他角色的距离时始终从顺时针方向计算。出牌阶段开始时，你可摸一张牌，并改变此方向。";
				return "锁定技，你计算与其他角色的距离时始终从逆时针方向计算。出牌阶段开始时，你可摸一张牌，并改变此方向。";
			},
			yui_lieyin(player) {
				if (player.storage._ichiban_no_takaramono)
				return "锁定技，转换技。出牌阶段开始时，阴: 本阶段内的红色牌均 视为【杀】，且你使用杀时无距离限制且伤害+1；阳: 本阶段内的【杀】均视为【决斗】。当你使用决斗时，你摸一张牌。";
			},
			yuzuru_kunfen(player) {
				if (player.storage._yuzuru_sss)
					return "锁定技，结束阶段，你摸两张牌。然后你可以将两张牌交给一名其他角色。";
				return "锁定技，结束阶段，你失去1点体力并摸两张牌。然后你可以将两张牌交给一名其他角色。";
			},
			yuzuru_quji(player) {
				if (player.storage._yuzuru_sss)
					return "出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。（X为你已损失的体力值）";
				return "出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。若你以此法弃置了黑色牌，则你失去1点体力。（X为你已损失的体力值）";
			},
			kamome_jieban(player) {
				if (player.storage.kamome_jieban)
					return '转换技。每回合限一次，当你受到或造成伤害后，阴：你可将两张牌交给一名其他角色，然后其交给你一张牌。<span class="bluetext">阳：你可将一张牌交给一名其他角色，然后其交给你两张牌。</span>';
				return '转换技。每回合限一次，当你受到或造成伤害后，<span class="bluetext">阴：你可将两张牌交给一名其他角色，然后其交给你一张牌。</span>阳：你可将一张牌交给一名其他角色，然后其交给你两张牌。';
			},
			shiroha_guying(player) {
				var str = "当你受到伤害/对其他角色造成伤害时，你";
				if (!player.storage.shiroha_jiezhao) str = "锁定技，每回合限一次，" + str;
				if (player.storage.shiroha_jiezhao) str += "可";
				str += "进行判定。若结果为红色/黑色，此伤害-1/+1。";
				return str;
			},
		},
		characterReplace: {
			key_yuri: ["key_yuri", "sp_key_yuri"],
			kanade: ["sp_key_kanade", "kanade"],
		},
		translate: {
			key_kagari: "篝",
			kagari_zongsi: "纵丝",
			kagari_zongsi_info:
				"出牌阶段限一次，你可以选择一张不在游戏外的牌，然后将其置于牌堆/弃牌堆的顶部/底部或一名角色的对应区域内。",
			kagari_yuanyi: "远忆",
			kagari_yuanyi_info:
				"锁定技，回合开始和结束时时，你摸X张牌并回复X点体力。（X为游戏轮数且至多为3）",
				
			key_shiki: "神山识",
			key_shiki_ab: "神山识",
			shiki_omusubi: "御结",
			shiki_omusubi_info:
				"一轮游戏开始时，你可以减1点体力上限，然后将一名其他角色武将牌上的技能加入到你的武将牌上。",
			shiki_omusubi_append:
				'<span style="font-family: yuanli">来吧，羽依里。用你的手，让我变成那只真正的鬼吧！</span>',
			db_key_hina: "佐藤雏",
			hina_shenshi: "神视",
			hina_shenshi_yingbian: "神视",
			hina_shenshi_info:
				"键势力技。出牌阶段开始时/结束时，你可摸四张牌，然后将其中一张牌置于牌堆顶。你以此法得到的牌视为拥有全部应变效果，且可以无条件发动。",
			hina_xingzhi: "幸凪",
			hina_xingzhi_info:
				"键势力技。每回合限一次，你可以通过“助战”触发一张牌的全部应变效果，且响应助战的角色摸两张牌。",

			sp_key_yuri: "SP仲村由理",
			sp_key_yuri_prefix: "SP",
			key_lucia: "此花露西娅",
			key_kyousuke: "枣恭介",
			key_yuri: "仲村由理",
			key_haruko: "神尾晴子",
			key_umi: "加藤うみ",
			key_umi2: "鹰原羽未",
			key_rei: "零",
			key_komari: "神北小毬",
			key_yukine: "宫泽有纪宁",
			key_yusa: "西森柚咲",
			key_misa: "黑羽美砂",
			key_masato: "井之原真人",
			key_iwasawa: "岩泽雅美",
			key_kengo: "宫泽谦吾",
			key_yoshino: "吉野晴彦",
			key_yui: "由依",
			key_tsumugi: "紬文德斯",
			key_saya: "朱鹭户沙耶",
			key_harukakanata: "三枝叶留佳&二木佳奈多",
			key_harukakanata_ab: "三枝二木",
			key_inari: "稻荷",
			key_shiina: "椎名",
			key_sunohara: "春原阳平&春原芽衣",
			key_sunohara_ab: "阳平芽衣",
			//该武将国战模式下不可用
			key_rin: "枣铃",
			key_sasami: "笹濑川佐佐美",
			key_akane: "千里朱音",
			key_doruji: "多鲁基",
			key_yuiko: "来谷唯湖",
			key_riki: "直枝理树" /*+'子'*/,
			key_hisako: "渕田久子",
			key_hinata: "日向秀树",
			key_noda: "野田",
			key_tomoya: "冈崎朋也",
			key_nagisa: "古河渚",
			key_ayato: "直井文人",
			key_ao: "空门苍",
			key_yuzuru: "音无结弦",
			sp_key_kanade: "SP立华奏",
			sp_key_kanade_prefix: "SP",
			key_mio: "西园美鱼",
			key_midori: "西园美鸟",
			key_kyoko: "岬镜子",
			key_shizuru: "中津静流",
			key_shiorimiyuki: "关根诗织&入江美雪",
			key_shiorimiyuki_ab: "关根入江",
			key_miki: "野村美希",
			key_shiori: "美坂栞",
			key_kaori: "美坂香里",
			key_akiko: "水濑秋子",
			key_abyusa: "游佐",
			key_godan: "松下护騨",
			key_yuu: "乙坂有宇",
			key_ryoichi: "三谷良一",
			key_kotori: "神户小鸟",
			key_jojiro: "高城丈士朗",
			key_shiroha: "鸣濑白羽",
			key_shizuku: "水织静久",
			key_hiroto: "铃木央人",
			key_sakuya: "凤咲夜",
			key_youta: "成神阳太",
			key_rumi: "七濑留美",
			key_chihaya: "凤千早",
			key_yukito: "国崎往人",
			key_crow: "小空",
			key_asara: "井上晶",
			key_kotomi: "一之濑琴美",
			key_mia: "藤川米娅",
			key_kano: "雾岛佳乃",
			db_key_liyingxia: "李映夏",
			key_erika: "苍井绘里香",
			key_satomi: "藏里见",
			key_iriya: "喵呜·喵呼",
			key_iriya_ab: "喵呜喵呼",
			key_fuuko: "伊吹风子",
			lucia_duqu: "毒躯",
			lucia_duqu_info:
				"锁定技，①当你对其他角色造成伤害或受到其他角色的伤害时，你令对方获得一张花色点数随机的【毒】。<br>②当你因【毒】失去体力时，你改为回复等量的体力。",
			lucia_zhenren: "振刃",
			lucia_zhenren_info:
				"锁定技，每个结束阶段，若你的装备区内有牌，则你弃置之。然后，你依次弃置场上的X张牌。（X为你以此法弃置的牌数）",
			nk_shekong: "设控",
			nk_shekong_info:
				"出牌阶段限一次，你可以弃置任意张手牌并选择一名其他角色（不能超过该角色的牌数），然后令其选择一项：弃置一张牌并令你摸X张牌，或弃置X张牌并令你摸一张牌。然后，你将你与其弃置的且位于弃牌堆中的牌以任意顺序置于牌堆顶。",
			key_huanjie: "幻界",
			key_huanjie_info: "锁定技，当你进行判定或摸牌时，你改为从牌堆的另一端获取相应的牌。",
			yuri_xingdong: "行动",
			yuri_xingdong_info:
				"锁定技，出牌阶段开始时，你获得一张【杀】或普通锦囊牌。出牌阶段限一次，你可以将一张【杀】或普通锦囊牌交给一名其他角色，然后该角色选择一项：对除你以外的角色使用此牌并在此牌结算完成后和你各摸一张牌；或跳过下回合的判定阶段和摸牌阶段。",
			//目标角色跳过阶段的同时 该回合不能发动〖整经(郑玄)〗
			yuri_wangxi: "忘隙",
			yuri_wangxi_info:
				"主公技，限定技，当有角色因你发动的【行动】而死亡后，若其身份不为【明忠】，则其可以将身份改为忠臣并重新加入游戏，然后将势力改为与你相同，将体力值回复至2点并摸一张牌。",
			yuri_buqu: "不屈",
			yuri_buqu_info:
				"锁定技，当你处于濒死状态时，将牌堆顶的一张牌置于你的武将牌上，称为「创」。若此牌点数和花色与已有的「创」均不相同，则你将体力回复至2点，否则获得所有的「创」并回复体力至1点。当你武将牌上有「创」时，摸牌阶段额外摸X/4张（X为创数量，向上取整）。你可以将「创」当杀使用，无距离限制。当你使用「创」导致目标角色进入濒死状态时，你进入濒死状态且本次濒死无法触发〖不屈〗。",
			haruko_haofang: "豪放",
			haruko_haofang_info:
				"锁定技，你的延时锦囊牌视为【无中生有】。当你因执行【无中生有】的效果而摸牌时，你令摸牌数+2。",
			haruko_zhuishi: "追逝",
			haruko_zhuishi_info:
				"一名角色的判定阶段开始时，若其判定区内有牌，则你可以获得其判定区内的所有牌。若你的体力值大于1，你失去1点体力。",
			umi_chaofan: "炒饭",
			umi_chaofan_info:
				"出牌阶段限一次，你可以弃置两张花色不同的手牌并选择一名其他角色。你摸一张牌，若你的体力值：大于2，目标角色回复1点体力；等于2，目标角色摸两张牌；小于2，目标角色受到1点无来源且对应渠道为这两张牌的火焰伤害。",
			umi_lunhui: "轮回",
			umi_lunhui_info:
				"一名其他角色的回合结束时，若你的手牌数小于体力值，则你可以失去1点体力。若如此做，你摸两张牌并进行一个额外回合，且你于此回合内计算与此角色的距离视为1。",
			umi_shiroha: "轮回 - 延时效果",
            umi_qihuan: "七幻",
            umi_qihuan_info:
	"限定技，当你处于濒死状态时，你可以回复7点体力并摸7张牌。若如此做，你可获得场上已死亡角色武将牌上的至多七个技能，并移去此武将牌。然后将场上除你外所有角色的手牌数摸至或弃置为7，你获得其他角色因《七幻》弃置的牌。若场上有死亡角色，你失去技能《七幻》。",
			komari_tiankou: "甜口",
			komari_tiankou_info:
				"锁定技，当你使用红色的非伤害性基本牌/锦囊牌选择目标时，或成为其他角色使用的这些牌的目标时，你选择一项：1.摸一张牌；2.为此牌增加一个目标。",
			komari_xueshang: "血殇",
			komari_xueshang_info:
				"锁定技，蓄能技，当有角色死亡时，你选择自己受到1~X点伤害（X为你的体力值），然后对所有其他角色依次造成等量伤害。当有角色因此法造成死亡时，你加1点体力上限并回复4点体力，然后失去此技能并终止此技能的所有后续结算。",
			yukine_wenzhou: "问咒",
			yukine_wenzhou_info:
				"一名角色的出牌阶段开始时，其可以交给你一张牌。若如此做，你选择一项：交给其一张牌，或令其从牌堆中获得一张与此牌类型相同的牌，且其于此阶段内使用与此牌牌名相同的牌时无法被响应。",
			//如果对自己发动【问咒】，则自己可以响应这些牌。但其他角色发动【问咒】时，该角色自己并不能响应
			yusa_yanyi: "演艺",
			yusa_yanyi_info:
				"出牌阶段限一次，你可以指定至多X名与你距离不大于你的体力值的角色。这些角色选择一项：①令你摸一张牌。②回复1点体力，然后交给你一张牌。（X为你的攻击范围且至少为1）",
			yusa_zhumeng: "逐梦",
			yusa_zhumeng_info:
			    "锁定技，转换技。准备阶段，阴: 你的判定阶段改为摸牌阶段。阳: 你的弃牌阶段改为摸牌阶段。出牌阶段开始时，若你的手牌数大于等于你的体力值，你使用牌无次数限制。若你的手牌数小于等于你的体力值，你使用牌无距离限制。若你的手牌数等于等于你的体力值，你于回合结束后获得一个额外回合。",
			misa_: "魂映",
			misa__info:
			    "锁定技，转换技。当你受到伤害后，阴: 你回复两点体力，且伤害来源所有技能失效直到回合结束。阳: 你摸四张牌，且下个回合开始前防止此类伤害。",
			misa_yehuo: "业火",
			misa_yehuo_info:
				"一名角色的摸牌阶段开始时，若其在你的攻击范围内，你可以弃置X张牌并选择一项：①对其造成1点火属性伤害。②令其于此摸牌阶段放弃摸牌。（X为你与其的的距离）",
			yusa_misa: "通灵",
			yusa_misa_info: "当你发动的〖演艺〗结算完成之后，你可以将武将牌翻面。",
			misa_yusa: "归魂",
			misa_yusa_info: "当你发动的〖业火〗结算完成后，你可以将武将牌翻面。",
			masato_baoquan: "暴拳",
			masato_baoquan_info:
				"锁定技，当你即将造成伤害时，你选择一项：1.令此伤害+2并增加1点体力上限。2.防止此伤害并摸4张牌。",
			iwasawa_yinhang: "引吭",
			iwasawa_yinhang_info: "锁定技，当你的体力值变化1点时，你可以令至多两名角色摸一张牌。",
			iwasawa_mysong: "My Song",
			iwasawa_mysong_info:
				"锁定技，当你即将进行濒死结算时，取消之。回合开始时，若你的体力值小于1，则你获得技能〖奋音〗直到回合结束。回合结束时，若你的体力值小于1，你死亡。",
			iwasawa_fenyin: "奋音",
			iwasawa_fenyin_info:
				"你的回合内，当你使用牌时，若此牌与你于此回合内使用的上一张牌的颜色不同，则你可以摸一张牌。",
			iwasawa_refenyin: "奋音",
			iwasawa_refenyin_info:
				"锁定技，你的回合内，当一张牌进入弃牌堆后，若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆，则你摸一张牌。",
			//卡牌花色的计算不受〖红颜〗等技能的影响
			kengo_weishang: "伪伤",
			kengo_weishang_sha: "伪伤",
			kengo_weishang_shan: "伪伤",
			kengo_weishang_info:
				"出牌阶段限一次，你可以废除一个装备栏并摸两张牌。若你的武器栏已废除，则你使用【杀】的次数上限+1，且当你使用【杀】指定目标后，目标角色弃置一张牌；若你的防具栏已废除，则你可以将一张牌当做【闪】使用或打出；若你的攻击/防御坐骑栏已废除，则你至其他角色的距离-1/其他角色至你的距离-1。",
			kengo_guidui: "归队",
			kengo_guidui_info:
				"锁定技，准备阶段，若你有已废除的装备栏，则你恢复这些装备栏，且本局游戏内发动【伪伤】时不能废除这些装备栏。",
			yoshino_jueyi: "决义",
			yoshino_jueyi_info:
				"出牌阶段开始时，你可以选择一名其他角色。你摸一张牌并与其猜拳（平局则重来）。若你赢，你对其造成1点伤害。若你没赢，你本阶段内使用牌时不能指定其为目标。",
			yui_jiang: "激昂",
			yui_jiang_info:
				"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
			yui_lieyin: "烈音",
			yui_lieyin_info:
				"锁定技，转换技。出牌阶段开始时，阴: 本阶段内的红色牌均 视为【杀】，且你使用杀时无距离限制且伤害+1；阳: 本阶段内的【杀】均视为【决斗】。当你使用决斗时，你摸一张牌。",
			yui_takaramono: "珍宝",
			yui_takaramono_info:
				"觉醒技，准备阶段，若你满足以下条件中的至少两个：①体力值不大于1；②场上有已死亡的角色；③已因〖激昂〗累计获得过至少三张牌；则你获得技能〖引吭〗，将〖烈音〗描述中的「你选择」改为「你可选择」，然后加1点体力上限并回复1点体力。",
			//ユイ/孙笨双将组合时，孙笨的〖激昂〗不计入〖珍宝〗的次数统计
			yui_yinhang: "引吭",
			yui_yinhang_info: "锁定技，当你的体力值变化1点时，你可以令至多两名角色摸一张牌。",
			tsumugi_mugyu: "姆啾",
			tsumugi_mugyu_info: "当你成为牌的目标后，若你的手牌数小于体力上限，则你可以摸一张牌。",
			tsumugi_huilang: "回廊",
			tsumugi_huilang2: "回廊",
			tsumugi_huilang_info:
				"回合结束时，你可以将任意张牌扣置于武将牌下（均称为「隐」）。回合开始时，你获得所有「隐」，然后可令等量的角色各摸一张牌。",
			//〖回廊〗涉及的所有卡牌移动的结算不会触发〖良姻〗
			haruka_shuangche: "双掣",
			kanata_shuangche: "双掣",
			haruka_shuangche_backup: "双掣",
			haruka_shuangche_info:
				"出牌阶段，你可以视为使用任意基本牌或普通锦囊牌。此牌结算完成后，你选择一项：1.弃置X张牌并摸4张牌。2.回复4点体力且本回合内不能再发动〖双掣〗。（X为你于此回合内发动过〖双掣〗的次数）",
			//你不能以此法使用〖回魂〗
			saya_shouji: "授计",
			saya_shouji_info:
				"每回合限一次，当你使用的牌结算完成后，你可以将此牌对应的所有实体牌交给一名其他角色。其可以使用这些牌中的一张，若如此做，你摸一张牌。",
			saya_powei: "破围",
			saya_powei_info:
				"限定技，回合结束后，你可以选择一名体力值大于你的其他角色。你与其交替进行额外回合，直到你与其中的一名角色死亡或进行到九个回合。你于回合开始时进行判定，若结果为红色，则你对其造成1点伤害。此过程中其他角色不计入距离和座次计算。",
			saya_judge: "破围",
			saya_nodis: "破围",
			//〖破围〗不会因为〖铁骑〗无效
			inari_baiwei: "摆尾",
			inari_baiwei_draw: "摆尾",
			inari_baiwei_info: "你可以将一张♦牌当做任意基本牌使用或打出。此牌结算完成后，你摸一张牌。",
			//你不能以此法使用【毒】
			inari_baiwei_backup: "摆尾",
			inari_baiwei_sha: "摆尾",
			inari_baiwei_shan: "摆尾",
			inari_huhun: "狐魂",
			inari_huhun_info: "锁定技，你的♣牌的花色均视为♦。你的手牌上限+1。",
			shiina_qingshen: "轻身",
			shiina_qingshen_info:
				"当你受到或造成伤害后，你可以获得此次伤害的渠道对应的实体牌，然后将等量的牌置于你的武将牌上，称为「轻」。锁定技，你的手牌上限和攻击范围+X（X为「轻」数）。",
			shiina_feiyan: "飞燕",
			shiina_feiyan_info:
				"一名其他角色的回合开始时，若其在你的攻击范围内，则你可以将一张「轻」置于弃牌堆，然后视为对其使用一张【杀】。若此【杀】未造成伤害，你摸一张牌。你于此【杀】的结算流程中视为拥有技能〖铁骑〗。",
			shiina_retieji: "铁骑",
			//你不能对稻荷和多鲁基发动〖飞燕〗
			sunohara_chengshuang: "成双",
			sunohara_chengshuang_phase: "成双",
			sunohara_chengshuang_info: "锁定技，游戏开始时，你选择你的性别。回合开始时，你可以切换你的性别。",
			sunohara_tiaoyin: "挑引",
			sunohara_tiaoyin_info:
				"出牌阶段限一次，你可以弃置任意张花色各不相同的手牌，然后获得等量角色区域内的各一张牌。若你以此法获得了异性角色区域内的牌，则你失去1点体力。",
			sunohara_jianren: "坚忍",
			sunohara_jianren_info:
				"当你受到伤害后，你可以令一名角色摸一张牌。若伤害无来源或来源与你性别不同，则改为摸三张牌。",
			rin_baoqiu: "暴球",
			rin_baoqiu_info:
				"锁定技，你的攻击范围+2。当你使用【杀】指定目标后，你进行判定。若结果：为红色，此【杀】对其的伤害值基数+1；为黑色，其无法闪避此【杀】；为♠/♥，此【杀】不计入使用次数限制且你摸一张牌；为♦/♣，目标角色的所有非锁定技失效直到回合结束，且你弃置其一张牌。",
			sasami_miaobian: "喵变",
			sasami_miaobian_info:
				"锁定技，当你的体力值变为：3以上时，你获得技能〖公清〗，2以上时，你获得技能〖复难〗，1以上时，你获得技能〖暴球〗。当你的体力值小于3时，当你受到伤害时，回复一点体力；当你在回合外使用/打出/弃置牌时，你摸一张牌。",
			sasami_gongqing: "公清",
			sasami_gongqing_info:
				"锁定技。当你受到伤害时，若伤害来源的攻击范围：<3，则你令此伤害的数值减为1。>3，你令此伤害+1。",
			sasami_funan: "复难",
			sasami_funan_info:
				"其他角色使用或打出牌响应你使用的牌时，你可令其获得你使用的牌（其本回合不能使用或打出这些牌），然后你获得其使用或打出的牌。",
			sasami_baoqiu: "暴球",
			sasami_baoqiu_info:
				"锁定技，你的攻击范围+2。当你使用【杀】指定目标后，你进行判定。若结果：为红色，此【杀】对其的伤害值基数+1；为黑色，其无法闪避此【杀】；为♠/♥，此【杀】不计入使用次数限制且你摸一张牌；为♦/♣，目标角色的所有非锁定技失效直到回合结束，且你弃置其一张牌。",
			akane_jugu: "巨贾",
			akane_jugu_info: "锁定技，1.你的手牌上限+X。2.游戏开始时，你摸2X张牌（X为你的体力上限）。",
			akane_quanqing: "权倾",
			akane_quanqing_info:
				"出牌阶段，你可选择：1.弃置一张点数大于10的牌并对攻击范围内的一名其他角色造成2点伤害；2.弃置一张点数大于6的牌并弃置攻击范围内的一名其他角色区域内的一张牌。3.弃置一张牌并令攻击范围内的一名其他角色摸两张牌。",
			akane_yifu: "蚁附",
			akane_yifu2: "蚁附",
			akane_yifu_info:
				"主公技，其他键势力角色的出牌阶段限一次，其可交给你一张手牌。然后你摸一张牌，并将一张手牌交给该角色。",
			doruji_feiqu: "肥躯",
			doruji_feiqu_info: "锁定技，当你使用【杀】时，或你成为【杀】的目标后，你令此【杀】不可被响应。",
			yuiko_fenglun: "锋论",
			yuiko_fenglun_info:
				"出牌阶段限一次，你可以和一名其他角色拼点。若你赢，你本阶段内使用牌没有次数和距离限制。",
			yuiko_dilve: "底略",
			yuiko_dilve_info: "你可以使用牌堆底的一张牌进行拼点。当你拼点后，你可以获得两张拼点牌。",
			riki_spwenji: "问计",
			riki_spwenji_info:
				"出牌阶段开始时，你可以令一名其他角色交给你一张牌。你于本回合内使用与该牌名称相同的牌时不能被其他角色响应。",
			riki_nvzhuang: "女装",
			riki_nvzhuang_info:
				"锁定技，此武将牌视为包含女性性别。结束阶段，若你：有手牌，你摸两张牌；没有手牌，你摸四张牌。",
			riki_mengzhong: "梦终",
			riki_mengzhong_info:
				"觉醒技，准备阶段，若你已因〖问计〗获得了三张或更多的牌，则你加1点体力上限并回复1点体力，失去〖问计〗并获得〖重振〗。",
			riki_chongzhen: "重振",
			riki_chongzhen_info:
				"出牌阶段开始时，你可以与一名角色拼点。若你赢，你获得该角色手牌区，装备区，判定区的各一张牌；若你没赢，你于此阶段内使用牌时不能指定其他角色为目标。",
			hisako_yinbao: "音爆",
			hisako_yinbao_info:
				"当你受到伤害/回复体力后，你可以判定。若结果为♠，则你对一名其他角色造成4点雷属性伤害。",
			hisako_zhuanyun: "转运",
			hisako_zhuanyun_info: "锁定技，你的判定会朝向对你有利的方向倾斜。",
			hinata_qiulve: "球略",
			hinata_qiulve_info:
				"你可以将一张非基本牌当做【杀】使用或打出（无距离限制）。你以此法使用的红色【杀】不可被响应，黑色【杀】不计入使用次数限制。",
			hinata_ehou: "扼喉",
			hinata_ehou_info:
				"其他角色对你使用的牌结算完成后，你可对其使用四张【杀】。若此【杀】造成伤害，则你摸四张牌。",
			noda_fengcheng: "奉承",
			noda_fengcheng_info: "锁定技，其他角色交给你牌后，其摸一张牌。",
			noda_xunxin: "寻衅",
			noda_xunxin2: "寻衅",
			noda_xunxin_info:
				"出牌阶段限X次，你可以视为对一名体力值不小于你的角色使用【决斗】。若如此做，此【决斗】结算完成后，没赢的角色交给赢的角色一张牌。（X为你的体力值）",
			tomoya_shangxian: "伤弦",
			tomoya_shangxian_info:
				"锁定技，你计算与其他角色的距离时始终从逆时针方向计算。出牌阶段开始时，你可摸一张牌，并改变此方向。",
			tomoya_wangjin: "往今",
			tomoya_wangjin_info:
				"每项每轮各限一次。一名其他角色的回合结束时，若其：在你的攻击范围内，你可令其摸一张牌。若其的体力值小于你，则你摸一张牌，并可交给其一张牌。不在你的攻击范围内，则你摸两张牌，并令其弃置你的一张手牌。若其的体力值大于你，则你视为对其使用一张【杀】（无距离限制）。",
			nagisa_tiandu: "天妒",
			nagisa_tiandu_info: "当你的判定牌生效后，你可以获得此牌。",
			nagisa_fuxin: "抚心",
			nagisa_fuxin_info:
				"当一名角色于回合外受到伤害，或其手牌被其他角色弃置或获得后，你可以令其判定。若结果为：红色，其摸一张牌。黑色，当前回合角色弃置一张牌。",
			ayato_jianshen: "僭神",
			ayato_jianshen_info: "锁定技，你手牌中的【杀】均视为神属性。",
			ayato_zonghuan: "纵幻",
			ayato_zonghuan_info:
				"出牌阶段限一次，你可以观看一名其他角色的手牌，然后选择一项：将其中的一张牌置入弃牌堆，或以该角色的视角使用其中的一张，然后摸一张牌。",
			ao_xishi: "习事",
			ao_xishi_info: "锁定技，当你使用或打出♦牌时，或其他角色使用♦牌指定你为目标后，你摸两张牌。",
			ao_kuihun: "窥魂",
			ao_kuihun_info:
				"其他角色进入濒死状态时，你可以摸两张牌，然后观看其手牌并将其中一张牌置于你的武将牌上，称为「蝶」。你使用与一张「蝶」花色相同的牌时无距离和次数限制。你的手牌上限+X（X为蝶数）。",
			ao_shixin: "释心",
			ao_shixin_info:
				"觉醒技，准备阶段，若你的「蝶」中包含四种花色，则你加1点体力上限并回复2点体力，失去〖窥魂〗并获得〖蝶归〗。",
			ao_diegui: "蝶归",
			ao_diegui_backup: "蝶归",
			ao_diegui_info: "出牌阶段限一次，你可以将一张「蝶」交给一名角色，该角色摸两张牌并复原武将牌。若为此做，你摸四张牌并回复一点体力。",
			yuzuru_wuxin: "交心",
			yuzuru_wuxin_info:
				"结束阶段，你可以选择一项：失去1点体力并令一名角色摸两张牌，或弃置两张牌并回复1点体力。",
			yuzuru_deyi: "得义",
			yuzuru_deyi_info:
				"觉醒技，当有其他角色死亡后，你增加1点体力上限，回复1点体力并摸两张牌，失去技能〖交心〗，获得技能〖往生〗〖困奋〗和〖去疾〗。",
			yuzuru_wangsheng: "往生",
			yuzuru_wangsheng_info:
				"觉醒技，当你即将死亡时，你防止此次死亡。你可以将任意张牌交给一名其他角色，然后减1点体力上限并将体力回复至2点，修改技能〖困奋〗和〖去疾〗。",
			yuzuru_kunfen: "困奋",
			yuzuru_kunfen_info:
				"锁定技，结束阶段，你失去1点体力并摸两张牌。然后你可以将两张牌交给一名其他角色。",
			yuzuru_quji: "去疾",
			yuzuru_quji_info:
				"出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。若你以此法弃置了黑色牌，则你失去1点体力。（X为你已损失的体力值）",
			yuzuru_kunfen_rewrite: "困奋·改",
			yuzuru_kunfen_rewrite_info: "锁定技，结束阶段，你摸两张牌。然后你可以将两张牌交给一名其他角色。",
			yuzuru_quji_rewrite: "去疾·改",
			yuzuru_quji_rewrite_info:
				"出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。（X为你已损失的体力值）",
			yuzuru_bujin: "步进",
			yuzuru_bujin_info: "锁定技，己方其他角色计算与其他角色的距离-1且摸牌阶段的额定摸牌数+1。",
			kanade_mapo: "麻婆",
			kanade_mapo_info: "你可以将一张♥牌当做【麻婆豆腐】使用。你使用的【麻婆豆腐】可以多指定一个目标。",
			kanade_benzhan: "奔战",
			kanade_benzhan_info:
				"当你使用或打出牌响应其他角色，或其他角色使用或打出牌响应你后，若此牌为：基本牌，你可令一名角色弃置四张牌或令一名角色摸四张牌；非基本牌，你可对一名角色造成2点伤害或令一名其他角色回复2点体力。",
			mio_tuifu: "推腐",
			mio_tuifu_info: "锁定技，当一名角色受到伤害时，你摸一张牌。",
			mio_tishen: "替身",
			mio_tishen_info:
				"限定技，准备阶段，你可以将体力值回复至体力上限并摸等同于回复量的牌，然后将武将牌替换为【西园美鸟】。",
			midori_nonghuan: "弄幻",
			midori_nonghuan_info:
				"出牌阶段限X次（X为你的体力值），你可以获得一名本阶段内未选择过的其他角色的区域内的一张牌。你摸一张牌，然后将一张牌交给该角色。然后你清除此技能结算过程中所有卡牌移动事件的移动记录。",
			//即技能结算完成后，所有涉及到的牌移动事件不会再被getHistory获取
			midori_tishen: "替身",
			midori_tishen_info:
				"限定技，准备阶段，你可以将体力值回复至体力上限并摸等同于回复量的牌，然后将武将牌替换为【西园美鱼】。",
			kyoko_juwu: "聚物",
			kyoko_juwu_info:
				"你的回合外，当有装备牌进入弃牌堆后，若这些牌不是从你的区域移动的，则你可以获得这些牌。",
			kyoko_zhengyi: "整遗",
			kyoko_zhengyi_info:
				"锁定技，若你装备区的花色数：大于等于1，你视为拥有〖精策〗；大于等于2，你视为拥有〖涉猎〗：大于等于3，你视为拥有〖制衡〗；大于等于4，你将〖精策〗和〖制衡〗改为界限突破版本。",
			kyoko_jingce: "精策",
			kyoko_shelie: "涉猎",
			kyoko_zhiheng: "制衡",
			shizuru_nianli: "念力",
			shizuru_nianli_info:
				"你可以展示一张♦/♣/♥/♠手牌，然后视为使用一张不计入次数限制和记录的雷【杀】/【闪】/【桃】/【无懈可击】。",
			shizuru_benzhan: "奔战",
			shizuru_benzhan_info:
				"当你使用或打出牌响应其他角色，或其他角色使用或打出牌响应你后，若此牌为：基本牌，你可令一名角色弃置四张牌或令一名角色摸四张牌；非基本牌，你可对一名角色造成2点伤害或令一名其他角色回复2点体力。",
			shiorimiyuki_banyin: "伴音",
			shiorimiyuki_banyin_info: "当你受到伤害或回复体力后，你可令一名其他角色回复1点体力。",
			shiorimiyuki_tingxian: "铤险",
			shiorimiyuki_tingxian_info:
				"出牌阶段开始时，你可以摸至多四张牌。若如此做，你回复4点体力，且此阶段结束时你失去X点体力。（X为你得到的牌中仍在手牌区的牌的数量）",
			shiorimiyuki_tingxian2: "铤险",
			miki_shenqiang: "神枪",
			miki_shenqiang_info:
				"锁定技，游戏开始时，你将一张【海德洛格拉迪尔特·改】和一张【望远镜】置入你的装备区。你装备区内的武器牌和宝物牌不能被其他角色弃置。",
			miki_huanmeng: "幻梦",
			miki_huanmeng_info:
				"准备阶段开始时，你可以观看牌堆顶的X+1张牌并可以按任意顺序置于牌堆顶或牌堆底。（X为你装备区内的牌数）",
			miki_zhiluo: "治裸",
			miki_zhiluo_info:
				"锁定技，一名其他角色的回合结束时，若其在你的攻击范围内且其装备区内没有牌，则你选择：①摸四张牌。②视为对其使用两张【杀】。",
			miki_hydrogladiator: "海德洛",
			miki_hydrogladiator_info:
				"全名为【海德洛格拉迪尔特·改】。锁定技，当你因执行【杀】的效果而对目标角色造成伤害后，你弃置所有至目标角色距离为1的其他角色的一张牌或弃置其两张牌。",
			miki_hydrogladiator_skill: "海德洛格拉迪尔特·改",
			miki_binoculars: "望远镜",
			miki_binoculars_info: "锁定技，其他角色的手牌对你可见。",
			shiori_huijuan: "绘卷",
			shiori_huijuan_discard: "绘卷",
			shiori_huijuan_info:
				"锁定技，其他角色的结束阶段开始时，你可以视为使用一张该角色本回合出牌阶段内使用过的基本牌或普通锦囊牌。准备阶段开始时，若你自上个回合起以此法使用的牌数不小于X，则你选择一项：①弃置装备区或判定区内的一张牌。②跳过本回合的出牌阶段。（X为场上玩家数的一半且至少为2）",
			kaori_siyuan: "思愿",
			kaori_siyuan_info:
				"出牌阶段，你可以将一张装备牌或延时锦囊牌置于一名其他角色的装备区内，然后可以视为使用一张基本牌或普通锦囊牌。",
			kaori_zhishi: "致仕",
			kaori_zhishi_info:
				"锁定技，游戏开始时，你往牌堆中添加牌堆数量1/4的【桃】。当你使用【桃】时，额外回复1点体力。摸牌阶段，你额外摸X张牌（X为弃牌堆中【桃】的数量，至多为5）。",
			kaori_dongfeng: "东风",
			kaori_dongfeng_info:
				"锁定技，当你死亡时，你复活，将体力回复至体力上限，手牌数摸到手牌上限。若如此做，你将弃牌堆中所有的【桃】移出游戏并替换成等量的【杀】。准备阶段，若弃牌堆中没有【桃】，你死亡，并将场上和牌堆中的所有【桃】替换成【杀】，【桃园结义】替换成【万箭齐发】。",
			akiko_dongcha: "洞察",
			akiko_dongcha_info_identity:
				"锁定技，其他角色的手牌对你可见。游戏开始时，你令其他角色的身份牌对你可见。",
			akiko_dongcha_info: "锁定技，其他角色的手牌对你可见。",
			abyusa_jueqing: "绝情",
			abyusa_jueqing_info:
				"当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力，并于此伤害结算完成后修改〖绝情〗（X为伤害值）。",
			abyusa_jueqing_1st: "绝情",
			abyusa_jueqing_rewrite: "绝情·改",
			abyusa_jueqing_rewrite_info: "锁定技，你即将造成的伤害均视为失去体力。",
			abyusa_dunying: "遁影",
			abyusa_dunying_info:
				"锁定技，其他角色计算与你的距离时+X。准备阶段和结束阶段，你摸X张牌（X为你已损失的体力值）。",
			godan_yuanyi: "远忆",
			godan_yuanyi_info:
				"锁定技，回合开始时，你摸X张牌并进行一个额外的出牌阶段。（X为游戏轮数且至多为3）",
			godan_feiqu: "肥躯",
			godan_feiqu_info: "锁定技，当你使用【杀】时，或你成为【杀】的目标后，你令此【杀】不可被响应。",
			godan_xiaoyuan: "消元",
			godan_xiaoyuan_info:
				"觉醒技，当你扣减体力时，若你的体力值小于4，则你减3点体力上限并摸三张牌，失去【肥躯】。",
			yuu_lveduo: "掠夺",
			yuu_lveduo_info:
				"每轮限一次，其他角色的回合开始时，若你本局游戏内未对其发动过〖掠夺〗且你的武将牌正面朝上，你可以将武将牌翻面并获得该角色本回合内的控制权。此回合结束时，你将武将牌翻回正面。锁定技，若你的武将牌背面朝上，则你不能使用或打出牌。",
			yuu_lveduo_full_info:
				"每轮限一次，其他角色的回合开始时，若你本局游戏内未对其发动过〖掠夺〗且你的武将牌正面朝上，你可以将武将牌翻面并获得该角色本回合内的控制权。此回合结束时，你将武将牌翻回正面，获得该角色武将牌上所有的带有「Charlotte」标签的技能，且该角色失去这些技能。锁定技，若你的武将牌背面朝上，则你不能使用或打出牌。",
			ryoichi_baoyi: "爆衣",
			ryoichi_baoyi_info:
				"锁定技，当你失去装备区内的一张牌后，你摸一张牌，然后选择一项：①令一名其他女性角色失去1点体力。②弃置一名其他非女性角色区域内的两张牌。",
			ryoichi_tuipi: "褪皮",
			ryoichi_tuipi_info:
				"锁定技，你不是【顺手牵羊】和【过河拆桥】的合法目标。你装备区的牌于弃牌阶段内计入手牌上限。",
			kotori_yumo: "驭魔",
			kotori_yumo_damage: "驭魔",
			kotori_yumo_gain: "驭魔",
			kotori_yumo_info:
				"锁定技，游戏开始时，你获得蓝色、红色、绿色、黄色、灰色魔物各两个。当有角色受到伤害后，若你没有对应的标记，你根据其势力获得一个对应魔物：魏：蓝、蜀：红、吴：绿、群：黄、灰：晋、键：紫。回合开始时，你可以弃置一个对应的魔物并获得以下技能之一：蓝：魏业、红：蜀义、绿：吴耀、黄：群心、灰：晋势、紫：键魂。",
			kotori_skill_wei: "魏业",
			kotori_skill_wei_info:
				"回合开始时，你可以摸两张牌并指定一名其他角色，该角色须弃置四张牌，否则你摸四张牌。",
			kotori_skill_shu: "蜀义",
			kotori_skill_shu_info:
				"你使用【杀】上限+4；出牌阶段结束时，若你于此阶段使用【杀】次数不少于1，摸两张牌。",
			kotori_skill_wu: "吴耀",
			kotori_skill_wu_info: "回合结束时，若你的手牌数不等于你的体力值，则你摸两张牌。",
			kotori_skill_qun: "群心",
			kotori_skill_qun_info:
				"锁定技，弃牌阶段开始时，若你的手牌数比体力值多2或更多，你本回合手牌上限+1；若你已损失体力值大于1，你手牌上限+1。",
			kotori_skill_key: "键魂",
			kotori_skill_key_info:
				"出牌阶段限一次，你可以摸两张牌并获得4点护甲。若如此做，你于当前回合结束时回复1点体力。",
			kotori_skill_jin: "晋势",
			kotori_skill_jin_info:
				"摸牌阶段结束时，你可以展示你于此阶段内因摸牌而得到的牌。若这些牌的花色均不同，则你摸两张牌。",
			kotori_yumo_wei: '<span class="thundertext">魔物</span>',
			kotori_yumo_shu: '<span class="firetext">魔物</span>',
			kotori_yumo_wu: '<span class="greentext">魔物</span>',
			kotori_yumo_qun: '<span class="yellowtext">魔物</span>',
			kotori_yumo_key: '<span class="legendtext">魔物</span>',
			kotori_yumo_jin: '<span class="icetext">魔物</span>',
			kotori_huazhan: "花绽",
			kotori_huazhan_info:
				"每回合每种魔物限一次，你可将一个蓝色/红色/绿色/黄色/紫色/灰色魔物当做【无中生有】使用。",
			jojiro_shensu: "神速",
			jojiro_shensu_info:
				"你可以选择一至三项：1. 跳过判定阶段和摸牌阶段；2. 跳过出牌阶段并弃置一张装备牌；3. 跳过弃牌阶段并将你的武将牌翻面。你每选择一项，视为你对一名其他角色使用一张没有距离限制的【杀】。",
			jojiro_shensu1: "神速",
			jojiro_shensu2: "神速",
			jojiro_shensu4: "神速",
			jojiro_s: "瞬影",
			jojiro_s_info:
				"锁定技，回合结束时，若你本回合内跳过了阶段，则你选择一项：1.失去1点体力。2.移动至多X格并摸X张牌（X为你本回合内跳过的阶段数）。",
			shiroha_yuzhao: "预兆",
			shiroha_yuzhao_umi: "预兆",
			shiroha_yuzhao_info:
				"锁定技，游戏开始时，你将牌堆顶的X张牌扣置于你的武将牌上，称为「兆」。一名角色的回合开始时，若你有「兆」且其至你的距离不大于1，则你将牌堆顶的X张牌扣置为「兆」，然后将等量的「兆」置于牌堆顶。（X为势力数）",
			shiroha_guying: "孤影",
			shiroha_guying_info:
				"锁定技，每回合限一次，当你受到伤害/对其他角色造成伤害时，你进行判定。若结果为红色/黑色，此伤害-1/+1。",
			shiroha_guying_rewrite: "孤影·改",
			shiroha_guying_rewrite_info:
				"当你受到伤害/对其他角色造成伤害时，你可进行判定。若结果为红色/黑色，此伤害-1/+1。",
			shiroha_jiezhao: "解兆",
			shiroha_jiezhao_info:
				"一名角色的判定牌生效前，你可打出一张「兆」代替之。当你以此法移去最后一张「兆」后，你加1点体力上限并回复1点体力，然后修改〖孤影〗并获得以下技能：〖炒饭〗/〖习事〗/〖呣啾〗/〖结伴〗/〖时迴〗。",
			//猴年马月爆料再利用
			shizuku_sizhi: "思智",
			shizuku_sizhi2: "思智",
			shizuku_sizhi_info:
				"出牌阶段限一次，你可以弃置任意张点数之和为13的牌，然后摸两倍数量的牌。以此法得到的牌中，黑色牌本回合无距离和次数限制，红色牌本回合不计入手牌上限。",
			shizuku_biyi: "避忆",
			shizuku_biyi_info:
				"当你受到伤害后，你可以进行一次判定，然后若你弃置任意张点数之和与判定结果点数相同的牌，你回复2点体力并摸4张牌。",
			shizuku_sanhua: "散花",
			shizuku_sanhua_info: "当你死亡时，你可令一名其他角色从牌堆中获得四张名称各不相同的基本牌。",
			hiroto_huyu: "虎驭",
			hiroto_huyu2: "虎驭",
			hiroto_huyu_info:
				"其他角色的出牌阶段结束时，若你没有技能〖纵略〗，则其可将两张手牌交给你。若如此做，你获得〖纵略〗。你的下回合结束时，你失去〖纵略〗并将本回合内得到的所有牌交给该角色。",
			hiroto_zonglve: "纵略",
			hiroto_zonglve_info:
				"锁定技，你的手牌上限+3。出牌阶段限一次，你可以将一张手牌背面朝下放置，并展示一名其他角色的一张手牌。若这两张牌：颜色相同，你对其造成1点伤害并弃置其展示的牌。颜色不同，你获得该角色区域内的两张牌。",
			hiroto_tuolao: "脱牢",
			hiroto_tuolao_info: "觉醒技，回合结束后，若此回合不是你的第一个回合且你此回合未因〖虎驭〗失去过牌，则你摸三张牌，失去〖虎驭〗并获得〖纵略〗。",
			sakuya_junbu: "均步",
			sakuya_junbu_info:
				"锁定技，若你已废除的装备栏数量：≥1，你使用牌无距离限制。≥2，你使用牌无次数限制。≥3，你使用牌时可以多指定一个目标。≥4，你使用的牌不可被响应。≥5，你使用牌造成伤害时失去1点体力，令此伤害+1。",
			rumi_shuwu: "淑武",
			rumi_shuwu2: "淑武",
			rumi_shuwu_info:
				"锁定技，你使用【杀】无距离和次数限制，你使用普通锦囊牌选择目标后，可增加一个目标。出牌阶段结束时，你令X=0，且每满足一项便令X+1：①你于本阶段内使用【杀】的次数不大于1。②你于本阶段内未使用锦囊牌造成过伤害。③你的体力值不大于3。你摸X张牌，且本回合手牌上限+X。",
			chihaya_liewu: "烈武",
			chihaya_liewu_info:
				"锁定技，你使用【杀】无距离和次数限制，你使用普通锦囊牌选择目标后，可增加一个目标。",
			chihaya_huairou: "怀柔",
			chihaya_huairou_info:
				"锁定技，非属性伤害对你无效。当你在回合外使用【闪】或【无懈可击】时，你对响应来源造成2点雷电伤害。",
			yukito_kongwu: "控物",
			yukito_kongwu_info:
				"出牌阶段限一次，你可以表演《小空飞天》。若如此做，你从以下项目中随机选择X项，并执行其中的一项：①令一名角色摸4张牌。②对一名角色造成2点伤害。③令一名已受伤的角色回复2点体力。④弃置一名角色区域内的2张牌。⑤移动场上的一张牌。若X=0，则你弃置两张牌。（X为你的得分）",
			yukito_yaxiang: "鸦翔",
			yukito_yaxiang_info:
				"限定技，当有角色进入濒死状态时，你可移去此武将牌，然后令该角色将体力值回复至3点，弃置判定区的所有牌并获得技能〖终愿〗。",
			misuzu_zhongyuan: "终愿",
			misuzu_zhongyuan_info:
				"当你的判定结果生效时，你可将判定结果改为任意花色和点数并结束此时机。",
			asara_shelu: "摄录",
			asara_shelu_info:
				"出牌阶段限一次，你可以弃置一张牌，然后展示一名其他角色的一张手牌并将其置于你的武将牌上，称为“影”。若你以此法弃置的牌和展示的牌：花色相同，则你摸四张牌。点数相同，则你回复2点体力。",
			asara_yingwei: "影威",
			asara_yingwei_info:
				"你可以如手牌般使用或打出“影”。锁定技，当你使用“影”时，强制触发对应的应变效果。",
			kotomi_qinji: "琴击",
			kotomi_qinji_info:
				"出牌阶段开始时，你可视为使用使用【万箭齐发】。你以此法使用【万箭齐发】造成的伤害视为失去体力。",
			kotomi_chuanxiang: "传箱",
			kotomi_chuanxiang2: "传箱",
			kotomi_chuanxiang_info:
				"其他角色的出牌阶段限一次，其可以将装备区内的一张牌移动到另一名角色的装备区内，然后你摸一张牌。若你是目标角色，则你改为摸两张牌。",
			kotomi_manyi: "蛮夷",
			kotomi_manyi_info:
				"锁定技，转换技。一轮游戏开始时，转换阴阳状态。阴：别人对你造成的伤害-1。阳：你对别人造成的伤害翻倍。",
			mia_shihui: "时迴",
			mia_shihui_info:
				"锁定技，摸牌阶段，你改为摸X+1张牌（X为你上回合弃置的牌数）；结束阶段，你弃置一张牌并回复1点体力。",
			mia_rujing: "入境",
			mia_rujing_info:
			    "锁定技。当你手牌的花色数变化时，阴: 你受到牌的目标时，你摸X张牌然后令此牌无效。阳: 你使用牌指定目标时，你弃置X张牌。X为指定的目标数。",
			mia_qianmeng: "潜梦",
			mia_qianmeng_info:
				"使命技。①游戏开始时，你摸一张牌，然后将一张牌置于牌堆的正中央。②使命：当有角色获得“潜梦”牌时，其将此牌交给你。你将体力值回复至上限，失去〖时迴〗并获得〖风发〗。③失败：当你死亡时，你可令一名角色获得牌堆中所有与“潜梦”牌花色点数相同的牌。",
			mia_fengfa: "风发",
			mia_fengfa_info: "锁定技。摸牌阶段，你多摸X张牌（X为你上回合使用过的牌数）。",
			kano_liezhen: "列阵",
			kano_liezhen_info:
				"结束阶段，若你本回合内使用过牌且这些牌的类型：不均相同，你可视为使用【排兵布阵】或智囊；均相同，你获得仁库中的所有牌（没有则改为四两张牌）。",
			kano_paibingbuzhen: "排兵布阵",
			kano_paibingbuzhen_info:
				"出牌阶段，对至多三名角色使用。目标角色摸一张牌，然后将一张牌置入仁库。若仁库中的牌类型或颜色均相同，则你摸一张牌。",
			kano_poyu: "破羽",
			kano_poyu_info:
				"当你成为【杀】或伤害性锦囊牌的目标后，若仁库中有牌，你可判定。然后你可从仁库中移去一张与此牌类型或花色相同的牌，令此牌对你无效。",
			liyingxia_sanli: "三礼",
			liyingxia_sanli_info:
				"锁定技。其他角色于其回合内前两次使用牌指定你为目标后，你摸一张牌；第三次使用牌指定你为目标后，你交给其一张牌。",
			liyingxia_zhenjun: "振军",
			liyingxia_zhenjun_info:
				"键势力技。结束阶段，你可以令至多X+1名角色各摸一张牌，且这些角色于自己的下个回合内第一次造成的伤害+1（X为你本回合内使用【杀】和伤害性锦囊牌的次数）。",
			liyingxia_wumai: "武脉",
			liyingxia_wumai_info:
				"键势力技。一轮游戏开始时，你可以选择获得其中一个未选择过的技能：〖念力〗/〖音爆〗/〖传箱〗/〖舍宴〗/〖演艺〗/〖独隐〗。若均已选择过，则你可以摸X+2张牌（X为场上已受伤的角色数且至多为3。",
			erika_shisong: "识诵",
			erika_shisong_info:
				"锁定技。①你的手牌上限+X（X为你的护甲数）。②当你于回合内使用第Y张牌时，若此牌与你上回合使用的第Y张牌类型相同，则你摸一张牌。",
			erika_yousheng: "佑生",
			erika_yousheng_info:
				"锁定技，使命技。①限定技。一轮游戏开始时，你可以选择至多两名其他角色。你增加4点体力上限，回复4点体力，摸4张牌并增加16点护甲。②当你〖佑生①〗选择的角色成为【杀】或伤害类锦囊牌的目标时，你可以弃置X张牌并将此目标转移给自己（X为你本轮内发动过〖佑生②〗的次数）。此牌结算结束后，你可令一名原目标角色获得此牌。③成功：当你失去最后的护甲后，若你已发动过〖佑生①〗，则你和所有〖佑生①〗选择的角色各摸四张牌。④失败：当一名〖佑生①〗选择的角色因【杀】或伤害类锦囊牌而受到伤害而进入濒死状态时，你失去所有护甲并弃置等量的牌。",
			erika_yousheng_append:
				'<span style="font-family: yuanli">Death is not the end of life, but the completion of life.</span>',
			satomi_luodao: "落刀",
			satomi_luodao_info:
				"当你使用【杀】指定目标后，你可以展示目标角色的所有手牌。若其中：有【闪】，则你弃置其中的一张【闪】；没有【闪】，则你摸四张牌。",
			satomi_daohai: "稻海",
			satomi_daohai_info:
				"结束阶段，若你本回合内弃置过牌，则你可以视为使用一张【五谷丰登】。然后你可以将你于此【五谷丰登】中得到的牌当做【乐不思蜀】使用。",
			satomi_daohai_append: '<span style="font-family: yuanli">五穀豊穣、刈り入れ時だね！</span>',
			tenzen_fenghuan: "封还",
			tenzen_fenghuan_info:
				"其他角色使用的【杀】或伤害性锦囊牌结算结束后，若你是此牌的唯一目标，则你可以弃置任意张点数之和大于等于此牌点数两倍的牌，然后视为对其使用一张名称相同的牌。",
			tenzen_retianquan: "天全",
			tenzen_retianquan_info:
				"每回合限一次。当你使用【杀】指定目标后，你可失去1点体力或弃置一张牌，然后亮出牌堆顶的三张牌（若你的体力值小于体力上限的50%，则改为展示五张牌）。这些牌中每有一张基本牌，响应此牌所需的【闪】的数量便+1。此牌结算结束后，若此牌造成过伤害，则你获得展示牌中的所有非基本牌。",
			iriya_yinji: "殷极",
			iriya_yinji_info: "锁定技。出牌阶段开始时，你摸17张牌。你不能直接使用以此法得到的牌。",
			iriya_haozhi: "豪掷",
			iriya_haozhi_info:
				"出牌阶段，你可以按照斗地主牌型弃置至少两张牌，且其他角色可以依次对其进行一轮响应。最后一名进行响应的角色可以根据对应牌型执行对应效果。" +
				"对子：其可以令至多两名角色各摸两张牌。" +
				"三带：其可以弃置至多三名其他角色的各一张牌，然后摸两张牌。" +
				"单顺：其可以弃置一名其他角色的一张牌。若其未以此法弃置过颜色相同的牌，则其可以重复此流程。然后其摸等量的牌。" +
				"双顺：其可以获得一名其他角色的一张牌。若其未以此法获得过颜色相同的牌，则其可以重复此流程。然后其回复等量的体力。" +
				"三顺/飞机：其可以令至多3名其他角色翻面，然后对其中一名角色造成2点火属性伤害。" +
				"炸弹/四带二：其可以对一名角色造成4点雷属性伤害，然后目标角色翻面，弃置装备区的所有牌和四张手牌。",
			visible_fuuko_xingdiao: '<span data-nature="soilmm">星</span>',
			fuuko_xingdiao: "星雕",
			fuuko_xingdiao_info:
				"锁定技。游戏开始时，你摸8张牌，然后将所有手牌明置（称为“星”，不计入手牌上限）。每名其他角色限一次，其可以于出牌阶段选择获得你的一张“星”，然后你摸八张牌。",
			fuuko_chuanyuan: "传愿",
			fuuko_chuanyuan_info:
				"锁定技。当你失去一张“星”后，你回复2点体力，然后从牌堆中获得四张和“星”花色点数相同的牌（没有则改为摸四张牌，且使用此牌无距离和次数限制）。",

			key_kud: "库特莉亚芙卡",
			kud_qiaoshou: "巧手",
			kud_qiaoshou_equip: "巧手",
			kud_qiaoshou_end: "巧手",
			kud_qiaoshou_backup: "巧手",
			kud_qiaoshou_jieshu: "巧手",
			kud_qiaoshou_info:
				`出牌阶段/结束阶段，若你没有"巧"，则你可以将一张手牌作为"巧"置于武将牌上。若为此做，则你摸四张牌并回复两点体力，且视为装备了一张你选择的武器牌或进攻坐骑/防具牌或防御坐骑直到"巧"进入弃牌堆。出牌阶段结束时/准备阶段开始时，你将"巧"置入弃牌堆。`,
			kud_buhui: "不悔",
			kud_buhui_info:
				"限定技，当你进入濒死状态时，你可以弃置“巧”和装备区内的所有牌（至少一张）并摸等量的牌，将体力回复至7点，获得技能〖重振〗。",
			key_misuzu: "神尾观铃",
			misuzu_hengzhou: "恒咒",
			misuzu_hengzhou_info:
				"锁定技，准备阶段开始时，或当你受到1点伤害或回复1点体力后，你获得一个“诅咒”标记。你的手牌上限和摸牌阶段的额定摸牌数+X。结束阶段开始时，若X大于5，则你移去所有“诅咒”标记并失去1点体力。（X为“诅咒”标记数）",
			misuzu_nongyin: "浓饮",
			misuzu_nongyin_info:
				"当你需要使用【桃】时，你可将一张红色非锦囊牌当做【乐不思蜀】置入自己的判定区，然后视为使用一张【桃】。",
			misuzu_zhongxing: "终幸",
			misuzu_zhongxing_info:
				"每回合限一次，当你判定区的牌移动到其他区域后，你可令一名角色回复2点体力或摸四张牌。",
			key_kamome: "久岛鸥",
			kamome_yangfan: "扬帆",
			kamome_yangfan_info:
				"锁定技，游戏开始时，你将一张【旅行箱】置入你的装备区。当你失去装备区内的一张牌后，你摸四张牌。",
			kamome_huanmeng: "幻梦",
			kamome_huanmeng_info:
				"准备阶段开始时，你可以观看牌堆顶的X+1张牌并可以按任意顺序置于牌堆顶或牌堆底。（X为你装备区内的牌数）",
			kamome_jieban: "结伴",
			kamome_jieban_info:
				"转换技。每回合限一次，当你受到或造成伤害后，阴：你可将两张牌交给一名其他角色，然后其交给你一张牌。阳：你可将一张牌交给一名其他角色，然后其交给你两张牌。",
			kamome_suitcase: "旅行箱",
			kamome_suitcase_info: "锁定技，你跳过你的判定阶段和弃牌阶段；当你即将翻面时，取消之。",
			key_nao: "友利奈绪",
			nao_duyin: "独隐",
			nao_duyin2: "独隐",
			nao_duyin_info:
				"一名其他角色的回合开始时，若你本局游戏内未对其发动过〖独隐〗，则你可以弃置一张牌或将武将牌翻面。若如此做，你不能成为其使用牌的目标，且对其使用牌没有距离限制且不计入使用次数直到你的下回合结束。",
			nao_wanxin: "挽心",
			nao_wanxin_info:
				"一名角色的回合结束时，你可以令一名本回合内受到过伤害的角色摸两张牌，然后你与其将武将牌重置。",
			nao_shouqing: "守情",
			nao_shouqing2: "守情",
			nao_shouqing3: "守情",
			nao_shouqing_info: "其他角色的出牌阶段内可以对你使用非转化的【桃】。若如此做，其摸四张牌，且本局游戏内的手牌上限+4。",
			nao_diandeng: "点灯",
			nao_diandeng_info: "锁定技。当你每回合第一次使用一种花色的牌后：若此牌的目标数为1且目标未横置，你横置此牌目标。否则重置所有花色；若你有此花色的手牌，你重铸这些牌。然后你摸二张牌。",
			key_yuuki: "冰室忧希",
			yuuki_yicha: "异插",
			yuuki_yicha_info:
				"出牌阶段开始时，你可依次进行两次判定并将判定牌依次置入两行三列方阵的两个随机位置中。然后你依次进行四次判定，每次可将当前判定牌置入空方格，且须与相邻方格的牌颜色均不同。若如此做，你令一名角色获得方阵内的所有牌。",
		    yuuki_wuxin: "无心",
		    yuuki_wuxin_info:
		        "锁定技，转换技。准备阶段，阴：你对别人造成伤害时，取消之。阳; 别人对你造成伤害时，取消之。每名角色的结束阶段开始时，你摸x张牌(x为当前角色造成的伤害数)",
			key_kyouko: "伊座并杏子",
			kyouko_rongzhu: "容助",
			kyouko_rongzhu_info:
				"其他角色不因此技能而得到你的牌后，你可摸一张牌，然后交给其一张牌。若其是当前回合角色，则其本回合使用【杀】的次数上限+1；若你是当前回合角色，则你本回合的手牌上限+1。",
			kyouko_gongmian: "共勉",
			kyouko_gongmian_use: "共勉",
			kyouko_gongmian_exchange: "共勉",
			kyouko_gongmian_info:
				"①出牌阶段，你可以选择一名未以此法选择过的角色，若其手牌：大于你，你获得其一张牌，然后交给其一张牌；小于你，其交给你一张牌，然后你交给其一张牌；等于你，你与其各摸一张牌。②出牌阶段结束时，你可以获得一名其他角色区域内的至多X张牌，然后交给其等量的牌。③弃牌阶段开始时，若X不小于你的体力值，你可以获得一名手牌数少于你的角色的所有手牌，然后将手牌数的一半（向上取整）交给该角色。（X为你本回合内发动过〖共勉①〗的次数）",
			key_tenzen: "加纳天善",
			tenzen_yixing: "弈兴",
			tenzen_yixing_info:
				"当有角色因【杀】或【决斗】而受到伤害后，若其在你的攻击范围内或你在伤害来源的攻击范围内，你可以摸一张牌，然后将一张牌置于武将牌上，称为“兴”。当你成为其他角色使用【杀】或普通锦囊牌的唯一目标后，你可以获得一张“兴”，并可于此牌结算完成后弃置两张牌，视为对其使用一张名称相同的牌。",
			//若对方为水织静久则无法触发〖弈兴〗
			tenzen_lingyu: "领域",
			tenzen_lingyu_info:
				"觉醒技，准备阶段，若你的“兴”不小于你的体力值，则你减1点体力上限并获得技能〖天全〗。若你以此法失去了体力，则你摸两张牌。",
			tenzen_tianquan: "天全",
			tenzen_tianquan_info:
				"每回合限一次，当你使用【杀】或【决斗】指定唯一目标后，你可以移去两张“兴”并亮出牌堆顶的五张牌。这些牌中每有一张基本牌，响应此牌需要的【闪】/【杀】的数量便+1。此牌结算完成后，若此牌造成过伤害，则你获得这些牌中的非基本牌。",
			key_kotarou: "天王寺瑚太朗",
			kotarou_aurora: "丝刃",
			kotarou_aurora_info:
				"锁定技，当扣减体力或增加体力上限后，若你的装备区内：有武器牌，你视为使用一张【杀】；没有武器牌，你使用牌堆中的一张不为赠物的武器牌。",
			kotarou_rewrite: "改写",
			kotarou_rewrite_damage: "改写",
			kotarou_rewrite_recover: "改写",
			kotarou_rewrite_sha: "改写",
			kotarou_rewrite_block: "改写",
			kotarou_rewrite_info:
				"出牌阶段，你可选择：①视为使用一张本局游戏没有以此法使用过的基本牌或普通锦囊牌；②移动场上的一张牌；③增加1点体力上限并失去1点体力（体力上限至多为5）；④下一次造成的伤害+1；⑤下一次回复的体力值+1；⑥本回合内的手牌上限和使用【杀】的使用次数+1。若你于本回合内发动过〖改写〗的次数超过两次，则你令此技能失效，且于回合结束后将体力上限降至3点，失去〖丝刃〗和〖改写〗。",
			key_kyou: "藤林杏",
			kyou_zhidian: "掷典",
			kyou_zhidian_info:
				"你可以将一张锦囊牌当做【杀】使用（无距离限制）。当你使用【杀】指定第一个目标后，你选择一个与上次不同的选项：①此【杀】不可被响应。②此【杀】无视防具。③此【杀】伤害+1。④此【杀】不计入次数限制。",
			kyou_duanfa: "断发",
			kyou_duanfa_info:
				"限定技，当你受到伤害时，若伤害值不小于你的体力值，则你可以摸4张手牌，防止此伤害并回复4点体力；且当你于你的下回合开始前成为【杀】或伤害性锦囊牌的目标后，你摸一张牌。",
			key_seira: "樱庭星罗",
			seira_xinghui: "星辉",
			seira_xinghui_info:
				"准备阶段，你可以投掷一枚骰子，观看牌堆顶的X张牌（X为投掷点数）并以任意顺序扣置于一名没有“星屑”的角色的武将牌上，称为“星屑”。有“星屑”的角色造成的伤害+1，且当其从牌堆顶摸牌或取得判定牌时，改为从“星屑”中获取。",
			seira_yuanying: "缘映",
			seira_yuanying_info:
				"出牌阶段限一次，你可选择两名角色。这两名角色成为“姻缘者”且获得〖姻缘〗直到你下次发动〖缘映〗。",
			seira_yinyuan: "姻缘",
			seira_yinyuan_info:
				"你的手牌对其他“姻缘者”可见。出牌阶段限一次，你可以获得一名其他“姻缘者”区域内的一张牌，然后其回复1点体力。",
			key_kiyu: "露娜Ｑ",
			kiyu_yuling: "玉灵",
			kiyu_yuling_info:
				"锁定技。你不是有距离限制的锦囊牌的合法目标；你成为【杀】的目标后，使用者需弃置X张牌（X为其至你的距离）。",
			kiyu_xianyu: "先预",
			kiyu_xianyu_info:
				"每轮限一次。一名角色的出牌阶段开始时，你可观看其手牌并预测其使用这些牌的顺序。此出牌阶段结束时，你摸X张牌，且其本回合的手牌上限+X（X为你的预测与其实际使用顺序的吻合数且至多为3）。",
			kiyu_rexianyu: "先预",
			kiyu_rexianyu_info:
				"每轮限一次。出牌阶段结束时，你可以选择一名其他角色。该角色于下个出牌阶段内使用第X张牌时，其可以将一张牌当做你本阶段内使用的第X张基本牌或普通锦囊牌使用（X至多为3）；若如此做，你摸四张牌并回复两点体力，且其本回合的手牌上限+1。",
			key_tomoyo: "坂上智代",
			tomoyo_wuwei: "武威",
			tomoyo_wuwei_info:
				"①每回合每种花色限一次。你可以将一张手牌当做【杀】使用或打出。②当有角色使用【闪】后，若你在其攻击范围内，你可以对其使用一张【杀】（无距离限制）。",
			tomoyo_zhengfeng: "整风",
			tomoyo_zhengfeng_info:
				"使命技。①准备阶段，你可以令攻击范围内的一名角色进行判定。若如此做，你获得如下效果直到下回合开始：你视为在该角色的攻击范围内，且当该角色使用与判定牌颜色相同的牌时，你摸一张牌。②失败：结束阶段，若你于本回合内未发动过〖整风①〗，则你可以减1点体力上限。你失去〖武威〗，摸两张牌并回复1点体力，然后获得〖长誓〗。",
			tomoyo_changshi: "长誓",
			tomoyo_changshi_info:
				"锁定技。一名攻击范围内包含你的角色回复体力后，你获得1点护甲；一名攻击范围内包含你的角色一次性获得至少两张牌后，你摸一张牌。",
			key_minagi: "远野美凪",
			minagi_peiquan: "配券",
			minagi_peiquan_info:
				"锁定技。①游戏开始时，你将你所有的手牌记录为“米券”。②出牌阶段，你可以赠予一张“米券”，然后执行一项本回合内未被选择过的效果：⒈对其造成2点伤害；⒉摸四张牌；⒊弃置其的两张牌；⒋亮出牌堆顶的一张牌，然后你可以使用之。",
			minagi_huanliu: "幻流",
			minagi_huanliu_info:
				`准备阶段开始时，你可与一名其他角色进行协力，并获得"远野小满"的所有技能直到目标角色的结束阶段开始。若"协力"成功，则你可以将所有手牌记录为"米券"。`,
			minagi_xiji: "希冀",
			minagi_xiji_info:
				"锁定技，你使用牌无距离和次数限制且不可被响应。",
			key_michiru: "远野小满",
			michiru_sheyuan: "舍愿",
			michiru_sheyuan_info:
				"每名角色的回合限一次。若你没有“米券”，则你可以将所有手牌当做任意基本牌或普通锦囊牌使用，然后摸等量的牌。",
			michiru_huzhu: "互助",
		    michiru_huzhu_info:
		        "锁定技，游戏开始时，你获得一张“米券”。当你的手牌花色数变化时，你获得一张“米券”，然后回复一点体力。若你拥有“米券”，你每使用一张基本牌时，你移除一张“米券”。结算完成后，你额外摸X张牌(X为你拥有的“米券”数量)。",
			minagi_tag: "米券",

			key_one: "ONE ～辉之季节～",
			key_kanon: "Kanon",
			key_air: "AIR",
			key_clannad: "Clannad",
			key_littlebusters: "Little Busters!",
			key_rewrite: "Rewrite",
			key_angelbeats: "Angel Beats!",
			key_charlotte: "Charlotte",
			key_harmonia: "Harmonia",
			key_summerpockets: "Summer Pockets",
			key_kamisamaninattahi: "成神之日",
			key_loopers: "Loopers",
			key_lunaria: "LUNARiA",
			key_heavenburnsred: "炽焰天穹",
		},
		pinyins: {
			加藤うみ: ["Kato", "Umi"],
			仲村由理: ["Nakamura", "Yuri"],
			此花露西娅: ["Konohana", "Lucia"],
			枣恭介: ["Natsume", "Kyousuke"],
			神尾晴子: ["Kamio", "Haruko"],
			神北小毬: ["Kamikita", "Komari"],
			宫泽有纪宁: ["Miyazawa", "Yukine"],
			西森柚咲: ["Nishimori", "Yusa"],
			黑羽美砂: ["Kurobane", "Misa"],
			井之原真人: ["Inohara", "Masato"],
			岩泽雅美: ["Iwasawa", "Masami"],
			宫泽谦吾: ["Miyazawa", "Kengo"],
			吉野晴彦: ["Yoshino", "Haruhiko"],
			由依: ["Yui"],
			紬文德斯: ["Tsumugi", "Wenders"],
			朱鹭户沙耶: ["Tokido", "Saya"],
			"三枝叶留佳&二木佳奈多": ["Saigusa", "Haruka", "Futaki", "Kanata"],
			三枝二木: ["Saigusa", "Haruka", "Futaki", "Kanata"],
			稻荷: ["Inari"],
			椎名: ["Shiina"],
			"春原阳平&春原芽衣": ["Sunohara", "Youhei", "Sunohara", "Mei"],
			阳平芽衣: ["Sunohara", "Youhei", "Sunohara", "Mei"],
			枣铃: ["Natsume", "Rin"],
			笹濑川佐佐美: ["Sasasegawa", "Sasami"],
			千里朱音: ["Senri", "Akane"],
			多鲁基: ["Dorj"],
			来谷唯湖: ["Kurugaya", "Yuiko"],
			直枝理树: ["Naoe", "Riki"],
			渕田久子: ["Fuchita", "Hisako"],
			日向秀树: ["Hinata", "Hideki"],
			野田: ["Noda"],
			冈崎朋也: ["Okazaki", "Tomoya"],
			古河渚: ["Furukawa", "Nagisa"],
			直井文人: ["Naoi", "Ayato"],
			空门苍: ["Sorakado", "Ao"],
			音无结弦: ["Otonashi", "Yuzuru"],
			立华奏: ["Tachibana", "Kanade"],
			西园美鱼: ["Nishizono", "Mio"],
			西园美鸟: ["Nishizono", "Midori"],
			岬镜子: ["Misaki", "Kyoko"],
			中津静流: ["Nakatsu", "Shizuru"],
			"关根诗织&入江美雪": ["Sekine", "Shiori", "Irie", "Miyuki"],
			关根入江: ["Sekine", "Shiori", "Irie", "Miyuki"],
			野村美希: ["Nomura", "Miki"],
			美坂栞: ["Misaka", "Shiori"],
			美坂香里: ["Misaka", "Kaori"],
			水濑秋子: ["Minase", "Akiko"],
			游佐: ["Yusa"],
			松下护騨: ["Matsushita", "Godan"],
			乙坂有宇: ["Otosaka", "Yuu"],
			三谷良一: ["Mitani", "Ryoichi"],
			神户小鸟: ["Kanbe", "Kotori"],
			高城丈士朗: ["Takajyo", "Jyojirou"],
			鸣濑白羽: ["Naruse", "Shiroha"],
			水织静久: ["Mizuori", "Shizuku"],
			铃木央人: ["Suzuki", "Hiroto"],
			凤咲夜: ["Ootori", "Sakuya"],
			成神阳太: ["Narukami", "Youta"],
			七濑留美: ["Nanase", "Rumi"],
			凤千早: ["Ootori", "Chihaya"],
			国崎往人: ["Kunisaki", "Yukito"],
			井上晶: ["Inoue", "Asara"],
			一之濑琴美: ["Ichinose", "Kotomi"],
			藤川米娅: ["Fujikawa", "Mia"],
			雾岛佳乃: ["Kirishima", "Kano"],
			苍井绘梨花: ["Aoi", "Erika"],
			藏里见: ["Kura", "Satomi"],
			"喵呜·喵呼": ["Myau", "Mya-fu"],
			喵呜喵呼: ["Myau", "Mya-fu"],
			伊吹风子: ["Ibuki", "Fuuko"],
			久岛鸥: ["Kushima", "Kamome"],
			库特莉亚芙卡: ["Noumi", "Kudryavka"],
			神尾观铃: ["Kamio", "Misuzu"],
			友利奈绪: ["Tomori", "Nao"],
			天王寺瑚太朗: ["Tennouji", "Kotarou"],
			藤林杏: ["Fujibayashi", "Kyou"],
			伊座并杏子: ["Izanami", "Kyouko"],
			加纳天善: ["Kano", "Tenzen"],
			冰室忧希: ["Himuro", "Yuuki"],
			露娜Ｑ: ["Lunar", "Q"],
			远野小满: ["Toono", "Michiru"],
			远野美凪: ["Toono", "Minagi"],
			樱庭星罗: ["Sakuraba", "Seira"],
			坂上智代: ["Sakagami", "Tomoyo"],
			冈崎汐: ["Okazaki", "Ushio"],
			神山识: ["Kamiyama", "Shiki"],
			佐藤雏: ["Satou", "Hina"],
			篝: ["Kagari"],
		},
	};
});
