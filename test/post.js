var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe("/check home and random page", () => {
  // #1 should return home page
  it("should return home page", (done) => {

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end((err,res) => {
      // HTTP status should be 200
        res.status.should.eql(200);
      done();
    });
  });

  it("should return 404", (done) => {
    server
    .get("/test")
    .expect(404)
    .end((err, res) => {
            res.status.should.eql(404);
        done();
    });
  })

});

describe('/create posts', () => {
    it('Should not Create a post without title', (done) => {
        let params = {
            // title: 'test',
            desciption: 'Test Description'
        };

        server
        .post('/posts')
        .send(params)
        .expect("Content-type", /json/)
        .expect(200)
        .end((err, res) => {
                res.status.should.equal(200);
                res.body.message.should.have.property('errors');
                res.body.message.errors.should.have.property('title');
                res.body.message.errors.title.should.have.property("kind").eql('required');
            done();
        });
    });

    it("should create post", (done) => {
        let params = {
            title: 'test',
            description: 'Test Description'
        };

        server
        .post("/posts")
        .send(params)
        .expect(200)
        .expect("Content-type", /json/)
        .end((err, res) => {
            res.status.should.eql(200);
            res.body.should.have.property('title');
            res.body.should.have.property('description');
            done();
        })
    });
});