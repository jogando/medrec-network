/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.sample.CreateMedicalRecord} createMedicalRecord - the closeBidding transaction
 * @transaction
 */
function updateMedicalRecord(createMedicalRecord) {
    return getAssetRegistry('org.idb.medrec.MedicalRecord')
        .then(function(medicalRecordRegistry) {
            return medicalRecordRegistry.update(createMedicalRecord.medicalRecord);
        });
}