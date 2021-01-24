import Post from './models/posts'

export default function createFakeData() {
    // 0...1...39로 이루어진 배열 생성한 후 포스트 데이터로 변환
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body: "Lorem ipsum dolor sit amet",
        tags: ["fake", "not real"]
    }));
    Post.insertMany(posts, (err,docs) => {
        console.log(docs);
    })
}