import {blogData} from "@/data/blogData";

export default function Blog() {
  return (
    <div>
      {
        blogData.length > 0 ? (
          <div>
            {
              blogData.map(item => (
                <>
                  <p>{item.title}</p>
                  <p>{item.body}</p>
                </>
              ))
            }
          </div>
        ) : <div>There are no blog posts available. Please check back later!</div>
      }
    </div>
  )
}