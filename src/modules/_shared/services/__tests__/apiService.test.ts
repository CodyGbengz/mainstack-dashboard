import { beforeEach, describe, expect, test, vi } from 'vitest'
import axios from 'axios'

import { apiGet } from '../apiService'

vi.mock('axios')

describe('API Service', () => {
  beforeEach(() => {
    axios.get.mockReset()
  })

  describe('apiGet', () => {
    test('should make a GET request', async () => {
      const data = {
        "data": {
            "graph_data": {
              "views": {
                "2022-07-31": 1,
                "2022-08-01": 3,
                "2022-08-02": 3,
              }
            },
            "top_locations": [
              {
                "country": "Nigeria",
                "count": 68,
                "percent": 34
              },
            ],
            "top_sources": [
              {
                "source": "google",
                "count": 50,
                "percent": 25
              },
            ]
          },
        "success": true,
      }

      axios.get.mockResolvedValue(data)

      const dashboardData = await apiGet('url/string')

      expect(axios.get).toHaveBeenCalledWith('url/string')
      expect(dashboardData).toStrictEqual(data)
    })
  })
})
