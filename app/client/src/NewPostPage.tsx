import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { addPost } from "./server-api";

export const NewPostPage = () => {
  const title = useRef<HTMLInputElement>(null);
  const author = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !loading &&
      title.current?.value &&
      author.current?.value &&
      body.current?.value
    ) {
      setLoading(true);
      try {
        await addPost({
          title: title.current.value,
          author: author.current.value,
          body: body.current.value,
        });
        navigate("/");
      } catch (err) {
        setError(String(err));
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
        <input
          type="text"
          ref={title}
          placeholder="Title"
          disabled={loading}
          autoFocus
        />
      </div>
      <div>
        <input
          type="text"
          ref={author}
          placeholder="Author"
          disabled={loading}
        />
      </div>
      <div>
        <textarea ref={body} placeholder="Body" disabled={loading} />
      </div>
      <div>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </div>
    </form>
  );
};
