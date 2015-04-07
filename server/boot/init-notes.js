module.exports = function(app) {

  if(!process.env.FAKEDATA) {
    console.log(' - Set FAKEDATA=1 to add fake data');
    return;
  } else {
    console.log(' - Adding fake data');
  }

    // This helps us fake the data
  var faker = require('faker');

  // Load the model
  var Note = app.models.Note;

  // Get max number of items
  var maxNotes = process.env.MAX_NOTES || 10;

  // Create maxNotes number of Notes
  for(var i = 0; i < maxNotes; i++) {

    // Define new Note
    var newNote = {
      title: faker.company.catchPhrase(),
      content: faker.lorem.paragraph()
    }

    // Create the Note
    Note.create(newNote, function(err, createdNote){
      if(err) console.log(err);
    });
  }

  console.log(' - Creating', maxNotes, 'notes');

};
