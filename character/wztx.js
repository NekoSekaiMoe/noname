import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "wztx",
		connect: true,
		connectBanned: [
			
		],
		character: {
			v_sunshangxiang: [
				"female",
				"wu",
				3,
				["dcshuren", "dcsaran"],
			],
		},
		characterSort: {
			wztx: {
				// wztx_weizhen: ["v_gongsunzan", "v_zhangliao", "v_lvbu", "v_dongzhuo", "v_machao"],
				// wztx_junwei: ["v_caopi", "v_sunquan", "v_caocao", "v_liubei"],
				wztx_pianyu: ["v_sunshangxiang"],
				
				// wztx_waitforsort: [],
			},
		},
		characterSubstitute: {
			v_sunshangxiang: [["v_sunshangxiang_shadow", []]],
		},
		characterIntro: {
			
		},
		characterTitle: {
			
		},
		characterFilter: {
			
		},
		characterInitFilter: {
			
		},
		card: {
			
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//威孙尚香
			dcshuren: {
				audio: 2,
				audioname: ["v_sunshangxiang_shadow"],
				usable: 1,
				enable: "phaseUse",
				filter(event, player) {
					return player.hasEnabledSlot();
				},
				async content(event, trigger, player) {
					const storage = player.getStorage("v_sunshangxiang_changeSkin", false);
					if (!storage) {
						player.changeSkin(event.name, "v_sunshangxiang_shadow");
						player.setStorage("v_sunshangxiang_changeSkin", !storage);
					}
					const { control } = await player.chooseToDisable().forResult();
					if (!control) {
						return;
					}
					const restore = player.hasHistory("lose", evt => {
						let num = 1,
							list = ["loseToDiscardpile", "disableEquip", "chooseToDisable"];
						while (num < 3) {
							const evtx = evt.getParent(num);
							if (evtx?.name != list[num - 1] || evtx?.player != player) {
								return false;
							}
							num++;
						}
						return evt.getParent(4) == event;
					});
					const cards = get.cards(3, true);
					await player.showCards(cards, `${get.translation(player)}发动了【淑任】`, true).set("clearArena", false);
					const { links } = await player
						.chooseCardButton(cards, true, "淑任：请选择要获得的牌")
						.set("ai", button => {
							return get.value(button.link, get.player());
						})
						.forResult();
					if (links?.length) {
						cards.removeArray(links);
						await player.gain(links, "gain2");
					}
					const result = await player
						.chooseTarget(`淑任：可令一名其他角色获得其中一张牌`, lib.filter.notMe)
						.set("ai", target => get.attitude(get.player(), target) * (114514 - target.countCards("h")))
						.forResult();
					if (result.bool && result.targets?.length) {
						const {
							targets: [target],
						} = result;
						player.line(target);
						const result2 = await target
							.chooseCardButton(`淑任：选择获得其中一张`, cards, true)
							.set("ai", button => get.buttonValue(button))
							.forResult();
						if (result2?.links?.length) {
							const { links } = result2;
							await target.gain(links, "gain2");
						}
					}
					/**
						.chooseButtonTarget({
							createDialog: [`淑任：可令一名其他角色获得其中一张牌`, cards],
							filterButton: true,
							filterTarget: lib.filter.notMe,
							ai1(button) {
								if (game.hasPlayer(target => get.attitude(get.player(), target) > 0)) {
									return get.buttonValue(button);
								}
								return 0;
							},
							ai2(target) {
								const player = get.player(),
									card = ui.selected.buttons[0].link;
								return get.value(card, target) * get.attitude(player, target);
							},
						})
					 */
					game.broadcastAll(ui.clear);
					if (restore) {
						if (player.getStat("skill")[event.name]) {
							delete player.getStat("skill")[event.name];
						}
						await player.recover(1);
					}
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			dcsaran: {
				audio: 2,
				audioname: ["v_sunshangxiang_shadow"],
				locked: false,
				mod: {
					cardUsable(card, player, num) {
						if (card.name == "sha") {
							let es = player.countCards("e");
							return num + es;
						}
					},
				},
				trigger: {
					source: "damageSource",
					player: "damageEnd",
				},
				getIndex(event) {
					return event.num;
				},
				frequent: "check",
				check(event, player) {
					return true;
				},
				async content(event, trigger, player) {
					const storage = player.getStorage("v_sunshangxiang_changeSkin", false);
					if (storage) {
						player.changeSkin(event.name, "v_sunshangxiang");
						player.setStorage("v_sunshangxiang_changeSkin", !storage);
					}
					if (player.hasDisabledSlot()) {
						const { bool } = await player
							.chooseBool("飒然：是否恢复一个废弃装备栏？")
							.set("ai", () => true)
							.forResult();
						if (bool) {
							await player.chooseToEnable();
						}
					}
					const findEquipCard = slot => {
						const find = card => get.type(card, null, false) == "equip" && (!slot || get.subtype(card) == slot);
						return get.cardPile2(find, "random") || get.discardPile(find, "random");
					};
					const emptySlots = Array.from({ length: 5 }, (_, i) => i + 1)
						.filter(i => player.hasEmptySlot(i))
						.map(i => "equip" + i);

					let card = null;
					if (emptySlots.length > 0) {
						for (const slot of emptySlots) {
							card = findEquipCard(slot);
							if (card) break;
						}
					}
					if (!card) {
						card = findEquipCard();
					}
					if (!card) {
						return;
					}
					if (player.hasUseTarget(card)) {
						await player.chooseUseTarget(card, true);
					}
				},
			},
			
		},
		dynamicTranslate: {
			
		},
		translate: {
			v_sunshangxiang: "威孙尚香",
			v_sunshangxiang_prefix: "威",
			dcshuren: "淑任",
			dcshuren_info: "出牌阶段限一次，你可废除一个装备栏，亮出牌堆顶三张牌，你选择其中一张牌获得并可选择一名其他角色令其获得其中一张牌，若此装备栏有牌则此技能视为未发动过并恢复1点体力。",
			dcsaran: "飒然",
			dcsaran_info: "你的装备区内每有一张牌，你于出牌阶段内可使用的【杀】次数+1，你受到或造成一点伤害后，从牌堆或弃牌堆中随机使用一张装备牌，若有废除的装备栏可先选择一个装备栏恢复。",

			wztx_weizhen: "威震天下",
			wztx_junwei: "君威盖世",
			wztx_pianyu: "片羽威凤",
			
			wztx_waitforsort: "等待分包",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
