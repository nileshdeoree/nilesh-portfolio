import { blogs } from "@/data/blogs"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const blogPost = blogs.filter((blog: any) => (blog.slug === slug))[0]

    return (
        <div>
            <div className="space-y-4">
                <div>
                    <h2 className="text-3xl">{blogPost.title}</h2>
                    <div>{blogPost.description}</div>
                </div>
            </div>
        </div>
    )
}

