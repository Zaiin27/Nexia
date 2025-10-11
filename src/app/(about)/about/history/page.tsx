import React from 'react'
import { historyContent } from '@/utils/constants'

const HistoryPage = () => {

  return (
    <div className="max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <div className="space-y-3 text-gray-700 leading-relaxed">
          {historyContent.map((item) => {
            switch (item.type) {
              case 'heading':
                return (
                  <h1 key={item.id} className="text-2xl font-medium text-teal-900 mb-6">
                    {item.content}
                  </h1>
                );
              case 'paragraph':
                return (
                  <p key={item.id}>
                    {item.content}
                  </p>
                );
              case 'quote':
                return (
                  <blockquote key={item.id} className="border-l-4 border-teal-600 pl-6 py-2 bg-teal-50 text-xl font-semibold text-teal-800 italic">
                    "{item.content}"
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default HistoryPage