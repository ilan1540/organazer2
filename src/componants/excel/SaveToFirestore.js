import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

export const SaveToFirestore = () => {
  const workBook = useSelector((state) => state.helpers.wb);
  const firestore = useFirestore();

  async function toSave(rec) {
    let counter = 0;
    try {
      const promise = firestore.collection('creditCard').add(rec);
      promise.then((snap) => (counter = counter + 1));
    } catch (e) {
      console.log('Transaction failure:', e);
    }
    console.log('save of rec', counter);
  }
  async function toSaveAcount(rec) {
    let counter = 0;
    try {
      const promise = firestore.collection('acount').add(rec);
      promise.then((snap) => (counter = counter + 1));
    } catch (e) {
      console.log('Transaction failure:', e);
    }
    console.log('save of rec', counter);
  }

  function onClickSaveAcount() {
    let newRec = {
      date: '',
      teor: '',
      asmacta: '',
      debit: '',
      creadit: '',
      yitra: '',
      valueDate: '',
    };
    workBook.map((tab) => {
      newRec.cardNo = tab.sheetName;
      console.log(tab.sheetName);
      tab.sheetData.map((rec) => {
        newRec.date = rec.date;
        newRec.teor = rec.teor;
        newRec.asmacta = rec.asmacta;
        newRec.debit = rec.debit;
        newRec.creadit = rec.creadit;
        newRec.yitra = rec.yitra;
        newRec.morDetele = rec.פירוט_נוסף;
        //  console.log(newRec);
        toSaveAcount(rec);
        return null;
      });
      return null;
    });
  }

  function onClickSave() {
    let newRec = {
      cardNo: '',
      card: '',
      debitDate: '',
      buyDate: '',
      betEsekName: '',
      sumEeska: '',
      sumDebit: '',
      morDetele: '',
      group: '',
      list: '',
    };

    //  console.log(workBook);
    workBook.map((tab) => {
      newRec.cardNo = tab.sheetName;
      console.log(tab.sheetName);
      tab.sheetData.map((rec) => {
        newRec.card = rec.כרטיס;
        newRec.debitDate = rec.מועד_חיוב;
        newRec.buyDate = rec.תאריך_רכישה;
        newRec.betEsekName = rec.שם_בית_עסק;
        newRec.sumEeska = rec.סכום_עסקה;
        newRec.sumDebit = rec.סכום_חיוב;
        newRec.morDetele = rec.פירוט_נוסף;
        //  console.log(newRec);
        toSave(rec);
        return null;
      });
      return null;
    });
  }
  return (
    <div>
      <button
        className="btn btn-outline-secondary"
        type="button"
        style={{ cursor: 'pointer' }}
        onClick={onClickSave}
      >
        Save all tabs
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        style={{ cursor: 'pointer' }}
        onClick={onClickSaveAcount}
      >
        שמור חשבון עוש
      </button>
    </div>
  );
};
