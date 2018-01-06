const template = [
  '工作性質',
  '工作所屬產業',
  '工作設定：酬勞計算基準',
  '工作設定：平日工資（金額，每月）',
  '工作設定：平日工資（金額，每小時）',
  '勞工：假日：休息日：給薪？',
  '勞工：假日：例假日：給薪？',
  '勞工：假日：國定假日：放假？',
  '勞工：假日：國定假日：給薪？',
  '勞工：假日：特別休假日：給薪？',
  '契約約期',
  '勞工：同一雇主繼續工作期間（滿年數）',
  '勞工：同一雇主繼續工作期間（滿月數）',
  '勞工：同一雇主繼續工作期間（未滿月數）',
  '勞工：假日：特別休假日（日數，每年）',
  '勞工：工會？',
  '工作設定：工時制度',
  '工作設定：工時制度：一般：正常工作時間（時數，每日）',
  '工作設定：工時制度：一般：正常工作時間（時數，每週）',
  '工作設定：工時制度：一般：例假（日數，每七日）',
  '工作設定：工時制度：一般：放假（日數，每七日）',
  '工作設定：工時制度：兩週變形：指定行業？',
  '工作設定：工時制度：兩週變形：工會同意？',
  '工作設定：工時制度：兩週變形：勞資會議同意？',
  '工作設定：工時制度：兩週變形：正常工作時間（時數，每週）',
  '工作設定：工時制度：兩週變形：正常工作時間：自其他工作日分配（時數，每日）',
  '工作設定：工時制度：兩週變形：正常工作時間：分配至其他工作日（日數，每二週）',
  '工作設定：工時制度：兩週變形：例假（日數，每二週）',
  '工作設定：工時制度：兩週變形：放假（日數，每二週）',
  '工作設定：工時制度：八週變形：指定行業？',
  '工作設定：工時制度：八週變形：工會同意？',
  '工作設定：工時制度：八週變形：勞資會議同意？',
  '工作設定：工時制度：八週變形：正常工作時間（時數，每日）',
  '工作設定：工時制度：八週變形：正常工作時間（時數，每週）',
  '工作設定：工時制度：八週變形：放假（日數，每八週）',
  '工作設定：工時制度：四週變形：指定行業？',
  '工作設定：工時制度：四週變形：工會同意？',
  '工作設定：工時制度：四週變形：勞資會議同意？',
  '工作設定：工時制度：四週變形：正常工作時間（時數，每日）',
  '工作設定：工時制度：四週變形：正常工作時間：自其他工作日分配（時數，每日）',
  '工作設定：工時制度：四週變形：放假（日數，每四週）',
  '工作設定：工時制度：主管機關命令調整？',
  '工作設定：工時制度：主管機關命令調整：公眾生活便利或其他特殊原因？',
  '工作設定：班表：輪班制？',
  '工作設定：班表：輪班制：每週換班？',
  '工作設定：班表：輪班制：勞工同意不每週換班？',
  '工作設定：班表：輪班制：換班連續十一小時休息？',
  '工作設定：班表：休息（分鐘數，每連續四小時）',
  '工作設定：工作場所：坑內：非監視？',
  '契約：競業禁止？',
  '契約：競業禁止：勞工工作接觸營業秘密？',
  '契約：競業禁止：雇主有應受保護之正當營業利益？',
  '契約：競業禁止期間（年數）',
  '契約：競業禁止：期間、區域、範圍、就業對象合理？',
  '契約：競業禁止：合理補償？',
  '契約：競業禁止：合理補償：包括工作給付？',
  '個案：雇主終止勞動契約？',
  '個案：雇主終止勞動契約：預告（日數）',
  '個案：雇主終止勞動契約：給付預告期間工資？',
  '個案：雇主終止勞動契約：勞工另謀工作請假：時數（日數，每週）',
  '個案：雇主終止勞動契約：勞工另謀工作請假：工資照給？',
  '個案：雇主終止勞動契約：資遣費（金額）',
  '個案：雇主終止勞動契約：資遣費：終止到發給期間（日數）',
  '個案：不定期契約停止履行？',
  '個案：不定期契約停止履行：繼續履行原約？',
  '個案：不定期契約停止履行：繼續履行原約：前後工作年資合併計算？',
  '個案：不定期契約停止履行：繼續履行原約：前後契約間斷期間（月數）',
  '個案：不定期契約停止履行：另訂新約？',
  '個案：不定期契約停止履行：另訂新約：前後工作年資合併計算？',
  '個案：不定期契約停止履行：另訂新約：前後契約間斷期間（月數）',
  '個案：定期契約屆滿？',
  '個案：定期契約屆滿：繼續工作？',
  '個案：定期契約屆滿：繼續工作：雇主即反對？',
  '個案：定期契約屆滿：另訂新約？',
  '個案：定期契約屆滿：另訂新約：前後工作年資合併計算？',
  '個案：定期契約屆滿：另訂新約：前後契約工作期間（日數）',
  '個案：定期契約屆滿：另訂新約：前後契約間斷期間（日數）',
  '個案：定期契約屆滿：另訂新約：前後契約間斷期間（月數）',
  '個案：當日：前六個月總日數（日數）',
  '個案：當日：前六個月工作日數（日數）',
  '個案：當日：前六個月工資總額（金額）',
  '個案：當日：平均工資（金額，每日）',
  '個案：當日：平均工資（金額，每月）',
  '個案：工作期間工作日數（日數）',
  '個案：工作期間工資總額（金額）',
  '個案：工作期間總日數（日數）',
  '工作性質：連續性或緊急性？',
  '個案：延長工作時間：突發？',
  '個案：延長工作時間：突發：假日種類',
  '個案：延長工作時間：突發：二十四小時內通知工會？',
  '個案：延長工作時間：突發：二十四小時內報當地主管機關？',
  '個案：延長工作時間：突發（時數）',
  '個案：延長工作時間：突發：事後補休？',
  '個案：延長工作時間：突發：工資（金額，每小時）',
  '個案：延長工作時間：非突發？',
  '個案：延長工作時間：非突發：工會同意？',
  '個案：延長工作時間：非突發：勞資會議同意？',
  '個案：延長工作時間：非突發：總工作時間（時數，每日）',
  '個案：延長工作時間：非突發：總延長工作時間（時數，每月）',
  '個案：延長工作時間：非突發：平日？',
  '個案：延長工作時間：非突發：平日（時數）',
  '個案：延長工作時間：非突發：平日：工資（金額）',
  '個案：延長工作時間：非突發：平日：四週變形（時數，每日）',
  '個案：延長工作時間：非突發：休息日？',
  '個案：延長工作時間：非突發：休息日（時數）',
  '個案：延長工作時間：非突發：休息日：工資（金額）',
  '個案：延長工作時間：非突發：國定假日？',
  '個案：延長工作時間：非突發：國定假日：勞工同意？',
  '個案：延長工作時間：非突發：國定假日：工資（金額，每小時）',
  '個案：延長工作時間：非突發：特別休假日？',
  '個案：延長工作時間：非突發：特別休假日：勞工同意？',
  '個案：延長工作時間：非突發：特別休假日：主管機關認有必要？',
  '個案：延長工作時間：非突發：特別休假日：工資（金額，每小時）',
  '個案：延長工作時間：勞工正當理由不接受？',
]

const StepData = [
  '工作性質',
  '工作所屬產業',
  '工作設定：酬勞計算基準',
  '工作設定：平日工資（金額，每月）',
  '工作設定：平日工資（金額，每小時）',
  '勞工：假日：休息日：給薪？',
  '勞工：假日：例假日：給薪？',
  '勞工：假日：國定假日：放假？',
  '勞工：假日：國定假日：給薪？',
  '勞工：假日：特別休假日：給薪？',
  '契約約期',
  '勞工：同一雇主繼續工作期間（滿年數）',
  '勞工：同一雇主繼續工作期間（滿月數）',
  '勞工：同一雇主繼續工作期間（未滿月數）',
  '勞工：假日：特別休假日（日數，每年）',
  '勞工：工會？',
]

export default StepData
