export const RuleData = [
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 2,
    "subparagraph": 1,
    "item": 4,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿月數）|>=|6;工作設定：酬勞計算基準|!belong_to|daily、hourly、piecework",
    "conditionLogic": "&&",
    "condition": "個案：當日：平均工資（金額，每日）|==|個案：當日：前六個月工資總額（金額） / 個案：當日：前六個月總日數（日數）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 2,
    "subparagraph": 1,
    "item": 4,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿月數）|<|6;工作設定：酬勞計算基準|!belong_to|daily、hourly、piecework",
    "conditionLogic": "&&",
    "condition": "個案：當日：平均工資（金額，每日）|==|個案：工作期間工資總額（金額） / 個案：工作期間總日數（日數）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 2,
    "subparagraph": 1,
    "item": 4,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿月數）|>=|6;工作設定：酬勞計算基準|belong_to|daily、hourly、piecework;個案：當日：前六個月工資總額（金額） / 個案：當日：前六個月總日數（日數）|<|( 個案：當日：前六個月工資總額（金額） / 個案：當日：前六個月工作日數（日數） ) * 0.6",
    "conditionLogic": "&&",
    "condition": "個案：當日：平均工資（金額，每日）|==|( 個案：當日：前六個月工資總額（金額） / 個案：當日：前六個月工作日數（日數） ) * 0.6"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 2,
    "subparagraph": 1,
    "item": 4,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿月數）|>=|6;工作設定：酬勞計算基準|belong_to|daily、hourly、piecework;個案：當日：前六個月工資總額（金額） / 個案：當日：前六個月總日數（日數）|>=|( 個案：當日：前六個月工資總額（金額） / 個案：當日：前六個月工作日數（日數） ) * 0.6",
    "conditionLogic": "&&",
    "condition": "個案：當日：平均工資（金額，每日）|==|個案：當日：前六個月工資總額（金額） / 個案：當日：前六個月總日數（日數）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 2,
    "subparagraph": 1,
    "item": 4,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿月數）|<|6;工作設定：酬勞計算基準|belong_to|daily、hourly、piecework;個案：工作期間工資總額（金額） / 個案：工作期間總日數（日數）|<|( 個案：工作期間工資總額（金額） / 個案：工作期間工作日數（日數） ) * 0.6",
    "conditionLogic": "&&",
    "condition": "個案：當日：平均工資（金額，每日）|==|( 個案：工作期間工資總額（金額） / 個案：工作期間工作日數（日數） ) * 0.6"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 2,
    "subparagraph": 1,
    "item": 4,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿月數）|<|6;工作設定：酬勞計算基準|belong_to|daily、hourly、piecework;個案：工作期間工資總額（金額） / 個案：工作期間總日數（日數）|>=|( 個案：工作期間工資總額（金額） / 個案：工作期間工作日數（日數） ) * 0.6",
    "conditionLogic": "&&",
    "condition": "個案：當日：平均工資（金額，每日）|==|個案：工作期間工資總額（金額） / 個案：工作期間總日數（日數）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 9,
    "subparagraph": "1;3",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "契約：競業禁止？|==|true",
    "conditionLogic": "&&",
    "condition": "契約：競業禁止：雇主有應受保護之正當營業利益？|==|true;契約：競業禁止：勞工工作接觸營業秘密？|==|true;契約：競業禁止：期間、區域、範圍、就業對象合理？|==|true;契約：競業禁止：合理補償？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 9,
    "subparagraph": 4,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "契約：競業禁止？|==|true",
    "conditionLogic": "&&",
    "condition": "契約：競業禁止期間（年數）|<=|2"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 9,
    "subparagraph": 2,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "契約：競業禁止？|==|true",
    "conditionLogic": "&&",
    "condition": "契約：競業禁止：合理補償：包括工作給付？|==|false"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 10,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：定期契約屆滿？|==|true;個案：定期契約屆滿：另訂新約？|==|true;個案：定期契約屆滿：另訂新約：前後契約間斷期間（月數）|<|3",
    "conditionLogic": "&&",
    "condition": "個案：定期契約屆滿：另訂新約：前後工作年資合併計算？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 10,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：不定期契約停止履行？|==|true;個案：不定期契約停止履行：另訂新約？|==|true;個案：不定期契約停止履行：另訂新約：前後契約間斷期間（月數）|<|3",
    "conditionLogic": "&&",
    "condition": "個案：不定期契約停止履行：繼續履行原約：前後工作年資合併計算？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 10,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：不定期契約停止履行？|==|true;個案：不定期契約停止履行：繼續履行原約？|==|true;個案：不定期契約停止履行：繼續履行原約：前後契約間斷期間（月數）|<|3",
    "conditionLogic": "&&",
    "condition": "個案：不定期契約停止履行：繼續履行原約：前後工作年資合併計算？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 16,
    "subparagraph": 1,
    "item": 1,
    "preconditionLogic": "&&",
    "precondition": "個案：雇主終止勞動契約？|==|true;勞工：同一雇主繼續工作期間（滿月數）|>=|3;勞工：同一雇主繼續工作期間（滿年數）|<|1",
    "conditionLogic": "||",
    "condition": "個案：雇主終止勞動契約：預告（日數）|>|10;個案：雇主終止勞動契約：給付預告期間工資？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 16,
    "subparagraph": 1,
    "item": 2,
    "preconditionLogic": "&&",
    "precondition": "個案：雇主終止勞動契約？|==|true;勞工：同一雇主繼續工作期間（滿年數）|>=|1;勞工：同一雇主繼續工作期間（滿年數）|<|3",
    "conditionLogic": "||",
    "condition": "個案：雇主終止勞動契約：預告（日數）|>|20;個案：雇主終止勞動契約：給付預告期間工資？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 16,
    "subparagraph": 1,
    "item": 3,
    "preconditionLogic": "&&",
    "precondition": "個案：雇主終止勞動契約？|==|true;勞工：同一雇主繼續工作期間（滿年數）|>=|3",
    "conditionLogic": "||",
    "condition": "個案：雇主終止勞動契約：預告（日數）|>|30;個案：雇主終止勞動契約：給付預告期間工資？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 16,
    "subparagraph": 2,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：雇主終止勞動契約？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：雇主終止勞動契約：勞工另謀工作請假：時數（日數，每週）|<=|2;個案：雇主終止勞動契約：勞工另謀工作請假：工資照給？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 17,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：雇主終止勞動契約？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：雇主終止勞動契約：資遣費（金額）|>=|( 個案：當日：平均工資（金額，每月） * 勞工：同一雇主繼續工作期間（滿年數） ) + ( 個案：當日：平均工資（金額，每月） * 勞工：同一雇主繼續工作期間（未滿月數） / 12 );個案：雇主終止勞動契約：資遣費：終止到發給期間（日數）|<=|30"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 21,
    "subparagraph": "1;2",
    "item": "",
    "preconditionLogic": "",
    "precondition": "",
    "conditionLogic": "&&",
    "condition": "工作設定：平日工資（金額，每月）|>=|21009;工作設定：平日工資（金額，每小時）|>=|133"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 24,
    "subparagraph": 1,
    "item": 1,
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發：平日？|==|true;個案：延長工作時間：非突發：平日（時數）|<=|2",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：平日：工資（金額）|>=|個案：延長工作時間：非突發：平日（時數） * 工作設定：平日工資（金額，每小時） * 4 / 3"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 24,
    "subparagraph": 1,
    "item": 2,
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發：平日？|==|true;個案：延長工作時間：非突發：平日（時數）|>|2;個案：延長工作時間：非突發：平日（時數）|<=|4",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：平日：工資（金額）|>=|( 2 * 工作設定：平日工資（金額，每小時） * 4 / 3 ) + ( ( 個案：延長工作時間：非突發：平日（時數） - 2 ) * 工作設定：平日工資（金額，每小時） * 5 / 3 )"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 24,
    "subparagraph": 1,
    "item": 3,
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：突發？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：突發：工資（金額，每小時）|>=|2 * 工作設定：平日工資（金額，每小時） * 個案：延長工作時間：突發（時數）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 24,
    "subparagraph": "2;3",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發：休息日？|==|true;個案：延長工作時間：非突發：休息日（時數）|<=|4",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：休息日：工資（金額）|>=|( 2 * 工作設定：平日工資（金額，每小時） * 7 / 3 ) + ( 2 * 工作設定：平日工資（金額，每小時） * 8 / 3 )"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 24,
    "subparagraph": "2;3",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發：休息日？|==|true;個案：延長工作時間：非突發：休息日（時數）|>|4;個案：延長工作時間：非突發：休息日（時數）|<=|8",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：休息日：工資（金額）|>=|( 2 * 工作設定：平日工資（金額，每小時） * 7 / 3 ) + ( 6 * 工作設定：平日工資（金額，每小時） * 8 / 3 )"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 24,
    "subparagraph": "2;3",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發：休息日？|==|true;個案：延長工作時間：非突發：休息日（時數）|>|8;個案：延長工作時間：非突發：休息日（時數）|<=|12",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：休息日：工資（金額）|>=|( 2 * 工作設定：平日工資（金額，每小時） * 7 / 3 ) + ( 10 * 工作設定：平日工資（金額，每小時） * 8 / 3 )"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 30,
    "subparagraph": 1,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|default",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：一般：正常工作時間（時數，每日）|<=|8;工作設定：工時制度：一般：正常工作時間（時數，每週）|<=|40"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 30,
    "subparagraph": 2,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|2w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：兩週變形：正常工作時間：分配至其他工作日（日數，每二週）|<=|2;工作設定：工時制度：兩週變形：正常工作時間：自其他工作日分配（時數，每日）|<=|2;工作設定：工時制度：兩週變形：正常工作時間（時數，每週）|<=|48"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 30,
    "subparagraph": 3,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|8w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：八週變形：正常工作時間（時數，每日）|<=|8;工作設定：工時制度：八週變形：正常工作時間（時數，每週）|<=|48"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 30,
    "subparagraph": 4,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|belong_to|2w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：兩週變形：指定行業？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 30,
    "subparagraph": 4,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|8w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：八週變形：指定行業？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 30,
    "subparagraph": 2,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|2w_transformed",
    "conditionLogic": "||",
    "condition": "工作設定：工時制度：兩週變形：工會同意？|==|true;工作設定：工時制度：兩週變形：勞資會議同意？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 30,
    "subparagraph": 3,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|8w_transformed",
    "conditionLogic": "||",
    "condition": "工作設定：工時制度：八週變形：工會同意？|==|true;工作設定：工時制度：八週變形：勞資會議同意？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": "30-1",
    "subparagraph": 1,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|4w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：四週變形：指定行業？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": "30-1",
    "subparagraph": 1,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|4w_transformed",
    "conditionLogic": "||",
    "condition": "工作設定：工時制度：四週變形：工會同意？|==|true;工作設定：工時制度：四週變形：勞資會議同意？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": "30-1",
    "subparagraph": 1,
    "item": 1,
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|4w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：四週變形：正常工作時間：自其他工作日分配（時數，每日）|<=|2"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": "30-1",
    "subparagraph": 1,
    "item": 2,
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|4w_transformed;工作設定：工時制度：四週變形：正常工作時間（時數，每日）|==|10",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：平日：四週變形（時數，每日）|<=|2"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": "30-1",
    "subparagraph": 2,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|4w_transformed",
    "conditionLogic": "&&",
    "condition": "工作所屬產業|belong_to|agriculture、forestry、fishery、animal_husbandry"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 32,
    "subparagraph": 1,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發？|==|true",
    "conditionLogic": "||",
    "condition": "個案：延長工作時間：非突發：勞資會議同意？|==|true;個案：延長工作時間：非突發：工會同意？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 32,
    "subparagraph": 2,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：總工作時間（時數，每日）|<=|12;個案：延長工作時間：非突發：總延長工作時間（時數，每月）|<=|46"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 32,
    "subparagraph": 3,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：突發？|==|true",
    "conditionLogic": "||",
    "condition": "個案：延長工作時間：突發：二十四小時內通知工會？|==|true;個案：延長工作時間：突發：二十四小時內報當地主管機關？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 32,
    "subparagraph": 3,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：突發？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：突發：事後補休？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 32,
    "subparagraph": 4,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發？|==|true",
    "conditionLogic": "&&",
    "condition": "工作設定：工作場所：坑內：非監視？|==|false"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 33,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度：主管機關命令調整？|==|true",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：主管機關命令調整：公眾生活便利或其他特殊原因？|==|true;工作所屬產業|!belong_to|manufacturing、mining"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 34,
    "subparagraph": 1,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：班表：輪班制？|==|true",
    "conditionLogic": "||",
    "condition": "工作設定：班表：輪班制：每週換班？|==|true;工作設定：班表：輪班制：勞工同意不每週換班？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 34,
    "subparagraph": 2,
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：班表：輪班制？|==|true",
    "conditionLogic": "&&",
    "condition": "工作設定：班表：輪班制：換班連續十一小時休息？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 35,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：班表：輪班制？|==|false;工作性質：連續性或緊急性？|==|false",
    "conditionLogic": "&&",
    "condition": "工作設定：班表：休息（分鐘數，每連續四小時）|>=|30"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 36,
    "subparagraph": "1;2",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|default",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：一般：放假（日數，每七日）|>=|2"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 36,
    "subparagraph": 2,
    "item": 1,
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|2w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：一般：例假（日數，每七日）|>=|1;工作設定：工時制度：兩週變形：放假（日數，每二週）|>=|4"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 36,
    "subparagraph": 2,
    "item": 2,
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|8w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：一般：例假（日數，每七日）|>=|1;工作設定：工時制度：八週變形：放假（日數，每八週）|>=|16"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 36,
    "subparagraph": 2,
    "item": 3,
    "preconditionLogic": "&&",
    "precondition": "工作設定：工時制度|==|4w_transformed",
    "conditionLogic": "&&",
    "condition": "工作設定：工時制度：兩週變形：例假（日數，每二週）|>=|2;工作設定：工時制度：四週變形：放假（日數，每四週）|>=|8"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 37,
    "subparagraph": 1,
    "item": "",
    "preconditionLogic": "",
    "precondition": "",
    "conditionLogic": "&&",
    "condition": "勞工：假日：國定假日：放假？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 38,
    "subparagraph": 1,
    "item": 1,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿月數）|>=|6;勞工：同一雇主繼續工作期間（滿年數）|<|1",
    "conditionLogic": "&&",
    "condition": "勞工：假日：特別休假日（日數，每年）|>=|3"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 38,
    "subparagraph": 1,
    "item": 2,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿年數）|>=|1;勞工：同一雇主繼續工作期間（滿年數）|<|2",
    "conditionLogic": "&&",
    "condition": "勞工：假日：特別休假日（日數，每年）|>=|7"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 38,
    "subparagraph": 1,
    "item": 3,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿年數）|>=|2;勞工：同一雇主繼續工作期間（滿年數）|<|3",
    "conditionLogic": "&&",
    "condition": "勞工：假日：特別休假日（日數，每年）|>=|10"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 38,
    "subparagraph": 1,
    "item": 4,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿年數）|>=|3;勞工：同一雇主繼續工作期間（滿年數）|<|5",
    "conditionLogic": "&&",
    "condition": "勞工：假日：特別休假日（日數，每年）|>=|14"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 38,
    "subparagraph": 1,
    "item": 5,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿年數）|>=|5;勞工：同一雇主繼續工作期間（滿年數）|<|10",
    "conditionLogic": "&&",
    "condition": "勞工：假日：特別休假日（日數，每年）|>=|15"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 38,
    "subparagraph": 1,
    "item": 6,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿年數）|>=|10;勞工：同一雇主繼續工作期間（滿年數）|<=|25",
    "conditionLogic": "&&",
    "condition": "勞工：假日：特別休假日（日數，每年）|>=|勞工：同一雇主繼續工作期間（滿年數） - 10 + 15"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 38,
    "subparagraph": 1,
    "item": 6,
    "preconditionLogic": "&&",
    "precondition": "勞工：同一雇主繼續工作期間（滿年數）|>|25",
    "conditionLogic": "&&",
    "condition": "勞工：假日：特別休假日（日數，每年）|>=|30"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 39,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "",
    "precondition": "",
    "conditionLogic": "&&",
    "condition": "勞工：假日：例假日：給薪？|==|true;勞工：假日：休息日：給薪？|==|true;勞工：假日：國定假日：給薪？|==|true;勞工：假日：特別休假日：給薪？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 39,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發：國定假日？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：國定假日：勞工同意？|==|true;個案：延長工作時間：非突發：國定假日：工資（金額，每小時）|>=|2 * 工作設定：平日工資（金額，每小時）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 39,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：非突發：特別休假日？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：特別休假日：勞工同意？|==|true;個案：延長工作時間：非突發：特別休假日：工資（金額，每小時）|>=|2 * 工作設定：平日工資（金額，每小時）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 40,
    "subparagraph": "1;2",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "個案：延長工作時間：突發？|==|true;個案：延長工作時間：突發：假日種類|belong_to|rest_day、regular_leave、annual_paid_leave、designated_holiday",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：突發：工資（金額，每小時）|>=|2 * 工作設定：平日工資（金額，每小時）;個案：延長工作時間：突發：二十四小時內報當地主管機關？|==|true"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 41,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "&&",
    "precondition": "工作所屬產業|==|public_utility;個案：延長工作時間：非突發：特別休假日：主管機關認有必要？|==|true;個案：延長工作時間：非突發：特別休假日？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：非突發：特別休假日：工資（金額，每小時）|>=|2 * 工作設定：平日工資（金額，每小時）"
  },
  {
    "law": "勞動基準法",
    "version": 20161206,
    "paragraph": 42,
    "subparagraph": "",
    "item": "",
    "preconditionLogic": "||",
    "precondition": "個案：延長工作時間：突發？|==|true;個案：延長工作時間：非突發？|==|true",
    "conditionLogic": "&&",
    "condition": "個案：延長工作時間：勞工正當理由不接受？|==|false"
  }
]
