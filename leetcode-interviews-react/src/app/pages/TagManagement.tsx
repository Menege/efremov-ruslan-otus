import React, { useState } from 'react';

const TagManagement: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['алгоритмы', 'структуры данных']);
  const [newTag, setNewTag] = useState<string>('');

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const deleteTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      <h1>Управление тегами</h1>
      <input
        type="text"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        placeholder="Новый тег"
      />
      <button onClick={addTag}>Добавить тег</button>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            {tag} <button onClick={() => deleteTag(tag)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagManagement;
