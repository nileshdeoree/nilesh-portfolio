import { blogs } from "@/data/blogs"
import Link from "next/link"

export default function BlogsPage() {

    return (
        <div>
            <h1 className="text-4xl mb-5">Blogs</h1>

            <div className="space-y-4">
                {blogs.map((blog: any, index: number) => (
                    <div key={index}>
                        <h2 className="text-3xl">
                            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                        </h2>
                        <div>{blog.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}